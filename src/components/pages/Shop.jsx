import React from 'react'
import { useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Helmet from '../Helmet/Helmet'
import Common from '../commo/Common'
import '../../Styles/ShopStyle.css'
import Button from 'react-bootstrap/esm/Button'
import useGetData from '../../custom-hooks/useGetData'

const Shop = () => {
  // data coming from firestore database
  const { datas: result, loading } = useGetData('products')
  // const [data, setData] = useState(result)

  // const [filterData, setFilterData] = useState(result)
  const [data, setData] = useState([])
  // const [filterData, setFilterData] = useState(data)
  const [filterData, setFilterData] = useState([])
  const [sortCategory, setSortCategory] = useState([])
  // console.log(products)

  const getData = async () => {
    // const res = await fetch('https://fakestoreapi.com/products')
    // const result = await res.json()
    // console.log(result)
    setData(result)
    setFilterData(result)
  }

  // serch filter data coming
  const handleSearch = (e) => {
    const filterValue = e.target.value
    setFilterData(
      data.filter((item) => item.category.toLowerCase().includes(filterValue)),
    )
  }

  // with search form
  // const hendleSearching = async (e) => {
  //   e.preventDefault()
  //   const value = e.target.value
  //   const res = await fetch(`https://fakestoreapi.com/products?q=${value}`)
  //   const result = await res.json()
  //   setFilterData(result)
  //   console.log(result)
  // }

  // // all category data coming
  const allCtegory = ['All', ...new Set(data.map((item) => item.category))]

  // /* category filter not working  */

  // const handleFilter = async (e) => {
  //   const value = e.target.value
  //   setSortCategory(value)
  //   // const res = await fetch(`https://fakestoreapi.com/products?q=${value}`)
  //   // const res = await fetch(`https://fakestoreapi.com/products?${value}`)
  //   const res = await fetch(`https://fakestoreapi.com/products?sort=${value}`)
  //   const result = await res.json()
  //   setFilterData(result)
  //   console.log(result)
  // }
  // const filterByCategory = (e) => {
  //   const filterValue = e.target.value
  //   return filterData.filter((item) => item.category === filterValue)
  // }

  useEffect(() => {
    getData()
    // filterByCategory()
    // handleFilter()
  }, [result])

  return (
    <section>
      <Helmet title="Shop">
        <Common title="Products" />
        <Container>
          <Row className="pt-5">
            {/* category filter  */}
            <Col lg={3}>
              <div className="fiter_items">
                {/* <select
                  className="filter_select"
                  onChange={handleFilter}
                > */}
                <select
                  className="filter_select"
                  // onChange={handleFilter}
                  // value={sortCategory}
                >
                  <option>Filter By Category</option>
                  <option value="men's clothing ">Men's</option>
                  <option value="women's clothing ">Women's</option>
                  <option value=" jewelery">Jewelery</option>
                  <option value="electronics">Electronics</option>
                </select>
              </div>
            </Col>
            {/* a-z, lower to higher */}
            <Col lg={3}>
              {' '}
              <div className="fiter_items">
                <select name="" id="" className="filter_select">
                  <option>Filter</option>
                  <option value="a-z ">A-Z</option>
                  <option value="z-a">Z-A</option>
                  <option value=" lower">Price (lower to higher)</option>
                  <option value=" higher">Price (higher to lower)</option>
                </select>
              </div>
            </Col>
            {/* Search filter  */}
            <Col lg={6}>
              <div className="search_filter">
                {/* <form action="" onSubmit={hendleSearching}> */}
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                  // onChange={hendleSearching}
                  // value={value}
                  // onChange={(e) => setValue(e.target.value)}
                />
                {/* </form> */}
              </div>
            </Col>
          </Row>

          <Row className="py-5">
            <Col lg={2} className="mb-2">
              {' '}
              <div className="d-flex flex-wrap gap-2">
                {allCtegory.map((item) => (
                  <Button
                    //  onClick={()=> handleClick(category)}
                    // onClick={() => filterByCategory()}
                    // onClick={() => getCategoryData()}
                    key={item.id}
                    value={item}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </Col>
            <Col lg={10}>
              <div className="d-flex flex-wrap gap-3">
                {filterData.length === 0 ? (
                  <h1>No data</h1>
                ) : (
                  filterData.map((item) => (
                    <ProductCard item={item} key={item.id} />
                  ))
                )}
                {/* <ProductCard item={filterData} /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </Helmet>
    </section>
  )
}

export default Shop
