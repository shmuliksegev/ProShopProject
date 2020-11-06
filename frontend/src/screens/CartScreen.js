import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,ListGroup,Image,Form,Button,Card} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import {addToCart} from '../actions/cartActions'
import { productDetailsReducer } from '../reducers/productReducers'
const CartScreen = ({match,location,history}) => {
    const productId = match.params.id
    //search is ?qty=1 by split is return me onlt the 1.
    const qty = location.search ? Number(location.search.split('=')[1]):1 

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId,qty))
        } 
    },[dispatch,productId,qty])


    return (
        <div>
            Cart
        </div>
    )
}

export default CartScreen
