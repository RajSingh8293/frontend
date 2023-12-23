import { Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Helmet from '../Helmet/Helmet'
// import Common from '../commo/Common'
import { Link, useNavigate } from 'react-router-dom'
import '../../Styles/Login.css'
import { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // const useCollectionRef = collection(db, 'loginpage')
  const loginHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (email === '' || password === '') {
      setLoading(false)
      return toast.error('All fields are required')
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      )

      const user = userCredential.user

      console.log(user)
      setLoading(false)
      localStorage.setItem('user', JSON.stringify(user))
      toast.success('Successfully logged in')
      navigate('/checkout')
    } catch (error) {
      setLoading(false)
      toast.error('Invalid credential')
    }

    // login send data in localStorage
    // try {
    //   const user = await signInWithEmailAndPassword(auth, email, password)
    //   console.log(user)
    //   setLoading(false)
    //   toast.success('Successfully logged in')
    //   localStorage.setItem('user', JSON.stringify(user))
    //   // navigate('/checkout')
    //   window.location('/checkout')
    // } catch (error) {
    //   setLoading(false)
    //   console.log(error)
    //   toast.error('Something went wrong')
    // }
    // console.log(email, password)
  }

  return (
    <Helmet title="login">
      {/* <Common title="login" /> */}
      <section className=" py-4">
        <Container>
          <Row>
            {loading ? (
              <Col>
                <div className="loader">
                  <h1>Loading...</h1>
                </div>
              </Col>
            ) : (
              <Col className="login_container">
                <h3 className="pb-2 ">Login Form</h3>
                <Form className="login_form" onSubmit={loginHandler}>
                  <Form.Group className="mb-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input_field w-100"
                      placeholder="Enter your email"
                      autoComplete="on"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input_field w-100"
                      placeholder="Enter your password"
                      autoComplete="on"
                    />
                  </Form.Group>

                  <div className="pb-2">
                    <span className="text-white ">Don't have an account ?</span>
                    <span className=" mx-2">
                      <Link to="/signup">Create an account</Link>
                    </span>
                  </div>

                  <Button className="btn btn-primary" type="submit">
                    Login
                  </Button>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login
