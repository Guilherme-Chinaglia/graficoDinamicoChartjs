<?php

$pdo = new PDO('mysql:host=localhost;dbname=chartnew;port=3306;charset=utf8', 'root', '123456');

$sql = "SELECT vendedores.nome, vendas.vendas FROM vendas JOIN vendedores ON vendedores.id = vendas.id_vendedores";

$statement = $pdo->prepare($sql);

$statement->execute();


while($results = $statement->fetch(PDO::FETCH_ASSOC)) {

    $result[] = $results;
}

echo json_encode($result);