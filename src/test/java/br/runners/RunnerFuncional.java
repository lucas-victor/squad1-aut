package br.runners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/",    //Caminho onde est�o as features do cucumber.
	    glue = "br.steps",    //Pacote onde est�o as classes de steps.
		tags = {"@Funcionais", "~@ignore"},    //Teste marcados com a tag ser�o executados
		plugin = {"pretty", "html:target/relatorios-html", //formatos do relat�rio html, json, xml.
				"json:target/relatorios-json",
				"junit:target/relatorios-junit"},    
		monochrome = true,    //Tornar sa�da no terminal mais leg�vel.
		snippets = SnippetType.CAMELCASE,     //Muda escrita dos m�todos gerados para camelcase.
		dryRun = false,    //Se true o cucumber s� verifica se os passos no .feature tem m�todos relacionados.
		strict = false     //Se false cucumber ignora passos indefinidos e build ser� sucesso. 
		)

public class RunnerFuncional {
	
}