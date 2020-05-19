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
		ElementMap.preencheRadioBtn("id");
	    ElementMap.preencheCampoTerminal(id);
	}

	@When("^seleciono a plataforma \"([^\"]*)\"$")
	public void selecionoAPlataforma(String plat) throws Throwable {
		
		switch (plat) {
		case "OCS Huawei OCS01":	
			ElementMap.clickTreeGSM();
		    ElementMap.clickTreeGSM_OCSHuawei();
		    ElementMap.clickTreeGSM_OCSHuawei_Ocs01();
			break;
			
		case "HLR43":
			System.out.println("Selecionada plataforma HLR43.");
			break;
		
		default:
			break;
		}
			
	}

	@When("^clico no botao Pesquisar$")
	public void clicoNoBotaoPesquisar() throws Throwable {
	    ElementMap.clickBtnPesquisar();
	}

	@Then("^devo ver os dados exibidos$")
	public void devoVerOsDadosExibidos() throws Throwable {
		//ElementMap.validaResultadoOCSid();
	}

	@Then("^validar as informacoes da OCS Huawei OCS(\\d+) \"([^\"]*)\"$")
	public void validarAsInformacoesDaOCSHuaweiOCS(int arg1, String tipo) throws Throwable {
		if ("cpf".equalsIgnoreCase(tipo) || "cnpj".equalsIgnoreCase(tipo)) {
			ElementMap.validaResultadoOCScpf();
		}else{
			ElementMap.validaResultadoOCSid();
		}
	}


}
