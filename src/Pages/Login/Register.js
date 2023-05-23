import React, { useState } from "react";
import {
  Row,
  Col,
  CardBody,
  Card,
  Container,
  Label,
  Form,
  Alert,
  Input,
  FormFeedback,
} from "reactstrap";

// import Select from "react-select";


// redux

import { useDispatch } from "react-redux";

// import images
import logoEmot from "../../assets/images/emotLogo.png";

//formik and yup
import { useFormik } from "formik";
import * as yup from "yup";

//Link
import { Link, useNavigate } from "react-router-dom";

//dropdown data
import countryData from "../../common/data/countrydata.json";

//axios
import axios from "../../helpers/api_helper";

const Register = () => {
  const [cities, setCities] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStateChange = (e) => {
    const stateName = e.target.value;
    const getCities = countryData.states.find(
      (state) => state.name === stateName
    ).cities;
    setCities(getCities);
    setDisabled(false);
  };

  const registerSchema = yup.object({
    firstName: yup.string().required("please enter vendor's first name"),
    lastName: yup.string().required("please enter vendor's last name"),
    companyName: yup.string().required("please enter vendor's company name"),
    email: yup
      .string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email address"
      )
      .required("Please enter vendor's email"),
    contact: yup
      .string()
      .matches(/^[6-9]\d{9}$/gi, "Invalid contact number")
      .required("please enter vendor's contact"),
    pan: yup
      .string()
      .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/gm, "Enter a valid PAN number"),
    gst: yup
      .string()
      .matches(
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
        "Enter a valid GST number"
      ),
    city: yup.string().required("please select a city"),
    state: yup.string().required("please select a state"),
    password: yup.string().min(6).required("please enter a password"),
    confirmPassword: yup
      .string()
      .min(6)
      .required("please confirm password")
      .oneOf([yup.ref("password"), null], "Password must match"),
  });

  const validation = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      contact: "",
      pan: "",
      gst: "",
      city: "",
      state: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: registerSchema,

    onSubmit: (values) => {
      console.log(values);

      const postVendorData = async () => {
        try {
          const res = await axios.post("/register.php", values);

          // const d = '{"result": "200","token":"96e00422f7c7e38a7ecfb5c04c260021"}'

          console.log(res)

          res.data.replace("\n","")
          console.log(res.data)
          // const r = JSON.parse(res.data)

        
          console.log(r);

          // const data = res.json();



          // console.log(data)


          // const fakeToken = "ABCD"

          if(res.status === 200){
            console.log('yes')
            // navigate('/dashboard')
            // dispatch(fakeToken)
          }
        } catch (error) {
          console.log(error);
        }
      };

      postVendorData();
    },
  });

  return (
    <React.Fragment>
      <div className="account-pages my-2 pt-sm-2 ">
        <Alert
          color="success"
          style={{ marginTop: "13px" }}
          className="mt-1 w-25"
        >
          Register User Successful
        </Alert>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">
                      Register a Vendor
                    </h5>
                    <p className="text-white-50">Get your CRM account now.</p>
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
                        <Label className="form-label" htmlFor="firstName">
                          First Name *
                        </Label>
                        <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="form-control"
                          placeholder="Enter first name"
                          value={validation.firstName}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.firstName &&
                            validation.errors.firstName
                              ? true
                              : false
                          }
                        />
                        {validation.touched.firstName &&
                        validation.errors.firstName ? (
                          <FormFeedback type="invalid">
                            {validation.errors.firstName}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="lastName">
                          Last Name *
                        </Label>
                        <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="form-control"
                          placeholder="Enter last name"
                          value={validation.lastName}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.lastName &&
                            validation.errors.lastName
                              ? true
                              : false
                          }
                        />
                        {validation.touched.lastName &&
                        validation.errors.lastName ? (
                          <FormFeedback type="invalid">
                            {validation.errors.lastName}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="companyName">
                          Company Name *
                        </Label>
                        <Input
                          type="text"
                          name="companyName"
                          id="companyName"
                          className="form-control"
                          placeholder="Enter company name"
                          value={validation.companyName}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.companyName &&
                            validation.errors.companyName
                              ? true
                              : false
                          }
                        />
                        {validation.touched.companyName &&
                        validation.errors.companyName ? (
                          <FormFeedback type="invalid">
                            {validation.errors.companyName}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="email">
                          Email id *
                        </Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter Email"
                          type="email"
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
                        <Label className="form-label" htmlFor="contact">
                          Contact *
                        </Label>
                        <Input
                          name="contact"
                          className="form-control"
                          placeholder="Enter Contact"
                          type="text"
                          id="contact"
                          value={validation.contact}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.contact &&
                            validation.errors.contact
                              ? true
                              : false
                          }
                        />
                        {validation.touched.contact &&
                        validation.errors.contact ? (
                          <FormFeedback type="invalid">
                            {validation.errors.contact}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="pan">
                          PAN
                        </Label>
                        <Input
                          type="text"
                          name="pan"
                          id="pan"
                          className="form-control"
                          placeholder="Enter Pan Number"
                          value={validation.pan}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.pan && validation.errors.pan
                              ? true
                              : false
                          }
                        />
                        {validation.touched.pan && validation.errors.pan ? (
                          <FormFeedback type="invalid">
                            {validation.errors.pan}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="gst">
                          GST
                        </Label>
                        <Input
                          type="text"
                          name="gst"
                          id="gst"
                          className="form-control"
                          placeholder="Enter GST Number"
                          value={validation.gst}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.gst && validation.errors.gst
                              ? true
                              : false
                          }
                        />
                        {validation.touched.gst && validation.errors.gst ? (
                          <FormFeedback type="invalid">
                            {validation.errors.gst}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="state">
                          State *
                        </Label>
                        <Input
                          type="select"
                          name="state"
                          id="state"
                          className="form-control"
                          placeholder="Enter Contact"
                          value={validation.state}
                          onChange={(event) => {
                            validation.handleChange(event);
                            handleStateChange(event);
                          }}
                          // onChange={handleStateChange}
                          defaultValue={"de"}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.state && validation.errors.state
                              ? true
                              : false
                          }
                        >
                          <option value={"de"} disabled="disabled">
                            -- Choose State --
                          </option>
                          {countryData.states.map((getState, index) => (
                            <option value={getState.name} key={index}>
                              {getState.name}
                            </option>
                          ))}
                        </Input>
                        {validation.touched.state && validation.errors.state ? (
                          <FormFeedback type="invalid">
                            {validation.errors.state}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="city">
                          City *
                        </Label>
                        <Input
                          type="select"
                          name="city"
                          id="city"
                          className="form-control"
                          placeholder="Enter Contact"
                          value={validation.city}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          defaultValue={"de"}
                          invalid={
                            validation.touched.city && validation.errors.city
                              ? true
                              : false
                          }
                          disabled={disabled}
                        >
                          <option value={"de"} disabled="disabled">
                            -- Choose City --
                          </option>
                          {cities.map((getCity, index) => (
                            <option value={getCity.name} key={index}>
                              {getCity.name}
                            </option>
                          ))}
                        </Input>
                        {validation.touched.city && validation.errors.city ? (
                          <FormFeedback type="invalid">
                            {validation.errors.city}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="password">
                          Password
                        </Label>
                        <Input
                          name="password"
                          type="password"
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

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="confirmPassword">
                          Confirm Password
                        </Label>
                        <Input
                          name="confirmPassword"
                          type="password"
                          id="confirmPassword"
                          className="form-control"
                          placeholder="Confirm Password"
                          value={validation.password}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.confirmPassword &&
                            validation.errors.confirmPassword
                              ? true
                              : false
                          }
                        />
                        {validation.touched.confirmPassword &&
                        validation.errors.confirmPassword ? (
                          <FormFeedback type="invalid">
                            {validation.errors.confirmPassword}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3 row">
                        <div className="col-12 text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light w-100"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                      </div>

                      <div className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <p className="mb-0">
                            By registering you agree to the Veltrix{" "}
                            <Link to="#" className="text-primary">
                              Terms of Use
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account ?{" "}
                  <Link to="/" className="fw-medium text-primary">
                    {" "}
                    Login
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

Register.propTypes = {};

export default Register;
