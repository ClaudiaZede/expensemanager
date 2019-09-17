<?php
require 'database.php';

// Get the posted data
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data
  $request = json_decode($postdata);

  // Validate
  if((int)$request->customerId < 0 && trim($request->customerLastName) === '' &&  trim($request->customerFirstName) === '' &&  trim($request->societySiret) === '' && (int)$request->missionId < 0 )
  {
    return http_response_code(400);
  } else {

  // Sanitize Customer
  $customerLastName = mysqli_real_escape_string($con, trim($request->customerLastName));
  $customerFirstName = mysqli_real_escape_string($con, trim($request->customerFirstName));
  $societySiret = mysqli_real_escape_string($con, trim($request->societySiret));
  $missionName = mysqli_real_escape_string($con, trim($request->missionName));
  $userEmail = mysqli_real_escape_string($con, trim($request->userEmail));


  // Create Customer
  $sqlCustomer = "INSERT INTO customer (customerLastName, customerFirstName, societySiret)
          VALUE ('{$customerLastName}', '{$customerFirstName}', '{$societySiret}')";
  }
  
  if(mysqli_query($con,$sqlCustomer))
  {
    http_response_code(201);
    $customer = [
      'customerLastName' => $customerLastName,
      'customerFirstName' => $customerFirstName,
      'societySiret' => $societySiret,
      'customerId'    => mysqli_insert_id($con)
    ];
    echo json_encode($customer);
  }
  else
  {
    http_response_code(422);
  }

  // Sanitize Customer
  $customerLastName = mysqli_real_escape_string($con, trim($request->customerLastName));
  $customerFirstName = mysqli_real_escape_string($con, trim($request->customerFirstName));
  $customerId = mysqli_real_escape_string($con, (int)$request->customerId);
  $missionId = mysqli_real_escape_string($con, (int)$request->missionId);


  // Create Customer
  $sqlMission = "INSERT INTO customer (customerLastName, customerFirstName, missionId)
          VALUE ('{$customerLastName}', '{$customerFirstName}', '{$missionId}')";

  
  if(mysqli_query($con,$sqlMission))
  {
    http_response_code(201);
    $expense = [
      'customerLastName' => $customerLastName,
      'customerFirstName' => $customerFirstName,
      'missionId' => $missionId,
      'expenseId'    => mysqli_insert_id($con)
    ];
    echo json_encode($expense);
  }
  else
  {
    http_response_code(422);
  }
}