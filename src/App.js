import React from 'react'
import {connect, Provider} from 'react-redux'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Lander from 'lander'
import Loadable from 'react-loadable';

const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard" */'./Dashboard/index.js'),
  loading: () => (<div></div>)
})

const App = props => {
  if (props.checkingSession) {
    return <div></div>
  }

  return (
    <Provider store={props.store}>
      <Router>
        {props.hasSession
          ? <Dashboard />
          : <Lander />
        }
      </Router>
    </Provider>
  )
}

const mapStateToProps = ({session}) => ({...session})

export default connect(mapStateToProps, {})(App)
