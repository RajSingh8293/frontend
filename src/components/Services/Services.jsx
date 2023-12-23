import Card from 'react-bootstrap/Card'

function Services() {
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="d-flex gap-2 flex-wrap">
        {['Success', 'Danger', 'Warning', 'Info'].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '17rem' }}
            className="mb-2"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Services
