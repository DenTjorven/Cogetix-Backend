import express from 'express';
import gamesRouter from './router/gamesRouter';
import cors from 'cors';

const app = express();
const port = process.env.port || 8080;

app.use(cors());
app.use(express.json());

app.use('/api/games', gamesRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

