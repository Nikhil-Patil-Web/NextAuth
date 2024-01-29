import Handlebars from "handlebars"

export const activationTemplate = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no">
<title></title>

<!--##custom-font-resource##-->
<!--[if gte mso 16]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<style>
html,body,table,tbody,tr,td,div,p,ul,ol,li,h1,h2,h3,h4,h5,h6 {
margin: 0;
padding: 0;
}

body {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}

table {
border-spacing: 0;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt;
}

table td {
border-collapse: collapse;
}

h1,h2,h3,h4,h5,h6 {
font-family: Arial;
}

.ExternalClass {
width: 100%;
}

.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%;
}

/* Outermost container in Outlook.com */
.ReadMsgBody {
width: 100%;
}

img {
-ms-interpolation-mode: bicubic;
}

</style>

<style>
a[x-apple-data-detectors=true]{
color: inherit !important;
text-decoration: inherit !important;
}

u + #body a {
color: inherit;
text-decoration: inherit !important;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}

a, a:link, .no-detect-local a, .appleLinks a {
color: inherit !important;
text-decoration: inherit;
}
</style>

<style>

.width600 {
width: 600px;
max-width: 100%;
}

@media all and (max-width: 599px) {
.width600 {
width: 100% !important;
}
}

@media screen and (min-width: 600px) {
.hide-on-desktop {
display: none !important;
}
}

@media all and (max-width: 599px),
only screen and (max-device-width: 599px) {
.main-container {
width: 100% !important;
}

.col {
width: 100%;
}

.fluid-on-mobile {
width: 100% !important;
height: auto !important;
text-align:center;
}

.fluid-on-mobile img {
width: 100% !important;
}

.hide-on-mobile {
display:none !important;
width:0px !important;
height:0px !important;
overflow:hidden;
}
}

</style>

<!--[if gte mso 9]>
<style>

.col {
width: 100%;
}

.width600 {
width: 600px;
}

.width600 {
width: 600px;
height: auto;
}
.width32 {
width: 32px;
height: auto;
}
.width128 {
width: 128px;
height: auto;
}
.width580 {
width: 580px;
height: auto;
}
.width40 {
width: 40px;
height: auto;
}
.width48 {
width: 48px;
height: auto;
}

.hide-on-desktop {
display: none;
}

.hide-on-desktop table {
mso-hide: all;
}

.hide-on-desktop div {
mso-hide: all;
}

.nounderline { text-decoration: none; }

.mso-font-fix-arial: { font-family: Arial, sans-serif; }
</style>
<![endif]-->

</head>
<body id="body" leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="font-family:Arial, sans-serif; font-size:0px;margin:0;padding:0;">
<style>
@media screen and (min-width: 600px) {
.hide-on-desktop {
display: none;
}
}
@media all and (max-width: 599px) {
.hide-on-mobile {
display:none !important;
width:0px !important;
height:0px !important;
overflow:hidden;
}
.main-container {
width: 100% !important;
}
.col {
width: 100%;
}
.fluid-on-mobile {
width: 100% !important;
height: auto !important;
text-align:center;
}
.fluid-on-mobile img {
width: 100% !important;
}
}
</style>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td width="100%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td align="center" width="100%">
<!--[if gte mso 9]><table width="600" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table class="width600 main-container" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;">
<tr>
<td width="100%">
<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#315d76" style="background-color:#315d76;">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#315d76" style="background-color:#315d76;">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:3px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#ffffff;line-height:24px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 25px; color: #ffffff; font-weight: normal; line-height: 35px; mso-line-height: exactly; mso-text-raise: 5px; padding: 0; margin: 0;text-align: center;">Auth</h1>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td style="padding-bottom:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:6px solid #b9dbe2;">
<tr>
<td style="font-size:0px;line-height:0;mso-line-height-rule:exactly;">&nbsp;
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#b9dbe2" style="background-color:#b9dbe2;">
<tr>
<td valign="top" style="padding:10px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" class="mcol">
<tr>
<td valign="top" style="padding:0;mso-cellspacing:0in;">
<!--[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><![endif]-->
<!--[if gte mso 9]><td valign="top" style="padding:0;width:116.00000000000004px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="20.000000000000007%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;color:#315d76;line-height:14px;text-align:left;"><p style="padding: 0; margin: 0;text-align: center;">Menu</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:115.99999999999996px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="19.999999999999993%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;color:#315d76;line-height:14px;text-align:left;"><p style="padding: 0; margin: 0;text-align: center;">Menu</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:116.00000000000004px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="20.000000000000007%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;color:#315d76;line-height:14px;text-align:left;"><p style="padding: 0; margin: 0;text-align: center;">Menu</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:116.00000000000004px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="20.000000000000007%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;color:#315d76;line-height:14px;text-align:left;"><p style="padding: 0; margin: 0;text-align: center;">Menu</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:115.99999999999989px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="19.999999999999982%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;color:#315d76;line-height:14px;text-align:left;"><p style="padding: 0; margin: 0;text-align: center;">Menu</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]-->
<!--[if gte mso 9]></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center"><!--[if gte mso 9]><table width="600" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="fluid-on-mobile img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/5b83a9058eee140013168c6f/rawpixel-603645-unsplash.jpg" width="600" height="400" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width600" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:10px;padding-bottom:30px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;color:#000000;line-height:14px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 25px; color: #315d76; font-weight: normal; line-height: 35px; mso-line-height: exactly; mso-text-raise: 5px; padding: 0; margin: 0;">Easy to use sales CRM to streamline and automate your sales. 50% off for 6 months after free trial!</h1></div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:5px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top"><table cellpadding="0" cellspacing="0" border="0" width="100%" class="mcol">
<tr>
<td valign="top" style="padding:0;mso-cellspacing:0in;">
<!--[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><![endif]-->
<!--[if gte mso 9]><td valign="top" style="padding:0;width:300px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#000000;line-height:24px;text-align:left;"><p style="padding: 0; margin: 0;">Aliquam erat volutpat. Suspendisse dapibus sit amet tellus id pretium. Suspendisse lobortis at orci et feugiat. Nam varius sem maximus lacus commodo, tempus venenatis urna cursus. Nullam rhoncus ultrices enim id fringilla. Donec placerat lectus in tincidunt vulputate.</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:300px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:25px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="transparent" style="background-color:transparent;">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#000000;line-height:24px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 25px; color: #000000; font-weight: normal; line-height: 35px; mso-line-height: exactly; mso-text-raise: 5px; padding: 0; margin: 0;text-align: center;">Why not?</h1></div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:5px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top"><table cellpadding="0" cellspacing="0" border="0" width="100%" class="mcol">
<tr>
<td valign="top" style="padding:0;mso-cellspacing:0in;">
<!--[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><![endif]-->
<!--[if gte mso 9]><td valign="top" style="padding:0;width:150px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td style="padding-top:10px;padding-right:30px;padding-bottom:10px;padding-left:30px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:2px solid #4d91bb;">
<tr>
<td style="font-size:0px;line-height:0;mso-line-height-rule:exactly;">&nbsp;
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:150px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td style="padding-top:10px;padding-right:30px;padding-bottom:10px;padding-left:30px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td style="font-size:0px;line-height:0;mso-line-height-rule:exactly;">&nbsp;
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]-->
<!--[if gte mso 9]></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top"><table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" width="50%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center" style="padding-top:5px;padding-bottom:5px;"><!--[if gte mso 9]><table width="32" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/if_15_Place_Optimization_1688864%20copy.PNG" width="32" height="32" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width32" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
<td valign="top" width="50%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;color:#000000;line-height:19px;text-align:left;"><p style="padding: 0; margin: 0;">Quisque tincidunt</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top"><table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" width="50%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center" style="padding-top:5px;padding-bottom:5px;"><!--[if gte mso 9]><table width="32" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/if_39_Email_Marketing_1688837%20copy.PNG" width="32" height="32" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width32" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
<td valign="top" width="50%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;color:#000000;line-height:19px;text-align:left;"><p style="padding: 0; margin: 0;">Sed fermentum</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top"><table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" width="50%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center" style="padding-top:5px;padding-bottom:5px;"><!--[if gte mso 9]><table width="32" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/5b83a9058eee140013168c6f/if_12_SEO_Benchmark_1688863%20%281%29%20copy.PNG" width="32" height="32" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width32" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
<td valign="top" width="50%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;color:#000000;line-height:19px;text-align:left;"><p style="padding: 0; margin: 0;">A consectetur</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]-->
<!--[if gte mso 9]></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center" style="padding:5px;">
<!--[if !mso]><!-- -->
<a href="" target="_blank" style="display:inline-block; text-decoration:none;" class="fluid-on-mobile">
<span>
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#4d91bb" class="fluid-on-mobile" style="border-radius:15px;border-collapse:separate !important;background-color:#4d91bb;">
<tr>
<td align="center" style="padding:10px;" width="130">
<span style="color:#bfe0e5 !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:15px;mso-line-height:exactly;line-height:26px;mso-text-raise:5px;letter-spacing: normal;">
<font style="color:#bfe0e5;" class="button">
<a href="{{url}}" ><b>Activate</b></a>
</font>
</span>
</td>
</tr>
</table>
</span>
</a>
<!--<![endif]-->
<div style="display:none; mso-hide: none;">
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#4d91bb" class="fluid-on-mobile" style="border-radius:15px;border-collapse:separate !important;background-color:#4d91bb;">
<tr>
<td align="center" style="padding:10px;" width="130">
<a href="" target="_blank" style="color:#bfe0e5 !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:15px;mso-line-height:exactly;line-height:26px;mso-text-raise:5px;letter-spacing: normal;text-decoration:none;text-align:center;">
<span style="color:#bfe0e5 !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:15px;mso-line-height:exactly;line-height:26px;mso-text-raise:5px;letter-spacing: normal;">
<font style="color:#bfe0e5;" class="button">
<a href="{{url}}" ><b>Activate</b></a>
</font>
</span>
</a>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center"><!--[if gte mso 9]><table width="600" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="fluid-on-mobile img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/01-1.jpg" width="600" height="400" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width600" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:20px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#000000;line-height:24px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 25px; color: #000000; font-weight: normal; line-height: 35px; mso-line-height: exactly; mso-text-raise: 5px; padding: 0; margin: 0;">Awesome saas deals</h1></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:22px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#000000;line-height:24px;text-align:left;"><p style="padding: 0; margin: 0;">Aliquam erat volutpat. Suspendisse dapibus sit amet tellus id pretium. Suspendisse lobortis at orci et feugiat. Nam varius sem maximus lacus commodo, tempus venenatis urna cursus. Nam sit amet vehicula lacus. Ut quis egestas justo. Nunc convallis mi ut metus finibus laoreet ac ut urna. Mauris sed lorem at nisi pharetra egestas ut non quam. Sed fermentum rutrum nibh sed accumsan. Quisque tincidunt molestie egestas. Sed in consectetur arcu. Nullam a consectetur ligula, imperdiet volutpat lorem.</p></div>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center" style="padding:5px;">
<!--[if !mso]><!-- -->
<a href="" target="_blank" style="display:inline-block; text-decoration:none;" class="fluid-on-mobile">
<span>
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#4d91bb" class="fluid-on-mobile" style="border-radius:15px;border-collapse:separate !important;background-color:#4d91bb;">
<tr>
<td align="center" style="padding:10px;" width="130">
<span style="color:#bfe0e5 !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:15px;mso-line-height:exactly;line-height:26px;mso-text-raise:5px;letter-spacing: normal;">
<font style="color:#bfe0e5;" class="button">
<strong><span class="mso-font-fix-arial">MORE DETAILS</span></strong>
</font>
</span>
</td>
</tr>
</table>
</span>
</a>
<!--<![endif]-->
<div style="display:none; mso-hide: none;">
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#4d91bb" class="fluid-on-mobile" style="border-radius:15px;border-collapse:separate !important;background-color:#4d91bb;">
<tr>
<td align="center" style="padding:10px;" width="130">
<a href="" target="_blank" style="color:#bfe0e5 !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:15px;mso-line-height:exactly;line-height:26px;mso-text-raise:5px;letter-spacing: normal;text-decoration:none;text-align:center;">
<span style="color:#bfe0e5 !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:15px;mso-line-height:exactly;line-height:26px;mso-text-raise:5px;letter-spacing: normal;">
<font style="color:#bfe0e5;" class="button">
<strong><span class="mso-font-fix-arial">MORE DETAILS</span></strong>
</font>
</span>
</a>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:20px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" class="mcol">
<tr>
<td valign="top" style="padding:0;mso-cellspacing:0in;">
<!--[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><![endif]-->
<!--[if gte mso 9]><td valign="top" style="padding:0;width:300px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="left"><!--[if gte mso 9]><table width="128" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="left"><img src="https://images.chamaileon.io/5b83a9058eee140013168c6f/if_01_Web_Analytics_1688875.png" width="128" height="128" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width128" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:20px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#000000;line-height:24px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 25px; color: #000000; font-weight: normal; line-height: 35px; mso-line-height: exactly; mso-text-raise: 5px; padding: 0; margin: 0;">Beautiful Charts</h1></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#000000;line-height:26px;text-align:left;"><p style="padding: 0; margin: 0;">Aliquam erat volutpat. Suspendisse dapibus sit amet tellus id pretium. Suspendisse lobortis at orci et feugiat. Sed fermentum rutrum nibh sed accumsan. Quisque tincidunt molestie egestas. Sed in consectetur arcu. Nullam a consectetur ligula, imperdiet volutpat lorem. <em><a href="http://k" target="_blank"style="color: #4d91bb !important;text-decoration: underline !important;" ><font style="color:#4d91bb;" >Read more...</font></a></em></p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:300px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="left"><!--[if gte mso 9]><table width="128" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="left"><img src="https://images.chamaileon.io/if_08_Web_Development_1688871_2018-11-05A10.06.54.362.png" width="128" height="128" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width128" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:20px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#000000;line-height:24px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 25px; color: #000000; font-weight: normal; line-height: 35px; mso-line-height: exactly; mso-text-raise: 5px; padding: 0; margin: 0;">Global Gear</h1></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:15px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#000000;line-height:26px;text-align:left;"><p style="padding: 0; margin: 0;">Aliquam erat volutpat. Suspendisse dapibus sit amet tellus id pretium. Suspendisse lobortis at orci et feugiat. Sed fermentum rutrum nibh sed accumsan. Quisque tincidunt molestie egestas. Sed in consectetur arcu. Nullam a consectetur ligula, imperdiet volutpat lorem. <em><a href="http://k" target="_blank"style="color: #4d91bb !important;text-decoration: underline !important;" ><font style="color:#4d91bb;" >Read more...</font></a></em></p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]-->
<!--[if gte mso 9]></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-right:10px;padding-left:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center"><!--[if gte mso 9]><table width="580" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="fluid-on-mobile img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/5b83a9058eee140013168c6f/02_2018-11-05A10.31.03.690.jpg" width="580" height="386" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width580" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:15px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top"><table cellpadding="0" cellspacing="0" border="0" width="100%" class="mcol">
<tr>
<td valign="top" style="padding:0;mso-cellspacing:0in;">
<!--[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><![endif]-->
<!--[if gte mso 9]><td valign="top" style="padding:0;width:300px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:15px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="transparent" style="background-color:transparent;">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#000000;line-height:24px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 25px; color: #000000; font-weight: normal; line-height: 35px; mso-line-height: exactly; mso-text-raise: 5px; padding: 0; margin: 0;text-align: center;">Welcome {{name}}</h1></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:5px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top"><table cellpadding="0" cellspacing="0" border="0" width="100%" class="mcol">
<tr>
<td valign="top" style="padding:0;mso-cellspacing:0in;">
<!--[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><![endif]-->
<!--[if gte mso 9]><td valign="top" style="padding:0;width:150px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td style="padding-top:10px;padding-right:30px;padding-bottom:10px;padding-left:30px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:2px solid #4d91bb;">
<tr>
<td style="font-size:0px;line-height:0;mso-line-height-rule:exactly;">&nbsp;
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:150px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td style="padding-top:10px;padding-right:30px;padding-bottom:10px;padding-left:30px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td style="font-size:0px;line-height:0;mso-line-height-rule:exactly;">&nbsp;
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]-->
<!--[if gte mso 9]></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top"><table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" width="50%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center" style="padding-top:5px;padding-bottom:5px;"><!--[if gte mso 9]><table width="32" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/if_15_Place_Optimization_1688864%20copy.PNG" width="32" height="32" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width32" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
<td valign="top" width="50%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;color:#000000;line-height:19px;text-align:left;"><p style="padding: 0; margin: 0;">Quisque tincidunt</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top"><table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" width="50%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center" style="padding-top:5px;padding-bottom:5px;"><!--[if gte mso 9]><table width="32" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/if_39_Email_Marketing_1688837%20copy.PNG" width="32" height="32" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width32" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
<td valign="top" width="50%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;color:#000000;line-height:19px;text-align:left;"><p style="padding: 0; margin: 0;">Sed fermentum</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top"><table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" width="50%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center" style="padding-top:5px;padding-bottom:5px;"><!--[if gte mso 9]><table width="32" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/5b83a9058eee140013168c6f/if_12_SEO_Benchmark_1688863%20%281%29%20copy.PNG" width="32" height="32" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width32" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
<td valign="top" width="50%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;color:#000000;line-height:19px;text-align:left;"><p style="padding: 0; margin: 0;">A consectetur</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:25px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-right:5px;padding-bottom:10px;padding-left:5px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center" style="padding:5px;">
<!--[if !mso]><!-- -->
<a href="" target="_blank" style="display:inline-block; text-decoration:none;" class="fluid-on-mobile">
<span>
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#4d91bb" class="fluid-on-mobile" style="border-radius:15px;border-collapse:separate !important;background-color:#4d91bb;">
<tr>
<td align="center" style="padding:10px;" width="130">
<span style="color:#bfe0e5 !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:15px;mso-line-height:exactly;line-height:26px;mso-text-raise:5px;letter-spacing: normal;">
<font style="color:#bfe0e5;" class="button">
<a href="{{url}}"><b>Activate</b></a>
</font>
</span>
</td>
</tr>
</table>
</span>
</a>
<!--<![endif]-->
<div style="display:none; mso-hide: none;">
<table cellpadding="0" cellspacing="0" border="0" bgcolor="#4d91bb" class="fluid-on-mobile" style="border-radius:15px;border-collapse:separate !important;background-color:#4d91bb;">
<tr>
<td align="center" style="padding:10px;" width="130">
<a href="" target="_blank" style="color:#bfe0e5 !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:15px;mso-line-height:exactly;line-height:26px;mso-text-raise:5px;letter-spacing: normal;text-decoration:none;text-align:center;">
<span style="color:#bfe0e5 !important;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:15px;mso-line-height:exactly;line-height:26px;mso-text-raise:5px;letter-spacing: normal;">
<font style="color:#bfe0e5;" class="button">
<a href="{{url}}"><b>Activate</b></a>
</font>
</span>
</a>
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:300px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:10px;padding-bottom:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;color:#000000;line-height:24px;text-align:left;"><p style="padding: 0; margin: 0;text-align: center;">Aliquam erat volutpat. Suspendisse dapibus sit amet tellus id pretium. Suspendisse lobortis at orci et feugiat. Nam varius sem maximus lacus commodo, tempus venenatis urna cursus. Nullam rhoncus ultrices enim id fringilla. Donec placerat lectus in tincidunt vulputate. Morbi id nunc vestibulum, maximus orci eleifend, dignissim erat. </p><p style="padding: 0; margin: 0;text-align: center;">&nbsp;</p><p style="padding: 0; margin: 0;text-align: center;">Nam varius sem maximus lacus commodo, tempus venenatis urna cursus. </p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]-->
<!--[if gte mso 9]></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:20px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#000000;line-height:24px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 25px; color: #000000; font-weight: normal; line-height: 35px; mso-line-height: exactly; mso-text-raise: 5px; padding: 0; margin: 0;">Killer feature set</h1></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:22px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#000000;line-height:24px;text-align:left;"><p
style="padding: 0; margin: 0;">Aliquam erat volutpat. Suspendisse dapibus sit amet tellus id pretium. Suspendisse lobortis at orci et feugiat. Nam varius sem maximus lacus commodo, tempus venenatis urna cursus. Nullam rhoncus ultrices enim id fringilla. Donec placerat lectus in tincidunt vulputate. Morbi id nunc vestibulum, maximus orci eleifend, dignissim erat. Integer sagittis, dui in pharetra bibendum, purus sapien feugiat ex, et gravida dolor nibh eu nulla. Nam sit amet vehicula lacus. Ut quis egestas justo. Nunc convallis mi ut metus finibus laoreet ac ut urna. Nullam a consectetur ligula, imperdiet volutpat lorem.</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%" class="mcol">
<tr>
<td valign="top" style="padding:0;mso-cellspacing:0in;">
<!--[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><![endif]-->
<!--[if gte mso 9]><td valign="top" style="padding:0;width:200px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="33.333333333333336%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-right:15px;padding-bottom:10px;padding-left:15px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#b9dbe2" style="border-radius:15px;border-collapse:separate !important;background-color:#b9dbe2;">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center"><!--[if gte mso 9]><table width="40" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/5b83a9058eee140013168c6f/if_38_Target_Audience_1688838.png" width="40" height="40" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width40" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-right:10px;padding-bottom:20px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#ffffff;line-height:24px;text-align:left;"><p style="padding: 0; margin: 0;text-align: center;">CRM System</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:200px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="33.333333333333336%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-right:15px;padding-bottom:10px;padding-left:15px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#4e91bc" style="border-radius:15px;border-collapse:separate !important;background-color:#4e91bc;">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center"><!--[if gte mso 9]><table width="40" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/if_35_E-Commerce_Solution_1688844.png" width="40" height="40" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width40" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-right:10px;padding-bottom:20px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#ffffff;line-height:24px;text-align:left;"><p style="padding: 0; margin: 0;text-align: center;">Ecommerce Page</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:199.99999999999997px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="33.33333333333333%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-right:15px;padding-bottom:10px;padding-left:15px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#7ad0ca" style="border-radius:15px;border-collapse:separate !important;background-color:#7ad0ca;">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center"><!--[if gte mso 9]><table width="40" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/5b83a9058eee140013168c6f/if_28_Social_Engagement_1688848.png" width="40" height="40" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width40" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-right:10px;padding-bottom:20px;padding-left:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#ffffff;line-height:24px;text-align:left;"><p style="padding: 0; margin: 0;text-align: center;">Chat Widget</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]-->
<!--[if gte mso 9]></tr></table><![endif]-->
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:20px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#000000;line-height:24px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 25px; color: #000000; font-weight: normal; line-height: 35px; mso-line-height: exactly; mso-text-raise: 5px; padding: 0; margin: 0;">The story behind you</h1></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-bottom:22px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#000000;line-height:24px;text-align:left;"><p
style="padding: 0; margin: 0;">Aliquam erat volutpat. Suspendisse dapibus sit amet tellus id pretium. Suspendisse lobortis at orci et feugiat. Nam varius sem maximus lacus commodo, tempus venenatis urna cursus. Nullam rhoncus ultrices enim id fringilla. Donec placerat lectus in tincidunt vulputate. Morbi id nunc vestibulum, maximus orci eleifend, dignissim erat. Integer sagittis, dui in pharetra bibendum, purus sapien feugiat ex, et gravida dolor nibh eu nulla. Nam sit amet vehicula lacus. Ut quis egestas justo. Nunc convallis mi ut metus finibus laoreet ac ut urna. Mauris sed lorem at nisi pharetra egestas ut non quam. Sed fermentum rutrum nibh sed accumsan. Quisque tincidunt molestie egestas. Sed in consectetur arcu. Nullam a consectetur ligula, imperdiet volutpat lorem.</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-right:10px;padding-left:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#315d76" style="background-color:#315d76;">
<tr>
<td valign="top"><table cellpadding="0" cellspacing="0" border="0" width="100%" class="mcol">
<tr>
<td valign="top" style="padding:0;mso-cellspacing:0in;">
<!--[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><![endif]-->
<!--[if gte mso 9]><td valign="top" style="padding:0;width:290px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;color:#ffffff;line-height:24px;text-align:left;"><h1 style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 25px; color: #ffffff; font-weight: normal; line-height: 35px; mso-line-height: exactly; mso-text-raise: 5px; padding: 0; margin: 0;text-align: center;">Our social life</h1></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:290px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="50%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-top:20px;padding-bottom:10px;"><table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" width="20%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center"><!--[if gte mso 9]><table width="48" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/5b83a9058eee140013168c6f/1460422004_facebook_2018-11-06P20.33.29.552.png" width="48" height="33" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width48" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
<td valign="top" width="20%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center"><!--[if gte mso 9]><table width="48" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/1460422015_twitter.png" width="48" height="33" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width48" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
<td valign="top" width="20%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center"><!--[if gte mso 9]><table width="48" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/5b83a9058eee140013168c6f/1460422029_linkedin_2018-11-06P20.33.29.561.png" width="48" height="33" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width48" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
<td valign="top" width="20%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center"><!--[if gte mso 9]><table width="48" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/5b83a9058eee140013168c6f/1460423100_instagram_2018-11-06P20.33.29.566.png" width="48" height="33" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width48" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
<td valign="top" width="20%">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center"><!--[if gte mso 9]><table width="48" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/1460422036_pinterest.png" width="48" height="33" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width48" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]-->
<!--[if gte mso 9]></tr></table><![endif]-->
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td style="padding-bottom:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:6px solid #b9dbe2;">
<tr>
<td style="font-size:0px;line-height:0;mso-line-height-rule:exactly;">&nbsp;
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding-right:10px;padding-left:10px;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#b9dbe2" style="background-color:#b9dbe2;">
<tr>
<td valign="top" style="padding:10px;"><table cellpadding="0" cellspacing="0" border="0" width="100%" class="mcol">
<tr>
<td valign="top" style="padding:0;mso-cellspacing:0in;">
<!--[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><![endif]-->
<!--[if gte mso 9]><td valign="top" style="padding:0;width:112px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="20%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" align="center"><!--[if gte mso 9]><table width="32" cellpadding="0" cellspacing="0"><tr><td><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" class="img-wrap" style="max-width:100%;">
<tr>
<td valign="top" align="center"><img src="https://images.chamaileon.io/33549570-cb49-4c16-ac92-caf07b0ce0a2_2018-11-06P21.09.03.978.png" width="32" height="32" alt="" border="0" style="display:block;font-size:14px;max-width:100%;height:auto;" class="width32" />
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:112px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="20%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;color:#315d76;line-height:14px;text-align:left;"><p style="padding: 0; margin: 0;text-align: center;">Unsubscribe</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:112.00000000000004px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="20.000000000000007%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;color:#315d76;line-height:14px;text-align:left;"><p style="padding: 0; margin: 0;text-align: center;">Links</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:112.00000000000004px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="20.000000000000007%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;color:#315d76;line-height:14px;text-align:left;"><p style="padding: 0; margin: 0;text-align: center;">Unsubscribe</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]--><!--[if gte mso 9]><td valign="top" style="padding:0;width:111.99999999999993px;"><![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="19.999999999999986%" class="col" align="left" style="float:left;">
<tr>
<td valign="top" width="100%" style="padding:0;">
<table cellpadding="0" cellspacing="0" border="0" width="100%">
<tr>
<td valign="top" style="padding:10px;"><div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;color:#315d76;line-height:14px;text-align:left;"><p style="padding: 0; margin: 0;text-align: center;">Links</p></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td><![endif]-->
<!--[if gte mso 9]></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<!--[if gte mso 9]></td></tr></table><![endif]-->
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`
