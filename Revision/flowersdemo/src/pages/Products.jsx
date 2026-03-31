// products for my app
import { useState } from 'react';
import gerbera from '../assets/images/gerbera.jpg';
import products from '../data/products.json';

const imageMap = {
  'src/assets/images/gerbera.jpg': gerbera,
  'gerbera.jpg': gerbera,
};

const ProductCard = ({ item }) => {
  const [likes, setLikes] = useState(0);

  const increaseLikes = () => setLikes(likes + 1);
  const decreaseLikes = () => setLikes(likes - 1);

  const resolvedImage = imageMap[item.image] || item.image;

  return (
    <article className="card section-card">
      <div className="grid-single">
        <img src={resolvedImage} alt={item.name} className="product-image" />

        <div>
          <h3 className="text-foreground">{item.name}</h3>
          <p className="text-primary font-semibold">${item.price.toFixed(2)}</p>
          <p className="text-muted-foreground">{item.description}</p>
          <p className="text-muted-foreground mb-4"><strong>Likes:</strong> {likes}</p>

          <button className="btn" onClick={increaseLikes}>Like</button>
          <button className="btn" style={{ marginLeft: '0.5rem' }} onClick={decreaseLikes}>Dislike</button>
        </div>
      </div>
    </article>
  );
};

const Products = ({ id, name, description, price, image }) => {
  const hasPropProduct = !!id;

  if (hasPropProduct) {
    const item = { id, name, description, price, image };
    return (
      <section className="bg-background py-16">
        <div className="container">
          <ProductCard item={item} />
        </div>
      </section>
    );
  }

  if (!Array.isArray(products) || products.length === 0) {
    return (
      <section className="bg-background py-16">
        <div className="container">
          <h1 className="title text-foreground">Products</h1>
          <p className="text-muted-foreground">No products found in products.json.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background py-16">
      <div className="container">
        <div className="page-heading">
          <h1 className="title text-foreground">Products</h1>
          <p className="page-subtitle">Check out our latest floral arrangements!</p>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;