import React from 'react'
import { Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../Styles/AdminNavbar.css'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosSettings, IoMdNotifications } from 'react-icons/io'
import userAuth from '../custom-hooks/userAuth'

const admin_links = [
  {
    path: '/dashboard',
    display: 'Dashboard',
  },

  {
    path: '/dashboard/all-products',
    display: 'All-Products',
  },
  {
    path: '/dashboard/orders',
    display: 'Orders',
  },
  {
    path: '/dashboard/users',
    display: 'Users',
  },
  {
    path: '/dashboard/add-product',
    display: 'Add-Product',
  },
]
const AdminNavbar = () => {
  const { currentUser } = userAuth()
  return (
    <>
      <section>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
            <Form.Group
              className="search_box"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                className="input_box"
                type="email"
                placeholder="Search..."
              />
            </Form.Group>

            <Nav className="mr-auto gap-4 right-nav">
              <NavLink className="" to="#">
                <IoMdNotifications className="admin_nav_icon" />
              </NavLink>
              <NavLink className="" to="#">
                <IoIosSettings className="admin_nav_icon" />
              </NavLink>
              {currentUser ? (
                <NavLink className="admin_user" to="#">
                  <img src={currentUser && currentUser.photoURL} alt="" />
                </NavLink>
              ) : (
                <NavLink className="" to="#">
                  <FaUserCircle className="admin_nav_icon" />
                </NavLink>
              )}
            </Nav>
          </Container>
        </Navbar>
      </section>
      {/* main_admin nav bar  */}
      <section className="admin_nav">
        <Container>
          <Row>
            <Col>
              <div className="admin_nav_links ">
                <div className="nav_links">
                  {admin_links.map((link) => (
                    <NavLink to={link.path}>{link.display}</NavLink>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AdminNavbar
