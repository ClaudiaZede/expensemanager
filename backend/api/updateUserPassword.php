<?php
/**
 * Returns the list of expenses
 */
require 'database.php';


// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if (trim($request->userEmail) === '' &&  trim($request->confirmPassword) === '') {
    return http_response_code(400);
  }

  // Sanitize.
  $userEmail = mysqli_real_escape_string($con, trim($request->userEmail));
  $userPassword = mysqli_real_escape_string($con, trim($request->confirmPassword));

  $sql = "UPDATE `user` SET `userPassword`='$userPassword' WHERE `USER`.`userEmail`='$userEmail' ";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }

}