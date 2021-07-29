import React, { Component } from 'react';
import robots from '../robotsData';
import { Container, Row, Col } from 'react-bootstrap';
import Robot2 from '../robot2.svg';
import './Components.css';

export class Developer extends Component {
  render() {
    return (
      <div>
        <Row className='my-3'>
          <Col md={6} className='col-data'>
            <h3>{robots[1].name}</h3>
            <p id='description'>{robots[1].description}</p>
            <p id='price'>
              {robots[1].price},{robots[1].priceSalt}
              <sup> EGP</sup>
            </p>
            <button>Purchase</button>
          </Col>
          <Col md={6} className='col-image'>
            <img className='robot' src={Robot2}></img>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Developer;
