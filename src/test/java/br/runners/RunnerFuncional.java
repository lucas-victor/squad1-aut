package br.runners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/",    //Caminho onde estão as features do cucumber.
	    glue = "br.steps",    //Pacote onde estão as classes de steps.
		tags = {"@Funcionais", "~@ignore"},    //Teste marcados com a tag serão executados
		plugin = {"pretty", "html:target/relatorios-html", //formatos do relatório html, json, xml.
				"json:target/relatorios-json",
				"junit:target/relatorios-junit"},    
		monochrome = true,    //Tornar saída no terminal mais legível.
		snippets = SnippetType.CAMELCASE,     //Muda escrita dos métodos gerados para camelcase.
		dryRun = false,    //Se true o cucumber só verifica se os passos no .feature tem métodos relacionados.
		strict = false     //Se false cucumber ignora passos indefinidos e build será sucesso. 
		)

public class RunnerFuncional {
	
}