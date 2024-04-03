// Import the mysql module

import { get_connection } from './mysql_connect.js';


export const find_top_ten_medicine = async () => {

    const connection = await get_connection()
    
    try {
        if (connection) {
            // let medicine = await get_top_ten_medicine(connection);
            return  new Promise((resolve, reject) => {
                connection.query('SELECT row_id, name, packed_in FROM e_medicine limit 0, 10', (err, results) => {
                    if (err) {
                        console.error('Error performing SELECT query:', err);
                        reject(err)
                        return;
                    }
        
                    // Log the results
                    console.log('Query results:', results);
        
                    // Process the results if needed
                    let medicine = []
                    results.forEach((row) => {
                        console.log(row); // Log each row
                        // Process each row as needed
                        medicine.push({ ...row })
                    });
                    resolve(medicine)
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


