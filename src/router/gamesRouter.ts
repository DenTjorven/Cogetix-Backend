import express, { Router } from 'express';
import * as GamesController from '../controllers/gamesController';

const gamesRouter: Router = express.Router();

// Create - Add a new game
gamesRouter.post('/', GamesController.addGame);

// Read - Get all games
gamesRouter.get('/', GamesController.getAllGames);

// Read - Get a specific game by id
gamesRouter.get('/:id', GamesController.getGameById);

// Update - Update an existing game
gamesRouter.put('/:id', GamesController.updateGame);

// Delete - Delete an existing game
gamesRouter.delete('/:id', GamesController.deleteGame);

export default gamesRouter;
