import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";

export function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro)
  
  
  const [erros, setErros] = useState({senha: {valido:true, texto: ""}})    //[estadoAtual, estadoFuturo] = useState(dadoPadrão-configAtual)
  function validarCampos(evento) {
    const {id, value} = evento.target;
    const novoEstado = {...erros};
    novoEstado[id] = validacoes[id](value);
    setErros(novoEstado);
  }

  function possoEnviar(){
    for(let campo in erros){
      if(!erros[campo].valido){
        return false;
      }
    } return true;
  }

  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();
        if (possoEnviar()){
          aoEnviar({email, senha});
        }
      }}
    >
      <TextField
        value={email}
        onChange={(evento) => {
          setEmail(evento.target.value);
        }}
        id="email"
        label="E-mail"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        //required
        />
      <TextField
        value={senha}
        onChange={(evento) => {
          setSenha(evento.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        label="Senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        //required
      />
      <Button type="submit" variant="contained" color="primary">
        {" "}
        Entrar{" "}
      </Button>
    </form>
  );
}
