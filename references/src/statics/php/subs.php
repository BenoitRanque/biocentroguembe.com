<?php
//error_reporting(E_ALL);
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require_once 'PHPMailer.php';
require_once 'SMTP.php';
//Retrieve form data.
//GET - user submitted data using AJAX
//POST - in case user does not support javascript, we'll use POST instead

$email = ($_GET['emailsubs']) ? $_GET['emailsubs'] : $_POST['emailsubs'];



//flag to indicate which method it uses. If POST set it to 1
if ($_POST) $post=1;

$body = '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head><meta http-equiv="Content-Type" content="text/html; charset=gb18030"></head>
<body>
<table>

<tr><td>Email:</td><td>' . $email . '</td></tr>

</table>
</body>
</html>';

//phpmail script

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
	//Server settings
	$mail->CharSet = 'UTF-8';
	$mail->SMTPDebug = 0;                                 // Enable verbose debug output
	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'secure216.servconfig.com';  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = 'mailer@biocentroguembe.com';                 // SMTP username
	$mail->Password = 'Adulador_Escritorio';                           // SMTP password
	$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 465;                                    // TCP port to connect to

	//Recipients
	$mail->setFrom('mailer@biocentroguembe.com', 'Formulario Web');
	$mail->addAddress('reservas@biocentroguembe.com', 'Reservas');     // Add a recipient
	$mail->addAddress('marketing@biocentroguembe.com', 'Marketing');     // Add a recipient=

	$mail->addReplyTo($email);

	//Content
	$mail->isHTML(true);                                  // Set email format to HTML
	$mail->Subject = 'Boletin Suscripción - Biocentro Guembe';
	$mail->AltBody = 'Para ver el correctamente el correo, por favor use un cliente HTML compatible!';
	$mail->Body    = $body;

	$mail->send();
	echo "Tu correo ha sido registrado exitosamente. Gracias!";
} catch (Exception $e) {
	echo "Error: " . $mail->ErrorInfo;
}

?>
