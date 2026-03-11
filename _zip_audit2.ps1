$ErrorActionPreference='Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$outRoot=(Resolve-Path '.\\out').Path
$zips=Get-ChildItem . -Filter 'fullsite-latest-part*.zip' | Sort-Object Name
$outSet=[System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
Get-ChildItem .\\out -Recurse -File | ForEach-Object { [void]$outSet.Add(($_.FullName.Substring($outRoot.Length+1) -replace '\\','/')) }
$zipSet=[System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
foreach($zf in $zips){
  $z=[System.IO.Compression.ZipFile]::OpenRead($zf.FullName)
  try {
    foreach($e in $z.Entries){
      if($e.FullName -and -not $e.FullName.EndsWith('/')){ [void]$zipSet.Add((($e.FullName -replace '\\','/').TrimStart('/'))) }
    }
  } finally { $z.Dispose() }
}
$missing=@(); foreach($f in $outSet){ if(-not $zipSet.Contains($f)){ $missing += $f } }
$cssOut=@($outSet | Where-Object { $_ -like '_next/static/*.css' -or $_ -like '_next/static/chunks/*.css' -or $_ -like '_next/static/css/*.css' })
$cssZip=@($zipSet | Where-Object { $_ -like '_next/static/*.css' -or $_ -like '_next/static/chunks/*.css' -or $_ -like '_next/static/css/*.css' })
$jsOut=@($outSet | Where-Object { $_ -like '_next/static/*.js' -or $_ -like '_next/static/chunks/*.js' })
$jsZip=@($zipSet | Where-Object { $_ -like '_next/static/*.js' -or $_ -like '_next/static/chunks/*.js' })
$imgOut=@($outSet | Where-Object { $_ -like 'images/*' -or $_ -like 'clients-page/*' -or $_ -like 'all-banners/*' })
$imgZip=@($zipSet | Where-Object { $_ -like 'images/*' -or $_ -like 'clients-page/*' -or $_ -like 'all-banners/*' })
$pdfOut=@($outSet | Where-Object { $_ -like 'images/pdfs/*.pdf' -or $_ -like 'images/pdfs/*.PDF' -or $_ -like 'images/pdfs/investor/*.pdf' -or $_ -like 'images/pdfs/investor/*.PDF' })
$pdfZip=@($zipSet | Where-Object { $_ -like 'images/pdfs/*.pdf' -or $_ -like 'images/pdfs/*.PDF' -or $_ -like 'images/pdfs/investor/*.pdf' -or $_ -like 'images/pdfs/investor/*.PDF' })
$missingRefs=0
Get-ChildItem .\\out -Recurse -File -Include *.html | ForEach-Object {
  $h=Get-Content $_.FullName -Raw
  $m=[regex]::Matches($h,'(?:src|href)="(/_next/static/[^"]+)"')
  foreach($x in $m){ $p=$x.Groups[1].Value.TrimStart('/'); if(-not $outSet.Contains($p)){ $missingRefs++ } }
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
$reqMiss=@(); foreach($r in $req){ if(-not ($outSet.Contains($r) -and $zipSet.Contains($r))){ $reqMiss += $r } }
"OUT_TOTAL=$($outSet.Count) ZIP_TOTAL=$($zipSet.Count) MISSING_IN_ZIP=$($missing.Count)"
"CSS OUT=$($cssOut.Count) ZIP=$($cssZip.Count)"
"JS OUT=$($jsOut.Count) ZIP=$($jsZip.Count)"
"IMAGES OUT=$($imgOut.Count) ZIP=$($imgZip.Count)"
"PDF OUT=$($pdfOut.Count) ZIP=$($pdfZip.Count)"
"HTML_MISSING_NEXT_REFS=$missingRefs"
"REQ_14_23_MISSING=$($reqMiss.Count)"
if($missing.Count -gt 0){ 'MISSING_SAMPLE:'; $missing | Select-Object -First 20 }
if($reqMiss.Count -gt 0){ 'REQ_MISS_SAMPLE:'; $reqMiss }
