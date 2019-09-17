<?php
/**
 * Returns the list of expenses
 */
require 'database.php';

// Extract, validate and sanitize the parameters
$userEmail= ($_GET['userEmail'] !== null && trim($_GET['userEmail']))? mysqli_real_escape_string($con, trim($_GET['userEmail'])) : false;
$missionName= ($_GET['missionName'] !== null && trim($_GET['missionName']))? mysqli_real_escape_string($con, trim($_GET['missionName'])) : false;
$expenseType= ($_GET['expenseType'] !== null && trim($_GET['expenseType']))? mysqli_real_escape_string($con, trim($_GET['expenseType'])) : false;
$expenseStatus= ($_GET['expenseStatus'] !== null && trim($_GET['expenseStatus']))? mysqli_real_escape_string($con, trim($_GET['expenseStatus'])) : false;
$expenseDate= ($_GET['expenseDate'] !== null && trim($_GET['expenseDate']))? mysqli_real_escape_string($con, trim($_GET['expenseDate'])) : false;

$expenses = [];

$sql = "SELECT * FROM listexpensescommercial WHERE userEmail = '{$userEmail}' AND (missionName = '{$missionName}' OR expenseType = '{$expenseType}' OR expenseStatus = '{$expenseStatus}' OR expenseDate = '{$expenseDate}') ORDER BY expenseDate DESC";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $expenses[$i]['expenseId'] = $row['expenseId'];
    $expenses[$i]['expenseType'] = $row['expenseType'];
    $expenses[$i]['expenseDate'] = $row['expenseDate'];
    $expenses[$i]['expenseStatus'] = $row['expenseStatus'];
    $expenses[$i]['expenseTotal'] = $row['expenseTotal'];
    $expenses[$i]['expenseRefounded'] = $row['expenseRefounded'];
    $expenses[$i]['expenseDepart'] = $row['expenseDepart'];
    $expenses[$i]['expenseArrival'] = $row['expenseArrival'];
    $expenses[$i]['expenseDistance'] = $row['expenseDistance'];
    $expenses[$i]['missionId'] = $row['missionId'];
    $expenses[$i]['missionName'] = $row['missionName'];
    $expenses[$i]['customerFirstName'] = $row['customerFirstName'];
    $expenses[$i]['customerLastName'] = $row['customerLastName'];
    $expenses[$i]['societyName'] = $row['societyName'];
    $expenses[$i]['userEmail'] = $row['userEmail'];

    $i++;
  }
    echo json_encode($expenses);
  }
  else
  {
    http_response_code(404);
  }