import React, { useEffect } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
// import image from '../assets/jacket.jpg'
import useGetData from '../custom-hooks/useGetData'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { toast } from 'react-toastify'

const AllProducts = () => {
  // useGetData is a function coming from useGetData file and datas is return form that function
  const { datas, loading } = useGetData('products')
  // console.log();
  // const { datas: allproducts } = useGetData('products')
  // console.log(datas)
  // console.log(allproducts)

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, 'products', id))
    // console.log('deleted')
    toast.success('Product deleted')
  }
  const updateProduct = async (id) => {
    await updateDoc(doc(db, 'products', id))
    // console.log('deleted')
    toast.success('Product deleted')
    console.log(id)
  }

  return (
    <section className="" style={{ minHeight: '80vh' }}>
      <Container>
        <Row>
          <h1 className="text-right">Total Products : {datas.length}</h1>
          <Col>
            {' '}
            <Table responsive="sm">
              <thead>
                <tr>
                  {/* <th>ID</th> */}
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {/* {allproducts.map((item) => ( */}
                {loading ? (
                  <h1 className="text-center">Loading...</h1>
                ) : (
                  datas.map((item) => (
                    <tr key={item.id}>
                      {/* <td>{item.id}</td> */}
                      <td
                        className="product_img"
                        style={{ height: '100px', overflow: 'hidden' }}
                      >
                        <img
                          style={{ height: '100%' }}
                          src={item.image}
                          alt="image"
                        />
                      </td>
                      <td>{item.productName}</td>
                      <td>{item.category}</td>
                      <td>${item.price}</td>
                      <td className="d-flex gap-2 justify-content-cnter">
                        <Button
                          variant="success"
                          onClick={() => updateProduct(item.id)}
                        >
                          Update
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => deleteProduct(item.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AllProducts
