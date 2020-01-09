<?php
// ----------------------------конфигурация-------------------------- //

$adminEmail="info@premium.uz";  // e-mail админа
$date=date("d.m.y"); // число.месяц.год
$time=date("H:i"); // часы:минуты:секунды

//---------------------------------------------------------------------- //

// Принимаем данные с формы

$name=trim($_POST['name']);
$phone=trim($_POST['phone']);
$email=trim($_POST['email']);

$msg="
Имя: $name,
Номер телефона: $phone,
Почта: $email
";
// Отправляем письмо админу


$date = date('r');

$params = [
    'form_id' => 567961,
    'hash' => '8d42ea65f1eeffe8f4c4af7744ed62a7',
    'user_origin' => "{\"datetime\":\"{$date}\",\"referer\":\"https://premiumuz.amocrm.ru/settings/pipeline/leads/1692421\"}",
    'fields[name_1]' => $name,
    'fields[28409_1][41015]' => $phone,
    'fields[28411_1][41027]' => $email
];

$ch = curl_init('https://forms.amocrm.ru/queue/add');
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$result = curl_exec($ch);
curl_close($ch);

mail("$adminEmail", "Заявка с bot24.uz
от $name", "$msg");