import React, { Component } from 'react';
import robots from '../robotsData';
import { Container, Row, Col } from 'react-bootstrap';
import DeveloperRobot from '../developer.svg';
import './Components.css';

export class Developer extends Component {
  render() {
    return (
      <div>
        <Row className='my-3'>
          <Col md={6} className='col-data'>
            <h3>{robots[0].name}</h3>
            <p id='description'>{robots[0].description}</p>
            <p id='price'>
              {robots[0].price},{robots[0].priceSalt}
              <sup> EGP</sup>
            </p>
            <button>Purchase</button>
          </Col>
          <Col md={6} className='col-image'>
            <img className='robot' src={DeveloperRobot}></img>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Developer;
