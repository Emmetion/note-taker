CREATE TABLE IF NOT EXISTS user {
    id INT SERIAL NOT NULL,
    email VARCHAR(50) NOT NULL,
}

CREATE TABLE IF NOT EXISTS notes {
    id INT SERIAL NOT NULL,
    user_id INT NOT NULL REFERENCES user,
    content TEXT NOT NULL DEFAULT "",
    trashed BOOLEAN DEFAULT 0,
    shared BOOLEAN DEFAULT 0,
    share_id VARCHAR(20) DEFAULT NULL
}