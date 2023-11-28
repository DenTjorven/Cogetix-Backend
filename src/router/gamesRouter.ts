import express, { Router, Request, Response } from 'express';
import { GetGames, Game } from '../db/games';

const gamesRouter: Router = express.Router();

// Get all games
gamesRouter.get('/', (req: Request, res: Response) => {
  const games = GetGames();
  res.json(games);
});

// Get a specific game by name
gamesRouter.get('/:name', (req: Request, res: Response) => {
  const gameName = req.params.name;
  const games = GetGames();
  const game = games.find((g) => g.name === gameName);

  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ message: 'Game not found' });
  }
});

export default gamesRouter;
