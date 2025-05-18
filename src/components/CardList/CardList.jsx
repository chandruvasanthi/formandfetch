import React from 'react'
import './CardList.css';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=9')
      .then(res => res.json())
      .then(data => {
        setCards(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className='load'>Loading cards...</p>;

  return (
    <div className="card-list">
      {cards.map(card => (
        <Card key={card.id} 
         name={card.name}
         email={card.email}
         phone={card.phone}
         website={card.website}
         address={`${card.address.city}, ${card.address.zipcode}`} 
         companyname={card.company.name}
        />
      ))}
    </div>
  );
}

export default CardList;