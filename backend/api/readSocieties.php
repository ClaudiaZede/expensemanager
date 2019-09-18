<?php
/**
 * Returns the list of all societies and missions
 */
require 'database.php';

$societies = [];
$sql = "SELECT * FROM society";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $societies[$i]['societySiret'] = $row['societySiret'];
    $societies[$i]['societyName'] = $row['societyName'];

    $i++;
  }

  echo json_encode($societies);
}
else
{
  http_response_code(404);
}
