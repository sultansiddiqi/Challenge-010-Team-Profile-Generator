// const { it } = require('@jest/globals');
// const { describe } = require('yargs');
const Employee = require('../lib/Employee')



describe("Employee", () => {
	describe("getName", () => {
		it('Make sure it\'s setting the employee name and pulling it as well.', () => {
			const name = 'sultan';
			const nameTest = new Employee(name , '42', 'sultan@gmail.com');
			expect(nameTest.getName()).toBe(name);
		})
	})

	describe("getID", () => {
		it('Make sure it\'s setting the employee ID and pulling it as well.', () => {
			const eId = '42';
			const idTest = new Employee('sultan', eId, 'sultan@gmail.com');
			expect(idTest.getId()).toBe(eId);
		})
	})

	describe("getEmail", () => {
		it('Make sure it\'s setting the employee E-mail and pulling it as well.', () => {
			const email = 'sultan@gmail.com';
			const idTest = new Employee('sultan', '42', email);
			expect(idTest.getEmail()).toBe(email);
		})
	})

	describe("getRole", () => {
		it('Make sure it\'s setting the role and pulling it as well.', () => {
			const roleString = 'Employee';
			const roleTest = new Employee('sultan', 1, 'sultan@gmail.com');
			expect(roleTest.getRole()).toBe(roleString);
		})
	})

});




// test('Make sure it\'s returning the role string \'Employee\'', () => {
// 	const roleString = 'Employee';
// 	const roleTest = new Employee('sultan', 1, 'sultan@gmail.com');
// 	expect(roleTest.getRole()).toBe(roleString);
// });
