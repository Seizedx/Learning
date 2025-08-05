import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
// import TestImage from './Components/Structure/ImageComponent';
// import ConstructorState from './Components/Structure/ConstructorState';
// import StyleSheetUsage from './Components/Structure/StyleSheetList';
// import DynamicAndStaticSizing from './Components/Structure/DynamicAndStaticSizing';
// import FlexBoxAndAlignments from './Components/Structure/FlexBoxAndAlignments';
// import TextInputTest from './Components/Structure/TextInput';
// import Buttons from './Components/Structure/Buttons';
// import FortuneCookieApp from './Components/Applications/FortuneCookie/FortuneCookieApp'
// import Cronometer from './Components/Applications/Cronometer/Cronometer1';
// import Cronometer from './Components/Applications/Cronometer/Cronometer';
// import ScrollView from './Components/Structure/ScrollView';
// import FlatListExample from './Components/Structure/FlatList';
// import ItemDivide from './Components/ItemDivide/Example1';
// import PickerExample from './Components/Structure/PickerExample';
// import SliderExample from './Components/Structure/SliderExample';
// import SwitchExample from './Components/Structure/SwitchExample';
// import ChallengeApp from './Components/Structure/Applications/ChallengeApps/ChallengeApp';
// import InstaExample from './Components/Structure/Applications/ChallengeApps/InstaExample';
// import AsyncStorageExample from './Components/Structure/AsyncStorageExample';
// import ModalExample from './Components/Structure/ModalExample';
// import ChallengeApp2 from './Components/Applications/ChallengeApps/ChallengeApp2';
// import APIUseStateExample from './Components/Hooks/APIUseStateExample';
// import APIUseEffectExample from './Components/Hooks/APIUseEffectExample';
// import APIUseMemoExample from './Components/Hooks/APIUseMemoExample';
// import APIUseRefExample from './Components/Hooks/APIUseRefExample';
// import HTTPRequisition from './Components/Requisitions/HTTPRequisitionExample';
// import CurrencyConversion from './Components/Applications/CurrencyConversion/CurrencyConversion';
// import CEPFinder from './Components/Applications/CEPFinder/CEPFinder';
// import ChallengeApp3 from './Components/Applications/ChallengeApps/ChallengeApp3';
// import FirstStepsAnimation from './Components/Animations/TimingAnimation';
// import SequenceAnimation from './Components/Animations/SequenceAnimation';
// import ParallelAnimation from './Components/Animations/ParallelAnimation';
// import LoopAnimation from './Components/Animations/LoopAnimation';
// import InterpolationInAnimations from './Components/Animations/InterpolationInAnimations';
// import UsingAnimatable from './Components/Animations/UsingAnimatable';
// import VectorIcons from './Components/Icons/VectorIcons';
// import StackNavigation from './Components/Navigation/StackNavigation';
import UsingTabs from './Components/Navigation/UsingTabs';


export class App extends Component {
  render() {
    return (
      <View 
      style={
        { backgroundColor:"#828282", height: '100%', width:'100%', padding:0, margin:0, maxHeight: '100%', maxWidth: '100%'}
      }
      >

      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
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

        {/* <ChallengeApp2 AplicaçãoParaTestarFunções2/> */}

        {/* <APIUseStateExample TestandoHookAPIUseState/> */}

        {/* <APIUseEffectExample TestandoHookAPIUseEffect /> */}

        {/* <APIUseMemoExample TestandoHookAPIUseMemo /> */}

        {/* <APIUseRefExample TestandoHookAPIUseRef /> */}

        {/* <HTTPRequisition ComoUtilizarRequisições />  */}

        {/* <CurrencyConversion MaisUmaAplicaçãoParaTestarAPIRequest /> */}

        {/* <CEPFinder APPCEPFINDERPRACTICE /> */}

        {/* <ChallengeApp3 AplicativoDeContadorDeRestaurante /> */}

        {/* <FirstStepsAnimation UtilizandoAnimations /> */}

        {/* <SequenceAnimation AnimacoesEmSequencia/> */}

        {/* <ParallelAnimation AnimacoesEmParalelo /> */}

        {/* <LoopAnimation AnimaçoesEmLoop  /> */}

        {/* <InterpolationInAnimations AdicionandoModificacoesEmAnimações /> */}

        {/* <UsingAnimatable UtilizandoAnimatable /> */}

        {/* <VectorIcons TestandoIcons /> */}

        {/* <StackNavigation ComecandoAUtilizarNavigation /> */}

        <UsingTabs UtilizandoTabs />

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