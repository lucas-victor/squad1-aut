package br.steps;

import java.io.File;
import java.io.IOException;

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
//import junit.framework.Assert;

public class ElementMap {

	// Variáveis.
	public static WebDriver driver;
	final static int CHROMEDRIVER = 1;
	final static int FIREFOXDRIVER = 2;

	// Métodos
	@Test
	public static void efetuaLogin() {

		// instancia o driver. 1 = chrome, 2 = firefox
		driver = Apoio.initDriver(FIREFOXDRIVER);

		// maximiza tela
		// driver.manage().window().maximize();

		// Acessa a url.
		driver.get("https://www.google.com.br/");

		Apoio.wait(2000);

	}

	// preenche campo pesquisa com o valor teste
	@Test
	public static void preencheCampoPesquisa(String valor) {

		driver.findElement(By.name("q")).sendKeys(valor);
		print("Teste print preencheCampoPesquisa");

	}

	// clica no botão Pesquisa
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

	// Configuração dos hooks para executar após todos os cenários.
	@Before
	public static void msgStart() {
		System.out.println("iniciando teste.");
	}

	@After(order = 1) // @After(order = 1) ou @After(order = 1, value = { "@Funcionais" })
	public static void screenshot(Scenario cenario) {
		File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		Apoio.wait(1000);
		try {
			FileUtils.copyFile(file, new File("target/screenshot/" + cenario.getId() + ".jpg"));
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
