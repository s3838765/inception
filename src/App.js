import './App.css'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Links from './components/Links/Links'

function App() {
  const hue = Math.floor(Math.random() * 360)
  return (
    <div>
      <Header hue={hue} />
      <Projects hue={hue} />
      <Links />
    </div>
  )
}

export default App
