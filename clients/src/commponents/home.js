import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getEvents} from '../redux/action/eventsAction'
import {Card,Carousel} from 'react-bootstrap'
import carouselImage from '../image/carouselnightjpg.jpg'
import carouselHopage from '../image/carouselHopage.webp'
import forest from '../image/forest.jpg'
import { BiWinkSmile } from "react-icons/bi";


function Home() {

  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  },[])

  const events = useSelector(state=> state.EventReducer.event.find)
  return (
    <div>
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carouselImage}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>You want freedom, just enjoy us</h3>
      <p> Welcome to Home </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carouselHopage}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>All what you want,what you need is here </h3>
      <p>Freedom,Fun,Nature just by only one click so don't hesitate to be one of us and book your seat</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={forest}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>We try to be the best and do our best</h3>
      <p>this why we here <BiWinkSmile/></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{events?.map(event=> 
                <div>{event.eventName}</div>
      )}</Card.Title>
    <Card.Title> {events?.map(event=> 
                <div>{event.startDate}</div>
      )}
      </Card.Title>
    <Card.Title> {events?.map(event=> 
                <div>{event.charges}</div>
      )}
      </Card.Title>
    <Card.Title> {events?.map(event=> 
                <div>{event.plant}</div>
      )}
      </Card.Title>
    <Card.Title> {events?.map(event=> 
                <div>{event.endDate}</div>
      )}
      </Card.Title>
   
  </Card.Body>
</Card>

      

     
     
     
     
    </div>
  )
}

export default Home