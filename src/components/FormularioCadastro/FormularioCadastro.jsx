import React from "react";
import { useState, useEffect } from "react";
import { StepLabel, Stepper, Step, Typography } from "@material-ui/core";
import { DadosPessoais } from "./DadosPessoais";
import { DadosUsuario } from "./DadosUsuario";
import { DadosEntrega } from "./DadosEntrega";


export function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length) {
      aoEnviar(dadosColetados);
    }
  })

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography align="center" color="primary"  variant="h5"> Cadastro concluído! </Typography>,
  ]

  function coletarDados(dados){
    setDadosColetados({...dadosColetados, ...dados});
    proximo();
  }

  function proximo(){
    setEtapaAtual(etapaAtual + 1);
    console.log(etapaAtual)
  }

  return (
  <>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel> Login </StepLabel> </Step>
      <Step><StepLabel> Pessoal </StepLabel> </Step>
      <Step><StepLabel> Entrega </StepLabel> </Step>
      <Step><StepLabel> Finalização </StepLabel> </Step>
    </Stepper>
    {formularios[etapaAtual]}
  </>
  );
}
