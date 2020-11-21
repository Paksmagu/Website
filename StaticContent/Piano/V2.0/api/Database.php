<?php
class Database {
    private $host = "localhost";
    private $dbName = "virtualPiano";
    private $username = "paksmagu";
    private $password = "onlineResentfulTK123";
    private $charSet = "utf8";
    private $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];

    public $connection;

    public function getConnection() {
        $this -> connection = null;
        $dsn = "mysql:host=$this->host;dbname=$this->dbName;charset=$this->charSet";
        try {
            $this->connection = new PDO($dsn, $this->username, $this->password, $this->options);
        } catch (PDOException $exception) {
            echo "Connection Errror: " . $exception->getMessage();
        }

        return $this->connection;
    }
}
?>