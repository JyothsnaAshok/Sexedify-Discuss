import React from "react";
import "./App.css";
import { Home } from "./components/home";
import { Post } from "./components/post";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppHeader } from "./components/header";

export function App() {
  return (
    <>
      <div className="App">
         
          <BrowserRouter>
          <AppHeader />
            <Switch>
              <Route exact path="/post/:id" component={Post} />
              <Route exact path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
     
    </>
  );
}
