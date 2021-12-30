import { setupRoutes } from './routes';
import { setupApolloServer } from './apollo-server';

import express from 'express';

const app = express();
setupApolloServer(app);
setupRoutes(app);
export default app;