<?php
$serverName = "localhost";
$username = "root";
$password = "";
$database = "bilancio";

// crea connessione col database
$conn = mysqli_connect($serverName, $username, $password, $database);
if (!$conn) {
  die("Connessione fallita: ". mysqli_connect_error());
}
else {
  echo "connesso con successo";
}

$a = [
  "p1" => $_GET["parametro1"],
  "p2" => $_GET["parametro2"]
];


$sql = "INSERT INTO tutto (chiave, valore) 
  VALUES ('". $a["p1"] ."', '". $a["p2"] ."');";

$result = mysqli_query($conn, $sql);



?>