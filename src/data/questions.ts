import DragonCastle from '../asserts/questionsImage/dragon-castle.png'
import DragonSaintGeorge from '../asserts/questionsImage/dragon-saint-george.png'
import Tail from '../asserts/questionsImage/tail-ornament.png'
import Dragon from '../asserts/questionsImage/dragon.png'
import RoseBook from '../asserts/questionsImage/rose-book-combined.png'
import RoseTop from '../asserts/questionsImage/rose-book-top.png'
import FinalBook from '../asserts/questionsImage/final-book.png'

export const questions = [
    {
        text: {
            pt: 'Você aceita uma rosa de Sant Jordi?',
            ca: 'Acceptes una rosa de Sant Jordi?'
        },
        image: RoseTop
    },
    {
        text: {
            pt: 'Tem certeza? O dragão pode aparecer...',
            ca: 'N’estàs segur? El drac pot aparèixer...'
        },
        image: Dragon
    },
    {
        text: {
            pt: 'Dragões não desistem tão fácil!',
            ca: 'Els dracs no es rendeixen tan fàcilment!'
        },
        image: DragonCastle
    },
    {
        text: {
            pt: 'Cuidado... Ele está chegando!',
            ca: 'Compte... S’està acostant!'
        },
        image: DragonSaintGeorge
    },
    {
        text: {
            pt: 'Última chance... Rosas ou dragões?',
            ca: 'Última oportunitat... Roses o dracs?'
        },
        image: RoseBook
    },
    {
        text: {
            pt: 'Vou te dar uma chance porque não quero ver você sofrer...',
            ca: 'Et donaré una oportunitat perquè no vull veure’t patir...'
        },
        image: Tail
    },
    {
        text: {
            pt: 'Boa escolha! Você ganhou uma rosa e uma história para chamar de sua!',
            ca: 'Bona elecció! Has guanyat una rosa i una història per fer-la teva!'
        },
        image: FinalBook
    }
]

