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
@tag
Feature: Realiza consulta por ID no portal Consulta Plataformas 
  Como um usuário
  eu quero realizar uma consulta por ID
  no portal Consulta Plataformas.
  
Background:
	 Given que estou logado no site
  
  @tag1
  Scenario Outline: Realiza consulta por ID com sucesso.
    And acesso o menu Consulta Plataformas
    When preencho os dados da tela com ID <id>
    And seleciono a plataforma OCS Huawei OCS01
    And clico no botao Pesquisar
    Then devo ver os dados exibidos
    And validar as informacoes da OCS Huawei OCS01 <idresult>
  
   Examples: 
      |  id  			 |   idresult   |
      | 12345      |    "ID"      |
      | 123456     |    "ID"      |
  
 
      
      
      

