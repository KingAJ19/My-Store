import {React, useEffect} from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';

export default function OrderScreen(props){
    const orderId = props.match.params.id;
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsOrder(orderId));
    }, [dispatch, orderId]);
    return loading? (<LoadingBox></LoadingBox>): error? (<MessageBox variant="danger">{error}</MessageBox>) :  (
        <div>
            <h1>Order {order._id}</h1>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name: </strong> {order.shippingAddress.fullName} <br />
                                    <strong>Address: </strong> {order.shippingAddress.address},
                                    {order.shippingAddress.city}, {' '} {order.shippingAddress.postalCode}, 
                                    {order.shippingAddress.country}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>Method: </strong> {order.paymentMethod}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Ordered Items</h2>
                                <ul>
                        {
                            order.orderItems.map((item) => (
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
                                        <div>R{order.itemsPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Shipping</div>
                                        <div>R{order.shippingPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Tax</div>
                                        <div>R{order.taxPrice}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Total</div>
                                        <strong>
                                        <div>R{order.totalPrice}</div>
                                        </strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    )
}