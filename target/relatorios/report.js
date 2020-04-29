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
      "name": "@Funcionais"
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
      "name": "@Funcionais"
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
  "name": "seleciono a plataforma OCS Huawei OCS01",
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
        "idresult"
      ],
      "line": 20,
      "id": "realiza-consulta-por-id-no-portal-consulta-plataformas;realiza-consulta-por-id-com-sucesso.;;1"
    },
    {
      "cells": [
        "\"55313393211\"",
        "\"ID consulta sem oferta\""
      ],
      "line": 21,
      "id": "realiza-consulta-por-id-no-portal-consulta-plataformas;realiza-consulta-por-id-com-sucesso.;;2"
    },
    {
      "cells": [
        "\"55313393211\"",
        "\"ID consulta 1 oferta\""
      ],
      "line": 22,
      "id": "realiza-consulta-por-id-no-portal-consulta-plataformas;realiza-consulta-por-id-com-sucesso.;;3"
    },
    {
      "cells": [
        "\"55313393222\"",
        "\"ID consulta 4 oferta\""
      ],
      "line": 23,
      "id": "realiza-consulta-por-id-no-portal-consulta-plataformas;realiza-consulta-por-id-com-sucesso.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 172800,
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
  "duration": 57002263300,
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
      "name": "@Funcionais"
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
  "name": "preencho os dados da tela com ID \"55313393211\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "seleciono a plataforma OCS Huawei OCS01",
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
  "name": "validar as informacoes da OCS Huawei OCS01 \"ID consulta sem oferta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.acessoOMenuConsultaPlataformas()"
});
formatter.result({
  "duration": 1838616400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55313393211",
      "offset": 34
    }
  ],
  "location": "ConsultaPlataformasIdSteps.preenchoOsDadosDaTelaComID(String)"
});
formatter.result({
  "duration": 7097412900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 37
    }
  ],
  "location": "ConsultaPlataformasIdSteps.selecionoAPlataformaOCSHuaweiOCS(int)"
});
formatter.result({
  "duration": 5063569400,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 2672448000,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 14628800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"ui-accordiontab-0-content\"]/div/div/p-table\"}\n  (Session info: chrome\u003d81.0.4044.122)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LUKS-DESK\u0027, ip: \u0027172.28.40.159\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\Luks\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 81.0.4044.122, webStorageEnabled: true}\nSession ID: 1c8d801697b856a82788cc9c3026218d\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"ui-accordiontab-0-content\"]/div/div/p-table}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat br.steps.ElementMap.validaResultadoOCS(ElementMap.java:150)\r\n\tat br.steps.ConsultaPlataformasIdSteps.devoVerOsDadosExibidos(ConsultaPlataformasIdSteps.java:39)\r\n\tat ✽.Then devo ver os dados exibidos(ConsultaPlataformasID.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 40
    },
    {
      "val": "ID consulta sem oferta",
      "offset": 44
    }
  ],
  "location": "ConsultaPlataformasIdSteps.validarAsInformacoesDaOCSHuaweiOCS(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1299063800,
  "status": "passed"
});
formatter.after({
  "duration": 4114809500,
  "status": "passed"
});
formatter.before({
  "duration": 42200,
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
  "duration": 73781751000,
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
      "name": "@Funcionais"
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
  "name": "preencho os dados da tela com ID \"55313393211\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "seleciono a plataforma OCS Huawei OCS01",
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
  "name": "validar as informacoes da OCS Huawei OCS01 \"ID consulta 1 oferta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.acessoOMenuConsultaPlataformas()"
});
formatter.result({
  "duration": 807914400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55313393211",
      "offset": 34
    }
  ],
  "location": "ConsultaPlataformasIdSteps.preenchoOsDadosDaTelaComID(String)"
});
formatter.result({
  "duration": 8973732700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 37
    }
  ],
  "location": "ConsultaPlataformasIdSteps.selecionoAPlataformaOCSHuaweiOCS(int)"
});
formatter.result({
  "duration": 4189579100,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "duration": 3049756900,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "duration": 278457830500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 40
    },
    {
      "val": "ID consulta 1 oferta",
      "offset": 44
    }
  ],
  "location": "ConsultaPlataformasIdSteps.validarAsInformacoesDaOCSHuaweiOCS(int,String)"
});
formatter.result({
  "duration": 39033025800,
  "status": "passed"
});
formatter.after({
  "duration": 1598173400,
  "status": "passed"
});
formatter.after({
  "duration": 4140922600,
  "status": "passed"
});
formatter.before({
  "duration": 38700,
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
  "duration": 174055712500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Realiza consulta por ID com sucesso.",
  "description": "",
  "id": "realiza-consulta-por-id-no-portal-consulta-plataformas;realiza-consulta-por-id-com-sucesso.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Funcionais"
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
  "name": "preencho os dados da tela com ID \"55313393222\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "seleciono a plataforma OCS Huawei OCS01",
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
  "name": "validar as informacoes da OCS Huawei OCS01 \"ID consulta 4 oferta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.acessoOMenuConsultaPlataformas()"
});
formatter.result({
  "duration": 11400300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"slide-out\"]/li[5]/a\"}\n  (Session info: chrome\u003d81.0.4044.122)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LUKS-DESK\u0027, ip: \u0027172.28.40.159\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\Luks\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 81.0.4044.122, webStorageEnabled: true}\nSession ID: 69ef76749252612b2d99342d56703c2f\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"slide-out\"]/li[5]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat br.steps.ElementMap.clickMenuConsulta(ElementMap.java:68)\r\n\tat br.steps.ConsultaPlataformasIdSteps.acessoOMenuConsultaPlataformas(ConsultaPlataformasIdSteps.java:17)\r\n\tat ✽.And acesso o menu Consulta Plataformas(ConsultaPlataformasID.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "55313393222",
      "offset": 34
    }
  ],
  "location": "ConsultaPlataformasIdSteps.preenchoOsDadosDaTelaComID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 37
    }
  ],
  "location": "ConsultaPlataformasIdSteps.selecionoAPlataformaOCSHuaweiOCS(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.clicoNoBotaoPesquisar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ConsultaPlataformasIdSteps.devoVerOsDadosExibidos()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 40
    },
    {
      "val": "ID consulta 4 oferta",
      "offset": 44
    }
  ],
  "location": "ConsultaPlataformasIdSteps.validarAsInformacoesDaOCSHuaweiOCS(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1295941400,
  "status": "passed"
});
formatter.after({
  "duration": 4122407100,
  "status": "passed"
});
});