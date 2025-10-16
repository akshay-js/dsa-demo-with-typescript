export default function VisualizationCanvasCard() {
  return (
    <section className="bg-[#374151] p-4 sm:p-6 rounded-xl shadow-xl ring-1 ring-black/10 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[#f3f4f6] font-semibold text-sm sm:text-base">Visualization</h2>
        <span className="text-[10px] sm:text-xs text-[#f3f4f699]">Singly Linked List</span>
      </div>
      <div className="rounded-xl overflow-hidden border border-gray-600/70">
        <div className="h-[300px] bg-[#2b3442] flex items-center justify-center text-gray-300 text-sm">Canvas Placeholder</div>
      </div>
    </section>
  )
}


