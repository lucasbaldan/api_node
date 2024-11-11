import { Conn } from "./server/database/knex";
import { server } from "./server/Server";
import 'dotenv/config';

const startServer = () => {
    server.listen(process.env.PORT || 80, () => {
        console.log('Server ON');
        console.log('Listen on port ' + process.env.PORT || 80);
    });
}

startServer();
Conn.migrate.latest()
    .then(() => {
        startServer();
    })
    .catch(error => {
        console.log(error);
    })