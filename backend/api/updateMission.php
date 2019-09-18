<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if ((int)$request->missionId < 1 && (int)$request->customerId < 1 && trim($request->missionName) === ''  &&   trim($request->userEmail) === '') {
    return http_response_code(400);
  }

  // Sanitize.
  $missionId = mysqli_real_escape_string($con, (int)$request->missionId);
  $customerId = mysqli_real_escape_string($con, (int)$request->customerId);
  $missionName = mysqli_real_escape_string($con, trim($request->missionName));
  $userEmail = mysqli_real_escape_string($con, trim($request->userEmail));

  // Update.
  $sql = "UPDATE `mission` SET `customerId`='$customerId',`missionName`='$missionName', `userEmail`='$userEmail' WHERE `missionId` = '{$missionId}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}