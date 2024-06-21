// NewPage.js
import React from 'react';
import Card from './Card';
import '../App.css';
import img from '../assets/profilepic.png'
import img2 from '../assets/pie.svg'
const profiles = [
  {
    name: 'John Doe',
    image:  img,
    description: 'Influencer and Creator with a wide reach into multiple markets'
  },
  {
    name: 'Jane Smith',
    image:  img,
    description: 'Product Manager with a passion for creating user-friendly applications.'
  },
  {
    name: 'Alice Johnson',
    image: img,
    description: 'UX/UI Designer who loves crafting beautiful and functional interfaces.'
  },
  {
    name: 'Ben Benedict',
    image: img,
    description: 'Content creator with a wide following'
  }
];

function NewPage() {
  return (
    <>
        <div className="charts">
        
            <img src={img2} alt='pie chart'/>
        </div>
        <div className="new-page">
        {profiles.map((profile, index) => (
            <Card key={index} profile={profile} />
        ))}
        </div>
    </>
  );
}

export default NewPage;