$ErrorActionPreference='Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
$outRoot=(Resolve-Path '.\\out').Path
$zips=Get-ChildItem . -Filter 'fullsite-latest-part*.zip' | Sort-Object Name
if(-not $zips){ throw 'No fullsite-latest-part*.zip files found.' }
$outFiles=Get-ChildItem .\\out -Recurse -File | ForEach-Object { $_.FullName.Substring($outRoot.Length+1).Replace('\\','/') }
$outSet=[System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
$outFiles | ForEach-Object { [void]$outSet.Add($_) }
$zipSet=[System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
foreach($z in $zips){
  $zip=[System.IO.Compression.ZipFile]::OpenRead($z.FullName)
  try {
    foreach($e in $zip.Entries){
      if([string]::IsNullOrWhiteSpace($e.FullName)){ continue }
      if($e.FullName.EndsWith('/')){ continue }
      $norm=$e.FullName.Replace('\\','/').TrimStart('/')
      [void]$zipSet.Add($norm)
    }
  } finally { $zip.Dispose() }
}
$missingInZip=@(); foreach($f in $outSet){ if(-not $zipSet.Contains($f)){ $missingInZip += $f } }
$extraInZip=@(); foreach($f in $zipSet){ if(-not $outSet.Contains($f)){ $extraInZip += $f } }
$outCss = @($outFiles | Where-Object { $_ -like '_next/static/*.css' -or $_ -like '_next/static/chunks/*.css' -or $_ -like '_next/static/css/*.css' })
$zipCss = @($zipSet | Where-Object { $_ -like '_next/static/*.css' -or $_ -like '_next/static/chunks/*.css' -or $_ -like '_next/static/css/*.css' })
$outPdf = @($outFiles | Where-Object { $_ -like 'images/pdfs/*.pdf' -or $_ -like 'images/pdfs/*.PDF' -or $_ -like 'images/pdfs/investor/*.pdf' -or $_ -like 'images/pdfs/investor/*.PDF' })
$zipPdf = @($zipSet | Where-Object { $_ -like 'images/pdfs/*.pdf' -or $_ -like 'images/pdfs/*.PDF' -or $_ -like 'images/pdfs/investor/*.pdf' -or $_ -like 'images/pdfs/investor/*.PDF' })
$outHtml = @($outFiles | Where-Object { $_ -like '*.html' })
$zipHtml = @($zipSet | Where-Object { $_ -like '*.html' })
$keyPages=@('index.html','investors/index.html','terms-and-conditions/index.html','privacy-policy/index.html','quick-links/index.html','sitemap.xml')
$keyRows=@(); foreach($k in $keyPages){ $keyRows += [PSCustomObject]@{Path=$k; InOut=$outSet.Contains($k); InZip=$zipSet.Contains($k)} }
$investorsHtml=Get-Content '.\\out\\investors\\index.html' -Raw
$examText='Examination Report dated 270126 of Statutory Auditors on Restated Consolidated Financials 30.09.25'
$examPdf='10. Examination Report dated 270126 of Statutory Auditors on Restated Consolidated Financials 30.09.25.PDF'
$investorsHasExamText = $investorsHtml -match [regex]::Escape($examText)
$investorsHasExamPdfLink = $investorsHtml -match [regex]::Escape($examPdf)
$required=@(
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
$requiredRows=@(); foreach($r in $required){ $requiredRows += [PSCustomObject]@{File=$r; InOut=$outSet.Contains($r); InZip=$zipSet.Contains($r)} }
"ZIP_PARTS: $($zips.Name -join ', ')"
"OUT_FILE_COUNT: $($outSet.Count)"
"ZIP_UNION_FILE_COUNT: $($zipSet.Count)"
"MISSING_IN_ZIP_COUNT: $($missingInZip.Count)"
"EXTRA_IN_ZIP_COUNT: $($extraInZip.Count)"
"OUT_CSS_COUNT: $($outCss.Count) | ZIP_CSS_COUNT: $($zipCss.Count)"
"OUT_PDF_COUNT: $($outPdf.Count) | ZIP_PDF_COUNT: $($zipPdf.Count)"
"OUT_HTML_COUNT: $($outHtml.Count) | ZIP_HTML_COUNT: $($zipHtml.Count)"
"INVESTORS_HAS_EXAM_TEXT: $investorsHasExamText"
"INVESTORS_HAS_EXAM_PDF_LINK: $investorsHasExamPdfLink"
'KEY_PAGE_STATUS:'
$keyRows | Format-Table -AutoSize
'REQUIRED_14_23_STATUS:'
$requiredRows | Format-Table -AutoSize
if($missingInZip.Count -gt 0){ 'MISSING_IN_ZIP_SAMPLE:'; $missingInZip | Select-Object -First 20 }
if($extraInZip.Count -gt 0){ 'EXTRA_IN_ZIP_SAMPLE:'; $extraInZip | Select-Object -First 20 }
