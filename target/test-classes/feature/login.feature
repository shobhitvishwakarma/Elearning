Feature: Elearning login page

  Background: Background section
    Given User is on homepage

  @signin
  Scenario Outline: Login with unauthorized user
    When user enter invalid username "<username>" and password "<password>"
    And User click on Submit button
    Then validation message appears

    Examples: 
      | username | password |
      | amit     |   123456 |

  @signin
  Scenario Outline: Login with authorized user
    When user enter valid username "<username>" and password "<password>"
    Then user click on compose button
    And user compose the mail
    And click on send message button
    Then logout of the session

    Examples: 
      | username | password |
      | abcxy00  |      123 |
