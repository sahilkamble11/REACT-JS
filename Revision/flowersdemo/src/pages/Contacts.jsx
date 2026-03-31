// contact component for my flowers demo app
import React from 'react';

const Contact = () => {
    return (
        <section className="bg-background py-16">
          <div className="container">
            <div className="page-heading">
              <h1 className="title text-foreground">Contact Us</h1>
              <p className="page-subtitle">Have questions? We’d love to hear from you.</p>
            </div>

            <div className="section-card">
              <p className="text-muted-foreground">
                Email: support@flowersdemo.com<br />
                Phone: +1 (555) 123-4567<br />
                Address: 123 Blossom Lane, Floral City
              </p>
            </div>
          </div>
        </section>
    );
};

export default Contact;