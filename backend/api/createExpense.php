<?php
require 'database.php';

// Get the posted data
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data
  $request = json_decode($postdata);

  // Validate
  if((int)$request->missionId < 0 && trim($request->expenseType) === '' &&  trim($request->expenseDate) === '' && (float)$request->expenseTotal < 0)
  {
    return http_response_code(400);
  } else {

  // Sanitize
  $expenseType = mysqli_real_escape_string($con, trim($request->expenseType));
  $expenseDate = mysqli_real_escape_string($con, trim($request->expenseDate));
  $expenseTotal = mysqli_real_escape_string($con, (float)($request->expenseTotal));
  $expenseDepart = mysqli_real_escape_string($con, trim($request->expenseDepart));
  $expenseArrival = mysqli_real_escape_string($con, trim($request->expenseArrival));
  $expenseDistance = mysqli_real_escape_string($con, (float)($request->expenseDistance));
  $missionId = mysqli_real_escape_string($con, (int)$request->missionId);


  // Create
  $sql = "INSERT INTO expense (expenseType, expenseDate, expenseTotal, expenseDepart, expenseArrival, expenseDistance, missionId)
          VALUE ('{$expenseType}', '{$expenseDate}', '{$expenseTotal}', '{$expenseDepart}', '{$expenseArrival}', '{$expenseDistance}', '{$missionId}')";
  }
  
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $expense = [
      'expenseType' => $expenseType,
      'expenseDate' => $expenseDate,
      'expenseDepart' => $expenseDepart,
      'expenseArrival' => $expenseArrival,
      'expenseDistance' => $expenseDistance,
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