package br.runners;

import java.io.File;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import br.steps.TestRule;
import br.utils.FolderZiper;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/",    //Caminho onde estao as features do cucumber.
	    glue = "br.steps",    //Pacote onde estao as classes de steps.
		tags = {"@ConsultaALL", "~@ignore"},    //Teste marcados com a tag serao executados
		plugin = {"pretty", "html:target/relatorios", //formatos do relatario html, json, xml.
				"json:target/relatorios/relatorios-json",
				"junit:target/relatorios/relatorios-junit",
				"com.cucumber.listener.ExtentCucumberFormatter:target/relatorios/extent-report.html"},    
		monochrome = true,    //Tornar saida no terminal mais legivel.
		snippets = SnippetType.CAMELCASE,     //Muda escrita dos metodos gerados para camelcase.
		dryRun = false,    //Se true o cucumber so verifica se os passos no .feature tem metodos relacionados.
		strict = false     //Se false cucumber ignora passos indefinidos e build sera sucesso. 
		)

public class RunnerFuncional {
	
	@AfterClass
	public static void writeExtentReport() throws Exception {
		Reporter.loadXMLConfig(new File(TestRule.getReportConfigPath()));
		Reporter.setSystemInfo("Author", "Lucas Victor");
		Reporter.setSystemInfo("User Name", "Squadra");
		Reporter.setSystemInfo("Time zone", System.getProperty("user.timezone"));
		Reporter.setSystemInfo("Selenium", "3.11.0");
		Reporter.setSystemInfo("Cucumber", "1.2.5");
		Reporter.setSystemInfo("JUnit", "1.2.6");
		Reporter.setSystemInfo("Java", "1.8.0_251");
		Reporter.setSystemInfo("Browser", "Chrome");
		
		//Gera o relatorio.
		Reporter.getExtentReport().flush();
		
		//faz backup do relatorio gerado.
		FolderZiper.zipFolder();
	}
	
	
	@BeforeClass
	public static void limpaPrints() {
		System.out.println("Inicializando Teste...");
		//limpa pastas
		FolderZiper.limparPastas();			
	}
}