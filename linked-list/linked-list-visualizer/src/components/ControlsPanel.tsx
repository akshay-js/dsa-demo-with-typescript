export default function ControlsPanel() {
  return (
    <section className="[background:var(--color-surface)] p-4 sm:p-6 rounded-xl shadow-xl ring-1 ring-black/10">
      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
        <div className="flex-1 min-w-64 w-full">
          <label htmlFor="nodeValue" className="block text-sm font-medium [color:var(--color-text-light)] mb-1">Node Value (Number)</label>
          <input id="nodeValue" type="number" placeholder="e.g. 42" defaultValue={42} className="w-full h-11 px-3 rounded-lg [background:color-mix(in_oklab,var(--color-background)_80%,black)] border border-gray-600 [color:var(--color-text-light)] focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
        </div>
        <div className="flex gap-3 sm:ml-auto shrink-0">
          <button className="appearance-none border-0 focus:outline-none inline-flex items-center justify-center h-11 min-w-28 px-6 transition-all duration-150 shadow-md hover:-translate-y-px hover:shadow-lg active:translate-y-px [background:var(--color-primary)] hover:bg-indigo-600 text-white font-semibold rounded-lg whitespace-nowrap">Insert Head</button>
          <button className="appearance-none border-0 focus:outline-none inline-flex items-center justify-center h-11 min-w-28 px-6 transition-all duration-150 shadow-md hover:-translate-y-px hover:shadow-lg active:translate-y-px [background:var(--color-primary)] hover:bg-indigo-600 text-white font-semibold rounded-lg whitespace-nowrap">Insert Tail</button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-stretch">
        <div className="flex gap-3">
          <button className="appearance-none border-0 focus:outline-none inline-flex items-center justify-center h-11 min-w-28 px-6 transition-all duration-150 shadow-md hover:-translate-y-px hover:shadow-lg active:translate-y-px [background:var(--color-delete)/.8] hover:[background:var(--color-delete)] text-white font-semibold rounded-lg w-full sm:w-auto">Delete Head</button>
          <button className="appearance-none border-0 focus:outline-none inline-flex items-center justify-center h-11 min-w-28 px-6 transition-all duration-150 shadow-md hover:-translate-y-px hover:shadow-lg active:translate-y-px [background:var(--color-delete)/.8] hover:[background:var(--color-delete)] text-white font-semibold rounded-lg w-full sm:w-auto">Delete Tail</button>
        </div>
        <div className="flex-1">
          <button className="appearance-none border-0 focus:outline-none inline-flex items-center justify-center h-11 w-full transition-all duration-150 shadow-md hover:-translate-y-px hover:shadow-lg active:translate-y-px [background:var(--color-highlight)/.8] hover:[background:var(--color-highlight)] text-gray-900 font-semibold rounded-lg">Search for Value</button>
        </div>
      </div>

      <div className="mb-2">
        <button className="appearance-none border-0 focus:outline-none inline-flex items-center justify-center h-11 px-6 transition-all duration-150 shadow-md hover:-translate-y-px hover:shadow-lg active:translate-y-px bg-gray-600 hover:bg-gray-700 [color:var(--color-text-light)] font-semibold rounded-lg w-full">Clear List</button>
      </div>

      <div className="mt-4 p-3 bg-gray-600/50 rounded-lg text-sm [color:var(--color-text-light)] text-center transition-colors duration-300">Ready. Start by inserting a node!</div>
    </section>
  )
}


