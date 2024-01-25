import React, { useRef, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './Home.css'
import video from '../../Assets/Images/project-video.mov';
import logo from '../../Assets/Images/logo-transition.gif'

const Home = () => {

  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);


  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={12}>
            <div className='home_main_container'>
              <div className='logo__transition_container'>
                <img src={logo} alt='logo' />
              </div>
              <div className='video_container'>
                <video
                  className='video_web'
                  src={video}
                  ref={vidRef}
                  muted
                  autoPlay
                  loop
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Home