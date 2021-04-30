import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import ShippingAddressScreen from './ShippingAddressScreen';

export default function PaymentMethodScreen(props){
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;
    if(!shippingAddress.address){
        props.history.push('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('Paypal');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    }
     
    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Payment Method</h1>
                </div>
                <div>
                    <div>
                        <label htmlFor="paypal">PayPal</label>
                        <input type="radio" id="paypal" value="PayPal" name="paymentMethod" required checked onChange={(e) => setPaymentMethod(e.target.value)}></input>
                        
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="stripe">Stripe</label>
                        <input type="radio" id="stripe" value="Stripe" name="paymentMethod" required onChange={(e) => setPaymentMethod(e.target.value)}></input>
                        
                    </div>
                </div>
                <div>
                    <button className="primary" type="submit">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    )
}