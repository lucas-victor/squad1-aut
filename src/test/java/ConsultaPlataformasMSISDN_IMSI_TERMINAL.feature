@ConsultaMSISDN_IMSI_TER @ConsultaALL
Feature: Realiza consulta por MSISDN/IMSI/TERMINAL no portal Consulta Plataformas 
  Como um usuário
  eu quero realizar uma consulta por MSISDN / IMSI / TERMINAL
  no portal Consulta Plataformas.

Background:
	 Given que estou logado no site
	 
  @tagg1
  Scenario Outline: Realiza consulta por MSISDN com sucesso.
    And acesso o menu Consulta Plataformas
    When preencho os dados da tela com MSISDN <msisdn>
    And seleciono a plataforma <plataforma>
    And clico no botao Pesquisar 
    Then devo ver os dados exibidos
    And validar as informacoes da plataforma <msisdnresult>
  
   Examples: 
      |  							msisdn  		         							     |		plataforma			|     msisdnresult    |
      | "numerico 11 digitos - 12345678901"                  |		"HLR Nokia"			|    "ID"             |
      | "numerico 13 digitos se iniciado 55 - 5534567890123" |		"SMSC03" 				|    "ID"             |

  
  @tagg2
  Scenario Outline: Realiza consulta por IMSI com sucesso.
    And acesso o menu Consulta Plataformas
    When preencho os dados da tela com IMSI <imsi>
    And seleciono a plataforma <plataforma>
    And clico no botao Pesquisar
    Then devo ver os dados exibidos
    And validar as informacoes da OCS Huawei OCS01 <imsiresult>
  
   Examples: 
      | 				 	imsi  				 		  										|   plataforma   	  	|   imsiresult    |
      | "num 15 dig iniciado 724 - 724456789012345"       |		"HLR Nokia"   	  |    "ID"         |
      | "num 15 dig iniciado 724 - 724456789012345"       |		"LSMS02"					|    "ID"         |
      
 
  @tagg3
  Scenario Outline: Realiza consulta por TERMINAL com sucesso.
    And acesso o menu Consulta Plataformas
    When preencho os dados da tela com TERMINAL <terminal>
    And seleciono a plataforma <plataforma>
    And clico no botao Pesquisar
    Then devo ver os dados exibidos
    And validar as informacoes da OCS Huawei OCS01 <imsiresult>
  
   Examples: 
      | 				 	imsi  				 		|    plataforma   		|   imsiresult    |
      | "num 10 dig - 1234567890"   |			"Tropico"   	  |    "ID"         |
      | "num 10 dig - 7244567890"   |			"VMP05"		  		|    "ID"         |
