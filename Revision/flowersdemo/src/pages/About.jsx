// about component for my flowers demo app

import React from 'react';

const About = () => {
  return (
    <section className="bg-background py-16">
      <div className="container">
        <div className="page-heading">
          <h1 className="title text-foreground">About Our Founder</h1>
          <p className="page-subtitle">Meet the creative force behind our floral brand.</p>
        </div>

        <article className="card section-card">
          <div className="bg-gradient-hero p-6">
            <h2 className="text-2xl text-foreground">Ravi Tambade</h2>
            <p className="text-muted-foreground">
              With 25+ years of experience in flower design and customer care, Ravi built this shop as a celebration of beauty.
            </p>
            <p className="text-primary mt-4">"I don't know it all, but I will figure it out."</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;