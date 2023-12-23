import Carousel from 'react-bootstrap/Carousel'

function Hero() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item className="relative">
        <img
          className="d-block w-100"
          style={{ height: '500px' }}
          src="https://t3.ftcdn.net/jpg/02/71/77/56/360_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="absolute top-1">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '500px' }}
          src="https://st4.depositphotos.com/4678277/40811/i/450/depositphotos_408110334-stock-photo-full-length-body-size-view.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '500px' }}
          src="https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_1280.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Hero
