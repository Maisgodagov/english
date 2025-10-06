import { createServer } from 'http';

import { createApp } from './app/app';
import { env } from './config/env';

const app = createApp();
const server = createServer(app);

const PORT = env.port;

server.listen(PORT, () => {
  console.log(`Backend API listening on http://localhost:${PORT}`);
});
