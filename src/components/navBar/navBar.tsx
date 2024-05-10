import homeLogo from '../../assets/logoHome.png'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  let navigate = useNavigate()

    let navbarComponent

      navbarComponent = (
        <div className='w-full bg-green text-light-cream flex justify-center py-4'>
          
          <div className="container flex justify-between text-lg">
          <img src={homeLogo} alt="" className='' />
            <Link to='/' className='text-4xl font-bold uppercase text-carmim'>Farmácia</Link>
           

            <div className='flex gap-4'>
  
              <Link to='/categorias' className='hover:underline   text-1xl'>Categorias</Link> <h3>|</h3>
              <Link to='/cadastroCategoria' className='hover:underline  text-1xl'>Cadastrar categoria</Link> <h3>|</h3>
              <Link to='/cadastroProduto' className='hover:underline  text-1xl'>Cadastrar produtos</Link><h3>|</h3>
              <Link to='/produtos' className='hover:underline  text-1xl'>produtos</Link>
              
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
