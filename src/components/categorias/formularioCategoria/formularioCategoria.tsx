
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/categoria';
import { atualizar, buscar, cadastrar } from '../../../services/service';
import { toastAlerta } from '../../../utils/toastAlerta';

function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(categoria))
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria)

        toastAlerta('Tema atualizado com sucesso', 'sucesso')
        retornar()

      } catch (error: any) {
        if (error.toString().includes('404')) {
          toastAlerta('página não encontrada!', 'info')
        
        } else {
          toastAlerta('Erro ao atualizar o Tema', 'erro')
        }

      }

    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria)

        toastAlerta('Tema cadastrado com sucesso', 'sucesso')

      } catch (error: any) {
        if (error.toString().includes('404')) {
          toastAlerta('página não encontrada!', 'info')
        } else {
          toastAlerta('Erro ao cadastrado a categoria', 'erro')
        }
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name='descricao'
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-red-400 hover:bg-red-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioCategoria;
