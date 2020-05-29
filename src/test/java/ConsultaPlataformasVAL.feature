@ConsultaVAL @ConsultaALL
Feature: Realiza validacoes na tela Consulta Plataformas 
  Como um usu�rio
  eu quero realizar uma consulta por ID
  no portal Consulta Plataformas.
  
Background:
	 Given que estou logado no site
  
  @ignore
  Scenario Outline: Realiza consulta por ID com falhas
    And acesso o menu Consulta Plataformas
    When preencho os dados da tela com ID <id>
    And seleciono a plataforma <plataforma>
    And clico no botao Pesquisar
    Then devo ver os dados exibidos
    And validar as informacoes da OCS Huawei OCS01 <idresult>
  
   Examples: 
      |  				id  				  |  		plataforma	  		|								idresult  																														|
      | "123456789012345"     |  "OCS Huawei OCS01"		|	"ID falha 2 - Subscriber 1-1EORFHEE does not exist.  - assinante inexistente"				|
      | "55313393211"     		|  "OCS Huawei OCS01"   | "id O MSISDN não possui Plano Suplementar na plataforma OCS - consulta sem oferta"  |
 
  @ignore
  Scenario Outline: Realiza consulta de cliente inexistente
    And acesso o menu Consulta Plataformas
    When preencho os dados da tela com ID <id>
    And seleciono a plataforma <plataforma>
    And clico no botao Pesquisar
    Then vejo a mensagem <msg>
   
   Examples: 
      |  				id  	       |   									msg   											 |
      | "123456789012"       |    "Customer 03322361703 does not exist."       |
      
      
      
  @ConsultaVAL
  Scenario Outline: Valida mensagens do campo TERMINAL
    And acesso o menu Consulta Plataformas
    When seleciono o Radio <entrada> 
    And preencho o campo Terminal com <terminal>
    Then devo ver a mensagem <msg>								
  
   Examples: 
     |	 entrada  	   |         terminal  			  		|                        msg												    	|							   					
     |	"IMSI"    	   | "012345678901234"			      |    "O IMSI deve começar com '724'."                     | 
     |	"IMSI"    	   | "724012345678901"			      |    "IMSI"                	                              |
     |  "IMSI"   			 | ""                           |    "Campo inválido"        											        |								
 		 |	"MSISDN"       | "12345678901"			          |    "MSISDN"                                             |	
     |	"MSISDN"       | "5512345678901"			        |    "MSISDN"	                                            |
     |	"MSISDN"       | "1234567890123"			        |    "O MSISDN com 13 caracteres deve começar com '55'."  | 
     |	"TERMINAL"  	 | "1234567890"			            |    "Terminal"   	                                      |	
     |	"TERMINAL"   	 | "123456789"			            |    "Campo inválido"                                    	|	
     |	"ID"    	     | "1234"			                  |    "Campo inválido"                                   	|
     |	"ID"    	     | "12345"                			|    "ID do Assinante"	                                  |
     |	"ID"    	     | "12345678901234567890"  			|    "ID do Assinante"	                                  |
     |	"CPF"    	     | "12345678901"		           	|    "CPF"	                                              |
     |	"CPF"    	     | "123456789012"		          	|    "Campo inválido"                                    	|
     |	"CNPJ"      	 | "12345678901234"			        |    "CNPJ"                                             	|
     |	"CNPJ"      	 | "123456789012345"			      |    "Campo inválido"	                                    |

	@ConsultaVAL
	Scenario Outline: Valida mensagem selecao invalida da plataforma 
		And acesso o menu Consulta Plataformas
		When seleciono o Radio <entrada> 
    And preencho o campo Terminal com <terminal>
    And seleciono a plataforma <plataforma>
    Then devo ver a mensagem de erro <msg>
    Examples: 
     |	 entrada  	   |         terminal  		|       plataforma       |                        msg												    	                                      |							   					
     |	"ID"    	     | "12345"			        |  "VMS Novitech VMS04"  | "A opção VMS04 não pode ser selecionado quando o campo 'Entrada' e do tipo ID do Assinante!" | 
     |	"CPF"    	     | "12345678901"        |  "VMS Novitech VMS04"  | "A opção VMS04 não pode ser selecionado quando o campo 'Entrada' e do tipo CPF!"             |
     |	"TERMINAL"     | "1234567890"         |  "VMS Novitech VMS04"  | "A opção VMS04 não pode ser selecionado quando o campo 'Entrada' e do tipo Terminal!"        |
     |	"MSISDN"       | "12345678901"        |  "IMS SAM01"           | "A opção SAM01 não pode ser selecionado quando o campo 'Entrada' e do tipo MSISDN!"          |
     |	"IMSI"         | "724123456789012"    |  "VMS Novitech VMS04"  | "A opção VMS04 não pode ser selecionado quando o campo 'Entrada' e do tipo IMSI!"            |
     
     
     
