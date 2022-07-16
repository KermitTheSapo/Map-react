//Crie um component de class
//Crie um array de objetos no STATE com pelo menos 6 objetos
//Faça um map do seu state e exiba os dados na tela

import React, { Component } from "react";

export default class nome extends Component {
  state = [
    { nome: "robert", idade: 12 },
    { nome: "Lucas", idade: 34 },
    { nome: "Kermit", idade: 13 },
    { nome: "Cleber", idade: 23 },
    { nome: "Carlos", idade: 63 }
  ];

  render() {
    return (
      <div>
        {this.state.map((item) => (
          <p>
            meu nome é {item.nome} e minha idade é {item.idade}
          </p>
        ))}
      </div>
    );
  }
}
