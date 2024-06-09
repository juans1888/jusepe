import { Effect } from 'effect'

// Divide1 :: Number -> Number -> Effect.Effect Number string
const divide1 = (a: number, b: number): Effect.Effect<number, string> =>
  b === 0 ? Effect.fail('Division by zero') : Effect.succeed(a / b)

// Divide2 :: Number -> Number -> Effect.Effect Number Error
const divide2 = (a: number, b: number): Effect.Effect<number, Error> =>
  b === 0
    ? Effect.fail(new Error('Cannot divide by zero'))
    : Effect.succeed(a / b)

// Handle error with Effect.runSyncExit
const Divide1 = () => {
  const response = Effect.runSyncExit(divide1(5, 0))

  if (response._tag === 'Failure') {
    return <>Error: {response.cause.error}</>
  }

  return <>{response.value}</>
}

const Divide2 = () => {
  const response = Effect.runSyncExit(divide2(5, 0))

  if (response._tag === 'Failure') {
    // response.cause.error return data of error (cause and ubication)
    console.log(response.cause.error)
    return <>Error: {JSON.stringify(response.cause)}</>
  }

  return <>{response.value}</>
}

export { Divide1, Divide2 }
