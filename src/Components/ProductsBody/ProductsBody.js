import React from 'react';


const ProductsBody = ({item}) =>(
  <div>
    <div className="gallery">
    <h1>{item.Title}</h1>
    <img className="gallery_image" src= {item.image} alt={item.alt}/>
    <h2>{item.Price}</h2>
    <p>{item.Description}</p>
    <button className="buy">Add to Cart</button>
    </div>
  </div>

)

export default ProductsBody;