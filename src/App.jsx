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

import Protected from './Protected'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/airdrops" element={<Airdrops />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/identify-nfts" element={<IdentifyNfts />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
