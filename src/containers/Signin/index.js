import React from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI/Input';


/**
* @author
* @function Signin
**/

const Signin = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                label="Email"
                placeholder="nhập email hoặc username..."
                value=""
                type="email"
                onChange={() => { }}
              />

              <Input
                label="Password"
                placeholder="nhập mật khẩu..."
                value=""
                type="password"
                onChange={() => { }}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>

  )

}

export default Signin