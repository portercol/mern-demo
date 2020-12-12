import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalProvider from './utils/GlobalContext';
import Homepage from './pages/Homepage';
import ViewTodos from './pages/ViewTodos';
import AddTodos from './pages/AddTodos';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/todos' component={ViewTodos} />
            <Route exact path='/todos/new' component={AddTodos} />
          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
