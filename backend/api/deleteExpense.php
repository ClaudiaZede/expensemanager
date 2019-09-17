<?php

require 'database.php';

// Extract, validate and sanitize the expenseId
$expenseId = ($_GET['expenseId'] !== null && (int)$_GET['expenseId'] > 0)? mysqli_real_escape_string($con, (int)$_GET['expenseId']) : false;

if(!$expenseId)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `expense` WHERE `expenseId` ='{$expenseId}'";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}
