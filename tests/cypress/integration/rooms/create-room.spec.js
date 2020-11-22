const faker = require('faker');

describe("Create room - api", () => {
    const feat_val = [faker.lorem.word()];
    const cat_val = "single"
    const num_val = faker.random.number();
    const floor_val = faker.random.number();
    const available_val = faker.random.boolean();
    const price_val = faker.random.number();

    it("Create room", () => {
        cy.createRoom(feat_val, cat_val, num_val, floor_val, available_val, price_val) 
    });

    it("Room was created", () => {
        cy.getRoom().its("status").should("eq", 200)
    });
});
