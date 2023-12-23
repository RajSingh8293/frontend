import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Helmet from '../components/Helmet/Helmet'
import '../Styles/AddProduct.css'
import { db, storage } from '../firebaseConfig'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const [loading, setLoading] = useState(false)
  const [enterTitle, setEnterTitle] = useState('')
  const [enterDescription, setEnterDescription] = useState('')
  const [enterCategory, setEnterCategory] = useState('')
  const [enterPrice, setEnterPrice] = useState('')
  const [enterProductImage, setEnterProductImage] = useState(null)
  const navigate = useNavigate()

  const addProduct = async (e) => {
    e.preventDefault()
    // const product = {
    //   title: enterTitle,
    //   description: enterDescription,
    //   category: enterCategory,
    //   price: enterPrice,
    //   image: enterProductImage,
    // }
    // console.log(product)

    // Add Product to firebase database
    try {
      const docCellection = collection(db, 'products')
      // const uploadTask = uploadBytesResumable(
      //   ref(storage, `productImage/${Date.now() + enterProductImage.name}`),
      //   enterProductImage,
      //   )
      const imgStorage = ref(
        storage,
        `productImage/${Date.now() + enterProductImage.name}`,
      )

      const uploadTask = uploadBytesResumable(imgStorage, enterProductImage)

      uploadTask.on(
        () => {
          toast.error('Image not uploaded')
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docCellection, {
              productName: enterTitle,
              description: enterDescription,
              category: enterCategory,
              price: enterPrice,
              image: downloadURL,
            })
            // await addDoc(docCellection, product)
          })
        },
      )

      toast.success('Add product successfull')
      navigate('/dashboard/all-products')
      // console.log(addProduct)
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <Helmet title="addproduct">
      <section className="add_products py-3 d-flex ">
        <Container className="">
          <Row className="add_product_row">
            <h3 className="pb-2 ">Add Product</h3>
            <Col lg="12">
              {' '}
              <Form className="addproduct_form" onSubmit={addProduct}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="T-Shirt"
                    value={enterTitle}
                    onChange={(e) => setEnterTitle(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description...."
                    value={enterDescription}
                    onChange={(e) => setEnterDescription(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Https//:image/dow/heys.jpg"
                    // value={image}
                    onChange={(e) => setEnterProductImage(e.target.files[0])}
                  />
                </Form.Group>
                <div className="d-flex justify-content-between align-items-center">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="$1000"
                      value={enterPrice}
                      onChange={(e) => setEnterPrice(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      className="mb-3"
                      value={enterCategory}
                      onChange={(e) => setEnterCategory(e.target.value)}
                    >
                      <option>Select category</option>
                      <option value="men's clothing">Men's</option>
                      <option value="women's clothing">Women's</option>
                      <option value="jewelery">Jewelery</option>
                      <option value="electronics">Electronics</option>
                    </Form.Select>
                  </Form.Group>
                </div>

                <Button variant="primary" type="submit">
                  Add Product
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AddProduct
