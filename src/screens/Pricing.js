import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Developer from '../components/Developer';
import Vision from '../components/Vision';
import Explorer from '../components/Explorer';
import Navlight from '../components/Navlight';
import { Link, NavLink } from 'react-router-dom';
import './Pricing.css';

export class Pricing extends Component {
  state = {
    isActiveb1: true,
    isActiveb2: false,
    isActiveb3: false,
  };
  b1HandleClick = () => {
    this.setState({
      isActiveb1: true,
      isActiveb2: false,
      isActiveb3: false,
    });
  };
  b2HandleClick = () => {
    this.setState({
      isActiveb1: false,
      isActiveb2: true,
      isActiveb3: false,
    });
  };
  b3HandleClick = () => {
    this.setState({
      isActiveb1: false,
      isActiveb2: false,
      isActiveb3: true,
    });
  };
  render() {
    const { isActiveb1, isActiveb2, isActiveb3 } = this.state;
    return (
      <Container>
        <Navlight />
        <Row>
          <Col className='my-5 header'>
            <h1>Pricing</h1>
            <p>
              The preconfigured packages offer everything needed to get started
              quickly.
              <br /> Don’t see what you’re looking for? Visit our{' '}
              <a href='#'>sensors and components store </a>
              or <a href='#'>contact us</a>.
            </p>
          </Col>
        </Row>
        <Row className='row-buttons'>
          <Col>
            <button
              className={isActiveb1 ? 'button-active' : ''}
              onClick={this.b1HandleClick}
            >
              <i class='fas fa-sort-down fa-2x'></i>Developer Package
            </button>
          </Col>
          <Col>
            <button
              className={isActiveb2 ? 'button-active' : ''}
              onClick={this.b2HandleClick}
            >
              <i class='fas fa-sort-down fa-2x'></i>Explorer Package
            </button>
          </Col>
          <Col>
            <button
              className={isActiveb3 ? 'button-active' : ''}
              onClick={this.b3HandleClick}
            >
              <i class='fas fa-sort-down fa-2x'></i>Vision Package
            </button>
          </Col>
        </Row>
        {isActiveb1 ? <Developer /> : ''}
        {isActiveb2 ? <Explorer /> : ''}
        {isActiveb3 ? <Vision /> : ''}
      </Container>
    );
  }
}

export default Pricing;
