<?

if (isset($_POST['rate0'])) {$rate0 = $_POST['rate0'];}
if (isset($_POST['rate1'])) {$rate1 = $_POST['rate1'];}
if (isset($_POST['rate2'])) {$rate2 = $_POST['rate2'];}
if (isset($_POST['rate3'])) {$rate3 = $_POST['rate3'];}
if (isset($_POST['rate4'])) {$rate4 = $_POST['rate4'];}
if (isset($_POST['rate5'])) {$rate5 = $_POST['rate5'];}
if (isset($_POST['good'])) {$good = $_POST['good'];}
if (isset($_POST['bad'])) {$bad = $_POST['bad'];}
if (isset($_POST['brif'])) {$brif = $_POST['brif'];}

$to = "drm-a@yandex.ru";
$from = "info@yandex.ru";
$subject = "Поставлена оценка Landing Top";
$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: <". $from .">\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
$message = "$rate0 $rate1 $rate2 $rate3 $rate4 $rate5 \n Понравилос: $good \n Не понравилось $bad \n Выслать бриф на email: $brif";


if (mail($to, $subject, $message, $headers, $from ))
{ die('Ваша заявка успешно принята!\nМы с Вами свяжемся в ближайшее время'); }
else
{ die('Произошла ошибка при отправке заявки!'); }

?>