export interface Game{
    name: string,
    img: string,
    description: string,
    dateFirstPlayed?: Date,
    dateCompleted?: Date,
    status: string
}

export const GetGames = (): Game[] => {
    const games: Game[] = [
        {
          name: "The Chronicles of Eldoria",
          img: "image_url_1",
          description: "Embark on an epic journey through the magical land of Eldoria. Battle fierce creatures, solve challenging puzzles, and uncover the secrets of a forgotten realm.",
          dateFirstPlayed: new Date("2023-01-01"),
          dateCompleted: new Date("2023-01-15"),
          status: "Completed",
        },
        {
          name: "Galactic Odyssey",
          img: "image_url_2",
          description: "Explore the vastness of space as you command your own starship. Engage in intergalactic battles, trade with alien civilizations, and build alliances in this immersive space adventure.",
          dateFirstPlayed: new Date("2023-02-01"),
          dateCompleted: new Date("2023-02-20"),
          status: "Completed",
        },
        {
          name: "Mystic Quest",
          img: "image_url_3",
          description: "Uncover the mysteries of a hidden island as you follow the path of an ancient prophecy. Use magical abilities, solve riddles, and face mythical creatures to fulfill your destiny.",
          dateFirstPlayed: new Date("2023-03-10"),
          status: "In Progress",
        },
        {
          name: "Legends of Avalon",
          img: "image_url_4",
          description: "Step into the mythical world of Avalon, where dragons soar the skies and knights embark on noble quests. Choose your destiny and shape the fate of the legendary realm.",
          status: "Not Started",
        },
        {
          name: "Cybernetic Revolution",
          img: "image_url_5",
          description: "In a dystopian future, where technology and humanity collide, become a cybernetic rebel fighting against oppressive forces. Upgrade your implants, hack systems, and lead the revolution.",
          status: "Not Started",
        },
        {
          name: "Lost Horizon",
          img: "image_url_6",
          description: "Stranded on an uncharted island, survive the elements, discover hidden treasures, and unravel the island's dark secrets. Can you escape the Lost Horizon?",
          status: "Not Started",
        },
        {
          name: "Eternal Rivals",
          img: "image_url_7",
          description: "Engage in intense one-on-one battles as legendary warriors from different eras clash in the ultimate tournament. Master unique abilities and prove who is the strongest.",
          status: "Not Started",
        },
        {
          name: "City of Shadows",
          img: "image_url_8",
          description: "Navigate the dark alleys of a crime-ridden city as a detective solving complex cases. Uncover corruption, make moral choices, and bring justice to the City of Shadows.",
          status: "Not Started",
        },
        {
          name: "Skybound Explorers",
          img: "image_url_9",
          description: "Take to the skies in your airship and explore floating islands, ancient ruins, and mythical creatures. Build your crew, upgrade your ship, and become a legendary Skybound Explorer.",
          status: "Not Started",
        },
        {
          name: "Realm of Echoes",
          img: "image_url_10",
          description: "In a world where echoes of the past shape the present, embark on a quest to uncover the truth. Face spectral foes, solve time-bending puzzles, and alter the course of history.",
          status: "Not Started",
        },
    ];
    return games;
}