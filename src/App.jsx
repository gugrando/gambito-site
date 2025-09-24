import './App.css'
import Home from './components/Home'
import Speakeasy from './components/Speakyeasy'
import Food from './components/Food'

import Footer from './components/Footer'
function App() {
  return (
    <>
      <main className="w-full min-h-screen">
        <Home />
        <Speakeasy />
        <Food />
        <Footer />
      </main>
    </>
  )
}

export default App
