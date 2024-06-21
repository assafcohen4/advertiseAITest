// NewPage.js
import React from 'react';
import Card from './Card';
import '../App.css';
import img from 'C:\\Users\\assaf\\OneDrive\\Desktop\\advertisemarket\\portfolio-app\\src\\assets\\profilepic.png'

const profiles = [
  {
    name: 'John Doe',
    image:  img,
    description: 'Software Engineer with 5 years of experience in web development.'
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
  }
];

function NewPage() {
  return (
    <div className="new-page">
      {profiles.map((profile, index) => (
        <Card key={index} profile={profile} />
      ))}
    </div>
  );
}

export default NewPage;