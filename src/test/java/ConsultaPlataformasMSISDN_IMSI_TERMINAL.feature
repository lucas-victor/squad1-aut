#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tagg
Feature: Realiza consulta por MSISDN/IMSI/TERMINAL no portal Consulta Plataformas 
  Como um usuário
  eu quero realizar uma consulta por MSISDN / IMSI / TERMINAL
  no portal Consulta Plataformas.

  @tagg1
  Scenario Outline: Realiza consulta por MSISDN com sucesso.
    And acesso o menu Consulta Plataformas
    When preencho os dados da tela com MSISDN <msisdn>
    And seleciono a plataforma <plataforma>
    And clico no botao Pesquisar 
    Then devo ver os dados exibidos
    And validar as informacoes da plataforma <msisdnresult>
  
   Examples: 
      |  							msisdn  		           |		plataforma			|     msisdnresult    |
      | "numerico 11 digitos"                |		"HLR Nokia"			|    "ID"             |
      | "numerico 13 digitos se iniciado 55" |		"SMSC03" 				|    "ID"             |

  
  @tagg2
  Scenario Outline: Realiza consulta por IMSI com sucesso.
    And acesso o menu Consulta Plataformas
    When preencho os dados da tela com IMSI <imsi>
    And seleciono a plataforma <plataforma>
    And clico no botao Pesquisar
    Then devo ver os dados exibidos
    And validar as informacoes da OCS Huawei OCS01 <imsiresult>
  
   Examples: 
      | 				 	imsi  				 		  	|   plataforma   	  	|   imsiresult    |
      | "num 15 dig iniciado 724"       |		"HLR Nokia"   	  |    "ID"         |
      | "num 15 dig iniciado 724"       |		"LSMS02"					|    "ID"         |
      
 
  @tagg3
  Scenario Outline: Realiza consulta por TERMINAL com sucesso.
    And acesso o menu Consulta Plataformas
    When preencho os dados da tela com TERMINAL <terminal>
    And seleciono a plataforma <plataforma>
    And clico no botao Pesquisar
    Then devo ver os dados exibidos
    And validar as informacoes da OCS Huawei OCS01 <imsiresult>
  
   Examples: 
      | 				 	imsi  				 		  	|    plataforma   		|   imsiresult    |
      | "num 15 dig iniciado 724"       |			"Tropico"   	  |    "ID"         |
      | "num 15 dig iniciado 724"       |			"VMP05"		  		|    "ID"         |
