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
  // Alert,
  Input,
} from "reactstrap";

// import images
import logoEmot from "../../assets/images/emotLogo.png";

//formik and yup
import { useFormik } from "formik";
import * as yup from "yup";

// redux
import { useDispatch } from "react-redux";
import { storeToken } from "../../store/auth/auth-slice";


//React Router
import { Link, useNavigate } from "react-router-dom";

//axios
import axios from "../../helpers/api_helper";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const loginSchema = yup.object({
    email: yup
      .string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email address"
      )
      .required("Please enter your email"),
    password: yup.string().min(6).required("please enter your password"),
  });

  const validation = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginSchema,

    onSubmit: (values) => {
      console.log(values);

      const getAuth = async () => {
        try {
          const res = await axios.post("/token/obtain", values);

          if(res.status === 200){
            console.log('login sucessful')
            dispatch(storeToken(res.data.token));
            navigate("/dashboard")
          } 
        } catch (error) {
          console.log(error)
        }
      };
      getAuth();
    },
  });

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-2">
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
                    <Form
                      className="mt-4"
                      action="#"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      <div className="mb-3">
                        <Label className="form-label" htmlFor="email">
                          Username
                        </Label>
                        <Input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter Username"
                          id="email"
                          value={validation.email}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">
                            {validation.errors.email}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="password">
                          Password
                        </Label>
                        <Input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Enter Password"
                          id="password"
                          value={validation.password}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.password &&
                            validation.errors.password
                              ? true
                              : false
                          }
                        />
                        {validation.touched.password &&
                        validation.errors.password ? (
                          <FormFeedback type="invalid">
                            {validation.errors.password}
                          </FormFeedback>
                        ) : null}
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
                        <div className="col-12 mt-4"></div>
                      </div>

                      <div className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <Link to="/forgetpassword">
                            <i className="mdi mdi-lock"></i> Forgot your
                            password?
                          </Link>
                        </div>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account ?{" "}
                  <Link to="/register" className="fw-medium text-primary">
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
