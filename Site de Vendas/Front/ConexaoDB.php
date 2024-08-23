<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "root";
    $password = "mariadb";
    $dbname = "loja";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Conexão ao banco de dados falhou: ". $conn->connect_error);
} else {
    echo("Conexão com banco de dados realizada!");
}

$nome = $_POST["nome"];
$telefone = $_POST["telefone"];
$email = $_POST["email"];
$endereco = $_POST["endereco"];

$sql = "INSERT INTO clientes (nome, telefone, email, endereco) VALUES ('$nome', '$telefone', '$email', '$endereco')";

if ($conn->query($sql) == TRUE) {
    echo " Cliente cadastrado com sucesso!";
} else {
    echo "Erro: " . $sql ."<br>" . $conn->error;
}
$conn->close();
}
?>