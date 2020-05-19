@ConsultaVAL @ConsultaALL
Feature: Realiza consulta por ID no portal Consulta Plataformas 
  Como um usuário
  eu quero realizar uma consulta por ID
  no portal Consulta Plataformas.
  
Background:
	 Given que estou logado no site
  
  @ConsultaVAL
  Scenario Outline: Realiza consulta por ID com falhas.
    And acesso o menu Consulta Plataformas
    When preencho os dados da tela com ID <id>
    And seleciono a plataforma <plataforma>
    And clico no botao Pesquisar
    Then devo ver os dados exibidos
    And validar as informacoes da OCS Huawei OCS01 <idresult>
  
   Examples: 
      |  				id  				  |  		plataforma	  		|								idresult  																														|
      | "1"	       				  	|  "OCS Huawei OCS01"		|	"ID falha nenhum caractere"     																										|
      | "123456789012345"     |  "OCS Huawei OCS01"		|	"ID falha 2 - Subscriber 1-1EORFHEE does not exist.  - assinante inexistente"				|
      | "55313393211"     		|  "OCS Huawei OCS01"   | "id O MSISDN não possui Plano Suplementar na plataforma OCS - consulta sem oferta"  |
 
  @ConsultaVAL
  Scenario Outline: Realiza consulta de cliente inexistente.
    And acesso o menu Consulta Plataformas
    When preencho os dados da tela com ID <id>
    And seleciono a plataforma <plataforma>
    And clico no botao Pesquisar
    Then vejo a mensagem <msg>
   
   Examples: 
      |  				id  	       |   									msg   											 |
      | "123456789012"       |    "Customer 03322361703 does not exist."       |
      
      
      
  @ConsultaVAL
  Scenario Outline: Valida o campo TERMINAL.
    And acesso o menu Consulta Plataformas
    When preencho o campo <terminal> com o valor <valor>
    Then devo ver a mensagem <msg>								
  
   Examples: 
     |	 terminal  	   |         valor  			  		 	|                        msg													|							
     |  "IMSI"   			 | "12345 com 4 caracteres"     |    "Campo invalido!"        												|						
     |	"IMSI"    	   | "123456 com	15 sem 724"			|    "Campo invalido! O IMSI deve começar com "724"".	|							
 		 |	"MSISDN"       | "123456 com	15 sem 724"			|    "Campo invalido! O IMSI deve começar com "724"".	|	
     |	"MSISDN"       | "123456 com	15 sem 724"			|    "Campo invalido! O IMSI deve começar com "724"".	|	
     |	"TERMINAL"  	 | "123456 com	15 sem 724"			|    "Campo invalido! O IMSI deve começar com "724"".	|	
     |	"TERMINAL"   	 | "123456 com	15 sem 724"			|    "Campo invalido! O IMSI deve começar com "724"".	|	
     |	"ID"    	     | "123456 com	15 sem 724"			|    "Campo invalido! O IMSI deve começar com "724"".	|
     |	"ID"    	     | "123456 com	15 sem 724"			|    "Campo invalido! O IMSI deve começar com "724"".	|
     |	"CPF"    	     | "123456 com	15 sem 724"			|    "Campo invalido! O IMSI deve começar com "724"".	|
     |	"CPF"    	     | "123456 com	15 sem 724"			|    "Campo invalido! O IMSI deve começar com "724"".	|
     |	"CNPJ"      	 | "123456 com	15 sem 724"			|    "Campo invalido! O IMSI deve começar com "724"".	|
     |	"CNPJ"      	 | "123456 com	15 sem 724"			|    "Campo invalido! O IMSI deve começar com "724"".	|

