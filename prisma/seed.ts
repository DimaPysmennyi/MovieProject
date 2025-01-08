import { connect } from "http2";
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
                    {title: 'Title2', text: 'text', movieId: 5}
                ]
            }
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

createMovieWithGenre();
// createUser();
// createActor();