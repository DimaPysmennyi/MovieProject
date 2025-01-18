import client from "../src/client/client";

export async function createMovieWithGenre(){
    await client.movie.create({
        data: {
            name: 'Sonic The Hedgehog 3',
            rating: 7,
            age: '12+',
            year: 2024,
            country: 'USA',
            language: 'English',
            description: 'Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched, Team Sonic must seek out an unlikely alliance.',
            facts: 'Fact1 Fact2',
            previewSrc: 'https://m.media-amazon.com/images/M/MV5BMjZjNjE5NDEtOWJjYS00Mjk2LWI1ZDYtOWI1ZWI3MzRjM2UzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
            shots: "https://i0.wp.com/tailschannel.com/wp-content/uploads/2024/08/sonicmovie35.png?resize=800%2C500&ssl=1, ",
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
            name: "User2",
            email: "email@gmail.com",
            reviews: {
                create: [
                    {title: 'Title2', text: 'text', movieId: 1}
                ]
            }
        }
    })
}

async function createGenre(){
    await client.genre.create({
        data: {
            name: 'Action',
            description: 'film genre that predominantly features chase sequences, fights, shootouts, explosions, and stunt work'
        }
    })
}

async function createActor(){
    await client.actor.create({
        data: {
            name: 'Jim Carrey'
        }
    })
}

// createMovieWithGenre();
// createUser();
// createGenre();
// createActor();
updateMovie();