import CodeMirrorCard from './components/codeMirror-Card'

// Suggested code may be subject to a license. Learn more: ~LicenseLog:2742628736.
const T = `import { pipe } from 'fp-ts/lib/function

const addOne = (x: number) => x + 1
const double = (x: number) => x * 2
const square = (x: number) => x * x

const concatenatedFunctions = pipe(1, addOne, double, square)
`

function App() {
  return <CodeMirrorCard code={T} />
}

export default App
