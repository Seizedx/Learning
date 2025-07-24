import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
// import TestImage from './Components/ImageComponent';
// import ConstructorState from './Components/ConstructorState';
// import StyleSheetUsage from './Components/StyleSheetList';
// import DynamicAndStaticSizing from './Components/DynamicAndStaticSizing';
// import FlexBoxAndAlignments from './Components/FlexBoxAndAlignments';
// import TextInputTest from './Components/TextInput';
// import Buttons from './Components/Buttons';
// import FortuneCookieApp from './Components/Applications/FortuneCookieApp'
// import Cronometer from './Components/Applications/Cronometer1';
// import Cronometer from './Components/Applications/Cronometer';
// import ScrollView from './Components/ScrollView';
// import FlatListExample from './Components/FlatList';
// import ItemDivide from './Components/ItemDivide/Example1';
// import PickerExample from './Components/PickerExample';
// import SliderExample from './Components/SliderExample';
// import SwitchExample from './Components/SwitchExample';
// import ChallengeApp from './Components/Applications/ChallengeApp';
// import InstaExample from './Components/Applications/InstaExample';
// import AsyncStorageExample from './Components/AsyncStorageExample';
// import ModalExample from './Components/ModalExample';
import ChallengeApp2 from './Components/Applications/ChallengeApp2';


export class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor:"#828282", height: '100%', width:'100%', padding:0, margin:0, maxHeight: '100%', maxWidth: '100%'}}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#818181"
        hidden={false}
        animated={true}
        translucent={false}
      />

        {/* <TestImage largura={100} altura={100} nome={'testName'} ChamandoComponentComPropsDiretamente/> */}

        {/* <ConstructorState UsandoConstructorParaStatesEBind />         */}

        {/* <StyleSheetUsage UsandoGrupoDeEstilos/> */}

        {/* <DynamicAndStaticSizing AlterandoTamanhoDosChildrenNaTela /> */}

        {/* <FlexBoxAndAlignments UtilizandoFuncoesDoFlexBox/> */}

        {/* <TextInputTest UtilizandoEReaproveitandoValorDeInput /> */}

        {/* <Buttons UtilizandoFuncaoOnPressDeBotaoECriandoFunction/> */}

        {/* <FortuneCookieApp AplicacaoDeBiscoitoDaSorte/> */}

        {/* <Cronometer AplicacaoDeUmCronometro/> */}

        {/* <Cronometer AplicacaoDeUmCronometro/> */}

        {/* <ScrollView TestandoScrollView /> */}

        {/* <FlatListExample RenderCondicional /> */}

        {/* <ItemDivide SeparandoItensEmArquivosDiferentes /> */}

        {/* <PickerExample SeletorComOpções /> */}

        {/* <SliderExample SliderComOpções /> */}

        {/* <SwitchExample SeletorONOFFComOpções /> */}

        {/* <ChallengeApp AplicacaoParaTestarFunções /> */}

        {/* <InstaExample ExemploDeCriaçãoDeAplicação/> */}

        {/* <AsyncStorageExample TestandoAsyncStorage /> */}

        {/* <ModalExample UtilizandoModal /> */}

        <ChallengeApp2 AplicaçãoParaTestarFunções2/>

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