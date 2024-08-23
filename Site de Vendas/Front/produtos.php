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
$preco = $_POST["preco"];


$sql = "INSERT INTO produtos (nome, preco) VALUES ('$nome', '$preco')";

if ($conn->query($sql) == TRUE) {
    echo " Produto cadastrado com sucesso!";
} else {
    echo "Erro: " . $sql ."<br>" . $conn->error;
}
$conn->close();
}
?>