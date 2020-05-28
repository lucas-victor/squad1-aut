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
  "duration": 55600,
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
  "duration": 25829119500,
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
  "duration": 6098373100,
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
  "duration": 5701124500,
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
  "duration": 134634200,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 334417500,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 1090775300,
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
  "duration": 7817076300,
  "status": "passed"
});
formatter.after({
  "duration": 277337500,
  "status": "passed"
});
formatter.after({
  "duration": 1655093300,
  "status": "passed"
});
formatter.before({
  "duration": 12400,
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
  "duration": 48714428300,
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
  "duration": 6060721300,
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
  "duration": 11245914500,
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
  "duration": 140648400,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 325548900,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 780459700,
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
  "duration": 7786065800,
  "status": "passed"
});
formatter.after({
  "duration": 276251100,
  "status": "passed"
});
formatter.after({
  "duration": 1649706500,
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
  "duration": 23700,
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
  "duration": 32300852500,
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
  "duration": 6063495200,
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
  "duration": 6910145500,
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
  "duration": 129530800,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 329752400,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 740727800,
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
  "duration": 7816762400,
  "status": "passed"
});
formatter.after({
  "duration": 268763000,
  "status": "passed"
});
formatter.after({
  "duration": 1619615200,
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
  "duration": 13300,
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
  "duration": 38408278300,
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
  "duration": 6065579700,
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
  "duration": 7515605100,
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
  "duration": 136701600,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 324984500,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 772887000,
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
  "duration": 4243410300,
  "status": "passed"
});
formatter.after({
  "duration": 271395100,
  "status": "passed"
});
formatter.after({
  "duration": 1629120500,
  "status": "passed"
});
formatter.before({
  "duration": 9700,
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
  "duration": 31570073700,
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
  "duration": 6067342300,
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
  "duration": 2380124700,
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
  "duration": 138968700,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 319263700,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 771753800,
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
  "duration": 4236664900,
  "status": "passed"
});
formatter.after({
  "duration": 266457700,
  "status": "passed"
});
formatter.after({
  "duration": 2016956400,
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
  "duration": 9800,
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
  "duration": 41741658500,
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
  "duration": 6074560300,
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
  "duration": 6828650000,
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
  "duration": 130076700,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 330972600,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 498407700,
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
  "duration": 95066900,
  "status": "passed"
});
formatter.after({
  "duration": 267292400,
  "status": "passed"
});
formatter.after({
  "duration": 1621928300,
  "status": "passed"
});
formatter.before({
  "duration": 16800,
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
  "duration": 26378577100,
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
  "duration": 6062013100,
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
  "duration": 7412751600,
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
  "duration": 146271700,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 333171300,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 843458700,
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
  "duration": 100411900,
  "status": "passed"
});
formatter.after({
  "duration": 272702100,
  "status": "passed"
});
formatter.after({
  "duration": 1620798100,
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
  "duration": 13500,
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
  "duration": 26790881700,
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
  "duration": 6067694900,
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
  "duration": 6131607500,
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
  "duration": 144652300,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 318408700,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 17106159900,
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
  "duration": 67782700,
  "status": "passed"
});
formatter.after({
  "duration": 275929000,
  "status": "passed"
});
formatter.after({
  "duration": 1639266100,
  "status": "passed"
});
});