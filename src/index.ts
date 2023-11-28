import express from 'express';
import gamesRouter from './router/gamesRouter';

const app = express();
const port = 8080;

app.use(express.json());

app.use('/api/games', gamesRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

