<?php
header("Content-Type: application/json; charset=UTF-8");
$note = null;
if (!is_null($_GET['id'])) {
    include_once 'Database.php';
    $db = new Database();
    $pdo = $db->getConnection();
    $statement = $pdo->prepare("SELECT Donators.id, Donators.first_name, Donators.last_name, Donators.email, Notes.note, Donators.donation_text 
FROM Donators 
    INNER JOIN Notes ON Notes.id = Donators.note_id 
WHERE Notes.note = ?");
    $statement->execute([$_GET['id']]);
        echo json_encode($statement->fetchAll());
} else {
    $error = new stdClass();
    $error->status = 404;
    $error->message = "Please make sure you have an 'id' as a GET parameter!";
    echo json_encode($error);
}
?>