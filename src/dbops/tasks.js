// Import the mysql module

import { get_connection } from './mysql_connect.js';


export const find_all_task = async () => {

    const connection = await get_connection()
    
    try {
        if (connection) {
            // let medicine = await get_top_ten_medicine(connection);
            return  new Promise((resolve, reject) => {
                connection.query("select * from tasks", (err, results) => {
                    if (err) {
                        console.error('Error performing SELECT query:', err);
                        reject(err)
                        return;
                    }
        
                    // Log the results
                    console.log('Query results:', results);
        
                    // Process the results if needed
                    let task = []
                    results.forEach((row) => {
                        console.log(row); // Log each row
                        // Process each row as needed
                        task.push({ ...row })
                    });
                    resolve(task)
                });
            });
        }
    } catch (error) {
        console.log(error)
        return error;
    } finally {
        connection.end((err) => {
            if (err) {
                console.error('Error closing connection:', err);
                return;
            }
            console.log('Connection closed!');
        });
    }
}


