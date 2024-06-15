import { Effect } from 'effect'
import Card from '../components/card'
import CodeMirrorCard from '../components/codeMirror-card'

// // Divide1 :: Number -> Number -> Effect.Effect Number string
// const divide1 = (a: number, b: number): Effect.Effect<number, string> =>
//   b === 0 ? Effect.die('x/0 1') : Effect.succeed(a / b)

// // Divide2 :: Number -> Number -> Effect.Effect Number Error
// const divide2 = (a: number, b: number): Effect.Effect<number, Error> =>
//   b === 0 ? Effect.die(new Error('x/0 2')) : Effect.succeed(a / b)

// // Handle error with Effect.runSyncExit
// const Divide1 = () => {
//   const response = Effect.runSyncExit(divide1(5, 0))
//   console.log(response)
//   if (response._tag === 'Failure') {
//     return <>Error: {response.cause.error}</>
//   }

//   return <>{response.value}</>
// }

// const Divide2 = () => {
//   const response = Effect.runSyncExit(divide2(5, 0))

//   if (response._tag === 'Failure') {
//     // response.cause.error return data of error (cause and ubication)
//     console.log(response.cause)
//     return <>Error: {JSON.stringify(response.cause)}</>
//   }

//   return <>{response.value}</>
// }

const DIVIDE = `const divide = (a: number, b: number): number => a/b`

const VANILLAJS_RETURN_STRING_ERROR = `const getDivision = (a: number, b: number): number | string => {
  const response = divide(a, b)

  return response === Infinity ? 'Error: x/0' : response
}

getDivision(5, 2) // 2.5
getDivision(5, 0) // Error: x/0
`

const VANILLAJS_RETURN_ERROR = `const getDivision = (a: number, b: number): number | Error => {
  const response = divide(a, b)

  return response === Infinity ? new Error('x/0') : response
}
`

const VANILLAJS_RETURN_ERROR_CONSOLE = `Error: x/0
at vanillaJsReturnError (synchronous-effects.tsx?t=1718061411364:43:34)
at synchronous-effects.tsx?t=1718061411364:45:11
`

const divide = (a: number, b: number): number => a / b

const vanillaJsReturnStringError = (a: number, b: number): number | string => {
  const response = divide(a, b)

  return response === Infinity ? 'Error: x/0' : response
}

const vanillaJsReturnError = (a: number, b: number): number | Error => {
  const response = divide(a, b)

  return response === Infinity ? new Error('x/0') : response
}

const s = vanillaJsReturnError(5, 0)
console.log(s)
const SynchronousEffects = () => {
  return (
    <Card className='text-gray-700'>
      <article>
        <header className='mb-5'>
          <header>
            <h1 className='text-center text-lg font-bold text-violet-800'>
              Manejar errores en Javascript
            </h1>
            <p className='text-center'>
              <a
                href='https://effect.website/docs/guides/essentials/creating-effects'
                className='underline text-blue-700 text-sm hover:text-blue-900'
              >
                effect.website/docs
              </a>
            </p>
          </header>
        </header>
        <section>
          <h2 className='text-lg font-bold text-violet-800 mb-5'>
            Effect.sync
          </h2>
          <p>
            La idea de este efecto es encapsular una función, permitiendo
            manejar tanto el resultado correcto como posibles errores
          </p>
          <h3 className='font-bold text-gray-800 my-5'>Ejemplo</h3>
          <p>
            La función dividir, puede resultar en un error si se intenta dividir
            por cero, este error se podría manejar de diferentes formas,
            incluyendo la encapsulasión de la función mediante Effect
          </p>
          <CodeMirrorCard code={DIVIDE} />
          <h4 className='font-bold text-gray-800 my-5'>1. Vanilla js</h4>
          <p>
            Si nos referimos al comportamiento por defecto de Javascript,
            realizar una operación como x/0 nos da como resultado un valor
            Infinity cuyo tipo es NaN, por lo cual, dado el caso que quisieramos
            manejar dicho error para realizar una acción adicional, se podría
            seguir la siguiente aproximación (una de muchas estrategias)
          </p>
          <CodeMirrorCard code={VANILLAJS_RETURN_STRING_ERROR} />
          <p>
            Por otra parte, si no queremos realizar alguna acción adicional y
            solo dejar una trazabilidad del error, se optar por:
          </p>
          <CodeMirrorCard code={VANILLAJS_RETURN_ERROR} />
          <p>
            En este caso, si existe un error se devolvera un tipo object con los
            datos del error. Por ejemplo,si hacemos
            console.log(getDivision(5,0)) obtendriamos
          </p>
          <CodeMirrorCard code={VANILLAJS_RETURN_ERROR_CONSOLE} theme='light' />
        </section>
      </article>
    </Card>
  )
}

export default SynchronousEffects
