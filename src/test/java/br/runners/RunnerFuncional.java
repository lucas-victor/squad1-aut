package br.runners;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/",    //Caminho onde estão as features do cucumber.
	    glue = "br.steps",    //Pacote onde estão as classes de steps.
		tags = {"@ConsultaID", "~@ignore"},    //Teste marcados com a tag serão executados
		plugin = {"pretty", "html:target/relatorios", //formatos do relatório html, json, xml.
				"json:target/relatorios/relatorios-json",
				"junit:target/relatorios/relatorios-junit",
				"com.cucumber.listener.ExtentCucumberFormatter:target/relatorios/extent-report.html"},    
		monochrome = true,    //Tornar saída no terminal mais legível.
		snippets = SnippetType.CAMELCASE,     //Muda escrita dos métodos gerados para camelcase.
		dryRun = false,    //Se true o cucumber só verifica se os passos no .feature tem métodos relacionados.
		strict = false     //Se false cucumber ignora passos indefinidos e build será sucesso. 
		)

public class RunnerFuncional {
	
	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File(Apoio.getReportConfigPath()));
		Reporter.setSystemInfo("User Name", "Squadra");
		Reporter.setSystemInfo("Time zone", System.getProperty("user.timezone"));
		Reporter.setSystemInfo("Selenium", "3.11.0");
		Reporter.setSystemInfo("Cucumber", "1.2.5");
		Reporter.setSystemInfo("JUnit", "1.2.6");
		Reporter.setSystemInfo("Java", "1.8.0_251");
		Reporter.setSystemInfo("Navegador", "Chrome");
		
	}
}