import './App.css'
import Home from './components/Home'
import Speakeasy from './components/Speakyeasy'
import Food from './components/Food'
import Rules from './components/Rules'

import Footer from './components/Footer'
function App() {
  return (
    <>
      <main className="w-full min-h-screen">
        <Home />
        <Speakeasy />
        <Food />
        <Rules />
        <Footer />
      </main>
    </>
  )
}

export default App