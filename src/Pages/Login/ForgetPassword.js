import React from "react";

import {
  Row,
  Col,
  CardBody,
  Card,
  Container,
  Label,
  Form,
  // FormFeedback,
  // Alert,
  Input,
} from "reactstrap";

// import images
import logoEmot from "../../assets/images/emotLogo.png";

//Link
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20 p-2">
                      Forget Password
                    </h5>
                    <Link to="/index" className="logo logo-admin">
                      <img src={logoEmot} height="24" alt="logo" />
                    </Link>
                  </div>
                </div>
                <CardBody className="p-4">
                  <Form className="mt-4">
                    <div className="mb-3">
                      <Label className="form-label" htmlor="useremail">
                        Email
                      </Label>
                      <Input
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                      />
                    </div>

                    <div className="row  mb-0">
                      <div className="col-12 text-end">
                        <button
                          className="btn btn-primary w-md waves-effect waves-light"
                          type="submit"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Remember It ?{" "}
                  <Link to="/" className="fw-medium text-primary">
                    {" "}
                    Sign In here{" "}
                  </Link>{" "}
                </p>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ForgetPassword;
