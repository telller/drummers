<?php
$method = $_SERVER['REQUEST_METHOD'];
//Script Foreach
$message = "";
$c = true;

$project_name = trim($_POST["project_name"]);
$admin_email  = trim($_POST["admin_email"]);
$form_subject = trim($_POST["form_subject"]);

$message ="<tr style='background-color: #f8f8f8;
				  <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Phone:</b></td>
				  <td style='padding: 10px; border: #e9e9e9 1px solid;'>".$_POST["my_phone"]."</td>
			    </tr>" . "<tr style='background-color: #f8f8f8;' )
      		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Message:</b></td>
      		<td style='padding: 10px; border: #e9e9e9 1px solid;'>".$_POST["message"]."</td>
      		</tr>";


function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}
$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$_POST["my_phone"].'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;
//var_dump($_POST);
echo wp_mail($admin_email, $form_subject, $message, $headers);
//mail($admin_email, adopt($form_subject), $message, $headers );
