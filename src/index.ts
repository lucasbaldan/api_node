import { Conn } from "./server/database/knex";
import { server } from "./server/Server";
import 'dotenv/config';

const startServer = () => {
        server.listen(process.env.PORT || 80, () => {
            console.log('Server ON');
            console.log('Listen on port ' + process.env.PORT || 80);
        });

        server.on('error', (e) => {
            console.log('STOPING SERVER');
            console.log('Server OFF');
            console.log(e);
            process.exit(1);
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