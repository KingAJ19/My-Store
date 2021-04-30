import {React, useEffect} from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';

export default function OrderScreen(props){
    const orderId = props.match.params.id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsOrder(orderId));
    }, [dispatch, orderId]);
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name: </strong> {cart.shippingAddress.fullName} <br />
                                    <strong>Address: </strong> {cart.shippingAddress.address},
                                    {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}, 
                                    {cart.shippingAddress.country}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>Method: </strong> {cart.paymentMethod}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Ordered Items</h2>
                                <ul>
                        {
                            cart.cartItems.map((item) => (
                                <li key={item.product}>
                                <div className="row">
                                    <div>
                                        <img src={item.image} alt={item.name} className="small"></img>
                                    </div>
                                    <div className="min-30">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div>
                                        {item.qty} x R{item.price} = R{item.qty * item.price}
                                    </div>
                                </div>
                                </li>
                            ))
                        }
                    </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <h2>Order Summary</h2>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Items</div>
                                        <div>R{cart.itemsPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Shipping</div>
                                        <div>R{cart.shippingPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Tax</div>
                                        <div>R{cart.taxPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Total</div>
                                        <strong>
                                        <div>R{cart.totalPrice}</div>
                                        </strong>
                                    </div>
                                </li>
                                <li>
                                    <button type="submit" className="primary block" onClick={placeOrderHandler}
                                    disabled={cart.cartItems.length === 0}
                                    >Place Order</button>
                                </li>
                                {
                                    loading && <LoadingBox></LoadingBox>
                                }
                                {error && <MessageBox variant="danger">{error}</MessageBox>}
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    )
}