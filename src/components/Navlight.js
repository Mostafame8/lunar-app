import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LogoDark from '../lunar-logo-light.svg';
import './Navlight.css';

export class Navlight extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className='py-2 navb'>
            <Col sm={4} className='nav-img'>
              <div className='text-start'>
                <NavLink to='/'>
                  <img
                    src={LogoDark}
                    className='img-fluid'
                    style={{ height: 40, width: 170 }}
                    id='logo-img'
                  ></img>
                </NavLink>
              </div>
            </Col>
            <Col sm={4} className='nav-list-col'>
              <div className='text-center items-container'>
                <ul className='nav-list'>
                  <li>
                    <NavLink to='/pricing' activeClassName='nav-active'>
                      Pricing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/dashboard' activeClassName='nav-active'>
                      Dashboard
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
        <hr />
      </div>
    );
  }
}

export default Navlight;
