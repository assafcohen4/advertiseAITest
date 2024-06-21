import React from 'react';
import '../App.css';

function Card({ profile }) {
  return (
    <div className="card">
      <img src={profile.image} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Card;