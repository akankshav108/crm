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

const Register = props => {
  return (
    <React.Fragment>
    <div className="home-btn d-none d-sm-block">
      <div className="text-dark">
        <i className="fas fa-home h2"></i>
      </div>
    </div>
    <div className="account-pages my-5 pt-sm-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={4}>
            <Card className="overflow-hidden">
              <div className="bg-primary">
                <div className="text-primary text-center p-4">
                  <h5 className="text-white font-size-20">Free Register</h5>
                  <p className="text-white-50">Get your free CRM account now.</p>
                  <div className="logo logo-admin">
                    <img src={logoEmot} height="24" alt="logo" />
                  </div>
                </div>
              </div>
              <CardBody className="p-4">
                <div className="p-3">
                  {/* {user ? (
                    <Alert color="success" style={{ marginTop: "13px" }} className="mt-5">
                      Register User Successful
                    </Alert>
                  ) : null} */}
                  <Form className="mt-4" 
                //   onSubmit={(e) => {
                //     e.preventDefault();
                //     validation.handleSubmit();
                //     return false;
                //   }}
                    action="#">

                    <div className="mb-3">
                      <Label className="form-label" htmlFor="useremail">Email</Label>
                      <Input
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        type="email"
                        id="useremail"
                        // onChange={validation.handleChange}
                        // onBlur={validation.handleBlur}
                        // value={validation.values.email || ""}
                        // invalid={
                        //   validation.touched.email && validation.errors.email ? true : false
                        // }
                      />
                      {/* {validation.touched.email && validation.errors.email ? (
                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                      ) : null} */}
                    </div>

                    <div className="mb-3">
                      <Label className="form-label" htmlFor="username">Username</Label>
                      <Input
                        name="username"
                        className="form-control"
                        placeholder="Enter Username"
                        type="text"
                        id="username"
                        // onChange={validation.handleChange}
                        // onBlur={validation.handleBlur}
                        // value={validation.values.username || ""}
                        // invalid={
                        //   validation.touched.username && validation.errors.username ? true : false
                        // }
                      />
                      {/* {validation.touched.username && validation.errors.username ? (
                        <FormFeedback type="invalid">{validation.errors.username}</FormFeedback>
                      ) : null} */}
                    </div>

                    <div className="mb-3">
                      <Label className="form-label" htmlFor="userpassword">Password</Label>
                      <Input
                        name="password"
                        // value={validation.values.password || ""}
                        type="password"
                        id="userpassword"
                        className="form-control"
                        placeholder="Enter Password"
                        // onChange={validation.handleChange}
                        // onBlur={validation.handleBlur}
                        // invalid={
                        //   validation.touched.password && validation.errors.password ? true : false
                        // }
                      />
                      {/* {validation.touched.password && validation.errors.password ? (
                        <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                      ) : null} */}
                    </div>

                    <div className="mb-3 row">
                      <div className="col-12 text-end">
                        <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Register</button>
                      </div>
                    </div>

                    <div className="mt-2 mb-0 row">
                      {/* <div className="col-12 mt-4">
                        <p className="mb-0">By registering you agree to the Veltrix <Link to="#" className="text-primary">Terms of Use</Link></p>
                      </div> */}
                    </div>
                  </Form>
                </div>
              </CardBody>
            </Card>
            <div className="mt-5 text-center">
              <p>
                {/* Already have an account ?{" "}
                <Link to="/login" className="fw-medium text-primary">
                  {" "}
                  Login
                </Link>{" "} */}
              </p>
              {/* <p>
                © {new Date().getFullYear()} Veltrix. Crafted with{" "}
                <i className="mdi mdi-heart text-danger" /> by Themesbrand
              </p> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>
  )
}

Register.propTypes = {}

export default Register