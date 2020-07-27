<?php 
	session_start();
	$db = new mysqli('localhost', 'root', '', 'practice-crud');

	// initialize variables
	$name = "";
	$address = "";
	$id = 0;

	if (isset($_POST['save'])) {
		$name = $_POST['name'];
		$address = $_POST['address'];
		$save = $db->query("INSERT INTO info (name, address) VALUES ('$name','$address')"); 
		$_SESSION['message'] = "Address saved sucessfully!"; 
		header('location: index.php');
	}
	$results = $db->query("SELECT * FROM info");




?>