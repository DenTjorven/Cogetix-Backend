import express from 'express';
import gamesRouter from './gamesRouter';

const app = express();
const port = 8080;

app.use(express.json());

// Use the gamesRouter for all routes related to games
app.use('/api/games', gamesRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
