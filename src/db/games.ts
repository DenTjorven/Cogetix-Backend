export interface Game {
  id: number
  name: string,
  img: string,
  description: string,
  dateFirstPlayed?: Date,
  dateCompleted?: Date,
  status: string
}

let games: Game[] = [
  {
    id: 1,
    name: "The Chronicles of Eldoria",
    img: "image_url_1",
    description: "Embark on an epic journey through the magical land of Eldoria. Battle fierce creatures, solve challenging puzzles, and uncover the secrets of a forgotten realm.",
    dateFirstPlayed: new Date("2023-01-01"),
    dateCompleted: new Date("2023-01-15"),
    status: "Completed",
  },
  {
    id: 2,
    name: "Galactic Odyssey",
    img: "image_url_2",
    description: "Explore the vastness of space as you command your own starship. Engage in intergalactic battles, trade with alien civilizations, and build alliances in this immersive space adventure.",
    dateFirstPlayed: new Date("2023-02-01"),
    dateCompleted: new Date("2023-02-20"),
    status: "Completed",
  },
  {
    id: 3,
    name: "Mystic Quest",
    img: "image_url_3",
    description: "Uncover the mysteries of a hidden island as you follow the path of an ancient prophecy. Use magical abilities, solve riddles, and face mythical creatures to fulfill your destiny.",
    dateFirstPlayed: new Date("2023-03-10"),
    status: "In Progress",
  },
  {
    id: 4,
    name: "Legends of Avalon",
    img: "image_url_4",
    description: "Step into the mythical world of Avalon, where dragons soar the skies and knights embark on noble quests. Choose your destiny and shape the fate of the legendary realm.",
    status: "Not Started",
  },
  {
    id: 5,
    name: "Cybernetic Revolution",
    img: "image_url_5",
    description: "In a dystopian future, where technology and humanity collide, become a cybernetic rebel fighting against oppressive forces. Upgrade your implants, hack systems, and lead the revolution.",
    status: "Not Started",
  },
  {
    id: 6,
    name: "Lost Horizon",
    img: "image_url_6",
    description: "Stranded on an uncharted island, survive the elements, discover hidden treasures, and unravel the island's dark secrets. Can you escape the Lost Horizon?",
    status: "Not Started",
  },
  {
    id: 7,
    name: "Eternal Rivals",
    img: "image_url_7",
    description: "Engage in intense one-on-one battles as legendary warriors from different eras clash in the ultimate tournament. Master unique abilities and prove who is the strongest.",
    status: "Not Started",
  },
  {
    id: 8,
    name: "City of Shadows",
    img: "image_url_8",
    description: "Navigate the dark alleys of a crime-ridden city as a detective solving complex cases. Uncover corruption, make moral choices, and bring justice to the City of Shadows.",
    status: "Not Started",
  },
  {
    id: 9,
    name: "Skybound Explorers",
    img: "image_url_9",
    description: "Take to the skies in your airship and explore floating islands, ancient ruins, and mythical creatures. Build your crew, upgrade your ship, and become a legendary Skybound Explorer.",
    status: "Not Started",
  },
  {
    id: 10,
    name: "Realm of Echoes",
    img: "image_url_10",
    description: "In a world where echoes of the past shape the present, embark on a quest to uncover the truth. Face spectral foes, solve time-bending puzzles, and alter the course of history.",
    status: "Not Started",
  },
];

// Function to get all games
export const GetGames = (): Game[] => {
  return games;
};

// Function to add a new game
export const AddGame = (newGame: Game): Game[] => {
  newGame.id = games.length + 1;
  games.push(newGame);
  return games;
};

// Function to update an existing game
export const UpdateGame = (gameId: number, updatedGame: Game): Game[] => {
  const index = games.findIndex((g) => g.id === gameId);

  if (index !== -1) {
    games[index] = { ...games[index], ...updatedGame };
  }

  return games;
};

// Function to delete an existing game
export const DeleteGame = (gameId: number): Game[] => {
  games = games.filter((g) => g.id !== gameId);
  return games;
};