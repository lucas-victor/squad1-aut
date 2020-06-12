package br.steps;

import com.cucumber.listener.Reporter;

import br.maps.ElementMap;
import br.utils.Apoio;
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
		    Reporter.addStepLog("Selecionada plataforma: OCS01");
			break;
			
		case "VMS Novitech VMS04":
			ElementMap.clickTreeGSM();
			ElementMap.clickTreeGSM_VMSnovitech();
			ElementMap.clickTreeGSM_VMSnovitech_VMS04();
			Reporter.addStepLog("Selecionada plataforma: VMS04");
			break;
			
		case "SmartKeyHuawei LSMS01":
			ElementMap.clickTreeGSM();
			ElementMap.clickTreeGSM_SmartKeyHuawei();
			ElementMap.clickTreeGSM_SmartKeyHuawei_LSMS01();
			Reporter.addStepLog("Selecionada plataforma: LSMS01");
			break;
			
		case "IMS SAM01":
			ElementMap.clickTreeFixa();
			ElementMap.clickTreeFixa_IMS();
			ElementMap.clickTreeFixa_IMS_SAM01();
			Reporter.addStepLog("Selecionada plataforma: SAM01");
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
		ElementMap.verificaQueExibiraDados();
	}

	@Then("^validar as informacoes da OCS Huawei OCS(\\d+) \"([^\"]*)\"$")
	public void validarAsInformacoesDaOCSHuaweiOCS(int arg1, String tipo) throws Throwable {
		Apoio.wait(4000);
		if ("cpf".equalsIgnoreCase(tipo) || "cnpj".equalsIgnoreCase(tipo)) {
			ElementMap.validaResultadoOCScpf();
		}else{
			ElementMap.validaResultadoOCSid();
		}
	}


}
