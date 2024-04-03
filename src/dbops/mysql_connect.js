import mysql from 'mysql';

export const get_connection = async () => {

    // Create a connection to the database
    const connection = mysql.createConnection({
        host: 'localhost', // Change this to your MySQL server's host
        user: 'root', // Change this to your MySQL username
        password: 'rxpad', // Change this to your MySQL password
        database: 'rxproj' // Change this to your MySQL database name
    });

    return new Promise((resolve, reject) => {

        // Connect to the database
        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to database:', err);
                reject(err)
                return;
            }
            console.log('Connected to database!');
            resolve(connection)
        });
    })
}