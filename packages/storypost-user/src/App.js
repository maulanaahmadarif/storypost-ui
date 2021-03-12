import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'

import ScrollToTop from './components/Common/ScrollTop'
// PAGES
import Container from './container/Container'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Container} />
      </Switch>
    </Router>
  );
}

export default App;
