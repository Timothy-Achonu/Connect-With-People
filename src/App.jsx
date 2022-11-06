import "./App.css";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Navlayout from "./components/NavLayout";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import React from 'react';
import Users from './components/Users'
import About from "./components/About";
import Contact from "./components/Contact";


class ErrorBoundary extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
 
  componentDidCatch(error, errorInfo) {
 
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
 
  }
 
  render() {
    if (this.state.errorInfo) {
 
      return (
        <div>
          <h2>An Error Has Occurred</h2>
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [showMenu, setShowMenu] = useState(false);
  function handleShowMenu() {
    setShowMenu(prevMenu => !prevMenu);
  }

  return (
    <ErrorBoundary>
      <div className="App">
        <Routes>
          <Route element={<Navlayout showMenu={handleShowMenu} menu={showMenu}/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />

            <Route path="/users">
              <Route index element={<Users />}/>
              <Route path=":id" element={<UserProfile />} />
            </Route>{" "}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
