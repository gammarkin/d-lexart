import * as express from 'express';
import * as cors from 'cors';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', routes.Main);
app.use('/users', routes.User);
app.use('/messages', routes.Messages);

export default app;
