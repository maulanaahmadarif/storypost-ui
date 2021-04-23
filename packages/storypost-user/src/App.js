import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'

import { AuthProvider } from './components/AuthProvider'
import { AppProvider } from './context/AppProvider'
import ScrollToTop from './components/Common/ScrollTop'
// PAGES
import Container from './container/Container'

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route path="/" component={Container} />
          </Switch>
        </Router>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
