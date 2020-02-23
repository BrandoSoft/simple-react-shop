import React from 'react'
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym ejst teoria strun",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit veritatis error, commodi maiores qui ab adipisci atque nobis voluptatem sequi, necessitatibus cum cupiditate expedita amet! Dolorum a saepe aperiam!"
    },
    {
        id: 2,
        title: "Inna teoria strun",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit veritatis error, commodi maiores qui ab adipisci atque nobis voluptatem sequi, necessitatibus cum cupiditate expedita amet! Dolorum a saepe aperiam!"
    },
    {
        id: 3,
        title: "Paradoks fermiego",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit veritatis error, commodi maiores qui ab adipisci atque nobis voluptatem sequi, necessitatibus cum cupiditate expedita amet! Dolorum a saepe aperiam!"
    },
    {
        id: 4,
        title: "Ciemna strona i ciemna energiaa",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit veritatis error, commodi maiores qui ab adipisci atque nobis voluptatem sequi, necessitatibus cum cupiditate expedita amet! Dolorum a saepe aperiam!"
    },
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))

    return (
        <div className="Home">
            {artList}
        </div>
    );
}

export default HomePage;