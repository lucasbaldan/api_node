import { server } from "./server/Server";
import 'dotenv/config';

server.listen(process.env.PORT||80, () => {
    console.log('Server ON');
    console.log('Listen on port ' + process.env.PORT || 80);
});