import React from "react";
import { useState, useContext} from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";

export function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [CPF, setCPF] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro)
  
  
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } }); //[estadoAtual, estadoFuturo] = useState(dadoPadrão-configAtual)
  function validarCampos(evento) {
    const { id, value } = evento.target;
    const novoEstado = { ...erros };
    novoEstado[id] = validacoes[id](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, CPF, novidades, promocoes });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(evento) => {
          setNome(evento.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={sobrenome}
        onChange={(evento) => {
          setSobrenome(evento.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={CPF}
        onChange={(evento) => {
          setCPF(evento.target.value);
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onBlur={validarCampos}
        name="cpf"
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(evento) => setPromocoes(evento.target.checked)}
            name="promocoes"
            color="primary"
          />
        }
      />
      <FormControlLabel
        checked={novidades}
        label="Novidades"
        control={
          <Switch
            onChange={(evento) => setNovidades(evento.target.checked)}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
      {/*Importado da biblioteca MATERIAL-UI*/}
    </form>
  );
}
