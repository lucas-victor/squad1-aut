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
  "duration": 114500,
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
  "duration": 38781995400,
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
  "duration": 7101047700,
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
  "duration": 8581643900,
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
  "duration": 149512000,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 44015800,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 22000,
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
  "duration": 7871423100,
  "status": "passed"
});
formatter.after({
  "duration": 1288522400,
  "status": "passed"
});
formatter.after({
  "duration": 4146468500,
  "status": "passed"
});
formatter.before({
  "duration": 32800,
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
  "duration": 27606998100,
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
  "duration": 7076017800,
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
  "duration": 7967467000,
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
  "duration": 140718300,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 46615100,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 16700,
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
  "duration": 34858499200,
  "status": "passed"
});
formatter.after({
  "duration": 1287454400,
  "status": "passed"
});
formatter.after({
  "duration": 4133723700,
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
  "duration": 24100,
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
  "duration": 28140965800,
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
  "duration": 7076656100,
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
  "duration": 5642354000,
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
  "duration": 145300900,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 43579200,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 7900,
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
  "duration": 7813719200,
  "status": "passed"
});
formatter.after({
  "duration": 1272558700,
  "status": "passed"
});
formatter.after({
  "duration": 4122605400,
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
  "duration": 24300,
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
  "duration": 35490449300,
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
  "duration": 7065048700,
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
  "duration": 6164466300,
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
  "duration": 141118200,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 45269600,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 16700,
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
  "duration": 9939830700,
  "status": "passed"
});
formatter.after({
  "duration": 1290058900,
  "status": "passed"
});
formatter.after({
  "duration": 4135707800,
  "status": "passed"
});
formatter.before({
  "duration": 25500,
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
  "duration": 35995439900,
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
  "duration": 7075792000,
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
  "duration": 2936053200,
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
  "duration": 154596700,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 59281500,
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
      "val": "id",
      "offset": 44
    }
  ],
  "location": "ConsultaPlataformasIdSteps.validarAsInformacoesDaOCSHuaweiOCS(int,String)"
});
formatter.result({
  "duration": 9682133700,
  "status": "passed"
});
formatter.after({
  "duration": 1272035700,
  "status": "passed"
});
formatter.after({
  "duration": 4123202100,
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
        "\"msisdn\""
      ],
      "line": 21,
      "id": "realiza-consulta-por-msisdn/imsi/terminal-no-portal-consulta-plataformas;realiza-consulta-por-msisdn-com-sucesso.;;2"
    },
    {
      "cells": [
        "\"5534567890123\"",
        "\"VMS Novitech VMS04\"",
        "\"msisdn\""
      ],
      "line": 22,
      "id": "realiza-consulta-por-msisdn/imsi/terminal-no-portal-consulta-plataformas;realiza-consulta-por-msisdn-com-sucesso.;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22800,
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
  "duration": 47097281100,
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
  "name": "validar as informacoes da consulta \"msisdn\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.acessoOMenuConsultaPlataformas()"
});
formatter.result({
  "duration": 7071430900,
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
  "duration": 6789955200,
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
  "duration": 132446900,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 47107600,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 12400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "msisdn",
      "offset": 36
    }
  ],
  "location": "ConsultaPlataformasMsisdnImsiTerSteps.validarAsInformacoesDaConsulta(String)"
});
formatter.result({
  "duration": 1389970800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[[[[[ChromeDriver: chrome on XP (f33bb83f9676c2546f100dc90064a465)] -\u003e xpath: //*[@id\u003d\"ui-panel-0-content\"]/div]] -\u003e css selector: tr]]\u003e but was:\u003c[MSISDN 5512345678901]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat br.steps.ElementMap.validaResultadoVMSNovitech(ElementMap.java:597)\r\n\tat br.steps.ConsultaPlataformasMsisdnImsiTerSteps.validarAsInformacoesDaConsulta(ConsultaPlataformasMsisdnImsiTerSteps.java:32)\r\n\tat ✽.And validar as informacoes da consulta \"msisdn\"(ConsultaPlataformasMSISDN_IMSI_TERMINAL.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1281552400,
  "status": "passed"
});
formatter.after({
  "duration": 4120137000,
  "status": "passed"
});
formatter.before({
  "duration": 34100,
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
  "duration": 36128880000,
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
  "name": "validar as informacoes da consulta \"msisdn\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.acessoOMenuConsultaPlataformas()"
});
formatter.result({
  "duration": 7074538200,
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
  "duration": 2287876800,
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
  "duration": 150070200,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 44739800,
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
      "val": "msisdn",
      "offset": 36
    }
  ],
  "location": "ConsultaPlataformasMsisdnImsiTerSteps.validarAsInformacoesDaConsulta(String)"
});
formatter.result({
  "duration": 542417300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[[[[[ChromeDriver: chrome on XP (127f24ad00271dcd859ea718ea9381bc)] -\u003e xpath: //*[@id\u003d\"ui-panel-0-content\"]/div]] -\u003e css selector: tr]]\u003e but was:\u003c[MSISDN 5534567890123]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat br.steps.ElementMap.validaResultadoVMSNovitech(ElementMap.java:597)\r\n\tat br.steps.ConsultaPlataformasMsisdnImsiTerSteps.validarAsInformacoesDaConsulta(ConsultaPlataformasMsisdnImsiTerSteps.java:32)\r\n\tat ✽.And validar as informacoes da consulta \"msisdn\"(ConsultaPlataformasMSISDN_IMSI_TERMINAL.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1293277500,
  "status": "passed"
});
formatter.after({
  "duration": 4112405600,
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
  "duration": 23200,
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
  "duration": 50275572000,
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
  "duration": 7065868000,
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
  "duration": 2296054500,
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
  "duration": 157591700,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 56848600,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 16400,
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
  "duration": 736512500,
  "status": "passed"
});
formatter.after({
  "duration": 1269157200,
  "status": "passed"
});
formatter.after({
  "duration": 4129579100,
  "status": "passed"
});
});