import React from 'react';
import me from '../assets/me.png';

function Home() {
  return (
    <section className="home-content">
      <div className="image-container">
        <img src={me} alt="Silhouette of me"/>
      </div>
      <div className="text-box">
        <h2>Welcome to My Website</h2>
        <p>This is a bold, Southwest-inspired color theme with an image and text side-by-side.</p>
        <button>Click Me</button>
      </div>
    </section>
  );
}

export default Home;