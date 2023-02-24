import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Onboarding from './pages/Onboarding'
import Home from './pages/Home'
import Airdrops from './pages/Airdrops'
import Chat from './pages/Chat'
import Activities from './pages/Activities'
import Wallet from './pages/Wallet'
import IdentifyNfts from './pages/IdentifyNfts'
import CustomerSupport from './pages/CustomerSupport'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PageNotFound from './pages/PageNotFound'
import EmailVerification from './pages/EmailVerification'

import Protected from './Protected'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.auth.user)
  const isAuth = !!user

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Protected isSignedIn={isAuth}>
              <Onboarding />
            </Protected>
          } 
        />
        <Route 
          path="/home" 
          element={
            <Protected isSignedIn={isAuth}>
              <Home />
            </Protected>
          } 
        />
        <Route 
          path="/airdrops" 
          element={
            <Protected isSignedIn={isAuth}>
              <Airdrops />
            </Protected>
          } 
        />
        <Route 
          path="/chat" 
          element={
            <Protected isSignedIn={isAuth}>
              <Chat />
            </Protected>
          } 
        />
        <Route 
          path="/activities" 
          element={
            <Protected isSignedIn={isAuth}>
              <Activities />
            </Protected>
          } 
        />
        <Route 
          path="/wallet" 
          element={
            <Protected isSignedIn={isAuth}>
              <Wallet />
            </Protected>
          } 
        />
        <Route 
          path="/identify-nfts" 
          element={
            <Protected isSignedIn={isAuth}>
              <IdentifyNfts />
            </Protected>
          } 
        />
        <Route 
          path="/customer-support" 
          element={
            <Protected isSignedIn={isAuth}>
              <CustomerSupport />
            </Protected>
          }
        />
        <Route 
          path="/sign-in" 
          element={
            <SignIn />} 
        />
        <Route 
          path="/sign-up" 
          element={
            <SignUp />
          } 
        />
        <Route 
          path="/verify-email" 
          element={
          <EmailVerification />} 
        />

        <Route path="*" 
        element={
        <PageNotFound />} 
      />
      </Routes>
    </Router>
  )
}

export default App
