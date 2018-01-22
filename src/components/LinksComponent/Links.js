import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class Links extends Component {
  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={6}>
              <Button className="link-button" bsStyle="primary">LinkedIn</Button>
            </Col>
            <Col xs={4-4} md={4-4}>
              <Button className="link-button" bsStyle="primary">Github</Button>
            </Col>
          </Row>
        </Grid>
      );
    }
  }
export default Links;
