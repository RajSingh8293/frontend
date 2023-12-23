import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Helmet from '../Helmet/Helmet'
import Common from '../commo/Common'
import { Button, Col, Row } from 'react-bootstrap'
import '../../Styles/Checkout.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Checkout() {
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  return (
    <Helmet title="checkout">
      <Common title="checkout" />
      <section className="py-4">
        <Container>
          <Row>
            <Col lg={8} sm={12}>
              <h3 className="pb-2 text-center">Fill information</h3>
              <Form className="checkout_form">
                <Form.Group className="mb-3">
                  <input
                    type="text"
                    className="input_field w-100"
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <input
                    type="email"
                    className="input_field w-100"
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <input
                    type="number"
                    className="input_field w-100"
                    placeholder="Enter your phone"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <input
                    type="number"
                    className="input_field w-100"
                    placeholder="Address"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <input
                    type="text"
                    className="input_field w-100"
                    placeholder="City"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <input
                    type="text"
                    className="input_field w-100"
                    placeholder="Country"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <input
                    type="text"
                    className="input_field w-100"
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <input
                    type="text"
                    className="input_field w-100"
                    placeholder="Enter your name"
                  />
                </Form.Group>

                <Button className="btn">
                  <Link to="/shop">Submit</Link>
                </Button>
              </Form>
            </Col>

            <Col lg={4} md={12} className="py-5">
              <div className="subTotal-container ">
                <div className="subtotal_cart">
                  <h3>Subtotal : </h3>
                  <h5>Rs. {totalAmount} </h5>
                </div>
                <div className="subtotal_cart">
                  <h3>Total Qty : </h3>
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
                    <Link to="/shop">Place an order</Link>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout
