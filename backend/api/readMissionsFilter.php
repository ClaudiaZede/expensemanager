<?php
/**
 * Returns the list of missions of user
 */
require 'database.php';

// Extract, validate and sanitize the userEmail
$userEmail= ($_GET['userEmail'] !== null && trim($_GET['userEmail']))? mysqli_real_escape_string($con, trim($_GET['userEmail'])) : false;
$missionName= ($_GET['missionName'] !== null && trim($_GET['missionName']))? mysqli_real_escape_string($con, trim($_GET['missionName'])) : false;
$societyName= ($_GET['societyName'] !== null && trim($_GET['societyName']))? mysqli_real_escape_string($con, trim($_GET['societyName'])) : false;

$missions = [];
$sql = "SELECT * FROM listmissioncustomersociety WHERE userEmail = '{$userEmail}' AND (missionName = '{$missionName}' OR societyName = '{$societyName}') ";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $missions[$i]['missionId'] = $row['missionId'];
    $missions[$i]['missionName'] = $row['missionName'];
    $missions[$i]['userEmail'] = $row['userEmail'];
    $missions[$i]['customerId'] = $row['customerId'];
    $missions[$i]['customerLastName'] = $row['customerLastName'];
    $missions[$i]['customerFirstName'] = $row['customerFirstName'];
    $missions[$i]['societySiret'] = $row['societySiret'];
    $missions[$i]['societyName'] = $row['societyName'];

    $i++;
  }

  echo json_encode($missions);
}
else
{
  http_response_code(404);
}
