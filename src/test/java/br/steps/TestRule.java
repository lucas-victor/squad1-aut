package br.steps;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.cucumber.listener.Reporter;

import br.runners.Apoio;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class TestRule {

	private static WebDriver driver;
	private static ExtentHtmlReporter htmlReporter;
	private static ExtentReports extentReport;
	private static ExtentTest extentTest;
	public static Scenario scenario;

	// Pega driver escolhido pro SO utilizado.
	public static WebDriver initDriver(int numDriver) {
		String osname = System.getProperty("os.name");

		/*
		 * 1 - chrome driver 2 - firefox driver
		 */

		switch (numDriver) {
		case 1:
			System.out.println("Inicializando Chrome Driver...");
			if (osname.toLowerCase().contains("windows")) {
				System.setProperty("webdriver.chrome.driver",
						System.getProperty("user.dir") + "\\src\\test\\resources\\chromedriver\\chromedriver.exe");
				driver = new ChromeDriver();
			} else {
				System.setProperty("webdriver.chrome.driver",
						System.getProperty("user.dir") + "//src//test//resources//chromedriver//chromedriver");
				driver = new ChromeDriver();
			}
			break;

		case 2:
			System.out.println("Inicializando Firefox Driver...");
			if (osname.toLowerCase().contains("windows")) {
				System.setProperty("webdriver.gecko.driver",
						System.getProperty("user.dir") + "\\src\\test\\resources\\firefoxdriver\\geckodriver.exe");
				driver = new FirefoxDriver();
			} else {
				System.setProperty("webdriver.gecko.driver",
						System.getProperty("user.dir") + "//src//test//resources//firefoxdriver//geckodriver");
				driver = new FirefoxDriver();
			}

		default:
			System.out.println("Favor informar algum driver.");
			break;
		}

		// maximiza tela
		// driver.manage().window().maximize();

		// 30 sec implcity wait
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		return driver;
	}

	public static String getReportConfigPath() {
		String reportConfigPath = System.getProperty("user.dir") + "\\src\\test\\resources\\configs\\extent-config.xml";
		return reportConfigPath;
	}

	@Before(order = 0)
	public void beforeCenario(Scenario cenario) throws IOException {

		//System.out.println("Inicializando Teste...");
		//Compactador.compactarRelatorio();
		/*
		 * if (extentReport == null) { extentReport = new ExtentReports(); htmlReporter
		 * = new ExtentHtmlReporter("target/relatorios/htmlReporter.html");
		 * extentReport.attachReporter(htmlReporter); } extentTest =
		 * extentReport.createTest(cenario.getId());
		 * 
		 * Reporter.addStepLog("Teste mensagem de log.");
		 */
	}

	@After(order = 1) // @After(order = 1) ou @After(order = 1, value = { "@Funcionais" })
	public static void afterCenario(Scenario cenario) {
		// data
		Date data = new Date();
		DateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy-HH.mm.ss");
		
		// print da tela.
		File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			String pathPrint = "target/relatorios/screenshot/"; 
			String namePrint = cenario.getName().replace(" ", "_") + "-" + dateFormat.format(data) + ".jpg";
			
			FileUtils.copyFile(file, new File(pathPrint + namePrint));

			// adiciona o print ao relatorio
			Reporter.addScreenCaptureFromPath("screenshot/" + namePrint);

		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@After(order = 0) // @After(order = 0) //
	public static void fecharBrowser() {
		Apoio.wait(1000);
		driver.quit();
	}
}
