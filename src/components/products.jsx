/* eslint-disable react/prop-types */
import Product from './product';
 
 
 
 const Products = ({products}) => {

     
     
    return (
        <div>
            <Product products={products} />
        </div>
    );
 };
 
 export default Products;