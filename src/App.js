import React, { Component } from "react";
import "./App.css";
import { Button, Container, Row, Col, Form, Image } from "react-bootstrap";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import "./components/inputs-form/InputForm.component";
import InputForm from "./components/inputs-form/InputForm.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    let clname = ""
    this.state.width >= 500 ? clname = "vertcen w-50" : clname = "vertcen";
    return (
      <div className="login">
        <Container>
          <Row>
            <Col className={clname}>
              <Image src={require("./rabbit.png")} style={{ height: "300px" }} fluid/>
              <Form className="mt-3 ">
                <InputForm type="email" placeholder="user" icon={faUser} />
                <InputForm  type="password" placeholder="Password"  icon={faKey}/>

                <Button className="w-100" type="submit"
                  style={{
                    backgroundColor: "#D65DB1",
                    borderColor: "#ffffff"
                  }}
                >
                  Log In
                </Button>
                <Button
                  className="w-100 mt-2"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#D65DB1",
                    color: "#D65DB1	"
                  }}
                >
                  Sign Up
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
