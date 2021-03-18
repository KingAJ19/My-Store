import React from 'react';
import Rating from '../components/Rating';
import data from '../data';

export default function ProductScreen(props){
    const product = data.products.find((x) => x._id === props.match.params.id);
    if(!product){
        return(
           <div>
            <br/>
            <br/>
            <br/>
            <center>
                <h2><b>Product Not Found</b> ❌</h2>
            </center>
           </div>
        )
    }
    return(
        <div>
            <div className="row">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating}  numReviews={product.numReviews}></Rating>
                        </li>
                        <li>
                            Price: R{product.price}
                        </li>
                        <li>
                            Description:
                            <p><i>{product.description}</i></p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">R{product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>{product.countInStock > 0 ? (<span className="success">In Stock</span>)
                                    : (
                                    <span className="error">Unavailable</span> )
                                    }
                                </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}