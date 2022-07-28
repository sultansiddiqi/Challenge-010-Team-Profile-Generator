const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "sultan";
    const employeeInstance = new Engineer("Sultan", 2, "sultan@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "sultan";
    const employeeInstance = new Engineer("Sultan", 2, "sultan@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Sultan", 2, "sultan@gmail.com", "sultan");
    expect(employeeInstance.getRole()).toBe(returnValue);
});