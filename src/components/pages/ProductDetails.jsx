import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { cartActions } from '../store/cartSlice'
import { toast } from 'react-toastify'
import ProductCard from '../ProductCard/ProductCard'
import '../../Styles/ProductDetails.css'
import { db } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import useGetData from '../../custom-hooks/useGetData'

const ProductDetails = () => {
  const [product, setProduct] = useState({})

  const dispatch = useDispatch()
  const { id } = useParams()
  const [dataById, setDataById] = useState([])
  // const [data, setData] = useState([])
  // const { image, category, price, description } = dataById
  const { image, category, price, description } = product
  const [reviwes, setReviwes] = useState(3)
  const [tab, setTab] = useState('desc')
  const { datas: products } = useGetData('products')

  // fetch data by id and get data single product data
  // const getDataById = async () => {
  //   const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  //   const result = await res.json()
  //   // console.log(result)
  //   setDataById(result)
  // }

  const docRef = doc(db, 'products', id)
  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setProduct(docSnap.data())
      } else {
        console.log('No Product')
      }
    }
    getProduct()
  }, [])

  // get data for related  data
  // const getData = async () => {
  //   const res = await fetch(`https://fakestoreapi.com/products`)
  //   const result = await res.json()
  //   // console.log(result)
  //   setData(result)
  //   setValue = ''
  // }

  //  add to cart
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image,
        price,
        description,
      }),
    )
    toast.success('Product added successfully')
  }

  // related products
  // const relatedProducts = dataById.filter(
  //   (item) => item.dataById.category === dataById.category,
  // )
  // const relatedProducts = data.filter(
  //   (curItem) => curItem.category === category,
  // )
  // console.log(relatedProducts)

  const relatedProducts = products.filter(
    (curItem) => curItem.category === category,
  )
  console.log(relatedProducts)

  useEffect(() => {
    // getDataById()
    // getData()
    window.scroll(0, 0)
  }, [id])
  return (
    <section className="py-5 min-h-80">
      <Container>
        <Row>
          <Col lg={6} className="px-5">
            <div>
              <img style={{ height: '300px' }} src={image} alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <h1 className="text-uppercase">{category}</h1>
              <h2>Rs.{price}</h2>
              <p>{/* <span>{rating}</span> */}</p>
              <p>{description}</p>

              <div className="btns d-flex gap-3">
                <Button type="button" className="" onClick={addToCart}>
                  Add To Cart
                </Button>

                <Link to="/shop">
                  <Button variant="danger">Shopping more...</Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <section className="pt-4">
        <Container>
          <div className="d-flex gap-4 py-2 revDesc">
            <h4
              className={`${tab === 'desc' ? 'active_tab' : ''}`}
              onClick={() => setTab('desc')}
            >
              Discription
            </h4>
            <h4
              className={`${tab === 'rev' ? 'active_tab' : ''}`}
              onClick={() => setTab('rev')}
            >
              Rewies ({reviwes})
            </h4>
          </div>
          <Row>
            <Col>
              {tab === 'desc' ? (
                <div className="discription">
                  {description}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  fuga voluptates numquam non, ipsam ipsum tempore totam
                  accusamus.
                </div>
              ) : (
                <div className="reviews">
                  <p>Create a form for reviews for user</p>
                </div>
              )}
            </Col>
          </Row>

          <Row>
            <div className="related-products pt-4">
              <h3 className="pb-2">You might like this : </h3>
              <div className="ralated-items d-flex flex-wrap gap-3">
                {/* <ProductCard item={relatedProducts} /> */}
                {relatedProducts.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default ProductDetails
