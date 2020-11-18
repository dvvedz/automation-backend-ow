var faker = require('faker');

describe("Create room - api", () => {
    const feat_val = [faker.lorem.word()];
    const cat_val = faker.lorem.word();
    const num_val = faker.random.number();
    const floor_val = faker.random.number();
    const available_val = faker.random.boolean();
    const price_val = faker.random.number();

    before(() => { 
        cy.login()
    });
    it("Creates a room - backend API", () => {
        cy.createRoom(feat_val, cat_val, num_val, floor_val, available_val, price_val) 
    });
    it("Edits a room", () => {
        cy.createRoom(feat_val, cat_val, num_val, floor_val, available_val, price_val)
    });
});
