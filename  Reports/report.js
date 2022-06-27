$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/login.feature");
formatter.feature({
  "name": "Elearning login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@signin"
    }
  ]
});
formatter.step({
  "name": "user enter invalid username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click on Submit button",
  "keyword": "And "
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "amit",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "Background section",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "elearning.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@signin"
    }
  ]
});
formatter.step({
  "name": "user enter invalid username \"amit\" and password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "elearning.user_enter_invalid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "elearning.user_click_on_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "elearning.validation_message_appears()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with authorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@signin"
    }
  ]
});
formatter.step({
  "name": "user enter valid username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click on compose button",
  "keyword": "Then "
});
formatter.step({
  "name": "user compose the mail",
  "keyword": "And "
});
formatter.step({
  "name": "click on send message button",
  "keyword": "And "
});
formatter.step({
  "name": "logout of the session",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "abcxy00",
        "123"
      ]
    }
  ]
});
formatter.background({
  "name": "Background section",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "elearning.user_is_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with authorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@signin"
    }
  ]
});
formatter.step({
  "name": "user enter valid username \"abcxy00\" and password \"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "elearning.user_enter_valid_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on compose button",
  "keyword": "Then "
});
formatter.match({
  "location": "elearning.user_click_on_compose_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user compose the mail",
  "keyword": "And "
});
formatter.match({
  "location": "elearning.user_compose_the_mail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on send message button",
  "keyword": "And "
});
formatter.match({
  "location": "elearning.click_on_send_message_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "logout of the session",
  "keyword": "Then "
});
formatter.match({
  "location": "elearning.logout_of_the_session()"
});
formatter.result({
  "status": "passed"
});
});