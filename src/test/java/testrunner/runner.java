package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features ="src/test/java/feature",
		glue ={"stepdefinition"},
		monochrome = true,
		dryRun = false,
		tags = {"@signin, @signout"},
		plugin = {"pretty","html: Reports","json:Reports/jsonreport.json", "junit:Reports/xmlreport.xml"}
		)

public class runner {

}
