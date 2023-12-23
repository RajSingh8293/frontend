import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cartSlice'
import { toast } from 'react-toastify'
import { MdDelete } from 'react-icons/md'

const ProductCard = ({ item }) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        image: item.image,
        price: item.price,
        description: item.description,
      }),
    )
    toast.success('Product added successfully')
  }
  return (
    <>
      <Card style={{ width: '15rem' }}>
        <Card.Img
          variant="top"
          style={{ height: '250px', width: '100%' }}
          className="p-2"
          src={item.image}
        />
        <Card.Body>
          <Card.Title>
            <NavLink to={`/shop/${item.id}`}>{item.category}</NavLink>
          </Card.Title>

          <Card.Text>Rs. {item.price}</Card.Text>
          <Button variant="primary" onClick={addToCart}>
            Add To Cart
          </Button>
          <span>
            <MdDelete />
          </span>
        </Card.Body>
      </Card>
    </>
  )
}

export default ProductCard
