import React, { Component } from 'react';
import { ReactComponent as Lunar } from '../lunar.svg';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Navdark from '../components/Navdark';
import Robot from '../robot.svg';
import './Landing.css';

export class Landing2 extends Component {
  render() {
    return (
      <Container fluid className='p-0'>
        <div className='Landing-img'>
          <Navdark />
          <Container className='Landing-container' fluid>
            <Row className='align-items-center'>
              <Col md={6}>
                <div>
                  <p id='header-text'>Lunar Robotics</p>
                  <p id='bold-text'>
                    Boldly go where no <br /> robot has gone before
                  </p>
                  <p id='desc-text'>
                    We build the world best robot development plateforms.
                    <br />
                    Developing autonomous robots has never been easier.
                  </p>
                  <Link to='/pricing' id='explore-button'>
                    Explore our robots
                  </Link>
                  <button id='light-button'>Talk to a human</button>

                  <div>
                    <a href='#' class='arrow-button1'>
                      <i class='fas fa-chevron-left box-left'></i>
                    </a>
                    <a href='#' class='arrow-button2'>
                      <i class='fas fa-chevron-right box-right'></i>
                    </a>
                  </div>
                </div>
              </Col>
              <Col>
                <img className='robot' src={Robot}></img>
              </Col>
            </Row>
          </Container>
          <Container>
            <div>
              <i class='fab fa-youtube fa-2x youtube'></i>
            </div>
            <div>
              <i class='fab fa-facebook-f fa-2x facebook'></i>
            </div>
          </Container>
        </div>
      </Container>
    );
  }
}

export default Landing2;
