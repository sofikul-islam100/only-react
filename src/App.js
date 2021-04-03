import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";

import LeftBar from "./components/LeftBar";
import TopBar from "./components/Header";
// employee components import here
import Addemployee from "./components/employee/Addemployee";
import Viewemployee from "./components/employee/Viewemployee";


class App extends Component {
  render() {
    return (
      <Router>
        <div id="wrapper">
          {/* header */}
          <div className="row">
            <div className="col-md-3">
              <LeftBar />
            </div>
          </div>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              {/* topbar */}
              <TopBar />

              {/* this is react router section */}

              <div className="container-fluid">
                <Switch>
                  <Route path="/ViewEmployee">
                    <Viewemployee />
                  </Route>
                  <Route path="/AddEmployee">
                    <Addemployee />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>

              <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                  <div class="copyright text-center my-auto">
                    <span>Copyright &copy; md sofikul islam sobhan 2020</span>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
