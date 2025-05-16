// Métodos de Montagem

// constructor(props): Inicializa estado e bind de métodos.
// static getDerivedStateFromProps(props,state): Atualiza estado com base em props antes de render.
// render(): Define a saída JSX do componente.
// componentDidMount(): Executa após componente montar no DOM.

// Métodos de Atualização

// static getDerivedStateFromProps(props,state): Atualiza estado com base em props antes de render.
// shouldComponentUpdate(nextProps,nextState): Controla se componente deve rerenderizar.
// render(): Define a saída JSX atualizada do componente.
// getSnapshotBeforeUpdate(prevProps,prevState): Captura informações antes da atualização.
// componentDidUpdate(prevProps,prevState,snapshot): Executa após atualização do DOM.

// Métodos de Desmontagem

// componentWillUnmount(): Executa antes de desmontar componente.

// Métodos de Tratamento de Erros

// static getDerivedStateFromError(error): Atualiza estado em resposta a erros em filhos.
// componentDidCatch(error,info): Captura e trata erros em filhos.

// Outros Métodos

// forceUpdate(callback): Força rerenderização, ignorando shouldComponentUpdate.

// Observações

// .Contexto: Métodos para gerenciar ciclo de vida em componentes de classe.
// .Uso: Controla montagem, atualização, desmontagem e erros.