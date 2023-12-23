import React from 'react'
import useGetData from '../custom-hooks/useGetData'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebaseConfig'

const Users = () => {
  const { datas: usersData, loading } = useGetData('users')

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, 'users', id))
    // console.log('deleted')
    toast.success('User deleted')
  }

  return (
    <section className="" style={{ minHeight: '80vh' }}>
      <Container>
        <div className="text-center py-3">
          <h1>All Users</h1>
        </div>
        <Row>
          <Col>
            {' '}
            <Table responsive="sm">
              <thead>
                <tr>
                  {/* <th>ID</th> */}
                  <th>User Image</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h1 className="text-center">Loading...</h1>
                ) : (
                  usersData.map((user) => (
                    <tr key={user.id}>
                      <td
                        className="product_img"
                        style={{ height: '50px', overflow: 'hidden' }}
                      >
                        <img
                          style={{ height: '100%' }}
                          src={user.photoURL}
                          alt="image"
                        />
                      </td>
                      <td>{user.displayName}</td>
                      <td>{user.email}</td>
                      <td className="d-flex gap-2 justify-content-cnter">
                        <Button
                          variant="success"
                          onClick={() => updateProduct(user.id)}
                        >
                          Update
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => deleteProduct(user.id)}
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

export default Users
