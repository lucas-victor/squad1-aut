$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ConsultaPlataformasCPF_CNPJ.feature");
formatter.feature({
  "line": 2,
  "name": "Realiza consulta por CPF e CNPJ no portal Consulta Plataformas",
  "description": "Como um usu�rio\neu quero realizar uma consulta por CPF CNPJ\nno portal Consulta Plataformas.",
  "id": "realiza-consulta-por-cpf-e-cnpj-no-portal-consulta-plataformas",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ConsultaCPFCNPJ"
    },
    {
      "line": 1,
      "name": "@ConsultaALL"
    }
  ]
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Realiza consulta por CPF com sucesso.",
  "description": "",
  "id": "realiza-consulta-por-cpf-e-cnpj-no-portal-consulta-plataformas;realiza-consulta-por-cpf-com-sucesso.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@ConsultaCPFCNPJ"
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
  "name": "preencho os dados da tela com CPF \u003ccpf\u003e",
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
  "name": "validar as informacoes da OCS Huawei OCS01 \u003ccpfresult\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "realiza-consulta-por-cpf-e-cnpj-no-portal-consulta-plataformas;realiza-consulta-por-cpf-com-sucesso.;",
  "rows": [
    {
      "cells": [
        "cpf",
        "plataforma",
        "cpfresult"
      ],
      "line": 20,
      "id": "realiza-consulta-por-cpf-e-cnpj-no-portal-consulta-plataformas;realiza-consulta-por-cpf-com-sucesso.;;1"
    },
    {
      "cells": [
        "\"07800568710\"",
        "\"OCS Huawei OCS01\"",
        "\"cpf\""
      ],
      "line": 21,
      "id": "realiza-consulta-por-cpf-e-cnpj-no-portal-consulta-plataformas;realiza-consulta-por-cpf-com-sucesso.;;2"
    },
    {
      "cells": [
        "\"07800568710\"",
        "\"OCS Huawei OCS01\"",
        "\"cpf\""
      ],
      "line": 22,
      "id": "realiza-consulta-por-cpf-e-cnpj-no-portal-consulta-plataformas;realiza-consulta-por-cpf-com-sucesso.;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 96500,
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
  "duration": 26509493600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Realiza consulta por CPF com sucesso.",
  "description": "",
  "id": "realiza-consulta-por-cpf-e-cnpj-no-portal-consulta-plataformas;realiza-consulta-por-cpf-com-sucesso.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ConsultaALL"
    },
    {
      "line": 1,
      "name": "@ConsultaCPFCNPJ"
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
  "name": "preencho os dados da tela com CPF \"07800568710\"",
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
  "name": "validar as informacoes da OCS Huawei OCS01 \"cpf\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.acessoOMenuConsultaPlataformas()"
});
formatter.result({
  "duration": 7116591700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07800568710",
      "offset": 35
    }
  ],
  "location": "ConsultaPlataformasCpfCnpjSteps.preenchoOsDadosDaTelaComCPF(String)"
});
formatter.result({
  "duration": 2779001300,
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
  "duration": 136232900,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 43809100,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 19700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 40
    },
    {
      "val": "cpf",
      "offset": 44
    }
  ],
  "location": "ConsultaPlataformasIdSteps.validarAsInformacoesDaOCSHuaweiOCS(int,String)"
});
formatter.result({
  "duration": 9660507600,
  "status": "passed"
});
formatter.after({
  "duration": 1289855700,
  "status": "passed"
});
formatter.after({
  "duration": 4133461600,
  "status": "passed"
});
formatter.before({
  "duration": 29700,
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
  "duration": 54306316400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Realiza consulta por CPF com sucesso.",
  "description": "",
  "id": "realiza-consulta-por-cpf-e-cnpj-no-portal-consulta-plataformas;realiza-consulta-por-cpf-com-sucesso.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ConsultaALL"
    },
    {
      "line": 1,
      "name": "@ConsultaCPFCNPJ"
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
  "name": "preencho os dados da tela com CPF \"07800568710\"",
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
  "name": "validar as informacoes da OCS Huawei OCS01 \"cpf\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.acessoOMenuConsultaPlataformas()"
});
formatter.result({
  "duration": 7088547100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07800568710",
      "offset": 35
    }
  ],
  "location": "ConsultaPlataformasCpfCnpjSteps.preenchoOsDadosDaTelaComCPF(String)"
});
formatter.result({
  "duration": 3978062700,
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
  "duration": 138817000,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 57828700,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 15600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 40
    },
    {
      "val": "cpf",
      "offset": 44
    }
  ],
  "location": "ConsultaPlataformasIdSteps.validarAsInformacoesDaOCSHuaweiOCS(int,String)"
});
formatter.result({
  "duration": 7854881300,
  "status": "passed"
});
formatter.after({
  "duration": 1275516800,
  "status": "passed"
});
formatter.after({
  "duration": 4121966000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Realiza consulta por CNPJ com sucesso.",
  "description": "",
  "id": "realiza-consulta-por-cpf-e-cnpj-no-portal-consulta-plataformas;realiza-consulta-por-cnpj-com-sucesso.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@ConsultaCPFCNPJ"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "acesso o menu Consulta Plataformas",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "preencho os dados da tela com CNPJ \u003ccnpj\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "seleciono a plataforma \u003cplataforma\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "clico no botao Pesquisar",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "devo ver os dados exibidos",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "validar as informacoes da OCS Huawei OCS01 \u003ccnpjresult\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "realiza-consulta-por-cpf-e-cnpj-no-portal-consulta-plataformas;realiza-consulta-por-cnpj-com-sucesso.;",
  "rows": [
    {
      "cells": [
        "cnpj",
        "plataforma",
        "cnpjresult"
      ],
      "line": 35,
      "id": "realiza-consulta-por-cpf-e-cnpj-no-portal-consulta-plataformas;realiza-consulta-por-cnpj-com-sucesso.;;1"
    },
    {
      "cells": [
        "\"12345678901234\"",
        "\"OCS Huawei OCS01\"",
        "\"cnpj\""
      ],
      "line": 36,
      "id": "realiza-consulta-por-cpf-e-cnpj-no-portal-consulta-plataformas;realiza-consulta-por-cnpj-com-sucesso.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 39700,
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
  "duration": 32591251000,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Realiza consulta por CNPJ com sucesso.",
  "description": "",
  "id": "realiza-consulta-por-cpf-e-cnpj-no-portal-consulta-plataformas;realiza-consulta-por-cnpj-com-sucesso.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ConsultaALL"
    },
    {
      "line": 1,
      "name": "@ConsultaCPFCNPJ"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "acesso o menu Consulta Plataformas",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "preencho os dados da tela com CNPJ \"12345678901234\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "seleciono a plataforma \"OCS Huawei OCS01\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "clico no botao Pesquisar",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "devo ver os dados exibidos",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "validar as informacoes da OCS Huawei OCS01 \"cnpj\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.acessoOMenuConsultaPlataformas()"
});
formatter.result({
  "duration": 7063652500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678901234",
      "offset": 36
    }
  ],
  "location": "ConsultaPlataformasCpfCnpjSteps.preenchoOsDadosDaTelaComCNPJ(String)"
});
formatter.result({
  "duration": 2473322500,
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
  "duration": 130541400,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 44764700,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 10200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 40
    },
    {
      "val": "cnpj",
      "offset": 44
    }
  ],
  "location": "ConsultaPlataformasIdSteps.validarAsInformacoesDaOCSHuaweiOCS(int,String)"
});
formatter.result({
  "duration": 26291123100,
  "status": "passed"
});
formatter.after({
  "duration": 1280094900,
  "status": "passed"
});
formatter.after({
  "duration": 4135472000,
  "status": "passed"
});
formatter.uri("ConsultaPlataformasID.feature");
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
        "\"12345678901234567890\"",
        "\"OCS Huawei OCS01\"",
        "\"id\""
      ],
      "line": 22,
      "id": "realiza-consulta-por-id-no-portal-consulta-plataformas;realiza-consulta-por-id-com-sucesso.;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 49700,
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
  "duration": 30453200200,
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
  "duration": 7071149300,
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
  "duration": 2278555000,
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
  "duration": 134573000,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 43916900,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 9900,
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
  "duration": 7858390800,
  "status": "passed"
});
formatter.after({
  "duration": 1273138000,
  "status": "passed"
});
formatter.after({
  "duration": 4139203500,
  "status": "passed"
});
formatter.before({
  "duration": 26000,
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
  "duration": 29978575000,
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
  "name": "preencho os dados da tela com ID \"12345678901234567890\"",
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
  "duration": 7065030500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678901234567890",
      "offset": 34
    }
  ],
  "location": "ConsultaPlataformasIdSteps.preenchoOsDadosDaTelaComID(String)"
});
formatter.result({
  "duration": 14434970300,
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
  "duration": 140795800,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 44368200,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 8100,
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
  "duration": 8191284900,
  "status": "passed"
});
formatter.after({
  "duration": 1269332000,
  "status": "passed"
});
formatter.after({
  "duration": 4121760700,
  "status": "passed"
});
formatter.uri("ConsultaPlataformasMSISDN_IMSI_TERMINAL.feature");
formatter.feature({
  "line": 2,
  "name": "Realiza consulta por MSISDN/IMSI/TERMINAL no portal Consulta Plataformas",
  "description": "Como um usu�rio\neu quero realizar uma consulta por MSISDN / IMSI / TERMINAL\nno portal Consulta Plataformas.",
  "id": "realiza-consulta-por-msisdn/imsi/terminal-no-portal-consulta-plataformas",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ConsultaMSISDN_IMSI_TER"
    },
    {
      "line": 1,
      "name": "@ConsultaALL"
    }
  ]
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Realiza consulta por MSISDN com sucesso.",
  "description": "",
  "id": "realiza-consulta-por-msisdn/imsi/terminal-no-portal-consulta-plataformas;realiza-consulta-por-msisdn-com-sucesso.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@ConsultaMSISDN_IMSI_TER"
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
  "name": "preencho os dados da tela com MSISDN \u003cmsisdn\u003e",
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
  "name": "validar as informacoes da consulta \u003cmsisdnresult\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "realiza-consulta-por-msisdn/imsi/terminal-no-portal-consulta-plataformas;realiza-consulta-por-msisdn-com-sucesso.;",
  "rows": [
    {
      "cells": [
        "msisdn",
        "plataforma",
        "msisdnresult"
      ],
      "line": 20,
      "id": "realiza-consulta-por-msisdn/imsi/terminal-no-portal-consulta-plataformas;realiza-consulta-por-msisdn-com-sucesso.;;1"
    },
    {
      "cells": [
        "\"12345678901\"",
        "\"VMS Novitech VMS04\"",
        "\"msisdn_1\""
      ],
      "line": 21,
      "id": "realiza-consulta-por-msisdn/imsi/terminal-no-portal-consulta-plataformas;realiza-consulta-por-msisdn-com-sucesso.;;2"
    },
    {
      "cells": [
        "\"5534567890123\"",
        "\"VMS Novitech VMS04\"",
        "\"msisdn_2\""
      ],
      "line": 22,
      "id": "realiza-consulta-por-msisdn/imsi/terminal-no-portal-consulta-plataformas;realiza-consulta-por-msisdn-com-sucesso.;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 21500,
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
  "duration": 32868399900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Realiza consulta por MSISDN com sucesso.",
  "description": "",
  "id": "realiza-consulta-por-msisdn/imsi/terminal-no-portal-consulta-plataformas;realiza-consulta-por-msisdn-com-sucesso.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ConsultaALL"
    },
    {
      "line": 1,
      "name": "@ConsultaMSISDN_IMSI_TER"
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
  "name": "preencho os dados da tela com MSISDN \"12345678901\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "seleciono a plataforma \"VMS Novitech VMS04\"",
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
  "name": "validar as informacoes da consulta \"msisdn_1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.acessoOMenuConsultaPlataformas()"
});
formatter.result({
  "duration": 7062138600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678901",
      "offset": 38
    }
  ],
  "location": "ConsultaPlataformasMsisdnImsiTerSteps.preenchoOsDadosDaTelaComMSISDN(String)"
});
formatter.result({
  "duration": 2768779900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VMS Novitech VMS04",
      "offset": 24
    }
  ],
  "location": "ConsultaPlataformasIdSteps.selecionoAPlataforma(String)"
});
formatter.result({
  "duration": 138740100,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 45355500,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 8700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "msisdn_1",
      "offset": 36
    }
  ],
  "location": "ConsultaPlataformasMsisdnImsiTerSteps.validarAsInformacoesDaConsulta(String)"
});
formatter.result({
  "duration": 8174994000,
  "status": "passed"
});
formatter.after({
  "duration": 1283950800,
  "status": "passed"
});
formatter.after({
  "duration": 4124935400,
  "status": "passed"
});
formatter.before({
  "duration": 36400,
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
  "duration": 27103390200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Realiza consulta por MSISDN com sucesso.",
  "description": "",
  "id": "realiza-consulta-por-msisdn/imsi/terminal-no-portal-consulta-plataformas;realiza-consulta-por-msisdn-com-sucesso.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ConsultaALL"
    },
    {
      "line": 1,
      "name": "@ConsultaMSISDN_IMSI_TER"
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
  "name": "preencho os dados da tela com MSISDN \"5534567890123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "seleciono a plataforma \"VMS Novitech VMS04\"",
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
  "name": "validar as informacoes da consulta \"msisdn_2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.acessoOMenuConsultaPlataformas()"
});
formatter.result({
  "duration": 7080094700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5534567890123",
      "offset": 38
    }
  ],
  "location": "ConsultaPlataformasMsisdnImsiTerSteps.preenchoOsDadosDaTelaComMSISDN(String)"
});
formatter.result({
  "duration": 6920308000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VMS Novitech VMS04",
      "offset": 24
    }
  ],
  "location": "ConsultaPlataformasIdSteps.selecionoAPlataforma(String)"
});
formatter.result({
  "duration": 148480000,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 42426000,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 9500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "msisdn_2",
      "offset": 36
    }
  ],
  "location": "ConsultaPlataformasMsisdnImsiTerSteps.validarAsInformacoesDaConsulta(String)"
});
formatter.result({
  "duration": 18349555800,
  "status": "passed"
});
formatter.after({
  "duration": 1270532400,
  "status": "passed"
});
formatter.after({
  "duration": 4125662100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Realiza consulta por IMSI com sucesso.",
  "description": "",
  "id": "realiza-consulta-por-msisdn/imsi/terminal-no-portal-consulta-plataformas;realiza-consulta-por-imsi-com-sucesso.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@ConsultaMSISDN_IMSI_TER"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "acesso o menu Consulta Plataformas",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "preencho os dados da tela com IMSI \u003cimsi\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "seleciono a plataforma \u003cplataforma\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "clico no botao Pesquisar",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "devo ver os dados exibidos",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "validar as informacoes da consulta \u003cimsiresult\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "realiza-consulta-por-msisdn/imsi/terminal-no-portal-consulta-plataformas;realiza-consulta-por-imsi-com-sucesso.;",
  "rows": [
    {
      "cells": [
        "imsi",
        "plataforma",
        "imsiresult"
      ],
      "line": 35,
      "id": "realiza-consulta-por-msisdn/imsi/terminal-no-portal-consulta-plataformas;realiza-consulta-por-imsi-com-sucesso.;;1"
    },
    {
      "cells": [
        "\"724456789012345\"",
        "\"SmartKeyHuawei LSMS01\"",
        "\"imsi\""
      ],
      "line": 36,
      "id": "realiza-consulta-por-msisdn/imsi/terminal-no-portal-consulta-plataformas;realiza-consulta-por-imsi-com-sucesso.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 26100,
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
  "duration": 30614523600,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Realiza consulta por IMSI com sucesso.",
  "description": "",
  "id": "realiza-consulta-por-msisdn/imsi/terminal-no-portal-consulta-plataformas;realiza-consulta-por-imsi-com-sucesso.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ConsultaALL"
    },
    {
      "line": 1,
      "name": "@ConsultaMSISDN_IMSI_TER"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "acesso o menu Consulta Plataformas",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "preencho os dados da tela com IMSI \"724456789012345\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "seleciono a plataforma \"SmartKeyHuawei LSMS01\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "clico no botao Pesquisar",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "devo ver os dados exibidos",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "validar as informacoes da consulta \"imsi\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.acessoOMenuConsultaPlataformas()"
});
formatter.result({
  "duration": 7076437100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "724456789012345",
      "offset": 36
    }
  ],
  "location": "ConsultaPlataformasMsisdnImsiTerSteps.preenchoOsDadosDaTelaComIMSI(String)"
});
formatter.result({
  "duration": 2563634200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SmartKeyHuawei LSMS01",
      "offset": 24
    }
  ],
  "location": "ConsultaPlataformasIdSteps.selecionoAPlataforma(String)"
});
formatter.result({
  "duration": 140511800,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 43685600,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 9000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imsi",
      "offset": 36
    }
  ],
  "location": "ConsultaPlataformasMsisdnImsiTerSteps.validarAsInformacoesDaConsulta(String)"
});
formatter.result({
  "duration": 6871789100,
  "status": "passed"
});
formatter.after({
  "duration": 1267918900,
  "status": "passed"
});
formatter.after({
  "duration": 4134884400,
  "status": "passed"
});
});