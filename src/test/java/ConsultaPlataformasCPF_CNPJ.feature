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
Feature: Realiza consulta por CPF e CNPJ no portal Consulta Plataformas 
  Como um usuário
  eu quero realizar uma consulta por CPF CNPJ
  no portal Consulta Plataformas.

  @tag1
  Scenario Outline: Realiza consulta por CPF com sucesso.
    And acesso o menu Consulta Plataformas
    When preencho os dados da tela com CPF <cpf>
    And seleciono a plataforma OCS Huawei OCS01
    And clico no botao Pesquisar
    Then devo ver os dados exibidos
    And validar as informacoes da OCS Huawei OCS01 <cpfresult>
  
   Examples: 
      |  cpf  			 |   cpfresult    |
      | 12345        |    "ID"        |
      | 123456       |    "ID"        |

  
  @tag2
  Scenario Outline: Realiza consulta por CNPJ com sucesso.
    And acesso o menu Consulta Plataformas
    When preencho os dados da tela com CNPJ <cnpj>
    And seleciono a plataforma OCS Huawei OCS01
    And clico no botao Pesquisar
    Then devo ver os dados exibidos
    And validar as informacoes da OCS Huawei OCS01 <cnpjresult>
  
   Examples: 
      |  cnpj  			 |   cnpjresult    |
      | 12345        |    "ID"         |
      | 123456       |    "ID"         |
