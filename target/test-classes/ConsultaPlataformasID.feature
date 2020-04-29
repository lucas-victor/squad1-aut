@Funcionais
Feature: Realiza consulta por ID no portal Consulta Plataformas 
  Como um usuário
  eu quero realizar consultas por ID
  no portal Consulta Plataformas.
  
Background:
	 Given que estou logado no site
  
  @Funcionais
  Scenario Outline: Realiza consulta por ID com sucesso.
    And acesso o menu Consulta Plataformas
    When preencho os dados da tela com ID <id>
    And seleciono a plataforma OCS Huawei OCS01
    And clico no botao Pesquisar
    Then devo ver os dados exibidos
    And validar as informacoes da OCS Huawei OCS01 <idresult>
  
   Examples: 
      |  							id  					  	|   				idresult   						|
      | "55313393211"     							|    "ID consulta sem oferta"     |
 
      
      
      

