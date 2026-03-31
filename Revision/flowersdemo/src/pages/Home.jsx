// home component for the flowers demo app
import React from 'react';

const Home = () => {
  return (
    <section className="bg-background py-16">
      <div className="container">
        <div className="page-heading">
          <h1 className="title text-foreground">Welcome to the Flower Shop!</h1>
          <p className="page-subtitle">Discover our beautiful collection of flowers and arrangements.</p>
        </div>

        <div className="section-card">
          <p className="text-muted-foreground">
            Explore handcrafted bouquets, seasonal collections, and custom designs chosen for every occasion.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
