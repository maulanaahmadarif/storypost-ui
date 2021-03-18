import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'

import { AppProvider } from './context/AppProvider'
import ScrollToTop from './components/Common/ScrollTop'
// PAGES
import Container from './container/Container'

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={Container} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
