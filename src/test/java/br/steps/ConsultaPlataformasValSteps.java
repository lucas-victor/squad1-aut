package br.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ConsultaPlataformasValSteps {

	@When("^seleciono o Radio \"([^\"]*)\"$")
	public void selecionoORadio(String radio) throws Throwable {
		ElementMap.preencheRadioBtn(radio);

	}

	@When("^preencho o campo Terminal com \"([^\"]*)\"$")
	public void preenchoOCampoTerminalCom(String terminal) throws Throwable {
		ElementMap.preencheCampoTerminal(terminal);
	}

	@Then("^devo ver a mensagem \"([^\"]*)\"$")
	public void devoVerAMensagem(String msg) throws Throwable {
		msg = msg.replace("'", "\"");
		ElementMap.validaMsgCampoTerminal(msg);
	}
	

	@Then("^devo ver a mensagem \"([^\"]*)\"(\\d+)\\\"([^\"]*)\"$")
	public void devoVerAMensagem(String iniMsg, int num, String fimMsg) throws Throwable {
		ElementMap.validaMsgCampoTerminal(iniMsg, num, fimMsg);
	}
	
	@Then("^devo ver a mensagem de erro \"([^\"]*)\"$")
	public void devoVerAMensagemDeErro(String msg) throws Throwable {
		msg = msg.replace("'", "\"");
		ElementMap.validaMsgPlataformaInvalida(msg);
	}

}
