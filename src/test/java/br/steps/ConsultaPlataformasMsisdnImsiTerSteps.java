package br.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ConsultaPlataformasMsisdnImsiTerSteps {
	
	@When("^preencho os dados da tela com MSISDN \"([^\"]*)\"$")
	public void preenchoOsDadosDaTelaComMSISDN(String msisdn) throws Throwable {
		ElementMap.preencheRadioBtn("msisdn");
	    ElementMap.preencheCampoTerminal(msisdn);
	}

	@When("^preencho os dados da tela com IMSI \"([^\"]*)\"$")
	public void preenchoOsDadosDaTelaComIMSI(String imsi) throws Throwable {
		ElementMap.preencheRadioBtn("imsi");
	    ElementMap.preencheCampoTerminal(imsi);
	}

	@When("^preencho os dados da tela com TERMINAL \"([^\"]*)\"$")
	public void preenchoOsDadosDaTelaComTERMINAL(String terminal) throws Throwable {
		ElementMap.preencheRadioBtn("terminal");
	    ElementMap.preencheCampoTerminal(terminal);
	}

	@Then("^validar as informacoes da consulta \"([^\"]*)\"$")
	public void validarAsInformacoesDaConsulta(String result) throws Throwable {
	    	
		if (result.startsWith("msisdn")) {
			ElementMap.validaResultadoVMSNovitech(result);
		}
		else if (result.startsWith("imsi")) {
			ElementMap.validaResultadoSmartKeyHuaweiLSMS01();
		}
		else if (result.startsWith("terminal")) {
			//quando tiver fixa no banco, construir o metodo para o terminal.
			//Não é o foco da demanda atual.
			System.out.println("Falta construir a validacao do terminal");
		}
				
	}
}
