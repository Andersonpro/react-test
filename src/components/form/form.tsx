import Cabecalho from "../cabecalho/cabecalho";

function Form() {
  const dados = [
    'Nome Completo',
    'Data de Nascimento',
    'CPF',
    'Nacionalidade'
  ];
  return (
    <div>
      <Cabecalho elemento='teste' />
      <form action="">
      {dados.map(elemento => (
        <div>
          <label htmlFor="">{elemento}</label>
          <input type="text" />
        </div>
      ))}
      <input type="submit" />
    </form>
    </div>
  )
}

export default Form;