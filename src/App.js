import "./App.css";
import { FormularioCadastro } from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import '@fontsource/roboto';
import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/validacoesCadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography align="center" variant="h3" component="h1" color="primary"> Formulário de Cadastro</Typography>
      <ValidacoesCadastro.Provider value={{cpf: validarCPF, senha: validarSenha}}>
        <FormularioCadastro aoEnviar={aoEnviarForm} /> 
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
