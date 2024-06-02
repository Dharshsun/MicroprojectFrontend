import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
function AdminDashboard() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mb-4" data-testId="dashboard">Dashboard</h1>
        </Col>
      </Row>
      <div className='dashboard'>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title><h1>Users</h1></Card.Title>
                <Card.Text>
                  Manage users and their Requests.
                </Card.Text>
                <Button variant="primary"><Link to="/UserRequests" style={{ textDecoration: 'none', color: 'white' }}>Go to User Requests</Link></Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title><h1>Tax Plans</h1></Card.Title>
                <Card.Text>
                  Manage Tax Regimes and their details.
                </Card.Text>
                <Button variant="primary"><Link to="/TaxPlans" style={{ textDecoration: 'none', color: 'white' }}>Add Tax Plans</Link></Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title><h1>Users</h1></Card.Title>
                <Card.Text>
                  View users summary of logins
                </Card.Text>
                <Button variant="primary"><Link to="/TaxUsers" style={{ textDecoration: 'none', color: 'white' }}>Go to Users</Link></Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AdminDashboard;
