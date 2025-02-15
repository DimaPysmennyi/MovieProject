import client from "../src/client/client";

const movieArray = [
    {
        name: 'The Shawshank Redemption',
        rating: 9,
        age: '16+',
        year: 1994,
        country: 'USA',
        language: 'English',
        description: 'A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.',
        facts: "Andy and Red's opening chat in the prison yard, in which Red is throwing a baseball, took nine hours to shoot because director Frank Darabont insisted on many takes of the scene before he was satisfied. Morgan Freeman threw the baseball for the entire nine hours without a word of complaint. He showed up for work the next day with his left arm in a sling.",
        previewSrc: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg',
        shots: "https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_.jpg, ",
        genres: {
            create: [
                {
                    genre: {
                        connect: {
                            id: 10,
                        }
                    }
                },
            ]
        },
        actors: {
            create: [
                {
                    actor: {
                        connect: {
                            id: 17
                        }
                    }
                },
                {
                    actor: {
                        connect: {
                            id: 18
                        }
                    }
                }
            ]
        }
    },
    {
        name: 'The Prestige',
        rating: 8,
        age: '12+',
        year: 2006,
        country: 'USA',
        language: 'English',
        description: 'Rival 19th-century magicians engage in a bitter battle for trade secrets.',
        facts: "Chung Ling Soo was a stage character created by William Ellsworth Robinson, a white man who disguised himself as a Chinese man to cash in on audiences' enthusiasm for the exotic. Robinson lived as Chung, never breaking character while in public. He died in March 1918, when a bullet-catch trick went wrong. There is doubt about his last words. They were either 'My God, I've been shot' or 'Oh my God. Something's happened. Lower the curtain.' Either way they were both his last words and the first English he had spoken on stage in nineteen years.",
        previewSrc: 'https://d3tvwjfge35btc.cloudfront.net/Assets/85/343/L_p1004634385.jpg',
        shots: "https://m.media-amazon.com/images/M/MV5BODc0MzkxOTg5N15BMl5BanBnXkFtZTcwODkzNDMyMw@@._V1_.jpg, ",
        genres: {
            create: [
                {
                    genre: {
                        connect: {
                            id: 10,
                        }
                    }
                },
                {
                    genre: {
                        connect: {
                            id: 6,
                        }
                    }
                },
            ]
        },
        actors: {
            create: [
                {
                    actor: {
                        connect: {
                            id: 19
                        }
                    }
                },
                {
                    actor: {
                        connect: {
                            id: 20
                        }
                    }
                },
                {
                    actor: {
                        connect: {
                            id: 21
                        }
                    }
                }
            ]
        }
    },
    {
        name: 'Nosferatu',
        rating: 7,
        age: '18+',
        year: 2024,
        country: 'USA',
        language: 'English',
        description: 'A gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror in its wake.',
        facts: "The exteriors of Orlok's castle were filmed at Hunedoara Castle, also known as Corvin Castle, a Romanian castle located in Transylvania and one of the largest medieval castles extant in Europe. What's more, it's a castle where Vlad Dracula was briefly imprisoned.",
        previewSrc: 'https://m.media-amazon.com/images/M/MV5BY2FhZGE3NmEtNWJjOC00NDI1LWFhMTQtMjcxNmQzZmEwNGIzXkEyXkFqcGc@._V1_.jpg',
        shots: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9mWZQOuuhV8YifvoYpZB_W4y3xCMb6P2uQ&s, ",
        genres: {
            create: [
                {
                    genre: {
                        connect: {
                            id: 1,
                        }
                    }
                },
                {
                    genre: {
                        connect: {
                            id: 2,
                        }
                    }
                },
            ]
        },
        actors: {
            create: [
                {
                    actor: {
                        connect: {
                            id: 22
                        }
                    }
                },
                {
                    actor: {
                        connect: {
                            id: 23
                        }
                    }
                },
            ]
        }
    }
]

const genreArray = [
    {
        name: "Horror",
        description: "A horror story is any story where we the audience/reader/listener are forced to watch helpless as the protagonist(s) are forced to suffer through events that are beyond their control set against a backdrop that is specifically designed to inspire fear, terror or unease.",
    },
    {
        name: "Fantasy",
        description: "A genre of speculative fiction which involves themes of the supernatural, magic, and imaginary worlds and creatures."
    },
    {
        name: "Comedy",
        description: "A genre of dramatic performance having a light or humorous tone that depicts amusing incidents and in which the characters ultimately triumph over adversity.",
    },
    {
        name: "Action",
        description: "The action film is a film genre that predominantly features chase sequences, fights, shootouts, explosions, and stunt work."
    },
    {
        name: "Detective",
        description: "Detective fiction is a subgenre of crime fiction and mystery fiction in which an investigator or a detective—whether professional, amateur or retired—investigates a crime, often murder."
    },
    {
        name: "Thriller",
        description: "A genre of fiction with numerous, often overlapping, subgenres, including crime, horror, and detective fiction."
    },
    {
        name: "Melodrama",
        description: "A play, or movie, that uses sensationalized theatricality and basic plot and character structures. Character emotion in melodramas is typically overemphasized."
    },
    {
        name: "Adventure",
        description: "A genre that involve protagonists going on epic journeys. These journeys are most often geographical but may also include emotional and personal journeys and growth. "
    },
    {
        name: "Historical",
        description: "Set in a real place, during a culturally recognizable time. The details and the action in the story can be a mix of actual events and ones from the author's imagination as they fill in the gaps."
    },

        
]



const actorsArray = [
    {
        name: "Tom Cruise",
        // age: 62
    },
    {
        name: "Russell Crowe",
        // age: 60
    },
    {
        name: "Robert Downey", 
        // age: 59
    },
    {
        name: "Andrew Garfield",
        // age: 42
    },
    {
        name: "Dwayne Johnson",
        // age: 52
    },
    {
        name: "Ryan Reynolds",
        // age: 47
    },
    {
        name: "Kevin Hart",
        // age: 45
    },
    {
        name: "Tom Holland",
        // age: 28
    },
    {
        name: "Tobey Maguire",
        // age: 49
    },
    {
        name: "Jason Statnam",
        // age: 57
    },
    {
        name: "Paul Mescal",
        // age: 28
    },
    {
        name: "Jim Carrey",
        // age: 63
    },
    {
        name: "Aaron Paul",
        // age: 45
    },
    {
        name: "Ving Rhames",
        // age: 65
    },
    {
        name: "Josh Hutcherson",
        // age: 32
    },
    {
        name: "Morgan Freeman"
    },
    {
        name: "Tim Robbins"
    },
    {
        name: "Christian Bale"
    },
    {
        name: "Scarlett Johansson"
    },
    {
        name: "Hugh Jackman"
    }

]

export async function createMovieWithGenre(){
    await client.movie.create({
        data: movieArray[2]     
    })
}


async function createUser(){
    await client.user.create({
        data: {
            name: "New User",
            email: "email1@gmail.com",
            reviews: {
                create: [
                    {title: 'Beatiful Movie!', text: 'I really like this!', movieId: 4},
                    {title: 'Amazing!', text: 'Super cool!', movieId: 4},
                    {title: 'Bad', text: 'Boooooo', movieId: 4}
                ]
            }
        }
    })
}

async function createGenre(){
    await client.genre.create({
        data: {
            name: "Drama",
            description: "The drama genre is a broad category that features stories portraying human experiences, emotions, conflicts, and relationships in a realistic and emotionally impactful way."
        }
    })
}

async function createActor(){
    await client.actor.create({
        data: {
            name: "Keanu Reeves"
        }
    })
}

// createGenre();
createMovieWithGenre();
// createUser();
// createActor();
// updateMovie();