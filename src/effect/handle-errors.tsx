import Card from '../components/card'

const HandleErrors = () => {
  return (
    <Card className='text-gray-700'>
      <article>
        <header className='mb-5'>
          <header>
            <h1 className='text-center text-lg font-bold text-violet-800'>
              Errores en Javascript
            </h1>
            <p className='text-center'>
              <a
                href='https://javascript.info/try-catch'
                className='underline text-blue-700 text-sm hover:text-blue-900'
              >
                javascript.info/try-catch
              </a>
            </p>
          </header>
        </header>
        <section>
          <h2 className='text-lg font-bold text-violet-800 mb-5'>
            Formas de manejar errores
          </h2>
          <p>
            La idea de este efecto es encapsular una función, permitiendo
            manejar tanto el resultado correcto como posibles errores
          </p>
          <h3 className='font-bold text-gray-800 my-5'>Ejemplo</h3>
        </section>
      </article>
    </Card>
  )
}

export default HandleErrors
