// import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'; // importa style
import FunctionTest from './Components/FunctionExample' //importa função
import ClassTest from './Components/ClassComponentExample' //importa class
import ReactCELTest from './Components/ReactCreateElementExample'
import PropsTest from './Components/PropsExample'
import ClassStateTest from './Components/StateExample';

function App() {

  return (
    <div className="App">
      {/* <button>PressMe</button> */}
     
      {/* <FunctionTest id="FunctionTest" testandoFunctionOlharFunctionExampleJSEmComponents/> */}
      
      {/* <ClassTest testandoClassOlharClassComponentExampleJSEmComponents/> */}
      
      {/* <ClassTest name="ClassProps" assimSaoAdicionadasProps/> */}
      
      {/* <ReactCELTest testandoReactCELOlharReactCreateElementExampleJSEmComponents/> */}
     
      {/* <PropsTest names="Props" username="test1" testandoPropsOlharPropsExampleJSEmComponents/> */}
      {/* <PropsTest names="AddProps" username="test2" assimSaoAdicionadasProps/> */}
      {/* <PropsTest names="AddChildrenProps" username="test3" assimSaoAdicionadosChildrenProps> */}
      {/* <p>Just a test with children props</p> */}
      {/* </PropsTest>  */}
      {/* Precisa colocar final em propsChildren */}

    <ClassStateTest />

    </div>

  );
}

export default App;

//////////////////////////// Importante /////////////////////////////////////////////////////////

//fazer o icone funcionar na pagina: dentro da pasta public, em index.html, usar:
// <link rel="icon" href="%PUBLIC_URL%/favicon.ico?v=2" />

//////////////////////////// Comandos de Desenvolvimento (CLI) //////////////////////////////////

// .npx create-react-app nome(minusculo): Cria projeto React com configuração inicial.
// .npm start: Inicia servidor de desenvolvimento.
// .npm build: Gera build otimizada para produção.
// .npm test: Executa testes com Jest.

//////////////////////////// Métodos e Funções do React ///////////////////////////////////

// .createElement(type,props,children): Cria elemento React para renderização.
// .cloneElement(element,props,children): Clona elemento com novas props.
// .createFactory(type): Cria função fábrica para elementos (obsoleto).
// .isValidElement(object): Verifica se objeto é um elemento React válido.
// .Fragment: Agrupa elementos sem nó extra no DOM.
// .StrictMode: Ativa verificações rigorosas no desenvolvimento.
// .Suspense(fallback): Exibe fallback enquanto componentes carregam.
// .lazy(factory): Carrega componente dinamicamente com lazy loading.
// .memo(Component): Memoriza componente, evita rerenderizações.
// .forwardRef((props,ref)=>): Encapsula componente para passar ref.
// .createContext(defaultValue): Cria contexto para compartilhar dados.
// .useImperativeHandle(ref,create,deps): Personaliza ref exposta por forwardRef.

//////////////////////////// Hooks Principais //////////////////////////////////////////////////

// .useState(initial): Gerencia estado em componentes funcionais.
// .useEffect(callback,deps): Executa efeitos colaterais após renderização.
// .useContext(context): Acessa contexto em componentes funcionais.
// .useReducer(reducer,initial): Gerencia estado complexo com reducer.
// .useRef(initial): Cria referência mutável persistente entre renderizações.
// .useMemo(value,deps): Memoriza valor computado, evita recalculo.
// .useCallback(fn,deps): Memoriza função, evita recriação.
// .useLayoutEffect(callback,deps): Executa efeitos antes de pintura no DOM.

//////////////////////////// Sintaxes e Padrões de Props ///////////////////////////////////////

// Props: Passa dados de um componente pai para um filho via atributos.
// Default Props: Define valores padrão para props não fornecidas.
// PropTypes: Valida tipos de props no desenvolvimento (usado com biblioteca prop-types).
// Spread Props: Passa múltiplas props com operador spread (...props).
// Children Props: Passa conteúdo entre tags do componente.
// Destructuring Props: Extrai props diretamente nos parâmetros do componente.
// Forwarded Props: Passa props para componentes filhos via forwardRef.
// Callback Props: Passa funções como props para comunicação filho-pai.

//////////////////////////// Recursos de Estado em Classes ////////////////////////////////////

// this.state: Objeto que armazena estado local do componente.
// this.setState(updater,callback): Atualiza estado e dispara rerenderização.
// constructor(props): Inicializa estado e bind de métodos.
// getDerivedStateFromProps(props,state): Atualiza estado com base em props (estático).
// shouldComponentUpdate(nextProps,nextState): Controla se componente deve rerenderizar.
// getSnapshotBeforeUpdate(prevProps,prevState): Captura informações antes da atualização.

//////////////////////////// Métodos do Ciclo de Vida Relacionados ////////////////////////////

// componentDidMount(): Executa após componente montar no DOM.
// componentDidUpdate(prevProps,prevState,snapshot): Executa após atualização.
// componentWillUnmount(): Executa antes de desmontar componente.