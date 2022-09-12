import React from 'react'
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {Col} from 'react-bootstrap';

export default function Footer() {
    let year = new Date().getFullYear();
  return (
    <div>
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container className="text-center text-muted">
            <Col lg={12} className="text-center text-light">
                {year}-All rights reserved!!!
            </Col>
        </Container>
      </Navbar>
    </div>
  )
}
