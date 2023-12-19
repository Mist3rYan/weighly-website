<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Validation et échappement des données
    $name = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    // Configuration des paramètres de l'e-mail
    $expediteur = 'contact@weighly.lespetitsdeveloppeurs.fr';
    $sujet = "Nouveau message de $name";
    $destinataire = 'mycodeapps@gmail.com';
    // message
    $body = "<html><body>";
    $body .= "<h1 style='color:pink;'>Weighly</h1>";
    $body .= "<p>Email: $email</p>";
    $body .= "<p>Message: $message</p>";
    $body .= "</body></html>";

    // Headers
    $headers = "From: $expediteur \r\n";
    $headers .= "Reply-To: $destinataire \r\n";
    $headers .= "Content-type: text/html; charset=utf-8 \r\n";

    // Envoi du mail
    if (mail($destinataire, $sujet, $body, $headers)) {
        // Si l'e-mail est envoyé avec succès, renvoyer une réponse JSON
        $response = array("status" => "success", "message" => "Formulaire soumis avec succès !");
        echo json_encode($response);
    } else {
        // Si l'envoi de l'e-mail échoue, renvoyer une réponse JSON d'erreur
        http_response_code(500);
        echo json_encode(array("status" => "error", "message" => "Erreur lors de l'envoi de l'e-mail"));
    }
} else {
    // Si la requête n'est pas de type POST, renvoyer une erreur
    http_response_code(405);
    echo json_encode(array("status" => "error", "message" => "Méthode non autorisée"));
}
