import { Conn } from "./server/database/knex";
import { server } from "./server/Server";
import 'dotenv/config';

const startServer = () => {
    server.listen(process.env.PORT || 80, () => {
        console.log('Server ON');
        console.log('Listen on port ' + process.env.PORT || 80);
    });
}

Conn.migrate.latest()
    .then(() => {
        Conn.seed.run()
            .then(() => {
                startServer();
            })
            .catch(error => {
                console.log(error);
            })
    })
    .catch(error => {
        console.log(error);
    })