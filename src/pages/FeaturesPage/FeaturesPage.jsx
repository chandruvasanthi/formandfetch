import React from 'react';
import './FeaturesPage.css';

const FeaturesPage = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Key Features</h2>
        <ul className="features-list">
          <li>Dynamic data fetching from JSONPlaceholder API</li>
          <li>User-friendly contact form with validation</li>
          <li>Responsive layout for all devices</li>
          <li>Reusable React components for scalability</li>
          <li>Modern UI with clean design and hover effects</li>
          <li>Smooth navigation using React Router</li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturesPage;
