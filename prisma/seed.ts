import client from "../src/client/client";

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
        name: "Detectives",
        description: "Detective fiction is a subgenre of crime fiction and mystery fiction in which an investigator or a detective—whether professional, amateur or retired—investigates a crime, often murder."
    },
    {
        name: "Thrillers",
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

]

export async function createMovieWithGenre(){
    await client.movie.create({
        data: {
            name: 'The Shawshank Redemption',
            rating: 9,
            age: '16+',
            year: 1994,
            country: 'USA',
            language: 'English',
            description: 'A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.',
            facts: 'Fact1 Fact2',
            previewSrc: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg',
            shots: "https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_.jpg, ",
            genres: {
                create: [
                    {
                        genre: {
                            connect: {
                                id: 2
                            }
                        }
                    }
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
                    }
                ]
            }
        }
    })
}


async function updateMovie(){
    await client.movie.update({
        where: {
            id: 1
        },
        data: {
            genres: {
                create: [
                    {
                        genre: {
                            connect: {
                                id: 1
                            }
                        }
                    }
                ]
            },
            actors: {
                create: [
                    {
                        actor: {
                            connect: {
                                id: 1
                            }
                        }
                    }
                ]
            }
        }
    })
}

async function createUser(){
    await client.user.create({
        data: {
            name: "New User",
            email: "email1@gmail.com",
            reviews: {
                create: [
                    {title: 'Beatiful Movie!', text: 'I really like this!', movieId: 1},
                    {title: 'Amazing!', text: 'Super cool!', movieId: 1},
                    {title: 'Bad', text: 'Boooooo', movieId: 1}
                ]
            }
        }
    })
}

async function createGenre(){
    await client.genre.createMany({
        data: {
            name: 'Fantasy',
            description: 'Narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.',   
        }
    })
}

async function createActor(){
    await client.actor.create({
        data: {
            name: "Morgan Freeman"
        }
    })
}

// async function createReview(){
//     await client.review.create({
//         data: {
//             title: 'Beatiful Movie!',
//             text: 'I really like this film',
//             user: {
//                 create: [
//                     {
//                         user:
//                     }
//                 ]
//             }
//         }
//     })
// }
createMovieWithGenre();
// createUser();
// createGenre();
// createActor();
// updateMovie();