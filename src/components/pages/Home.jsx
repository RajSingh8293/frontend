import React, { useMemo } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Helmet from '../Helmet/Helmet'
import Hero from '../Hero/Hero'
import ProductCard from '../ProductCard/ProductCard'
import Services from '../Services/Services'
import { Link } from 'react-router-dom'
import Clock from '../Clock/Clock'
import useGetData from '../../custom-hooks/useGetData'
import { Col, Row } from 'react-bootstrap'

const Home = () => {
  // {/* data coming from firestore database  */}
  // we have manage using id as well it just data now can see on webapage
  // const { datas: products, loading } = useGetData('products')
  // console.log(products)
  const { datas: products, loading } = useGetData('products')
  console.log(products)

  // const [tranding, setTranding] = useState([])
  // const [newArrival, setNewArrival] = useState([])
  const [bestSeller, setBestSeller] = useState([])
  const [menProduct, setMenProduct] = useState([])
  const [womenProduct, setWomenProduct] = useState([])
  const [jeweleryProduct, setJeweleryProduct] = useState([])
  const [electronicsProduct, setElectronicsProduct] = useState([])

  // console.log(menProduct)

  // const getData = async () => {
  //   // const res = await fetch('https://fakestoreapi.com/products')
  //   // const products = await res.json()
  //   // console.log(products)

  //   const menProductFilter = products.filter(
  //     (item) => item.category === "men's clothing",
  //   )
  //   const jwelleryFilter = products.filter(
  //     (item) => item.category === 'jewelery',
  //   )
  //   const electronicsFilter = products.filter(
  //     (item) => item.category === 'electronics',
  //   )

  //   const womenProductFilter = products.filter(
  //     (item) => item.category === "women's clothing",
  //   )

  //   setElectronicsProduct(electronicsFilter)
  //   setJeweleryProduct(jwelleryFilter)
  //   setMenProduct(menProductFilter)
  //   setWomenProduct(womenProductFilter)
  //   setBestSeller(products.slice(7, 15))
  // }

  useEffect(() => {
    // getData()
    const menProductFilter = products.filter(
      (item) => item.category === "men's clothing",
    )
    const jwelleryFilter = products.filter(
      (item) => item.category === 'jewelery',
    )
    const electronicsFilter = products.filter(
      (item) => item.category === 'electronics',
    )
    const womenProductFilter = products.filter(
      (item) => item.category === "women's clothing",
    )
    setElectronicsProduct(electronicsFilter)
    setJeweleryProduct(jwelleryFilter)
    setMenProduct(menProductFilter)
    setWomenProduct(womenProductFilter)
    // setBestSeller(products.slice(7, 15))
  }, [products])

  return (
    <>
      <Helmet title={'Home'}>
        <div>
          <div className="hero">
            <Hero />
          </div>

          <section className="products">
            {/* men's products  */}
            <section>
              <Container>
                <Row>
                  <Col>
                    {' '}
                    <div className="services">
                      <Services />
                    </div>
                    <div className="products py-3  ">
                      <h1 className="text-black text-center">Men's Products</h1>
                      <div className="gap-3 flex-wrap d-flex ">
                        {loading ? (
                          <h1 className="text-center">Loading...</h1>
                        ) : (
                          menProduct.map((item) => (
                            <ProductCard key={item.id} item={item} />
                          ))
                        )}
                        {/* {products.map((item) => (
                        <ProductCard key={item.id} item={item} />
                      ))} */}
                        {/* <ProductCard items={tranding} /> */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            {/* women's products  */}
            <section>
              <Container>
                <Row>
                  <Col>
                    <div className="products py-3 align-center">
                      <h1 className="text-center">Women Products</h1>
                      <div className="gap-3 flex-wrap d-flex justify-center ">
                        {loading ? (
                          <h1 className="text-center">Loading...</h1>
                        ) : (
                          womenProduct.map((item) => (
                            <ProductCard key={item.id} item={item} />
                          ))
                        )}
                        {/* <ProductCard items={newArrival} /> */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            {/* Jwelery */}
            <section>
              <Container>
                <Row>
                  <Col>
                    {' '}
                    <div className="products py-3 align-center">
                      <h1 className="text-center">Jwelery</h1>
                      <div className="gap-3 flex-wrap d-flex justify-center ">
                        {loading ? (
                          <h1 className="text-center">Loading...</h1>
                        ) : (
                          jeweleryProduct.map((item) => (
                            <ProductCard key={item.id} item={item} />
                          ))
                        )}

                        {/* {electronicsProduct.map((item) => (
                          <ProductCard key={item.id} item={item} />
                        ))} */}
                        {/* <ProductCard items={newArrival} /> */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            {/* Electronics  */}
            <section>
              <Container>
                <Row>
                  <Col>
                    <div className="products py-3">
                      <h1 className="text-center">Electronics</h1>
                      <div className="gap-3 flex-wrap d-flex justify-center  ">
                        {loading ? (
                          <h1 className="text-center">Loading...</h1>
                        ) : (
                          electronicsProduct.map((item) => (
                            <ProductCard key={item.id} item={item} />
                          ))
                        )}

                        {/* <ProductCard items={bestSeller} /> */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            {/* Best seller */}
            <section>
              <Container>
                <Row>
                  <Col>
                    <div className="products py-3">
                      <h1 className="text-center">Best seller</h1>
                      <div className="gap-3 flex-wrap d-flex justify-center  ">
                        {loading ? (
                          <h1 className="text-center">Loading...</h1>
                        ) : (
                          electronicsProduct.map((item) => (
                            <ProductCard key={item.id} item={item} />
                          ))
                        )}
                        {menProduct.map((item) => (
                          <ProductCard key={item.id} item={item} />
                        ))}
                        {/* <ProductCard items={bestSeller} /> */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <section>
              <div className="limited-offers bg-dark w-100 my-4 py-4 text-white">
                <div className="container d-flex justify-content-between items-center">
                  <div className="left">
                    <h1>Limited offers</h1>
                    <h2>Quality T-Shirts</h2>
                    <button className="bg-lightblue-400 p-2 rounded outline-none border-0 hover:bg-green-500">
                      {' '}
                      <Link to="/shop">Visit Shop</Link>
                    </button>
                  </div>

                  <div className="right">
                    <Clock />
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </Helmet>
    </>
  )
}

export default Home
