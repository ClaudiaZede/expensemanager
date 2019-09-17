<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if ((int)$request->expenseId < 1 && (int)$request->missionId < 1 && trim($request->expenseType) === '' &&  trim($request->expenseDate) === '' && (float)$request->expenseTotal < 0) {
    return http_response_code(400);
  }

  // Sanitize.
  $expenseId = mysqli_real_escape_string($con, (int)$request->expenseId);
  $expenseType = mysqli_real_escape_string($con, trim($request->expenseType));
  $expenseDate = mysqli_real_escape_string($con, trim($request->expenseDate));
  $expenseTotal = mysqli_real_escape_string($con, (float)($request->expenseTotal));
  $expenseDepart = mysqli_real_escape_string($con, trim($request->expenseDepart));
  $expenseArrival = mysqli_real_escape_string($con, trim($request->expenseArrival));
  $expenseDistance = mysqli_real_escape_string($con, (float)($request->expenseDistance));
  $missionId = mysqli_real_escape_string($con, (int)$request->missionId);

  // Update.
  $sql = "UPDATE `expense` SET `expenseType`='$expenseType',`expenseDate`='$expenseDate', `expenseTotal`='$expenseTotal',`expenseDepart`='$expenseDepart', `expenseArrival`='$expenseArrival',`expenseDistance`='$expenseDistance', `missionId`='$missionId' WHERE `expenseId` = '{$expenseId}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}