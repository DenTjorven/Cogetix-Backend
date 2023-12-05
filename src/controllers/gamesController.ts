import { Request, Response } from 'express';
import { Game, AddGame, GetGames, UpdateGame, DeleteGame } from '../db/games';

// Create
export const addGame = (req: Request, res: Response): void => {
  const newGame: Game = req.body;
  const games = AddGame(newGame);
  res.json(games);
};

// Read
export const getAllGames = (req: Request, res: Response): void => {
  const games = GetGames();
  res.json(games);
};

export const getGameById = (req: Request, res: Response): void => {
  const gameId = parseInt(req.params.id, 10);
  const games = GetGames();
  const game = games.find((g) => g.id === gameId);

  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ message: 'Game not found' });
  }
};

// Update
export const updateGame = (req: Request, res: Response): void => {
  const gameId = parseInt(req.params.id, 10);
  const updatedGame: Game = req.body;
  const games = UpdateGame(gameId, updatedGame);

  if (games) {
    res.json(games);
  } else {
    res.status(404).json({ message: 'Game not found' });
  }
};

// Delete
export const deleteGame = (req: Request, res: Response): void => {
  const gameId = parseInt(req.params.id, 10);
  const games = DeleteGame(gameId);

  if (games) {
    res.json(games);
  } else {
    res.status(404).json({ message: 'Game not found' });
  }
};
