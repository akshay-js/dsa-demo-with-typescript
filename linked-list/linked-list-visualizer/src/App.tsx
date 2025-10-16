import './App.css'
import Header from './components/Header'
import VisualizationCanvasCard from './components/VisualizationCanvasCard'
import ControlsPanel from './components/ControlsPanel'

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-10">
      <Header />
      <VisualizationCanvasCard />
      <ControlsPanel />
    </div>
  )
}

export default App
