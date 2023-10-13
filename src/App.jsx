import Hero from "./Hero"
import Demo from "./Demo"
import "./App.css"
const App = () => {
  return (
    <main>
      <div className="main">
      <div className="gradient"></div>
      </div>
      <div className="app">
        <Hero/>
        <Demo/>
      </div>
    </main>
  )
}

export default App
