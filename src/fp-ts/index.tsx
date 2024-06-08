import Card from '../components/card'

function FpTsExamples() {
  return (
    <Card className='mt-10 mx-10 p-5'>
      <h1 className='text-center text-xl font-bold mb-5'>
        Ejemplos de como usar Fp-ts
      </h1>
      <p className='italic text-violet-600'>
        Nota: Minúscula función, mayúscula valor
      </p>

      {/* Pipe */}
      <div className='flex flex-col gap-5 mt-5'>
        <div className='flex flex-col'>
          <div className=' flex items-center mb-3'>
            <h2 className='text-xl font-bold'>Pipe:</h2>
            <span className='ml-3'>pipe(A, f, g) → B</span>
          </div>
          <p>
            Se utiliza para componer funciones de manera secuencial. Toma un
            valor inicial y una lista de funciones, y aplica estas funciones
            secuencialmente al valor inicial.
          </p>
        </div>
      </div>

      {/* Flow */}
      <div className='flex flex-col gap-5 mt-5'>
        <div className='flex flex-col'>
          <div className=' flex items-center mb-3'>
            <h2 className='text-xl font-bold'>Flow:</h2>
            <span className='ml-3'>flow(f, g) → h</span>
          </div>
          <p>
            Se utiliza para componer funciones sin un valor inicial. Toma una
            lista de funciones y devuelve una nueva función que es la
            composición de todas las funciones proporcionadas.
          </p>
        </div>
      </div>
    </Card>
  )
}

export default FpTsExamples
