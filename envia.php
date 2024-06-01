<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);

    $para = "joaopedrofontinelelima99@gmail.com";
    $assunto = "Contato - Agência JFL"

    $corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Telefone: ".$telefone.;

    $cabeca = "From: wilkeratleta10@hotmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para, $assunto, $corpo, $cabeca)){
        echo("Email enviado com sucesso!")
    }else{
        echo("Houve um erro ao enviar o email!");
    }
?>