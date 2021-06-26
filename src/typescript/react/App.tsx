import React from 'react'
import AppWrapper from '@react/AppWrapper.tsx'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Lounge from '@react/components/Lounge.tsx'
import Navbar from '@react/components/Navbar.tsx'
import Footer from '@react/components/Footer.tsx'


export default class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route component={AppWrapper} path="/" exact />
            <Route component={Lounge} path="/lounge" />
          </Switch>
          <Footer />
        </BrowserRouter>
      );
    }
}