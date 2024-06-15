import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { useState } from 'react'

const CodeMirrorCard = ({
  code = '',
  edit = false,
  ...props
}: {
  code?: string
  edit?: boolean
  [key: string]: any
}) => {
  const [stateCode, setStateCode] = useState(code)

  return (
    <CodeMirror
      value={stateCode}
      theme='dark'
      extensions={[javascript({ jsx: true, typescript: true })]}
      onChange={setStateCode}
      readOnly={!edit}
      className='border border-gray-300 m-5 text-sm'
      {...props}
    />
  )
}

export default CodeMirrorCard
