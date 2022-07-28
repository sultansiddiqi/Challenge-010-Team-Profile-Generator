const Intern = require('../lib/Intern');

describe("Intern", () => {
	describe("getName", () => {
		it('Make sure it\'s setting the Intern name and pulling it as well.', () => {
			const name = 'sultan';
			const nameTest = new Intern(name, 32, 'email', 'school');
			expect(nameTest.getName()).toBe(name);
		});
	});

	describe("getID", () => {
		it('Make sure it\'s setting the Intern ID and pulling it as well.', () => {
			const eId = '32';
			const idTest = new Intern('sultan', eId, 'email', 'school');
			expect(idTest.getId()).toBe(eId);
		});
	});

	describe("getEmail", () => {
		it('Make sure it\'s setting the Intern E-mail and pulling it as well.', () => {
			const email = 'sultan@gmail.com';
			const emailTest = new Intern('sultan', 32, email, 'school');
			expect(emailTest.getEmail()).toBe(email);
		})
	});

	describe("getSchool", () => {
		it('Make sure it\'s setting the Intern E-mail and pulling it as well.', () => {
			const school = 'Denver University';
			const schoolTest = new Intern('sultan', 32, 'email', school);
			expect(schoolTest.getSchool()).toBe(school);
		})
	});

	describe("getRole", () => {
		it('Make sure it\'s setting the role and pulling it as well.', () => {
			const roleString = 'Intern';
			const roleTest = new Intern('sultan', 1, 'sultan@gmail.com');
			expect(roleTest.getRole()).toBe(roleString);
		});
	});

});