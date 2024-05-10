

import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  let navigate = useNavigate()

    let navbarComponent

      navbarComponent = (
        <div className='w-full bg-red-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia</Link>

            <div className='flex gap-4'>
              <Link to='/produtos' className='hover:underline'>Produtos</Link>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
            </div>
          </div>
        </div>
      )
    

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar
