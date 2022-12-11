<?php
$fruitSelect1 = htmlspecialchars($_POST['fruitSelect1']);
$fruitSelect2 = htmlspecialchars($_POST['fruitSelect2']);
$fruitSelect3 = htmlspecialchars($_POST['fruitSelect3']);
$fname = htmlspecialchars($_POST['fname']);
$mobile = htmlspecialchars($_POST['mobile']);
$email = htmlspecialchars($_POST['email']);
$memFormDate = htmlspecialchars($_POST['memFormDate']);

echo 'Thank you for your order, ', $fname, '!';
?>