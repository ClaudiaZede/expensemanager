<?php
require 'database.php';

// Get the posted data
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data
  $request = json_decode($postdata);

  // Validate
  if((int)$request->customerId < 0 && trim($request->missionName) === '' && trim($request->userEamil) === '' )
  {
    return http_response_code(400);
  } else {

    // Sanitize mission
    $customerId = mysqli_real_escape_string($con, (int)$request->customerId);
    $missionName = mysqli_real_escape_string($con, trim($request->missionName));
    $userEamil = mysqli_real_escape_string($con, trim($request->userEamil));


    // Create mission
    $sql = "INSERT INTO mission (missionName, customerId, userEmail)
            VALUE ('{$missionName}', '{$customerId}', '{$userEmail}')";

  }
  
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $mission = [
      'missionName' => $missionName,
      'customerId' => $customerId,
      'userEmail' => $userEmail,
      'missionId' => mysqli_insert_id($con)
      ];
      echo json_encode($mission);
  }
  else
  {
    http_response_code(422);
  }
}
