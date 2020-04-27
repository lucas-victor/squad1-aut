@Funcionais @TesteAmbiente
Feature: Pesquisar dados no google.
  Como um usuario
  eu quero pesquisar dados no google
  e pesquisar pela palavra teste.

Background: 
    Given Acesso o site google

  Scenario: Realiza pesquisa no google.
    When preencho o campo Pesquisa com valor "teste"
    And eu clicar no botao pesquisar
    Then visualizo o resultado da pesquisa
	
    
    
#Background: 
#    Given Acesso o site google

#Scenario Outline: Realiza pesquisa no google.
#    When preencho o campo Pesquisa com valor <valor>
#    And eu clicar no botao pesquisar
#    Then visualizo o resultado da pesquisa
#Examples:
#	| valor         |
#	| "automacao"   |
# | "automacao 2" |
