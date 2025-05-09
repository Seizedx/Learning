import React from "react" // importar react

// const PropsTest = props => {  //exemplo de como usar props, precisa adicionar no nome da função em app.js
//     return <h1>Welcome, {props.names}, Your Username is: {props.username}</h1> 
// }


const PropsTest = props => {  //exemplo de como usar CHILDRENprops, precisa adicionar no nome da função em app.js
    return (<div>

        <h1>This is an example of {props.names}: {props.username}</h1>

        {props.children}

    </div>
    )

}


export default PropsTest // tem que exportar o que quiser que apareça