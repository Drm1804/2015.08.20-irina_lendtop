<?

if (isset($_POST['email'])) {$email = $_POST['email'];}

$to = "iz@landingtop.ru";
$from = "info@yandex.ru";
$subject = "Landing Top. Оставлен email ";
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: <". $from .">\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
$message = "Электронная почта:$email для получения общегго предложения PDF";


if (mail($to, $subject, $message, $headers, $from ))
{ die('Ваша заявка успешно принята!\nМы с Вами свяжемся в ближайшее время'); }
else
{ die('Произошла ошибка при отправке заявки!'); }

?>