package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class elearning {
	
	WebDriver driver;
	@Given("User is on homepage")
	public void user_is_on_homepage() {
	
		
		System.setProperty("webdriver.chrome.driver",".//lib//chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://elearningm1.upskills.in/");
		
	}

	@When("user enter invalid username {string} and password {string}")
	public void user_enter_invalid_username_and_password(String username, String password) {
	driver.findElement(By.name("login")).sendKeys(username);
	driver.findElement(By.name("password")).sendKeys(password);
	
	}

	@When("User click on Submit button")
	public void user_click_on_Submit_button() {
	
		driver.findElement(By.name("submitAuth")).click();
	}

	@Then("validation message appears")
	public void validation_message_appears() {
		System.out.println("Invalid Credentials");
	}

	@When("user enter valid username {string} and password {string}")
	public void user_enter_valid_username_and_password(String username, String password) {
		driver.findElement(By.name("login")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		driver.findElement(By.name("submitAuth")).click();
	}

		
	
	@When("user click on compose button")
	public void user_click_on_compose_button() throws InterruptedException {
		driver.findElement(By.xpath("//li[@class='new-message-social']/a")).click();
	}
	
	@Then("user compose the mail")
	public void user_compose_the_mail() throws InterruptedException {
		driver.findElement(By.xpath("//input[@class='select2-search__field']")).sendKeys("ank");
		Thread.sleep(2000);
		//driver.findElement(By.xpath("//li[text()='Priyanka Gupta']")).click();
		driver.findElement(By.xpath("//ul[@class='select2-results__options']/li[3]")).click();
		driver.findElement(By.name("title")).sendKeys("test");
		Thread.sleep(2000);
	}
	
	@Then("click on send message button")
	public void click_on_send_message_button() {
		driver.findElement(By.name("compose")).click();
}
	
	@Then("logout of the session")
	public void logout_of_the_session() {
	    driver.findElement(By.id("logout_button")).click();
	}

	}
