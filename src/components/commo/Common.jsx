import React from 'react'
import Container from 'react-bootstrap/Container'
import '../../Styles/CommonStyle.css'

const Common = ({ title }) => {
  return (
    <section className="common_section w-100">
      <Container className="common_container">
        <h1 className="common_heading">{title}</h1>
      </Container>
    </section>
  )
}

export default Common
