import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Styles/Dashboard.css'
import useGetData from '../custom-hooks/useGetData'

const Dashboard = () => {
  const { datas: products } = useGetData('products')
  const { datas: users } = useGetData('users')
  // console.log(products)
  return (
    <section className="py-3 dashboard">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="top_box sale_box">
              <h4>Total Sales</h4>
              <span>$78990</span>
            </div>
          </Col>
          <Col lg={3}>
            <div className="top_box order_box">
              <h4>Orders</h4>
              <span>789</span>
            </div>
          </Col>
          <Col lg={3}>
            <div className="top_box product_box">
              <h4>Total Products</h4>
              <span>{products.length}</span>
            </div>
          </Col>
          <Col lg={3}>
            <div className="top_box user_box">
              <h4>Total Users</h4>
              <span>{users.length}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Dashboard
