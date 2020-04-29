package br.steps;

import br.runners.Apoio;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
//import junit.framework.Assert;

public class GoogleSteps {

	// Início do Cenário 1.
	
	@Given("^Acesso o site google$")
	public void realizaOLoginNoSite() throws Throwable {
		ElementMap.efetuaLogin();
	}

	@When("^preencho o campo Pesquisa com valor \"([^\"]*)\"$")
	public void preenchoCampoPesquisa(String terminal) throws Throwable {

		ElementMap.preencheCampoPesquisa(terminal);;
	}
	
	
	@And("^eu clicar no botao pesquisar$")
	public void clicaBotaoPesquisar() throws Throwable {
		Apoio.wait(300);
		ElementMap.clicaBotaoPesquisa();
	}
	
	@Then("^visualizo o resultado da pesquisa$")
	public void visualizaPesquisa() throws Throwable {
		Apoio.wait(300);
		ElementMap.visualizaResultado();
	}



	
	

	
	
	

}
