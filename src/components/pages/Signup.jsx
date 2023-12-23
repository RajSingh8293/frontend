import { Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Helmet from '../Helmet/Helmet'
// import Common from '../commo/Common'
import { Link, useNavigate } from 'react-router-dom'
import '../../Styles/Login.css'
import { useState } from 'react'

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { setDoc, doc, collection, addDoc } from 'firebase/firestore'

import { auth, db, storage } from '../../firebaseConfig'
import { toast } from 'react-toastify'

function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (username === '' || (email === '') | (password === '')) {
      setLoading(false)
      return toast.error('All fiels are required')
    }

    // const myCollection = collection(db, 'users')
    // const myCollection = collection(db, 'signuppage')
    // // example: 1
    // const data = await addDoc(myCollection, {
    //   username,
    //   email,
    //   password,
    // })
    // navigate('/')

    // example: 2
    // const myDoc = await doc(myCollection)
    // const signupData = await setDoc(myDoc, {
    //   username,
    //   email,
    //   password,
    // })
    // navigate('/')

    // example: 3
    // // const signupData = await setDoc(doc(db, 'users', 'userId1'), {
    // const signupData = await setDoc(doc(db, 'users', 'userId2'), {
    //   username,
    //   email,
    //   password,
    // })
    // navigate('/')
    // console.log(signupData)

    // //  send data in authentication in firebase
    // try {
    //   const data = await createUserWithEmailAndPassword(auth, email, password)
    //   navigate('/')
    //   console.log(data)
    //   // .then((userCredential) => {
    //   //   console.log(userCredential)
    //   // })
    //   // const user = userCredential.user
    // } catch (error) {}

    // send data in database with profile image
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )

      // console.log(user)

      // upload profile image
      const storageRef = ref(storage, `images/${Date.now() + username}`)
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
        (error) => {
          toast.error(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // update user profile
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            })

            // store user data in firebase database
            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            })
          })
        },
      )
      // const user = userCredential.user
      // console.log(user)
      toast.success('Account created')
      setLoading(false)
      const user = userCredential.user
      navigate('/login')
    } catch (error) {
      setLoading(false)
      console.log(error)
      toast.error('Somethong went wrong')
    }

    // send only user data in database
    // try {
    //   const users = await createUserWithEmailAndPassword(auth, email, password)
    //   // console.log(users)
    //   const user = {
    //     username: username,
    //     uid: users.user.uid,
    //     email: users.user.email,
    //   }

    //   const usersCollection = collection(db, 'users')
    //   const addData = await addDoc(usersCollection, user)
    //   setUsername('')
    //   setEmail('')
    //   setPassword('')
    //   setLoading(false)
    //   console.log(addData)
    //   toast.success('Account created successfully')
    //   navigate('/login')
    // } catch (error) {
    //   setLoading(false)
    //   toast.error('Something went wrong')
    // }
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
                <h3 className="pb-2 ">Signup Form</h3>
                <Form className="login_form">
                  <Form.Group className="mb-3">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="input_field w-100"
                      placeholder="Enter your username"
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input_field w-100"
                      placeholder="Enter your email"
                      autoComplete="off"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input_field w-100"
                      autoComplete="off"
                      placeholder="Enter your password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <input
                      type="file"
                      // value={file}
                      onChange={(e) => setFile(e.target.files[0])}
                      className=" w-100"
                      autoComplete="off"
                    />
                  </Form.Group>

                  <div className="pb-2">
                    <span className="text-white ">
                      Already have an account ?
                    </span>
                    <span className=" mx-2">
                      <Link to="/login">login</Link>
                    </span>
                  </div>

                  <Button className="btn" type="submit" onClick={signup}>
                    Signup
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

export default Signup
