package ibm.FirstProject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class register {

	WebDriver driver;
	@Test(priority=1)
	public void test() throws InterruptedException{
		System.setProperty("webdriver.chrome.driver", ".//lib//chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://elearningm1.upskills.in/");
		
		driver.findElement(By.linkText("Sign up!")).click();
		driver.findElement(By.name("firstname")).sendKeys("abc");
		driver.findElement(By.name("lastname")).sendKeys("xyz");
		driver.findElement(By.name("email")).sendKeys("a@a.com");
		driver.findElement(By.name("username")).sendKeys("abcxy22");
		driver.findElement(By.name("pass1")).sendKeys("123");
		driver.findElement(By.name("pass2")).sendKeys("123");
		driver.findElement(By.name("submit")).click();
		Thread.sleep(2000);
	}
	@Test(priority=2)
	public void logout() throws InterruptedException{
		driver.findElement(By.id("logout_button")).click();
	}
}
