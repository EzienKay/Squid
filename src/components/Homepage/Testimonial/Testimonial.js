import Carousel from 'react-bootstrap/Carousel';
// import CarouselImage from './Testimages/CarouselImage.png';
import "./Testimonial.css"

const Testimonial = () => {
  return (
    <section className='section' id='testimonial' >
        <Carousel.Caption className="caption" >                        
            <h2 className="testimonial-h">Testimonial</h2>
            <span className="devider"></span>
            <p className="testimonial-p" >our mission is to deliver exceptional products and services and an outstanding customer experience. But don't just take our word for it. Listen to what our valued customers have to say about their experiences with us</p>
        </Carousel.Caption> 

        <Carousel>
            <Carousel.Item>                 
                   
                <div className="text001" >
                    <div id="wrap" class="img-wrap">
                            <img className='img-carousel' src="https://picsum.photos/id/823/720" width="360" height="360" alt=""/>
                    </div>
                </div>
                    <Carousel.Caption className="caption" >
                        <i class="fa fa-quote-right" style={{fontSize:"40px", color:"#fc6421"}}></i>
                        <p>I couldn't be happier with the service I received from Squid. Their team went above and beyond to meet my needs and deliver top-notch results. I highly recommend them!" - Chuks Adams</p>
                        <h4>CEO ( Grodins Group )</h4>
                    </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
                <div className="text001" >
                    <div id="wrap" class="img-wrap">
                            <img className='img-carousel' src="https://picsum.photos/id/823/720" width="360" height="360" alt=""/>
                    </div>
                </div>
                    <Carousel.Caption className="caption" >
                        <i class="fa fa-quote-right" style={{fontSize:"40px", color:"#fc6421"}}></i>
                        <p>What sets Squid apart is their dedication to customer satisfaction. I've been a loyal customer for years and have never been disappointed." - Bolanle Kazeem</p>
                        <h4>CFO ( Clark&Clients )</h4>
                    </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item >
                <div className="text001" >
                    <div id="wrap" class="img-wrap">
                            <img className='img-carousel' src="https://picsum.photos/id/823/720" width="360" height="360" alt=""/>
                    </div>
                </div>
                    <Carousel.Caption className="caption" >
                        <i class="fa fa-quote-right" style={{fontSize:"40px", color:"#fc6421"}}></i>
                        <p>I was hesitant at first, but Their innovative approach and commitment to seamless transactions make them a top choice in the industry." - Kelly Smith</p>
                        <h4>COO ( McField )</h4>
                    </Carousel.Caption>
            </Carousel.Item>
    </Carousel>        
    </section>
  )
}

export default Testimonial