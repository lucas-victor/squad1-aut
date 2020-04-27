package br.steps;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import br.runners.Apoio;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.deps.com.thoughtworks.xstream.io.binary.Token.Formatter;
//import junit.framework.Assert;

public class ElementMap {

	// Vari�veis.
	public static WebDriver driver;
	final static int CHROMEDRIVER = 1;
	final static int FIREFOXDRIVER = 2;

	// M�todos
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

	// preenche campo pesquisa com o valor teste
	@Test
	public static void preencheCampoPesquisa(String valor) {

		driver.findElement(By.name("q")).sendKeys(valor);
		print("Teste print preencheCampoPesquisa");

	}

	// clica no bot�o Pesquisa
	@Test
	public static void clicaBotaoPesquisa() {

		driver.findElement(By.name("btnK")).click();

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
			FileUtils.copyFile(file, new File("target/screenshot/_" + nomePrint + ".jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	// Configura��o dos hooks para executar ap�s todos os cen�rios.
	@Before
	public static void msgStart(Scenario cenario) {
		
		cenario.getId();
		System.out.println("iniciando teste.");
	}

	@After(order = 1) // @After(order = 1) ou @After(order = 1, value = { "@Funcionais" })
	public static void screenshot(Scenario cenario) {
		Date data = new Date();
		DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy-HH.mm.ss");

		File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		Apoio.wait(1000);
		try {
			FileUtils.copyFile(file, new File("target/screenshot/" + cenario.getId() + dateFormat.format(data) + ".jpg"));
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
