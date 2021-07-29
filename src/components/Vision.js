import React, { Component } from 'react';
import robots from '../robotsData';
import { Container, Row, Col } from 'react-bootstrap';
import VisionRobot from '../vision.svg';
import './Components.css';

export class Developer extends Component {
  render() {
    return (
      <div>
        <Row className='my-3'>
          <Col md={6} className='col-data'>
            <h3>{robots[2].name}</h3>
            <p id='description'> {robots[2].description}</p>
            <p id='price'>
              {robots[2].price},{robots[2].priceSalt}
              <sup> EGP</sup>
            </p>
            <button>Purchase</button>
          </Col>
          <Col md={6} className='col-image'>
            <img className='robot' src={VisionRobot}></img>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Developer;
