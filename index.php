<!DOCTYPE html>
<meta charset="UTF-8">
<html>
<head>
    <meta charset="UTF-8" />
    <title>計算機WEBアプリ</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="css/common.css?data=1114"rel="stylesheet"/>
    <link href="css/load.css?data=1114"rel="stylesheet"/>
    <link href="css/answer.css?data=1113"rel="stylesheet"/>
    <link href="css/button1.css?data=11311"rel="stylesheet"/>
    <link href="css/hamburger.css?data=123"rel="stylesheet"/>
    <link href="css/option.css?data=1133"rel="stylesheet"/>
    <link rel="shortcut icon" href="img/favicon.ico">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="apple-touch-icon" href="img/icon-192x192.png" sizes="192x192">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Calc">
    <link rel="manifest" href="https://calcspeed.com/manifest.json?data=1146">
    <script>
    navigator.serviceWorker.register('https://calcspeed.com/service-worker.js').then(function(registration){
        console.log("Service Worker is registered!!");
    });
    </script>
</head>
<body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.2/howler.min.js"></script>
<div class="main">
<?php require("module/load.php");?>
<?php require("module/hamburger.php");?>
<?php require("module/option.php");?>
<?php require("module/answer.php");?>
<?php require("module/button2.php")?>
<script src="js/common.js?data=11412222432"></script>

</div>

</body>
</html>