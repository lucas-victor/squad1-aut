package br.utils;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.interactions.Actions;

public class Selenium {

	private static WebDriver driver = null;
	private WebElement element = null;

	private static String pathChromeDriverWin = System.getProperty("user.dir")
			+ "\\src\\test\\resources\\drivers\\chromedriver.exe";
	private static String pathChromeDriverLinux = System.getProperty("user.dir")
			+ "//src//test//resources//drivers//chromedriver";
	private static String pathFirefoxDriverWin = System.getProperty("user.dir")
			+ "\\src\\test\\resources\\drivers\\geckodriver.exe";
	private static String pathFirefoxDriverLinux = System.getProperty("user.dir")
			+ "//src//test//resources//drivers//geckodriver";

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
		// driver.manage().window().maximize();

		// 45 sec implcity wait VPN. 10 sec local.
		driver.manage().timeouts().implicitlyWait(45, TimeUnit.SECONDS);

		return driver;
	}

	public static void clickElementId(String id) {
		driver.findElement(By.id(id));
	}

	public static void clickElementName(String name) {
		driver.findElement(By.name(name));
	}

	public static void clickElementXpath(String xpath) {
		driver.findElement(By.xpath(xpath));
	}

	public static void clickElementCssSelector(String cssSelector) {
		driver.findElement(By.cssSelector(cssSelector));
	}

	public static void mouseHouverClick(WebDriver driver, String xpath) {

		Actions action = new Actions(driver);
		WebElement we = driver.findElement(By.xpath("//*[@id=\"slide-out\"]/li[5]/a"));
		Apoio.wait(1000);
		action.moveToElement(we).moveToElement(driver.findElement(By.xpath("//*[@id=\"slide-out\"]/li[5]/a"))).click()
				.build().perform();
	}

	public static void escreveElementId(String texto, String id) {
		driver.findElement(By.id(id)).sendKeys(texto);
	}

	public static void escreveElementName(String texto, String name) {
		driver.findElement(By.id(name)).sendKeys(texto);
	}

	public static void escreveElementXpath(String texto, String xpath) {
		driver.findElement(By.xpath(xpath)).sendKeys(texto);
	}

	public static void escreveElementCssSelector(String texto, String cssSelector) {
		driver.findElement(By.cssSelector(cssSelector)).sendKeys(texto);
	}

	public static void acessaPagina(String url) {
		driver.get(url);
	}

}
