import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LogoLight from '../lunar.svg';
import './Navdark.css';

export class Navdark extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className='py-2'>
            <Col sm={4} className='nav-dark-img'>
              <div className='text-start'>
                <NavLink to='/'>
                  <img
                    src={LogoLight}
                    className='img-fluid'
                    style={{ height: 50, width: 80 }}
                    id='logo-img'
                  ></img>
                </NavLink>
              </div>
            </Col>
            <Col sm={4} className='nav-dark-list-col'>
              <div className='text-center items-container'>
                <ul className='nav-dark-list'>
                  <li>
                    <NavLink
                      to='/pricing'
                      className='mx-4'
                      activeClassName='nav-dark-active'
                    >
                      Pricing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/dashboard'
                      className='mx-4'
                      activeClassName='nav-dark-active'
                    >
                      Dashboard
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navdark;
