$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ConsultaPlataformasID.feature");
formatter.feature({
  "line": 2,
  "name": "Realiza consulta por ID no portal Consulta Plataformas",
  "description": "Como um usu�rio\neu quero realizar consultas por ID\nno portal Consulta Plataformas.",
  "id": "realiza-consulta-por-id-no-portal-consulta-plataformas",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ConsultaID"
    },
    {
      "line": 1,
      "name": "@ConsultaALL"
    }
  ]
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Realiza consulta por ID com sucesso.",
  "description": "",
  "id": "realiza-consulta-por-id-no-portal-consulta-plataformas;realiza-consulta-por-id-com-sucesso.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@ConsultaID"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "acesso o menu Consulta Plataformas",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "preencho os dados da tela com ID \u003cid\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "seleciono a plataforma \u003cplataforma\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "clico no botao Pesquisar",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "devo ver os dados exibidos",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "validar as informacoes da OCS Huawei OCS01 \u003cidresult\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "realiza-consulta-por-id-no-portal-consulta-plataformas;realiza-consulta-por-id-com-sucesso.;",
  "rows": [
    {
      "cells": [
        "id",
        "plataforma",
        "idresult"
      ],
      "line": 20,
      "id": "realiza-consulta-por-id-no-portal-consulta-plataformas;realiza-consulta-por-id-com-sucesso.;;1"
    },
    {
      "cells": [
        "\"12345\"",
        "\"OCS Huawei OCS01\"",
        "\"id\""
      ],
      "line": 21,
      "id": "realiza-consulta-por-id-no-portal-consulta-plataformas;realiza-consulta-por-id-com-sucesso.;;2"
    },
    {
      "cells": [
        "\"123456789012345\"",
        "\"OCS Huawei OCS01\"",
        "\"id\""
      ],
      "line": 22,
      "id": "realiza-consulta-por-id-no-portal-consulta-plataformas;realiza-consulta-por-id-com-sucesso.;;3"
    },
    {
      "cells": [
        "\"55313393211\"",
        "\"OCS Huawei OCS01\"",
        "\"id O MSISDN n�o possui Plano Suplementar na plataforma OCS - consulta sem oferta\""
      ],
      "line": 23,
      "id": "realiza-consulta-por-id-no-portal-consulta-plataformas;realiza-consulta-por-id-com-sucesso.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 132000,
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
  "name": "que estou logado no site",
  "keyword": "Given "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.queEstouLogadoNoSite()"
});
formatter.result({
  "duration": 72427123000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Realiza consulta por ID com sucesso.",
  "description": "",
  "id": "realiza-consulta-por-id-no-portal-consulta-plataformas;realiza-consulta-por-id-com-sucesso.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ConsultaALL"
    },
    {
      "line": 1,
      "name": "@ConsultaID"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "acesso o menu Consulta Plataformas",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "preencho os dados da tela com ID \"12345\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "seleciono a plataforma \"OCS Huawei OCS01\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "clico no botao Pesquisar",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "devo ver os dados exibidos",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "validar as informacoes da OCS Huawei OCS01 \"id\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.acessoOMenuConsultaPlataformas()"
});
formatter.result({
  "duration": 2830899300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 34
    }
  ],
  "location": "ConsultaPlataformasIdSteps.preenchoOsDadosDaTelaComID(String)"
});
formatter.result({
  "duration": 6643417600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OCS Huawei OCS01",
      "offset": 24
    }
  ],
  "location": "ConsultaPlataformasIdSteps.selecionoAPlataforma(String)"
});
formatter.result({
  "duration": 150999500,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 43501301,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 26101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 40
    },
    {
      "val": "id",
      "offset": 44
    }
  ],
  "location": "ConsultaPlataformasIdSteps.validarAsInformacoesDaOCSHuaweiOCS(int,String)"
});
formatter.result({
  "duration": 17922570400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...o Plano Suplementar [2]200001\u003e but was:\u003c...o Plano Suplementar [1]200001\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat br.steps.ElementMap.validaResultadoOCSid(ElementMap.java:331)\r\n\tat br.steps.ConsultaPlataformasIdSteps.validarAsInformacoesDaOCSHuaweiOCS(ConsultaPlataformasIdSteps.java:61)\r\n\tat ✽.And validar as informacoes da OCS Huawei OCS01 \"id\"(ConsultaPlataformasID.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1290100700,
  "status": "passed"
});
formatter.after({
  "duration": 4120471900,
  "status": "passed"
});
formatter.before({
  "duration": 40100,
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
  "name": "que estou logado no site",
  "keyword": "Given "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.queEstouLogadoNoSite()"
});
formatter.result({
  "duration": 178652358900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Realiza consulta por ID com sucesso.",
  "description": "",
  "id": "realiza-consulta-por-id-no-portal-consulta-plataformas;realiza-consulta-por-id-com-sucesso.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ConsultaALL"
    },
    {
      "line": 1,
      "name": "@ConsultaID"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "acesso o menu Consulta Plataformas",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "preencho os dados da tela com ID \"123456789012345\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "seleciono a plataforma \"OCS Huawei OCS01\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "clico no botao Pesquisar",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "devo ver os dados exibidos",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "validar as informacoes da OCS Huawei OCS01 \"id\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.acessoOMenuConsultaPlataformas()"
});
formatter.result({
  "duration": 2979245899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456789012345",
      "offset": 34
    }
  ],
  "location": "ConsultaPlataformasIdSteps.preenchoOsDadosDaTelaComID(String)"
});
formatter.result({
  "duration": 21917740600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OCS Huawei OCS01",
      "offset": 24
    }
  ],
  "location": "ConsultaPlataformasIdSteps.selecionoAPlataforma(String)"
});
formatter.result({
  "duration": 151594400,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 43812500,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 8300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 40
    },
    {
      "val": "id",
      "offset": 44
    }
  ],
  "location": "ConsultaPlataformasIdSteps.validarAsInformacoesDaOCSHuaweiOCS(int,String)"
});
formatter.result({
  "duration": 24108156100,
  "status": "passed"
});
formatter.after({
  "duration": 1289721900,
  "status": "passed"
});
formatter.after({
  "duration": 4130117599,
  "status": "passed"
});
formatter.before({
  "duration": 52399,
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
  "name": "que estou logado no site",
  "keyword": "Given "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.queEstouLogadoNoSite()"
});
