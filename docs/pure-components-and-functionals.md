Pure Component and Funtional Component
======================================

PureComponent
-------------

tiene el método shouldComponentUpdate ya asignado (por defecto),
si a este componente no se le actualizan las propiedades,
no tenemos que validar a mano con shouldComponentUpdate,
PureComponent lo hace por nosotros, es decir;
si recibe nuevas propiedades pero son las que ya teniamos, no se re-renderiza.


import React, { PureComponent } from 'react'

class ExamplePureComponent extends PureComponent {

  render() {
    return ( 
      // JSX 
    )
  }

}

Componente Funcional
--------------------

Es una función la cual solo retorna el JSX de nuestro componente (renderiza UI),
es mas sencillo, mas fácil de probar y este componente no tiene ciclo de vida.

function ExampleFunctionAL(props) {
    return (
      // JSX
    )
}

export {
  ExamplePureComponent,
  ExampleFunctionAL
};