const faker = require('faker');

describe("Create client", () => {
    const name_val = faker.name.findName(); 
    const email_val = faker.internet.email();
    const tel_val = faker.phone.phoneNumber();

    it("Create client", () => {
        cy.createClient(name_val, email_val, tel_val);
    })
    it("Client was created", () => {
        cy.getClient()
    });
});