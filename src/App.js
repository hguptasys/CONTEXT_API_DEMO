import React, { useState } from 'react'
import { GlobalProvider } from "./context/Provider";
import Page_1 from './components/Page_1'
import Page_2 from './components/Page_2'
import Page_3 from './components/Page_3'

import { BrowserRouter as Router , Route, Link ,Switch} from "react-router-dom";

function App() {
 

  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Page_1} />
          <Route exact path="/Page_2" component={Page_2} />
          <Route exact path="/Page_3/:id" component={Page_3} />
        </Switch>
      </Router>
      </GlobalProvider>
  )
}


export default App
