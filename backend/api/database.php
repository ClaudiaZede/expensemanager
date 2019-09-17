<?php

//php -S 127.0.0.1:8080 -t ./Documents/emapp/expense-manager-app/backend/

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

function connect()
{
  $connect = mysqli_connect("127.0.0.1" ,"root" ,"root" ,"expense_manager", "8889", "/Applications/MAMP/tmp/mysql/mysql.sock");

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();