package br.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ConsultaPlataformasIdSteps {
	
	@Given("^que estou logado no site$")
	public void queEstouLogadoNoSite() throws Throwable {
	    ElementMap.efetuaLoginConsulta();
	}

	@Given("^acesso o menu Consulta Plataformas$")
	public void acessoOMenuConsultaPlataformas() throws Throwable {
	   ElementMap.clickMenuConsulta();
	}

	@When("^preencho os dados da tela com ID \"([^\"]*)\"$")
	public void preenchoOsDadosDaTelaComID(String id) throws Throwable {
	    ElementMap.preencheCampoTerminal(id);
	}

	@When("^seleciono a plataforma OCS Huawei OCS(\\d+)$")
	public void selecionoAPlataformaOCSHuaweiOCS(int arg1) throws Throwable {
	    ElementMap.clickTreeGSM();
	    ElementMap.clickTreeGSM_OCSHuawei();
	    ElementMap.clickTreeGSM_OCSHuawei_Ocs01();
	}

	@When("^clico no botao Pesquisar$")
	public void clicoNoBotaoPesquisar() throws Throwable {
	    ElementMap.clickBtnPesquisar();
	}

	@Then("^devo ver os dados exibidos$")
	public void devoVerOsDadosExibidos() throws Throwable {
		ElementMap.validaResultadoOCS();
	}

	@Then("^validar as informacoes da OCS Huawei OCS(\\d+) \"([^\"]*)\"$")
	public void validarAsInformacoesDaOCSHuaweiOCS(int arg1, String idValid) throws Throwable {
	    ElementMap.validaResultadoOCS();
	}


}
