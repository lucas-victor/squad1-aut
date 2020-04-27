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
		features = "src/test/java/",    //Caminho onde est�o as features do cucumber.
	    glue = "br.steps",    //Pacote onde est�o as classes de steps.
		tags = {"@Funcionais", "~@ignore"},    //Teste marcados com a tag ser�o executados
		plugin = {"pretty", "html:target/relatorios", //formatos do relat�rio html, json, xml.
				"json:target/relatorios/relatorios-json",
				"junit:target/relatorios/relatorios-junit",
				"com.cucumber.listener.ExtentCucumberFormatter:target/relatorios/extent-report.html"},    
		monochrome = true,    //Tornar sa�da no terminal mais leg�vel.
		snippets = SnippetType.CAMELCASE,     //Muda escrita dos m�todos gerados para camelcase.
		dryRun = false,    //Se true o cucumber s� verifica se os passos no .feature tem m�todos relacionados.
		strict = false     //Se false cucumber ignora passos indefinidos e build ser� sucesso. 
		)

public class RunnerFuncional {
	
	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File(Apoio.getReportConfigPath()));	
	}
}