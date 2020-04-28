$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Google.feature");
formatter.feature({
  "line": 2,
  "name": "Pesquisar dados no google.",
  "description": "Como um usuario\r\neu quero pesquisar dados no google\r\ne pesquisar pela palavra teste.",
  "id": "pesquisar-dados-no-google.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Funcionais"
    },
    {
      "line": 1,
      "name": "@TesteAmbiente"
    }
  ]
});
formatter.before({
  "duration": 222100,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Acesso o site google",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleSteps.realizaOLoginNoSite()"
});
formatter.result({
  "duration": 8523127100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Realiza pesquisa no google.",
  "description": "",
  "id": "pesquisar-dados-no-google.;realiza-pesquisa-no-google.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "preencho o campo Pesquisa com valor \"teste\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "eu clicar no botao pesquisar",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "visualizo o resultado da pesquisa",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "teste",
      "offset": 37
    }
  ],
  "location": "GoogleSteps.preenchoCampoPesquisa(String)"
});
formatter.result({
  "duration": 1414847800,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.clicaBotaoPesquisar()"
});
formatter.result({
  "duration": 1562857900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.visualizaPesquisa()"
});
formatter.result({
  "duration": 350945200,
  "status": "passed"
});
formatter.after({
  "duration": 1283163700,
  "status": "passed"
});
formatter.after({
  "duration": 4134134700,
  "status": "passed"
});
});