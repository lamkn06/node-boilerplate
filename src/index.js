import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </HashRouter>
), document.getElementById('root'));