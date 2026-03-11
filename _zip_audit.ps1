$ErrorActionPreference='Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$outRoot=(Resolve-Path '.\\out').Path
$zips=Get-ChildItem . -Filter 'fullsite-latest-part*.zip' | Sort-Object Name
if(-not $zips){ throw 'No fullsite-latest-part*.zip found' }
$outMap=@{}
Get-ChildItem .\\out -Recurse -File | ForEach-Object {
  $rel=$_.FullName.Substring($outRoot.Length+1).Replace('\\','/')
  $outMap[$rel]=[int64]$_.Length
}
$zipMap=@{}
foreach($z in $zips){
  $zip=[System.IO.Compression.ZipFile]::OpenRead($z.FullName)
  try {
    foreach($e in $zip.Entries){
      if([string]::IsNullOrWhiteSpace($e.FullName) -or $e.FullName.EndsWith('/')){ continue }
      $rel=$e.FullName.Replace('\\','/').TrimStart('/')
      $zipMap[$rel]=[int64]$e.Length
    }
  } finally { $zip.Dispose() }
}
$missing=@(); foreach($k in $outMap.Keys){ if(-not $zipMap.ContainsKey($k)){ $missing += $k } }
$extra=@(); foreach($k in $zipMap.Keys){ if(-not $outMap.ContainsKey($k)){ $extra += $k } }
$sizeMismatch=@(); foreach($k in $outMap.Keys){ if($zipMap.ContainsKey($k) -and $outMap[$k] -ne $zipMap[$k]){ $sizeMismatch += $k } }
function Count-Cat([string]$name,[scriptblock]$pred){
  $out=@($outMap.Keys | Where-Object $pred)
  $zip=@($zipMap.Keys | Where-Object $pred)
  "${name}: OUT=$($out.Count) ZIP=$($zip.Count)"
}
$missingRefs=[System.Collections.Generic.List[string]]::new()
Get-ChildItem .\\out -Recurse -File -Include *.html | ForEach-Object {
  $relHtml=$_.FullName.Substring($outRoot.Length+1).Replace('\\','/')
  $h=Get-Content $_.FullName -Raw
  $matches=[regex]::Matches($h,'(?:src|href)="(/_next/static/[^"]+)"')
  foreach($m in $matches){
    $p=$m.Groups[1].Value.TrimStart('/')
    if(-not $outMap.ContainsKey($p)){ [void]$missingRefs.Add("$relHtml -> $p") }
  }
}
$req=@(
'images/pdfs/14. Consents From Directors, Bankers, BRLM, KMP, RTA, Monitaring Agency, Legal Council.pdf',
'images/pdfs/15 WrittenConsent letter 020326 of statutory auditor.pdf',
'images/pdfs/16.1Certificate on WACA.PDF',
'images/pdfs/16.2 Working Capital.PDF',
'images/pdfs/16.3 CERTIFICATE ON KPI(MCMD).PDF',
'images/pdfs/16.4 CERTIFICATE ON FINANCIAL INDEBTEDNESS.PDF',
'images/pdfs/16.5 CERTIFICATE ON OUTSTANDING DUES TO CREDITORS.PDF',
'images/pdfs/16.6 Basis for Offer Price.PDF',
'images/pdfs/16.7 CERTIFICATE ON REPAYMENT OF LOAN FORMING PART OF OBJECT.PDF',
'images/pdfs/17. Industry Research Report on Manpower Toll Mgt and Drone Industries dated 280126 prepared by Careedge Research.pdf',
'images/pdfs/18. Written Consent from CareEdge Research dated 280126.pdf',
'images/pdfs/19.Tripartite agreement dated 170524 between CO NSDLand RTA.pdf',
'images/pdfs/20. Tripartite agreement dated 140624 between Company CDSL & RTA.pdf',
'images/pdfs/21. Due Diligence Certificate 13122024 addressed to SEBI from BRLM.pdf',
'images/pdfs/22. SEBI final observation letter ref no SEBI-CFD-DIL2-2025-8022-1 dated 12032025.pdf',
'images/pdfs/23. Show Cause Notice debarment orders issued by NHAI and Stay orders by Delhi HC.pdf'
)
$reqMiss=@(); foreach($r in $req){ if(-not ($outMap.ContainsKey($r) -and $zipMap.ContainsKey($r))){ $reqMiss += $r } }
"ZIPS: $($zips.Name -join ', ')"
"OUT_TOTAL_FILES=$($outMap.Count) ZIP_UNION_FILES=$($zipMap.Count)"
"MISSING_IN_ZIP=$($missing.Count) EXTRA_IN_ZIP=$($extra.Count) SIZE_MISMATCH=$($sizeMismatch.Count)"
Count-Cat 'CSS' { $_ -like '_next/static/*.css' -or $_ -like '_next/static/chunks/*.css' -or $_ -like '_next/static/css/*.css' }
Count-Cat 'JS' { $_ -like '_next/static/*.js' -or $_ -like '_next/static/chunks/*.js' }
Count-Cat 'HTML' { $_ -like '*.html' }
Count-Cat 'TXT' { $_ -like '*.txt' }
Count-Cat 'IMAGES_ALL' { $_ -like 'images/*' -or $_ -like 'images/**/*' -or $_ -like 'all-banners/*' -or $_ -like 'clients-page/*' -or $_ -like 'clients-page/**/*' }
Count-Cat 'PDF' { $_ -like 'images/pdfs/*.pdf' -or $_ -like 'images/pdfs/*.PDF' -or $_ -like 'images/pdfs/investor/*.pdf' -or $_ -like 'images/pdfs/investor/*.PDF' }
Count-Cat 'FONTS_WOFF2' { $_ -like '_next/static/media/*.woff2' }
"HTML_MISSING__NEXT_REFERENCES=$($missingRefs.Count)"
"REQUIRED_PDF_14_23_MISSING=$($reqMiss.Count)"
if($missing.Count -gt 0){'MISSING_SAMPLE:'; $missing | Select-Object -First 20}
if($extra.Count -gt 0){'EXTRA_SAMPLE:'; $extra | Select-Object -First 20}
if($sizeMismatch.Count -gt 0){'SIZE_MISMATCH_SAMPLE:'; $sizeMismatch | Select-Object -First 20}
if($missingRefs.Count -gt 0){'MISSING_REF_SAMPLE:'; $missingRefs | Select-Object -First 20}
if($reqMiss.Count -gt 0){'REQ_MISS_SAMPLE:'; $reqMiss }
