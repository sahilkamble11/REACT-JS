import Products from "../pages/Products";
import product from './products.json';

const List = () => {
    return (
        <div>
            {product.map((item) => (   
                <Products key ={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                 />  
                // <Products key={item.id} {...item} />
            ))}
        </div>
    );
};

export default List;