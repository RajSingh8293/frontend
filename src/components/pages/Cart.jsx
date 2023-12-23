import React from 'react'
import Helmet from '../Helmet/Helmet'
import Common from '../commo/Common'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import '../../Styles/Cart.css'
import Button from 'react-bootstrap/esm/Button'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/cartSlice'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
  // const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)

  // can't navigate
  // const handlebar = () => {
  //   const user = JSON.parse(localStorage.getItem('user'))
  //   if (user.user.email) {
  //     return navigate('/checkout')
  //     // console.log(user.user.email)
  //   } else {
  //     return navigate('/login')
  //   }
  // }
  return (
    <Helmet title="Cart">
      <Common title="Cart Items"></Common>
      <section className="py-5 cart-section">
        <Container>
          {cartItems.length === 0 ? (
            <div>
              <h1>No data</h1>
            </div>
          ) : (
            <Row>
              <Col lg={8} md={12} className="py-3 ">
                <div className="p-3 ">
                  <div className="cart-headings d-flex justify-content-between">
                    <h5>Id</h5>
                    <h5>Image</h5>
                    <h5>Price</h5>
                    <h5>Qty</h5>
                    <h5>Delete</h5>
                  </div>
                  {cartItems.map((item) => (
                    <TableData item={item} key={item.id} />
                  ))}
                </div>
              </Col>
              <Col lg={4} md={12}>
                <div className="subTotal-container ">
                  <div className="subtotal_cart">
                    <h3>Sub -Total : </h3>
                    <h5>Rs. {totalAmount} </h5>
                  </div>
                  <div className="subtotal_cart">
                    <h3>Qty : </h3>
                    <h5>{totalQuantity} Items</h5>
                  </div>
                  <div className="subtotal_cart shipping">
                    <h3>Shipping-Fee : </h3>
                    <h5>40 </h5>
                  </div>
                  <div className="subtotal_cart grand_total">
                    <h3>Grand-Total : </h3>
                    <h5> Rs. {totalAmount + 40} </h5>
                  </div>
                  <p>Tax and shipping will caculate in checkout</p>

                  <div className="btns">
                    <Button className="btn">
                      <Link to="/shop">Shop Continue...</Link>
                    </Button>
                    {/* <Button className="btn" onClick={handlebar}>
                      Checkout
                    </Button> */}

                    <Button className="btn">
                      <Link className="btn" to="/checkout">
                        Checkout
                      </Link>
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </Helmet>
  )
}

const TableData = ({ item }) => {
  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
    <>
      <div className="product-details pt-3 ">
        <p className="p-title"> {item.id}</p>
        <div className="p-image">
          <img className="product-img" src={item.image} alt="" />
        </div>
        <p className="p-price">{item.price}</p>
        <p className="p-qty">{item.quantity}</p>
        <Button type="button" onClick={deleteProduct} className="p-btn danger ">
          Delete
        </Button>
      </div>
    </>
  )
}

export default Cart
