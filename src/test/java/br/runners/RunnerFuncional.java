package br.runners;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import br.relatorio.Relatorio;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features",    //Caminho onde estao as features do cucumber.
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
		//gera o Relatorio
		Relatorio.geraRelatorio();
		//faz backup do relatorio gerado.
		Relatorio.zipFolder();
	}
	
	@BeforeClass
	public static void limpaPrints() {
		System.out.println("Inicializando Teste...");
		//limpa pastas de relatórios
		Relatorio.limparPastas();			
	}

}