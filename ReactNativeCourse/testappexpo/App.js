import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
// import TestImage from './Components/ImageComponent';
// import ConstructorState from './Components/ConstructorState';
// import StyleSheetUsage from './Components/StyleSheetList';
// import DynamicAndStaticSizing from './Components/DynamicAndStaticSizing';
// import FlexBoxAndAlignments from './Components/FlexBoxAndAlignments';
// import TextInputTest from './Components/TextInput';
// import Buttons from './Components/Buttons';
// import FortuneCookieApp from './Components/FortuneCookieApp'
// import Cronometer from './Components/Cronometer';

export class App extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'darkgrey', height: '100%', width:'100%', padding:0, margin:0}}>
        {/* <TestImage largura={100} altura={100} nome={'testName'} ChamandoComponentComPropsDiretamente/> */}

        {/* <ConstructorState UsandoConstructorParaStatesEBind />         */}

        {/* <StyleSheetUsage UsandoGrupoDeEstilos/> */}

        {/* <DynamicAndStaticSizing AlterandoTamanhoDosChildrenNaTela /> */}

        {/* <FlexBoxAndAlignments UtilizandoFuncoesDoFlexBox/> */}

        {/* <TextInputTest UtilizandoEReaproveitandoValorDeInput /> */}

        {/* <Buttons UtilizandoFuncaoOnPressDeBotaoECriandoFunction/> */}

        {/* <FortuneCookieApp AplicacaoDeBiscoitoDaSorte/> */}

        {/* <Cronometer AplicacaoDeUmCronometro/> */}

      </View>
    )
  }
}

export default App


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////


//////////////////////////// CRIANDO FUNCTION APP (MANEIRA1) /////////////


// export default function App() { // maneira 1
//     return (
//       <View>
//         <Text>Hello React mf 1</Text>
        // <Text>This is the first app</Text>
//       </View>
//     );
// }

//////////////////////////// CRIANDO FUNCTION APP (MANEIRA2) /////////////


// function App() { // maneira 2
//     return (
//       <View>
//         <Text>Hello React mf 2</Text>
        // <Text>This is the first app</Text>
//       </View>
//     );
// }
// export default App;

//////////////////////////// CRIANDO FUNCTION APP (MANEIRA3) /////////////


// class App extends Component { //maneira 3
//     render() {
//         return (
//             <View style={{ backgroundColor: 'grey'}}>
//                 <Text style={{ color:'red', marginTop:40, textAlign:'center', fontSize: 25}}
//                 >Hello React mf 3
//                 </Text>
//                 <Text style={{ color:'blue', marginTop:0, textAlign:'center', fontSize:15}}>
//                   This is an app
//                 </Text>
//             </View>
//     );
//   }
// }
// export default App


//////////////////////////// TESTANDO USO DO IMAGE /////////////////////


// class App extends Component { 
//     render() {
//       let name = 'testName'
//       let img = 'https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg'

//         return (
//             <View style={{ backgroundColor: 'grey'}}>
//                 <Text style={{ color:'red', marginTop:40, textAlign:'center', fontSize: 25}}
//                 >Hello React mf 3
//                 </Text>
//                 <Text style={{ color:'blue', marginTop:0, textAlign:'center', fontSize:15}}>
//                   This is an app
//                 </Text>
//                 <Image ChamandoImagemPeloImage
//                   source={{ uri: img }}
//                   style={{ height: 50, width: 50, alignSelf:'center', justifyself: 'center', borderWidth: 2, borderColor: 'black', borderStyle: 'solid', marginTop: 30}}
//                 />
//                 <Text style={{textAlign:'center', marginTop: 30, fontSize: 10}}>{name}</Text>

//                 <TestImage largura={100} altura={100} nome={'testName'} ChamandoComponentDiretamente/>
//             </View>
//     );
//   }
// }
// export default App