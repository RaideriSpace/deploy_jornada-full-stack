
//rafce
import React from 'react'

const App2 = () => {
  return (
    <div>App2</div>
  )
}

export default App2

//Arrow Function
// const App2 = () => <h1> Olá, Mundo! </h1>;

// nomeação de Componente
// PascalCase
// ex: MainSection NewHeader FullBody PrimeiraLetra

// nomeação de Variável
// camelCase
// ex: novaVariavel criarNova novoHeader

// Nomeação de classes em CSS
// Metodolia BEM
// Blocks__Elements--Modifyers
// ex: header__link--small

//Nomeação de classes
//kebab-case
//ex: background-image

// Nomes compostos são separados por -
// ex: item-list__header

// export default, pode importar com qualquer nome e sem chaves ex: import banana from ...
// export "sem default", só pode ser importado com o nome certo e com chaves ex: import { app2 } from ...

// Self closing tag
// <Header> </Hearder>
// <Header />

// Tag vazia " <> </> " se chama Fragment no React e permite passar pela restrição de só devolver um componente no JavaScript sem afetar a consistência.

// Componentes recebem "props"

//{Array(items).fill().map((currentValue, index) => {return <SingleItem key={`${title}-${index}`} />})}

// Spread Obj
// ...

//Componentes são re-renderizados quando:
// - Uma variável de estado usada por este componente é atualizada; 
 

// Para transformar em variável de estado, usar o Hook → useState