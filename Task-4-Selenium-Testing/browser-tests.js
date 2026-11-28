const { Builder, By, until } = require("selenium-webdriver");
const assert = require("node:assert/strict");

(async function runBrowserTests() {
    const driver = await new Builder()
        .forBrowser("firefox")
        .usingServer("http://127.0.0.1:4444")
        .build();

    const results = [];
    const baseUrl = "http://127.0.0.1:5000";
    const unique = Date.now();
    const email = `sqe${unique}@example.com`;
    const regNo = `SQE-${unique}`;

    try {
        // Create a test account and log in
        await driver.get(`${baseUrl}/register`);
        await driver.findElement(By.name("name")).sendKeys("Selenium Tester");
        await driver.findElement(By.name("email")).sendKeys(email);
        await driver.findElement(By.name("password")).sendKeys("Password123");
        await driver.findElement(By.css("button")).click();

        await driver.wait(until.urlContains("/login"), 5000);

        await driver.findElement(By.name("email")).sendKeys(email);
        await driver.findElement(By.name("password")).sendKeys("Password123");
        await driver.findElement(By.css("button")).click();
        await driver.wait(until.urlContains("/students"), 5000);

        // TC-09 (adapted): Required name field
        console.log("Running TC-09: required name");
        await driver.get(`${baseUrl}/students/add`);
        await driver.findElement(By.name("reg_no")).sendKeys(`REQ-${unique}`);
        await driver.findElement(By.name("department")).sendKeys("SE");
        await driver.findElement(By.name("cgpa")).sendKeys("3.00");

        const nameField = await driver.findElement(By.name("name"));
        assert.equal(await nameField.getAttribute("required"), "true");
        assert.equal(await driver.findElement(By.css("form")).getAttribute("novalidate"), null);
        assert.equal(await driver.executeScript(
            "return arguments[0].form.checkValidity();", nameField
        ), false);
        results.push("PASS - TC-09: empty name is blocked by required-field validation");

        // Add a student for duplicate/search/edit/delete tests
        await nameField.sendKeys("SQE Selenium Student");
        await driver.findElement(By.css("button")).click();
        await driver.wait(until.urlContains("/students"), 5000);

        // TC-12 (adapted): Duplicate registration number
        console.log("Running TC-12: duplicate registration number");
        await driver.get(`${baseUrl}/students/add`);
        await driver.findElement(By.name("reg_no")).sendKeys(`REQ-${unique}`);
        await driver.findElement(By.name("name")).sendKeys("Duplicate Attempt");
        await driver.findElement(By.name("department")).sendKeys("SE");
        await driver.findElement(By.name("cgpa")).sendKeys("3.00");
        await driver.findElement(By.css("button")).click();

        await driver.wait(until.elementLocated(By.css(".flash.error")), 5000);
        const duplicateMessage = await driver.findElement(By.css(".flash.error")).getText();
        assert.match(duplicateMessage, /Registration number already exists/);
        results.push("PASS - TC-12: duplicate registration number is rejected");

        // TC-13: Search for a nonexistent student
        console.log("Running TC-13: no matching search result");
        await driver.get(`${baseUrl}/students`);
        await driver.findElement(By.name("q")).sendKeys(`NONEXISTENT-${unique}`);
        await driver.findElement(By.css("form.search button")).click();
        await driver.wait(until.elementLocated(By.xpath("//td[contains(.,'No records found.')]")), 5000);
        results.push("PASS - TC-13: search displays no records found");

        // TC-15: Add, search, edit, and delete a student
        console.log("Running TC-15: add, search, edit, delete");
        await driver.get(`${baseUrl}/students/add`);
        await driver.findElement(By.name("reg_no")).sendKeys(regNo);
        await driver.findElement(By.name("name")).sendKeys("Scenario Student");
        await driver.findElement(By.name("department")).sendKeys("SE");
        await driver.findElement(By.name("cgpa")).sendKeys("2.50");
        await driver.findElement(By.css("button")).click();
        await driver.wait(until.urlContains("/students"), 5000);

        await driver.findElement(By.name("q")).sendKeys(regNo);
        await driver.findElement(By.css("form.search button")).click();
        await driver.wait(until.elementLocated(By.xpath(`//td[normalize-space()='${regNo}']`)), 5000);

        const studentRow = driver.findElement(By.xpath(`//tr[td[normalize-space()='${regNo}']]`));
        await studentRow.findElement(By.linkText("Edit")).click();
        const cgpaField = await driver.findElement(By.name("cgpa"));
        await cgpaField.clear();
        await cgpaField.sendKeys("3.50");
        await driver.findElement(By.css("button")).click();
        await driver.wait(until.urlContains("/students"), 5000);

        await driver.findElement(By.name("q")).clear();
        await driver.findElement(By.name("q")).sendKeys(regNo);
        await driver.findElement(By.css("form.search button")).click();
        await driver.wait(until.elementLocated(By.xpath("//td[normalize-space()='3.5' or normalize-space()='3.50']")), 5000);

        const updatedRow = driver.findElement(By.xpath(`//tr[td[normalize-space()='${regNo}']]`));
        await updatedRow.findElement(By.css("form button.danger")).click();
        await driver.wait(until.urlContains("/students"), 5000);
        await driver.findElement(By.name("q")).clear();
        await driver.findElement(By.name("q")).sendKeys(regNo);
        await driver.findElement(By.css("form.search button")).click();
        await driver.wait(until.elementLocated(By.xpath("//td[contains(.,'No records found.')]")), 5000);
        results.push("PASS - TC-15: student added, searched, edited, and deleted");

    } catch (error) {
        results.push(`FAIL - ${error.message}`);
        console.error(error);
        process.exitCode = 1;
    } finally {
        console.log("\n========== SELENIUM TEST RESULTS ==========");
        console.log(results.join("\n"));
        console.log("===========================================");
        await driver.quit();
    }
})();
