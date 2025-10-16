import './App.css'
import Header from './components/Header'
import VisualizationCanvasCard from './components/VisualizationCanvasCard'
import ControlsPanel from './components/ControlsPanel'

function App() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Header />
      <VisualizationCanvasCard />
      <ControlsPanel />
    </div>
  )
}

export default App
