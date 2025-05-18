import React from 'react';
import './Card.css';
import { FaEnvelope, FaPhoneAlt , FaGlobe, FaMapMarkerAlt, FaBuilding, FaUser } from 'react-icons/fa';

const Card = ({ name, email, phone, website, address, companyname }) => {
  return (
    <div className="card">
      <h3><FaUser /> {name}</h3>
      <p><FaPhoneAlt /> {phone}</p>
      <p><FaEnvelope /> {email}</p>
      <p><FaGlobe />  {website}</p>
      <p><FaMapMarkerAlt /> {address}</p>
      <p><FaBuilding />  {companyname}</p>
    </div>
  );
};

export default Card;
