import React, { useState } from "react";
import request from "../../utils/request";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () => {
    request({
      url: "user/v1/auth/login",
      method: "post",
      data: {
        email,
        password,
      },
    })
      .then((data) => {
        localStorage.setItem("userData", JSON.stringify(data));
        window.location.href = "/admin/events";
      })
      .catch((err) => toast.error("Error : " + err.message));
  };

  return (
    <>
      <section className="login-page">
        <div className="content">
          <div className="row d-flex align-items-center ">
            <div className="col-md-6">
              <Card className="card-user">
                <div className="d-flex align-items-center justify-content-center"></div>
                <CardHeader className="d-flex justify-content-center">
                  <CardTitle tag="h5">Login Here</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                      <Label for="email" className="mr-sm-2">
                        Email
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                      <Label for="password" className="mr-sm-2">
                        Password
                      </Label>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </FormGroup>
                    <Button onClick={() => login()}> Submit</Button>
                  </Form>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-6">
              <h1 className="welcome-text">Welcome to Demo</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
