package br.steps;


import br.maps.ElementMap;
import cucumber.api.java.en.When;

public class ConsultaPlataformasCpfCnpjSteps {
		
	@When("^preencho os dados da tela com CPF \"([^\"]*)\"$")
	public void preenchoOsDadosDaTelaComCPF(String cpf) throws Throwable {
		ElementMap.preencheRadioBtn("cpf");
	    ElementMap.preencheCampoTerminal(cpf);
	}
	
	@When("^preencho os dados da tela com CNPJ \"([^\"]*)\"$")
	public void preenchoOsDadosDaTelaComCNPJ(String cnpj) throws Throwable {
		ElementMap.preencheRadioBtn("cnpj");
	    ElementMap.preencheCampoTerminal(cnpj);
	}

}
