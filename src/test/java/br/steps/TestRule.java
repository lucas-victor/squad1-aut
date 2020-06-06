package br.steps;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

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

	private static String pathChromeDriverWin =  System.getProperty("user.dir") + "\\src\\test\\resources\\chromedriver\\chromedriver.exe";
	private static String pathChromeDriverLinux = System.getProperty("user.dir") + "//src//test//resources//chromedriver//chromedriver";
	private static String pathFirefoxDriverWin = System.getProperty("user.dir") + "\\src\\test\\resources\\firefoxdriver\\geckodriver.exe";
	private static String pathFirefoxDriverLinux = System.getProperty("user.dir") + "//src//test//resources//firefoxdriver//geckodriver";
	
	// Pega driver pro SO utilizado.
	public static WebDriver initDriver(int numDriver, String modo) {
		String osname = System.getProperty("os.name");
		/*
		 * 1 - chrome driver 2 - firefox driver
		 */

		switch (numDriver) {
		case 1:
			System.out.println("Inicializando Chrome Driver...");
			if (osname.toLowerCase().contains("windows")) {

				if (modo.equalsIgnoreCase("headless")) {
					// Ativa a option do modo headless browser
					ChromeOptions options = new ChromeOptions();
					options.addArguments("--headless");
					System.setProperty("webdriver.chrome.driver", pathChromeDriverWin);
					// instancia o driver passando a option do modo headless.
					driver = new ChromeDriver(options);

				} else {
					System.setProperty("webdriver.chrome.driver", pathChromeDriverWin);
					// instancia o driver passando a option do modo headless.
					driver = new ChromeDriver();
				}

			} else {
				if (modo.equalsIgnoreCase("headless")) {
					// Ativa a option do modo headless browser
					ChromeOptions options = new ChromeOptions();
					options.addArguments("--headless");
					System.setProperty("webdriver.chrome.driver", pathChromeDriverLinux);
					driver = new ChromeDriver(options);

				} else {
					System.setProperty("webdriver.chrome.driver", pathChromeDriverLinux);
					driver = new ChromeDriver();
				}
			}
			break;

		case 2:
			System.out.println("Inicializando Firefox Driver...");
			if (osname.toLowerCase().contains("windows")) {

				if (modo.equalsIgnoreCase("headless")) {
					// Ativa a option do modo headless browser
					FirefoxOptions options = new FirefoxOptions();
					options.addArguments("--headless");
					System.setProperty("webdriver.gecko.driver", pathFirefoxDriverWin);
					driver = new FirefoxDriver(options);
					
				} else {
					System.setProperty("webdriver.gecko.driver", pathFirefoxDriverWin);
					driver = new FirefoxDriver();
				}
			} else {
				
				if (modo.equalsIgnoreCase("headless")) {
					// Ativa a option do modo headless browser
					FirefoxOptions options = new FirefoxOptions();
					options.addArguments("--headless");
					System.setProperty("webdriver.gecko.driver", pathFirefoxDriverLinux);
					driver = new FirefoxDriver(options);	
					
				} else {
					System.setProperty("webdriver.gecko.driver", pathFirefoxDriverLinux);
					driver = new FirefoxDriver();
				}
			}

		default:
			System.out.println("Informar driver válido.");
			break;
		}

		// maximiza tela
		//driver.manage().window().maximize();

		// 45 sec implcity wait VPN. 10 sec local.
		driver.manage().timeouts().implicitlyWait(45, TimeUnit.SECONDS);

		return driver;
	}

	public static String getReportConfigPath() {
		String reportConfigPath = System.getProperty("user.dir") + "\\src\\test\\resources\\configs\\extent-config.xml";
		return reportConfigPath;
	}
	
	
	
	/*
	 * public static WebElement waitForElement(WebElement elementToWaitFor){ return
	 * waitForElement(elementToWaitFor, null); }
	 * 
	 * public static WebElement waitForElement(WebElement elementToWaitFor, Integer
	 * waitTimeInSeconds) { if (waitTimeInSeconds == null) { waitTimeInSeconds = 10;
	 * }
	 * 
	 * WebDriverWait wait = new WebDriverWait(getCurrentDriver(),
	 * waitTimeInSeconds); return
	 * wait.until(ExpectedConditions.visibilityOf(elementToWaitFor)); }
	 */
	
    public static WebElement getParent(WebElement element) {
        return element.findElement(By.xpath(".."));
    }
    
    public static List<WebElement> getDropDownOptions(WebElement webElement) {
        Select select = new Select(webElement);
        return select.getOptions();
    }
    
    public static WebElement getDropDownOption(WebElement webElement, String value) {
    	WebElement option = null;
        List<WebElement> options = getDropDownOptions(webElement);
        for (WebElement element : options) {
            if (element.getAttribute("value").equalsIgnoreCase(value)) {
                option = element;
                break;
            }
        }
        return option;
    }
	
	
	
	

	@Before(order = 0)
	public void beforeCenario(Scenario cenario) throws IOException {

		// System.out.println("Inicializando Teste...");
		// Compactador.compactarRelatorio();
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
