<?php
/**
 * Returns the list of expenses
 */
require 'database.php';

$users = [];
$sql = "SELECT * FROM user";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$i]['userEmail']    = $row['userEmail'];
    $users[$i]['userPassword'] = $row['userPassword'];
    $users[$i]['userType'] = $row['userType'];
    $users[$i]['societySiret'] = $row['societySiret'];
    $i++;
  }

  echo json_encode($users);
}
else
{
  http_response_code(404);
}
