import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Navlight from '../components/Navlight';
import DeveloperRobot from '../developer.svg';
import Graph from '../graph.svg';
import Data from '../data.svg';
import './Dashboard.css';

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Container className='dash-container'>
          <Navlight />
          <Row claasName='dash-row'>
            <Col md={4}>
              <div className='sidebar'>
                <ul className='sidebar-list'>
                  <li>
                    <a className='list-active'>Dashboard</a>
                  </li>
                  <li>
                    <a>Develop</a>
                  </li>
                  <li>
                    <a>Upgrade</a>
                  </li>
                  <li>
                    <a>Support</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={8}>
              <h3 className='my-4'>Dashboard</h3>
              <Row className='dashboard-box'>
                <Col md={4}>
                  <img className='img-fluid' src={DeveloperRobot}></img>
                </Col>
                <Col md={4}>
                  <h2 className='my-3 mx-3'>Connected</h2>
                  <p className='mx-3'>
                    Model: lander5
                    <br />
                    Serial: l3s5g-d8
                    <br />
                    Duration: 3 hours
                  </p>
                </Col>
              </Row>
              <img id='graph' src={Graph} style={{ display: 'inline' }}></img>
              <img id='data' src={Data} style={{ display: 'inline' }}></img>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
