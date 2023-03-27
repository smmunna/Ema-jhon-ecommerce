import React from 'react';
import './Products.css';

const Products = (props) => {
    const{name,img,price,seller,ratings}=props.product;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Price: {price}$</h2>
                    <br />
                    <p>
                        Manufacturer: {seller} <br />
                        Ratings: {ratings} stars
                    </p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
