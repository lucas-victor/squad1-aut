package br.steps;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.html5.LocalStorage;
import org.openqa.selenium.html5.WebStorage;
import org.openqa.selenium.interactions.Actions;

import br.runners.Apoio;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class ElementMap {

	// Variaveis
	public static WebDriver driver;
	public static Scenario scenario;
	final static int CHROMEDRIVER = 1;
	final static int FIREFOXDRIVER = 2;

	// Metodos
	@Test
	public static void efetuaLogin() {

		// instancia o driver. 1 = chrome, 2 = firefox
		driver = Apoio.initDriver(CHROMEDRIVER);

		// maximiza tela
		// driver.manage().window().maximize();

		// Acessa a url.
		driver.get("https://www.google.com.br/");

		Apoio.wait(1000);

	}

	@Test
	public static void efetuaLoginConsulta() {
		// queEstouLogadoNoSite
		// instancia o driver. 1 = chrome, 2 = firefox
		driver = Apoio.initDriver(CHROMEDRIVER);

		// maximiza tela
		// driver.manage().window().maximize();

		// 30 sec implcity wait
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
		// Acessa a url.
		driver.get("http://10.121.216.69:7003/sisativacao/#/home");
		
		//add token na url.
		LocalStorage local = ((WebStorage) driver).getLocalStorage();
		local.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsIkF1dGgiOnsiZW1haWwiOiJwZWRyby5jb3N0YUBzcXVhZHJhLmNvbS5iciIsImxvZ2luIjoicGVkcm8iLCJuYW1lIjoicGVkcm8iLCJwcm9maWxlIjoiQURNSU5JU1RSQURPUiAtIEFETUlOSVNUUkFET1IiLCJyb2xlcyI6WyJST0xFX1JBU1RSRUFCSUxJREFERV9WSUVXIiwiUk9MRV9SRVNQT1NUQV9WSUVXX1VQREFURSIsIlJPTEVfUkVTUE9TVEFfRVNQRUNJRklDQV9WSUVXX1VQREFURSIsIlJPTEVfRUxFTUVOVE9fUkVERV9WSUVXX1VQREFURSIsIlJPTEVfQVVESVRPUklBX1ZJRVciLCJST0xFX01BUEVBTUVOVE9fVklFV19VUERBVEUiLCJST0xFX0NPTkZJR1VSQUNBT19ISVNUT1JJQ09fVklFV19VUERBVEUiLCJST0xFX0xJTVBBX0NBQ0hFX1ZJRVdfVVBEQVRFIiwiUk9MRV9QRVJGSUxfVklFV19VUERBVEUiLCJST0xFX0hMUl9HVEhMUl9PQ0NGX1ZJRVdfVVBEQVRFIiwiUk9MRV9TUEFfR1RUX0dUU19NQVRfVklFV19VUERBVEUiLCJST0xFX0NOX1BSRUZJWF9HVFRfVklFV19VUERBVEUiLCJST0xFX1RQX0NTUE9fUlNUX0xETl9MRElfVklFV19VUERBVEUiLCJST0xFX1RQX0NTUE9fUlNUX0xESV9WSUVXX1VQREFURSIsIlJPTEVfVFBfQ1NQT19SU1RfTEROX1ZJRVdfVVBEQVRFIiwiUk9MRV9WUE5fSURfVklFV19VUERBVEUiLCJST0xFX1NBX0FQTl9QRFBJRF9WSUVXX1VQREFURSIsIlJPTEVfQ05fT0NDRl9WSUVXX1VQREFURSIsIlJPTEVfUkVURU5DQU9fSExSX1ZJRVdfVVBEQVRFIiwiUk9MRV9SRVRFTkNBT19DTl9QUkVGSVhPX1ZJRVdfVVBEQVRFIiwiUk9MRV9HVFRfT1BfU0VSVl9OQU1FX1ZJRVdfVVBEQVRFIiwiUk9MRV9ST1VfUExBTk9fQ05fVklFV19VUERBVEUiLCJST0xFX1JFVEVOQ0FPX0NOX1ZJRVdfVVBEQVRFIiwiUk9MRV9QQVJTRVJfU0VSVl9BUFJPVl9WSUVXX1VQREFURSIsIlJPTEVfUEFSU0VSX1BBUkFNX1ZJRVdfVVBEQVRFIiwiUk9MRV9DQVBUQ0hBX1ZJRVciLCJST0xFX0hMUiBOb2tpYV9WSUVXIiwiUk9MRV9TbWFydEtleSBIdWF3ZWlfVklFVyIsIlJPTEVfU01TQyBBY2lzaW9uX1ZJRVciLCJST0xFX1VEUiBOb2tpYV9WSUVXIiwiUk9MRV9WTVMgTm92aXRlY2hfVklFVyIsIlJPTEVfUENSRiBIdWF3ZWlfVklFVyIsIlJPTEVfT0NTIEh1YXdlaV9WSUVXIiwiUk9MRV9JTl9WSUVXIiwiUk9MRV9OR04gUjJfVklFVyIsIlJPTEVfSU1TX1ZJRVciLCJST0xFX1Ryb3BpY29fVklFVyIsIlJPTEVfQU1fTkdOUjJfVklFVyJdfX0.eyJwcm9maWxlIjoiQURNSU5JU1RSQURPUiAtIEFETUlOSVNUUkFET1IiLCJyb2xlcyI6WyJST0xFX1JBU1RSRUFCSUxJREFERV9WSUVXIiwiUk9MRV9SRVNQT1NUQV9WSUVXX1VQREFURSIsIlJPTEVfUkVTUE9TVEFfRVNQRUNJRklDQV9WSUVXX1VQREFURSIsIlJPTEVfRUxFTUVOVE9fUkVERV9WSUVXX1VQREFURSIsIlJPTEVfQVVESVRPUklBX1ZJRVciLCJST0xFX01BUEVBTUVOVE9fVklFV19VUERBVEUiLCJST0xFX0NPTkZJR1VSQUNBT19ISVNUT1JJQ09fVklFV19VUERBVEUiLCJST0xFX0xJTVBBX0NBQ0hFX1ZJRVdfVVBEQVRFIiwiUk9MRV9QRVJGSUxfVklFV19VUERBVEUiLCJST0xFX0hMUl9HVEhMUl9PQ0NGX1ZJRVdfVVBEQVRFIiwiUk9MRV9TUEFfR1RUX0dUU19NQVRfVklFV19VUERBVEUiLCJST0xFX0NOX1BSRUZJWF9HVFRfVklFV19VUERBVEUiLCJST0xFX1RQX0NTUE9fUlNUX0xETl9MRElfVklFV19VUERBVEUiLCJST0xFX1RQX0NTUE9fUlNUX0xESV9WSUVXX1VQREFURSIsIlJPTEVfVFBfQ1NQT19SU1RfTEROX1ZJRVdfVVBEQVRFIiwiUk9MRV9WUE5fSURfVklFV19VUERBVEUiLCJST0xFX1NBX0FQTl9QRFBJRF9WSUVXX1VQREFURSIsIlJPTEVfQ05fT0NDRl9WSUVXX1VQREFURSIsIlJPTEVfUkVURU5DQU9fSExSX1ZJRVdfVVBEQVRFIiwiUk9MRV9SRVRFTkNBT19DTl9QUkVGSVhPX1ZJRVdfVVBEQVRFIiwiUk9MRV9HVFRfT1BfU0VSVl9OQU1FX1ZJRVdfVVBEQVRFIiwiUk9MRV9ST1VfUExBTk9fQ05fVklFV19VUERBVEUiLCJST0xFX1JFVEVOQ0FPX0NOX1ZJRVdfVVBEQVRFIiwiUk9MRV9QQVJTRVJfU0VSVl9BUFJPVl9WSUVXX1VQREFURSIsIlJPTEVfUEFSU0VSX1BBUkFNX1ZJRVdfVVBEQVRFIiwiUk9MRV9DQVBUQ0hBX1ZJRVciLCJST0xFX0hMUiBOb2tpYV9WSUVXIiwiUk9MRV9TbWFydEtleSBIdWF3ZWlfVklFVyIsIlJPTEVfU01TQyBBY2lzaW9uX1ZJRVciLCJST0xFX1VEUiBOb2tpYV9WSUVXIiwiUk9MRV9WTVMgTm92aXRlY2hfVklFVyIsIlJPTEVfUENSRiBIdWF3ZWlfVklFVyIsIlJPTEVfT0NTIEh1YXdlaV9WSUVXIiwiUk9MRV9JTl9WSUVXIiwiUk9MRV9OR04gUjJfVklFVyIsIlJPTEVfSU1TX1ZJRVciLCJST0xFX1Ryb3BpY29fVklFVyIsIlJPTEVfQU1fTkdOUjJfVklFVyJdLCJpc3MiOiJTcU9pU2lzQXRpdmFjYW8iLCJub21lIjoicGVkcm8iLCJleHAiOjE1OTc2MDQ1MzAsImxvZ2luIjoicGVkcm8iLCJlbWFpbCI6InBlZHJvLmNvc3RhQHNxdWFkcmEuY29tLmJyIn0.Z0iO8Qu47wY-wrzim90RgpjMQFyy_LFHtqhY0Rz3J_Y");
		driver.navigate().refresh();
		
	}
	
	@Test
	public static void clickMenuConsulta() {
		Apoio.wait(6000);
		//mouse hover com click no elemento.
		Actions action = new Actions(driver);
		WebElement we = driver.findElement(By.xpath("//*[@id=\"slide-out\"]/li[5]/a"));
		Apoio.wait(1000);
		action.moveToElement(we).moveToElement(driver.findElement(By.xpath("//*[@id=\"slide-out\"]/li[5]/a"))).click().build().perform();
		//Apoio.wait(200);
		//driver.findElement(By.xpath("//*[@id=\"slide-out\"]/li[5]/a/span)")).click();

	}
	
	public static void preencheRadioBtn(String btn) {
		
		WebElement radio = null;
		
		if (btn.equalsIgnoreCase("id")) {
			radio = driver.findElement(By.xpath("//*[@id=\"radio_IDAssinante\"]/div/div[2]"));
		}else if (btn.equalsIgnoreCase("msisdn") || btn.equalsIgnoreCase("imsi") || btn.equalsIgnoreCase("terminal")) {	
			radio = driver.findElement(By.xpath("//*[@id=\"radio_MSISDN/IMSI/Terminal\"]/div/div[2]"));
		}else {
			radio = driver.findElement(By.xpath("//*[@id=\"radio_CPF/CNPJ\"]/div/div[2]"));
		}
		
		radio.click();
	}
	
	@Test
	public static void preencheCampoTerminal(String terminal) {
		Apoio.wait(1000);
		driver.findElement(By.name("terminal")).sendKeys(terminal);

	}
	
	public static void validaMsgCampoTerminal(String msgEsperada) {
		WebElement msg = driver.findElement(By.xpath("//*[@class=\"ui-messages-error ui-corner-all\"]"));
		String msgAtual = msg.getText();
		
		Assert.assertEquals(msgEsperada, msgAtual);
	}
	
	@Test
	public static void clickTreeGSM() {
		// clica no item GSM da arvore.
		WebElement gsm = driver.findElement(By.cssSelector(
				"body > app-root > div > app-consulta-plataforma-list > div > div > div > div > div.col-sm-3.col-md-3.container > app-filtro-consulta > div > div > div.card-body.elementoAltura > form > p-tree > div > ul > p-treenode:nth-child(1) > li > div > span.ui-tree-toggler.pi.pi-fw.ui-unselectable-text.pi-caret-right"));
		gsm.click();
	}
	
	@Test
	public static void clickTreeGSM_VMSnovitech() {
		// clica no item GSM da arvore.
		WebElement vmsNovitech = driver.findElement(By.cssSelector(
				"body > app-root > div > app-consulta-plataforma-list > div > div > div > div > div.col-sm-3.col-md-3.container > app-filtro-consulta > div > div > div.card-body.elementoAltura > form > p-tree > div > ul > p-treenode:nth-child(1) > li > ul > p-treenode:nth-child(5) > li > div > span.ui-tree-toggler.pi.pi-fw.ui-unselectable-text.pi-caret-right"));
		vmsNovitech.click();
	}
	
	public static void clickTreeGSM_VMSnovitech_VMS04() {
		// clica no item GSM da arvore.
		WebElement vms04 = driver.findElement(By.cssSelector(
				"body > app-root > div > app-consulta-plataforma-list > div > div > div > div > div.col-sm-3.col-md-3.container > app-filtro-consulta > div > div > div.card-body.elementoAltura > form > p-tree > div > ul > p-treenode:nth-child(1) > li > ul > p-treenode:nth-child(5) > li > ul > p-treenode > li > div > div > div"));
		vms04.click();
	}
	
	@Test
	public static void clickTreeGSM_SmartKeyHuawei() {
		// clica no item GSM da arvore.
		WebElement smartKeyLsms = driver.findElement(By.cssSelector(
				"body > app-root > div > app-consulta-plataforma-list > div > div > div > div > div.col-sm-3.col-md-3.container > app-filtro-consulta > div > div > div.card-body.elementoAltura > form > p-tree > div > ul > p-treenode:nth-child(1) > li > ul > p-treenode:nth-child(2) > li > div > span.ui-tree-toggler.pi.pi-fw.ui-unselectable-text.pi-caret-right"));
		smartKeyLsms.click();
	}
	
	@Test
	public static void clickTreeGSM_SmartKeyHuawei_LSMS01() {
		// clica no item GSM da arvore.
		WebElement lsms01 = driver.findElement(By.cssSelector(
				"body > app-root > div > app-consulta-plataforma-list > div > div > div > div > div.col-sm-3.col-md-3.container > app-filtro-consulta > div > div > div.card-body.elementoAltura > form > p-tree > div > ul > p-treenode:nth-child(1) > li > ul > p-treenode:nth-child(2) > li > ul > p-treenode:nth-child(1) > li > div > div > div"));
		lsms01.click();
	}

	@Test
	public static void clickTreeGSM_HLR() {
		// clica no item GSM/HLR da arvore.
		WebElement gsmHlr = driver.findElement(By.cssSelector(
				"body > app-root > div > app-consulta-plataforma-list > div > div > div > div > div.col-sm-3.col-md-3.container > app-filtro-consulta > div > div > div.card-body.elementoAltura > form > p-tree > div > ul > p-treenode:nth-child(1) > li > ul > p-treenode:nth-child(7) > li > div > span.ui-tree-toggler.pi.pi-fw.ui-unselectable-text.pi-caret-right"));
		WebElement gsmHlr2 = driver.findElement(By.className("ui-tree-toggler pi pi-fw ui-unselectable-text pi-caret-right"));
		gsmHlr.click();
		
		//down
		//ui-tree-toggler pi pi-fw ui-unselectable-text pi-caret-down
		//righ
		//*[@class="ui-tree-toggler pi pi-fw ui-unselectable-text pi-caret-right"]
		
	}
	
	@Test
	public static void clickTreeGSM_HLR_HLR43() {
		// clica no item GSM/HLR/HLR43 da arvore.
		WebElement gsmHlr43 = driver.findElement(By.cssSelector(
				"body > app-root > div > app-consulta-plataforma-list > div > div > div > div > div.col-sm-3.col-md-3.container > app-filtro-consulta > div > div > div.card-body.elementoAltura > form > p-tree > div > ul > p-treenode:nth-child(1) > li > ul > p-treenode:nth-child(1) > li > ul > p-treenode:nth-child(1) > li > div > div > div"));
		gsmHlr43.click();
	}
	
	@Test
	public static void clickTreeGSM_OCSHuawei() {
		// clica no item GSM/HLR da arvore.
		WebElement gsmOcs = driver.findElement(By.cssSelector(
				"body > app-root > div > app-consulta-plataforma-list > div > div > div > div > div.col-sm-3.col-md-3.container > app-filtro-consulta > div > div > div.card-body.elementoAltura > form > p-tree > div > ul > p-treenode:nth-child(1) > li > ul > p-treenode:nth-child(7) > li > div > span.ui-tree-toggler.pi.pi-fw.ui-unselectable-text.pi-caret-right"));
		gsmOcs.click();
	}
	
	@Test
	public static void clickTreeGSM_OCSHuawei_Ocs01() {
		// clica no item GSM/HLR da arvore.
		WebElement gsmOcs01 = driver.findElement(By.cssSelector(
				"body > app-root > div > app-consulta-plataforma-list > div > div > div > div > div.col-sm-3.col-md-3.container > app-filtro-consulta > div > div > div.card-body.elementoAltura > form > p-tree > div > ul > p-treenode:nth-child(1) > li > ul > p-treenode:nth-child(7) > li > ul > p-treenode > li > div > div > div"));
		gsmOcs01.click();
	}
	
	@Test
	public static void clickTreeConvergente() {
		// clica no item GSM/HLR da arvore.
		WebElement converg = driver.findElement(By.cssSelector(
				"body > app-root > div > app-consulta-plataforma-list > div > div > div > div > div.col-sm-3.col-md-3.container > app-filtro-consulta > div > div > div.card-body.elementoAltura > form > p-tree > div > ul > p-treenode:nth-child(3) > li > div > span.ui-tree-toggler.pi.pi-fw.ui-unselectable-text.pi-caret-right"));
		converg.click();
	}
	
	@Test
	public static void clickTreeConvergente_Tropico() {
		// clica no item GSM/HLR da arvore.
		WebElement tropic = driver.findElement(By.cssSelector(
				"body > app-root > div > app-consulta-plataforma-list > div > div > div > div > div.col-sm-3.col-md-3.container > app-filtro-consulta > div > div > div.card-body.elementoAltura > form > p-tree > div > ul > p-treenode:nth-child(3) > li > ul > p-treenode > li > div > span.ui-tree-toggler.pi.pi-fw.ui-unselectable-text.pi-caret-right"));
		tropic.click();
	}
	
	@Test
	public static void clickTreeConvergente_Tropico_VMP07() {
		// clica no item GSM/HLR da arvore.
		WebElement vmp07 = driver.findElement(By.cssSelector(
				"body > app-root > div > app-consulta-plataforma-list > div > div > div > div > div.col-sm-3.col-md-3.container > app-filtro-consulta > div > div > div.card-body.elementoAltura > form > p-tree > div > ul > p-treenode:nth-child(3) > li > ul > p-treenode > li > ul > p-treenode:nth-child(4) > li > div > div > div"));
		vmp07.click();
	}
	
	//incompleto.
	@Test
	public static void clickTree___() {
		// clica no item GSM/HLR da arvore.
		WebElement vmp07 = driver.findElement(By.cssSelector(
				"body > app-root > div > app-consulta-plataforma-list > div > div > div > div > div.col-sm-3.col-md-3.container > app-filtro-consulta > div > div > div.card-body.elementoAltura > form > p-tree > div > ul > p-treenode:nth-child(3) > li > ul > p-treenode > li > ul > p-treenode:nth-child(4) > li > div > div > div"));
		vmp07.click();
	}
	
	@Test
	public static void clickBtnPesquisar() {
		// clica no item GSM/HLR/HLR43 da arvore.
		//WebElement btnPesquisar = driver.findElement(By.xpath("//*[@type=\"button\"][text()=\"Pesquisar\"]"));
		WebElement btnPesquisar = driver.findElement(By.id("pesquisar"));
		btnPesquisar.click();
	}
	
	@Test
	public static void clickBtnLimpar() {
		// clica no item GSM/HLR/HLR43 da arvore.
		WebElement btnLimpar = driver.findElement(By.id("limpar"));
		btnLimpar.click();
	}
	
	
	//clicks abas consulta por CPF.
	public static void clickAbaResumo() {
		//id ui-tabpanel-0-label
		WebElement abaResumo = driver.findElement(By.xpath("//*[@id=\"ui-tabpanel-0-label\"]/span"));
		abaResumo.click();
	}
	
	public static void clickAba1() {
		WebElement abaUm = driver.findElement(By.id("ui-tabpanel-1-label"));
		abaUm.click();
	}
	
	public static void clickAba2() {
		WebElement abaUm = driver.findElement(By.id("ui-tabpanel-2-label"));
		abaUm.click();
	}
	
	public static void clickAba3() {
		WebElement abaUm = driver.findElement(By.id("ui-tabpanel-3-label"));
		abaUm.click();
	}
	
	public static void clickAba4() {
		WebElement abaUm = driver.findElement(By.id("ui-tabpanel-4-label"));
		abaUm.click();
	}
	
	public static void clickAba5() {
		WebElement abaUm = driver.findElement(By.id("ui-tabpanel-5-label"));
		abaUm.click();
	}
	
	
	//Validações 
	@Test
	public static void validaMsgTimeOutConsulta() {
		//pega só a msg
		WebElement msgTimeOut = driver.findElement(By.xpath("//*[@id=\"ui-panel-0-content\"]/div"));
		String resultText = msgTimeOut.getText();
		//valida texto
		Assert.assertEquals(resultText, "Tempo de espera da resposta à consulta excedido.");
		
		//pega tabela msg inteira
		WebElement msgToda = driver.findElement(By.xpath("//*[@id=\"salvaDiv\"]"));
		String resultTextTodo = msgToda.getText();
		//valida texto
		Assert.assertEquals(resultTextTodo, "VMP07\r\n" + 
				"Tempo de espera da resposta à consulta excedido.");
		
	}
	
	
	
	public static void validaResultResumoOCScpf() {
		
		WebElement tabelaResumo = driver.findElement(By.xpath("//*[@id=\"ui-panel-8-content\"]/div/p-tabview/div/div"));
		List<WebElement> linhasResumo = tabelaResumo.findElements(By.cssSelector("tr"));
		
		int count = 0;
		for (WebElement element : linhasResumo) {
			String result = element.getText();
			System.out.println("resultado: " + result);
			System.out.println("resultExp: " + linhasResumo.get(count).toString());
			
			Assert.assertEquals(linhasResumo.get(count).toString(), result);			
			count++;
		}	
	}
	
	public static void validaResultAbaUmOCScpf() {
		
		WebElement tabelaAba1 = driver.findElement(By.xpath("//*[@id=\"ui-panel-8-content\"]/div/p-tabview/div/div"));
		List<WebElement> linhasAba1 = tabelaAba1.findElements(By.cssSelector("tr"));
		
		int count = 0;
		for (WebElement element : linhasAba1) {
			String result = element.getText();
			System.out.println("resultado: " + result);
			System.out.println("resultExp: " + linhasAba1.get(count).toString());
			
			Assert.assertEquals(linhasAba1.get(count).toString(), result);			
			count++;
		}	
	}
	
	
	
	@Test
	public static void validaResultadoOCSid() {
		
		List<String> resultTabela = new ArrayList<String>();
		resultTabela.add("MSISDN 5588988343305");
		resultTabela.add("Documento (CPF/CNPJ/PASSAPORTE) 10979451701");
		resultTabela.add("Original ID 1-1DY4WGGF");
		resultTabela.add("ID da Conta 1-1J1IZLL5OCS");
		resultTabela.add("Plano Principal 5001");
		resultTabela.add("ID do Plano Suplementar 1200001");
		resultTabela.add("Data de Efetivação do plano suplementar 15/04/2020 14:48:43");
		resultTabela.add("Data de Expiração do plano suplementar 31/12/2036 21:00:00");
		resultTabela.add("ID do Plano Suplementar 2200018");
		resultTabela.add("Data de Efetivação do plano suplementar 15/04/2020 14:48:43");
		resultTabela.add("Data de Expiração do plano suplementar 31/12/2036 21:00:00");
		resultTabela.add("ID do Plano Suplementar 2200004");
		resultTabela.add("Data de Efetivação do plano suplementar 15/04/2020 14:48:43");
		resultTabela.add("Data de Expiração do plano suplementar 31/12/2036 21:00:00");
		resultTabela.add("ID do Plano Suplementar 2200003");
		resultTabela.add("Data de Efetivação do plano suplementar 15/04/2020 14:48:43");
		resultTabela.add("Data de Expiração do plano suplementar 31/12/2036 21:00:00");
		resultTabela.add("ID do Plano Suplementar 2200001");
		resultTabela.add("Data de Efetivação do plano suplementar 15/04/2020 14:48:43");
		resultTabela.add("Data de Expiração do plano suplementar 31/12/2036 21:00:00");
		resultTabela.add("ID do Plano Suplementar 1200001");
		resultTabela.add("ID do Plano Suplementar 2200001");
		
		//pega todas as tags tr dentro do painel.
		WebElement tabela = driver.findElement(By.xpath("//*[@id=\"ui-panel-0-content\"]"));
		List<WebElement> linhasTabela = tabela.findElements(By.cssSelector("tr"));
		
		//Itera nas tags tr para fazer o assert no resultado.
		int count = 0;
		for (WebElement element : linhasTabela) {
			String result = element.getText();
			System.out.println("resultAct: " + result);
			System.out.println("resultExp: " + resultTabela.get(count).toString());
			
			Assert.assertEquals(resultTabela.get(count).toString(), result);			
			count++;
		}	
	}
	

	
	
	@Test
	public static void validaResultadoOCScpf() {
		
		//resultado esperado
		List<String> resultResumo = new ArrayList<String>();	  
		resultResumo.add("Documento (CPF/CNPJ/PASSAPORTE) 07122361713");
		resultResumo.add("MSISDN ID da Conta Original ID Oferta Principal");
		resultResumo.add("5541984645497 1-1G3AQ237OCS 1-1EORFHEE 5001");
		resultResumo.add("5541984645598 1-2G4AQ348OCS 1-1EORFHE2 5002");
		resultResumo.add("5571988621104 1-1EORFFB2OCS 1-1EORFFB2 5003");
		resultResumo.add("5527988420028 1-1EORFPX6OCS 1-1EORFPX6 5004");
		resultResumo.add("5521989094641 1-1EORFPVQOCS 1-1EORFPVQ 5005");
		
		List<String> resultAba1 = new ArrayList<String>();
		resultAba1.add("MSISDN 5541984645497");
		resultAba1.add("Original ID 1-1EORFHEE");
		resultAba1.add("ID da Conta 1-1G3AQ237OCS");
		resultAba1.add("Plano Principal 5001");
		resultAba1.add("ID do Plano Suplementar 2200001");
		resultAba1.add("Data de Efetivação do plano suplementar 01/10/2019 17:00:01");
		resultAba1.add("Data de Expiração do plano suplementar 31/12/2036 21:00:00");
		resultAba1.add("ID do Plano Suplementar 2200002");
		resultAba1.add("Data de Efetivação do plano suplementar 01/10/2019 17:00:02");
		resultAba1.add("Data de Expiração do plano suplementar 31/12/2036 21:00:01");
		resultAba1.add("ID do Plano Suplementar 2200003");
		resultAba1.add("Data de Efetivação do plano suplementar 01/10/2019 17:00:03");
		resultAba1.add("Data de Expiração do plano suplementar 31/12/2036 21:00:02");
		resultAba1.add("ID do Plano Suplementar 2200004");
		resultAba1.add("Data de Efetivação do plano suplementar 01/10/2019 17:00:04");
		resultAba1.add("Data de Expiração do plano suplementar 31/12/2036 21:00:03");
		resultAba1.add("ID do Plano Suplementar 2200005");
		resultAba1.add("Data de Efetivação do plano suplementar 01/10/2019 17:00:05");
		resultAba1.add("Data de Expiração do plano suplementar 31/12/2036 21:00:04");
		

		List<String> resultAba2 = new ArrayList<String>();
		resultAba2.add("MSISDN 5541984645598");
		resultAba2.add("Original ID 1-1EORFHE2");
		resultAba2.add("ID da Conta 1-2G4AQ348OCS");
		resultAba2.add("Plano Principal 5002");
		resultAba2.add("ID do Plano Suplementar 2200006");
		resultAba2.add("Data de Efetivação do plano suplementar 01/10/2019 17:00:01");
		resultAba2.add("Data de Expiração do plano suplementar 31/12/2036 21:00:00");
		resultAba2.add("ID do Plano Suplementar 2200007");
		resultAba2.add("Data de Efetivação do plano suplementar 01/10/2019 17:00:02");
		resultAba2.add("Data de Expiração do plano suplementar 31/12/2036 21:00:01");
		resultAba2.add("ID do Plano Suplementar 2200008");
		resultAba2.add("Data de Efetivação do plano suplementar 01/10/2019 17:00:03");
		resultAba2.add("Data de Expiração do plano suplementar 31/12/2036 21:00:02");
		resultAba2.add("ID do Plano Suplementar 2200009");
		resultAba2.add("Data de Efetivação do plano suplementar 01/10/2019 17:00:04");
		resultAba2.add("Data de Expiração do plano suplementar 31/12/2036 21:00:03");
		resultAba2.add("ID do Plano Suplementar 2200010");
		resultAba2.add("Data de Efetivação do plano suplementar 01/10/2019 17:00:05");
		resultAba2.add("Data de Expiração do plano suplementar 31/12/2036 21:00:04");
		
		List<String> resultAba3 = new ArrayList<String>();
		resultAba3.add("MSISDN 5571988621104");
		resultAba3.add("Original ID 1-1EORFFB2");
		resultAba3.add("ID da Conta 1-1EORFFB2OCS");
		resultAba3.add("Plano Principal 5003");
		resultAba3.add("ID do Plano Suplementar 2200006");
		resultAba3.add("Data de Efetivação do plano suplementar 01/10/2019 16:40:07");
		resultAba3.add("Data de Expiração do plano suplementar 31/12/2036 21:00:06");
		resultAba3.add("ID do Plano Suplementar 2200011");
		resultAba3.add("Data de Efetivação do plano suplementar 01/10/2019 16:40:08");
		resultAba3.add("Data de Expiração do plano suplementar 31/12/2036 21:00:07");
		resultAba3.add("ID do Plano Suplementar 2200012");
		resultAba3.add("Data de Efetivação do plano suplementar 01/10/2019 16:40:09");
		resultAba3.add("Data de Expiração do plano suplementar 31/12/2036 21:00:08");
		resultAba3.add("ID do Plano Suplementar 2200013");
		resultAba3.add("Data de Efetivação do plano suplementar 01/10/2019 16:40:10");
		resultAba3.add("Data de Expiração do plano suplementar 31/12/2036 21:00:09");
		resultAba3.add("ID do Plano Suplementar 2200014");
		resultAba3.add("Data de Efetivação do plano suplementar 01/10/2019 16:40:11");
		resultAba3.add("Data de Expiração do plano suplementar 31/12/2036 21:00:10");
		
		List<String> resultAba4 = new ArrayList<String>();
		resultAba4.add("MSISDN 5527988420028");
		resultAba4.add("Original ID 1-1EORFPX6");
		resultAba4.add("ID da Conta 1-1EORFPX6OCS");
		resultAba4.add("Plano Principal 5004");
		resultAba4.add("ID do Plano Suplementar 2200015");
		resultAba4.add("Data de Efetivação do plano suplementar 02/12/2019 18:20:13");
		resultAba4.add("Data de Expiração do plano suplementar 31/12/2036 21:00:12");
		resultAba4.add("ID do Plano Suplementar 2200016");
		resultAba4.add("Data de Efetivação do plano suplementar 02/12/2019 18:20:14");
		resultAba4.add("Data de Expiração do plano suplementar 31/12/2036 21:00:13");
		resultAba4.add("ID do Plano Suplementar 2200017");
		resultAba4.add("Data de Efetivação do plano suplementar 02/12/2019 18:20:15");
		resultAba4.add("Data de Expiração do plano suplementar 31/12/2036 21:00:14");
		resultAba4.add("ID do Plano Suplementar 2200018");
		resultAba4.add("Data de Efetivação do plano suplementar 02/12/2019 18:20:16");
		resultAba4.add("Data de Expiração do plano suplementar 31/12/2036 21:00:15");
		resultAba4.add("ID do Plano Suplementar 2200019");
		resultAba4.add("Data de Efetivação do plano suplementar 02/12/2019 18:20:17");
		resultAba4.add("Data de Expiração do plano suplementar 31/12/2036 21:00:16");
		
		List<String> resultAba5 = new ArrayList<String>();
		resultAba5.add("MSISDN 5521989094641");
		resultAba5.add("Original ID 1-1EORFPVQ");
		resultAba5.add("ID da Conta 1-1EORFPVQOCS");
		resultAba5.add("Plano Principal 5005");
		resultAba5.add("O MSISDN não possui Plano Suplementar na plataforma OCS");
		

		//Pega todas as tags tr dentro do painel de cada aba.
		WebElement tabelaResumo = driver.findElement(By.xpath("//*[@id=\"ui-tabpanel-0\"]"));
		List<WebElement> linhasResumo = tabelaResumo.findElements(By.cssSelector("tr"));
		//Itera fazendo asserts nos resultados linha a linha.
		int count = 0;
		for (WebElement element : linhasResumo) {
			String result = element.getText();
			System.out.println("resultAct: " + result);
			System.out.println("resultExp: " + resultResumo.get(count).toString());
			
			Assert.assertEquals(resultResumo.get(count).toString(), result);			
			count++;
		}
		
		
		clickAba1();
		Apoio.wait(500);
		WebElement tabelaAba1 = driver.findElement(By.xpath("//*[@id=\"ui-tabpanel-1\"]"));
		List<WebElement> linhasAba1 = tabelaAba1.findElements(By.cssSelector("tr"));
		count = 0;
		for (WebElement element : linhasAba1) {
			String result = element.getText();
			System.out.println("resultAct: " + result);
			System.out.println("resultExp: " + resultAba1.get(count).toString());
			
			Assert.assertEquals(resultAba1.get(count).toString(), result);			
			count++;
		}
		
		
		clickAba2();
		Apoio.wait(500);
		WebElement tabelaAba2 = driver.findElement(By.xpath("//*[@id=\"ui-tabpanel-2\"]"));
		List<WebElement> linhasAba2 = tabelaAba2.findElements(By.cssSelector("tr"));
		count = 0;
		for (WebElement element : linhasAba2) {
			String result = element.getText();
			System.out.println("resultAct: " + result);
			System.out.println("resultExp: " + resultAba2.get(count).toString());
			
			Assert.assertEquals(resultAba2.get(count).toString(), result);			
			count++;
		}
		
		
		clickAba3();
		Apoio.wait(500);
		WebElement tabelaAba3 = driver.findElement(By.xpath("//*[@id=\"ui-tabpanel-3\"]"));
		List<WebElement> linhasAba3 = tabelaAba3.findElements(By.cssSelector("tr"));
		count = 0;
		for (WebElement element : linhasAba3) {
			String result = element.getText();
			System.out.println("resultAct: " + result);
			System.out.println("resultExp: " + resultAba3.get(count).toString());
			
			Assert.assertEquals(resultAba3.get(count).toString(), result);			
			count++;
		}
		
		
		clickAba4();
		Apoio.wait(500);
		WebElement tabelaAba4 = driver.findElement(By.xpath("//*[@id=\"ui-tabpanel-4\"]"));
		List<WebElement> linhasAba4 = tabelaAba4.findElements(By.cssSelector("tr"));
		count = 0;
		for (WebElement element : linhasAba4) {
			String result = element.getText();
			System.out.println("resultAct: " + result);
			System.out.println("resultExp: " + resultAba4.get(count).toString());
			
			Assert.assertEquals(resultAba4.get(count).toString(), result);			
			count++;
		}
		
		
		clickAba5();
		Apoio.wait(500);
		WebElement tabelaAba5 = driver.findElement(By.xpath("//*[@id=\"ui-tabpanel-5\"]"));
		List<WebElement> linhasAba5 = tabelaAba5.findElements(By.cssSelector("tr"));
			
		count = 0;
		for (WebElement element : linhasAba5) {
			String result = element.getText();
			System.out.println("resultAct: " + result);
			System.out.println("resultExp: " + resultAba5.get(count).toString());
			
			Assert.assertEquals(resultAba5.get(count).toString(), result);			
			count++;
		}
	}

	
	public static void validaResultadoVMSNovitech() {
		
		List<String> resultVms04 = new ArrayList<String>();
		resultVms04.add("MSISDN 5512345678901");
		resultVms04.add("Plano Pré-Pago");
		resultVms04.add("Código de Pacote 55619");
		resultVms04.add("Serviço -");
		resultVms04.add("Caixa Postal");
		resultVms04.add("Conversão de Voz para Texto");
		resultVms04.add("Missed Calls");
			
		WebElement tabelaVms = driver.findElement(By.xpath("//*[@id=\"ui-panel-0-content\"]/div"));
		List<WebElement> linhasVms = tabelaVms.findElements(By.cssSelector("tr"));
		
		int count = 0;
		for (WebElement element : linhasVms) {
			String result = element.getText();
			System.out.println("resultAct: " + result);
			System.out.println("resultExp: " + resultVms04.get(count).toString());
			
			Assert.assertEquals(resultVms04.get(count).toString(), result);			
			count++;
		}
	}
	
	public static void validaResultadoSmartKeyHuaweiLSMS01() {
		
		List<String> resultLsms01 = new ArrayList<String>();
		resultLsms01.add("MSISDN 31983606850");
		resultLsms01.add("IMSI 724456789012345");
		resultLsms01.add("Número 001");
		resultLsms01.add("Endereço HLR 550310006000 (HLR50)");
		resultLsms01.add("NewRoute -");
			
		WebElement tabelaLsms = driver.findElement(By.xpath("//*[@id=\"ui-panel-0-content\"]/div"));
		List<WebElement> linhasLsms = tabelaLsms.findElements(By.cssSelector("tr"));
		
		int count = 0;
		for (WebElement element : linhasLsms) {
			String result = element.getText();
			System.out.println("resultAct: " + result);
			System.out.println("resultExp: " + resultLsms01.get(count).toString());
			
			Assert.assertEquals(resultLsms01.get(count).toString(), result);			
			count++;
		}
	}
	
	

	
	// preenche campo pesquisa com o valor teste
	@Test
	public static void preencheCampoPesquisa(String valor) {

		driver.findElement(By.name("q")).sendKeys(valor);
		
	}

	// clica no botï¿½o Pesquisa
	@Test
	public static void clicaBotaoPesquisa() {

		driver.findElement(By.name("q")).submit();

	}

	// pega o resultado.
	@Test
	public static void visualizaResultado() {

		String texto = driver.findElement(By.name("q")).getText();
		// Assert.assertEquals("", texto);

	}

	// Print screen
	@Test
	public static void print(String nomePrint) {
		File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		Apoio.wait(1000);
		try {
			FileUtils.copyFile(file,
					new File("target/relatorios/screenshot/_" + scenario.getId() + nomePrint + ".jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	// Configuraï¿½ï¿½o dos hooks para executar apï¿½s todos os cenï¿½rios.

	@Before(order = 0)
	public void msgStart(Scenario cenario) {
		scenario = cenario;
		System.out.println("iniciando teste.");
	}

	@After(order = 1) // @After(order = 1) ou @After(order = 1, value = { "@Funcionais" })
	public static void screenshot(Scenario cenario) {
		Date data = new Date();
		DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy-HH.mm.ss");

		File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		Apoio.wait(1000);
		try {
			FileUtils.copyFile(file,
					new File("target/relatorios/screenshot/" + cenario.getId() + dateFormat.format(data) + ".jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@After(order = 0) // @After(order = 0) //
	public static void fecharBrowser() {
		Apoio.wait(3500);
		driver.quit();
		// System.out.println("Fim do caso de teste!");
	}

}
