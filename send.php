<?

if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['tel'])) {$tel = $_POST['tel'];}
if (isset($_POST['brif'])) {$brif = $_POST['brif'];}
if (isset($_POST['message'])) {$message = $_POST['message'];}

$to = "drm-a@yandex.ru";
$from = "info@yandex.ru";
$subject = "Главная страница Landing Top";
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: <". $from .">\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
$message = "Имя: $name \nТелефон: $tel \nЭлектронная почта:$email \nСообщение: $message\n\n $brif";


if (mail($to, $subject, $message, $headers, $from ))
{ die('Ваша заявка успешно принята!\nМы с Вами свяжемся в ближайшее время'); }
else
{ die('Произошла ошибка при отправке заявки!'); }

?>