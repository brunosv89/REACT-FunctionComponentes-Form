import React from "react";

const ValidacoesCadastro = React.createContext();
//ao usar useContext, troca-se a propriedade da function, por uma variavel que vai receber o contexto
//porém, é preciso criar um Provider(provedor) que receberá os valores do contexto e passará para os componentes que estiverem dentro dele

export default ValidacoesCadastro;