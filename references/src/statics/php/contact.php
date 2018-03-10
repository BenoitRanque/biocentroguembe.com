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
$contact = ($_GET['name']) ? $_GET['name'] : $_POST['name'];
$email = ($_GET['email']) ? $_GET['email'] : $_POST['email'];
$city = ($_GET['city']) ? $_GET['city'] : $_POST['city'];
$country = ($_GET['country']) ? $_GET['country'] : $_POST['country'];
$resort = ($_GET['resort']) ? $_GET['resort'] : $_POST['resort'];
$phone = ($_GET['phone']) ? $_GET['phone'] : $_POST['phone'];
$adult = ($_GET['adult']) ? $_GET['adult'] : $_POST['adult'];
$kids = ($_GET['kids']) ? $_GET['kids'] : $_POST['kids'];
$datearrival = ($_GET['datearrival']) ? $_GET['datearrival'] : $_POST['datearrival'];
$datedeparture = ($_GET['datedeparture']) ? $_GET['datedeparture'] : $_POST['datedeparture'];
$comment = ($_GET['message']) ? $_GET['message'] : $_POST['message'];


//flag to indicate which method it uses. If POST set it to 1
if ($_POST) $post=1;

//Simple server side validation for POST data, of course, you should validate the email
if (!$contact) $errors[count($errors)] = 'Enter your name.';
if (!$email) $errors[count($errors)] = 'Enter your email.';
if (!$city) $errors[count($errors)] = 'Enter your city.';
if (!$country) $errors[count($errors)] = 'Enter your country.';
if (!$resort) $errors[count($errors)] = 'Enter your resort.';
if (!$phone) $errors[count($errors)] = 'Enter your phone.';
if (!$adult) $errors[count($errors)] = 'Enter your adult.';
if (!$kids) $errors[count($errors)] = 'Enter your kids.';
if (!$datearrival) $errors[count($errors)] = 'Enter your datearrival.';
if (!$datedeparture) $errors[count($errors)] = 'Enter your datedeparture.';

//If the errors array is empty, send the mail
if (!$errors) {


	$body = '
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head></head>
	<body>
	<table>
		<tr><td>Contacto Persona:</td><td>' . $contact . '</td></tr>
		<tr><td>Email:</td><td>' . $email . '</td></tr>
		<tr><td>Ciudad:</td><td>' . $city . '</td></tr>
		<tr><td>País:</td><td>' . $country . '</td></tr>
		<tr><td>Area Reservada:</td><td>' . $resort . '</td></tr>
		<tr><td>Telefono:</td><td>' . $phone . '</td></tr>
		<tr><td>Nro. Adultos:</td><td>' . $adult . '</td></tr>
		<tr><td>Nro. Niños:</td><td>' . $kids . '</td></tr>
		<tr><td>Fecha Ingreso:</td><td>' . $datearrival . '</td></tr>
		<tr><td>Fecha Salida:</td><td>' . $datedeparture . '</td></tr>
		<tr><td>Comentario:</td><td>' . $comment . '</td></tr>
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

		$mail->addReplyTo($email,$name);
		//Content
		$mail->isHTML(true);                                  // Set email format to HTML
		$mail->Subject = 'Formulario Consultas - Biocentro Guembe';
		$mail->AltBody = 'Para ver el correctamente el correo, por favor use un cliente HTML compatible!';
		$mail->Body    = $body;

		$mail->send();
		echo 'Tu consulta ha sido enviada. Nos contactaremos contigo lo más rápido posible. Gracias!';
	} catch (Exception $e) {
		echo 'Error: ' . $mail->ErrorInfo;
	}

// If the errors array has values
} else {}

?>
