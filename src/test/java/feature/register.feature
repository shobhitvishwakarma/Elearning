	Feature: Elearning register page

	Background: Background Section
	Given User is on register page
	
	@elearning
	Scenario Outline:
	When user enter valid firstname "<firstname>", lastname "<lastname>",
	And user enter valid email "<email>", username "<username>", password "<password>" 
	And user enter confirmpassword "<password>"
	And click on Register button
	Then Successful login is displayed 
	
	Examples:
	
	| firstname | lastname | email | username | password |
	| abc       | xyz			 | a@a.com | abxz23 | 123      |
	

	