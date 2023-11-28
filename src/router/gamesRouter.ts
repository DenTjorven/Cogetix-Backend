import express, { Router } from 'express';
import * as GamesController from '../controllers/gamesController';

const gamesRouter: Router = express.Router();

// Get all games
gamesRouter.get('/', GamesController.getAllGames);

// Get a specific game by name
gamesRouter.get('/:name', GamesController.getGameByName);

export default gamesRouter;
