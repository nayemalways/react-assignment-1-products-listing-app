/* eslint-disable react/prop-types */
 

const Product = ({products:{ title, price, description, image, rating} }) => {
  
  return (
      <article className="product">
      <img src={image} alt={title} />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className="product__price">Price: ${price}</p>
        <p className="product__rating">Rating: {rating.rate}</p>
        <p className="product__desc">Description: {description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;