import React from "react";
import {
  Row,
  Col,
  CardBody,
  Card,
  Container,
  Label,
  Form,
  FormFeedback,
  Alert,
  Input,
} from "reactstrap";

// import images
import logoEmot from "../../assets/images/emotLogo.png";

//Link
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">Welcome Back !</h5>
                    <p className="text-white-50">Sign in to continue to CRM.</p>
                    <div className="logo logo-admin">
                      <img src={logoEmot} height="24" alt="logo" />
                    </div>
                  </div>
                </div>

                <CardBody className="p-4">
                  <div className="p-3">
                    <Form className="mt-4" action="#">
                      <div className="mb-3">
                        <Label className="form-label" htmlFor="username">
                          Username
                        </Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter Username"
                          type="email"
                          id="username"
                        />
                      </div>

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="userpassword">
                          Password
                        </Label>
                        <Input
                          name="password"
                          type="password"
                          className="form-control"
                          placeholder="Enter Password"
                        />
                      </div>

                      <div className="mb-3 row">
                        <div className="col-sm-6">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlInline"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlInline"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-6 text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                          </button>
                        </div>
                      </div>

                      <div className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                        </div>
                      </div>

                      <div className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <Link to="/forgetpassword"><i className="mdi mdi-lock"></i> Forgot your password?</Link>
                        </div>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account ?{" "}
                  <Link to='/register' className="fw-medium text-primary">
                    {" "}
                    Signup now{" "}
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

export default Login;
