import { Request, Response } from 'express';
import { GetGames } from '../db/games';

export const getAllGames = (req: Request, res: Response): void => {
  const games = GetGames();
  res.json(games);
};

export const getGameByName = (req: Request, res: Response): void => {
  const gameName = req.params.name;
  const games = GetGames();
  const game = games.find((g) => g.name === gameName);

  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ message: 'Game not found' });
  }
};
