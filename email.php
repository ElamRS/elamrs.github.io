<?php

if(isset($_POST['name'])  &&  !empty($_POST['name'])) {
    $nome = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['message']);

$to = "interativeastromap@gmail.com";
$subjet = "Contato - Astromap";
$body = "Nome :".$nome. "\r\n".
        "Email:".$email."\r\n".
        "Mensagem: ".$mensagem;
$header = "From: interativeastromap@gmail.com". "\r\n".
            "Reply-To".$email."\r\n.
            "X=Mailer:PHP/".phpversion();

if (mail($to, $subject, $body, $header)){
    echo("Email enviado com sucesso!");
}else{
    echo("O Email não pode ser enviado.");
}

}

?>