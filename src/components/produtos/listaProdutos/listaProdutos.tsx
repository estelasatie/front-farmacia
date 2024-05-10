
import React, { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/service';
import CardProduto from '../cardProdutos/cardProdutos';
import { toastAlerta } from '../../../utils/toastAlerta';

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  let navigate = useNavigate();

  async function buscarProdutos() {
    try {
      await buscar('/produtos', setProdutos);
    } catch (error: any) {
      if (error.toString().includes('404')) {
        toastAlerta('Página não encontrada!', 'info')
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  return (
    <>
      {produtos.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} post={produto} />
        ))}
      </div>
    </>
  );
}

export default ListaProdutos;
