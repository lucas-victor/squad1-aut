package br.runners;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Apoio {

	public static WebDriver driver;

	// Pega driver escolhido pro SO utilizado.
	public static WebDriver initDriver(int numDriver) {
		String osname = System.getProperty("os.name");

		/*
		 * 1 - chrome driver 
		 * 2 - firefox driver
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

		return driver;
	}

	public static String getReportConfigPath() {
		String reportConfigPath = System.getProperty("user.dir") + "\\src\\test\\resources\\configs\\extent-config.xml";
		if (reportConfigPath != null)
			return reportConfigPath;
		else
			throw new RuntimeException(
					"Report Config Path not specified - extent-config.xml");
	}

	// metodo aguardar tempo em mili seconds
	public static void wait(int tempo) {

		try {
			Thread.sleep(tempo);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

}
