package br.steps;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
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

	public static void efetuaLoginConsulta() {
		// queEstouLogadoNoSite
		// instancia o driver. 1 = chrome, 2 = firefox
		driver = Apoio.initDriver(CHROMEDRIVER);

		// maximiza tela
		// driver.manage().window().maximize();

		// Acessa a url.
		driver.get("http://10.121.216.69:7003/sisativacao/#/home");
		Apoio.wait(1000);
	}

	public static void clickMenuConsulta() {
		
		//mouse hover com click no elemento.
		Actions action = new Actions(driver);
		WebElement we = driver.findElement(By.xpath("//*[@id=\"slide-out\"]/li[5]/a"));
		action.moveToElement(we).moveToElement(driver.findElement(By.xpath("//*[@id=\"slide-out\"]/li[5]/a"))).click().build().perform();
		//Apoio.wait(200);
		//driver.findElement(By.xpath("//*[@id=\"slide-out\"]/li[5]/a/span)")).click();

	}
	
	@Test
	public static void preencheCampoTerminal(String terminal) {
		Apoio.wait(1000);
		driver.findElement(By.name("terminal")).sendKeys(terminal);

	}
	
	@Test
	public static void clickTreeGSM() {
		// clica no item GSM da arvore.
		WebElement gsm = driver.findElement(By.cssSelector(
				"body > app-root > div > app-consulta-plataforma-list > div > div > div > div > div.col-sm-3.col-md-3.container > app-filtro-consulta > div > div > div.card-body.elementoAltura > form > p-tree > div > ul > p-treenode:nth-child(1) > li > div > span.ui-tree-toggler.pi.pi-fw.ui-unselectable-text.pi-caret-right"));
		gsm.click();
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
	
	
	@Test
	public static void validaResultadoOCS() {
		
		List<String> resultInfoBasic = new ArrayList<String>();
		resultInfoBasic.add("MSISDN 5541984645497");
		resultInfoBasic.add("Documento (CPF/CNPJ/PASSAPORTE) 07122361713");
		resultInfoBasic.add("Original ID 1-1EORFHEE");
		resultInfoBasic.add("ID da Conta 1-1G3AQ237OCS");
		resultInfoBasic.add("Plano Principal 5001");
		
		List<String> resultPlanSup1 = new ArrayList<String>();
		resultPlanSup1.add("ID do Plano Suplementar 2200001");
		resultPlanSup1.add("Data de Efetivação do plano suplementar 20199999990001");
		resultPlanSup1.add("Data de Expiração do plano suplementar 20199999990001");

		List<String> resultPlanSup2 = new ArrayList<String>();
		resultPlanSup2.add("ID do Plano Suplementar 2200002");
		resultPlanSup2.add("Data de Efetivação do plano suplementar 2019AABB17CC52");
		resultPlanSup2.add("Data de Expiração do plano suplementar 2036AABB21CC00");
		
		WebElement tabela1 = driver.findElement(By.xpath("//*[@id=\"ui-accordiontab-0-content\"]/div/div/p-table"));
		List<WebElement> linhasInfoBasic = tabela1.findElements(By.cssSelector("tr"));
		
		WebElement tabela2 = driver.findElement(By.xpath("//*[@id=\"ui-accordiontab-1-content\"]/div/div[1]/p-table/div/div[2]/table"));
		List<WebElement> linhasPlanSup1 = tabela2.findElements(By.cssSelector("tr"));
		
		WebElement tabela3 = driver.findElement(By.xpath("//*[@id=\"ui-accordiontab-1-content\"]/div/div[2]/p-table"));
		List<WebElement> linhasPlanSup2 = tabela3.findElements(By.cssSelector("tr"));
		
		int count = 0;
		for (WebElement element : linhasInfoBasic) {
			String result = element.getText();
			System.out.println("resultado: " + result);
			System.out.println("resultExp: " + resultInfoBasic.get(count).toString());
			
			Assert.assertEquals(resultInfoBasic.get(count).toString(), result);			
			count++;
		}	
		
		count = 0;
		for (WebElement element : linhasPlanSup1) {
			String result = element.getText();
			System.out.println("resultado: " + result);
			System.out.println("resultExp: " + resultPlanSup1.get(count).toString());
			
			Assert.assertEquals(resultPlanSup1.get(count).toString(), result);			
			count++;
		}
		
		count = 0;
		for (WebElement element : linhasPlanSup2) {
			String result = element.getText();
			System.out.println("resultado: " + result);
			System.out.println("resultExp: " + resultPlanSup2.get(count).toString());
			
			Assert.assertEquals(resultPlanSup2.get(count).toString(), result);			
			count++;
		}
	}
	
	
	@Test
	public static void clickBtnPesquisar() {
		// clica no item GSM/HLR/HLR43 da arvore.
		WebElement btnPesquisar = driver.findElement(By.xpath("//*[@type=\"button\"][text()=\"Pesquisar\"]"));
		btnPesquisar.click();
	}
	
	@Test
	public static void clickBtnLimpar() {
		// clica no item GSM/HLR/HLR43 da arvore.
		WebElement btnPesquisar = driver.findElement(By.xpath("//*[@type=\"button\"][text()=\"Limpar\"]"));
		btnPesquisar.click();
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
