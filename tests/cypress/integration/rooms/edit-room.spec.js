const faker = require('faker');

describe("edit room", () => {
    const feat_val = [faker.lorem.word()];
    const cat_val = "single";
    const num_val = faker.random.number();
    const floor_val = faker.random.number();
    const available_val = faker.random.boolean();
    const price_val = faker.random.number();

    it("create room", () => {
        cy.createRoom(feat_val, cat_val, num_val, floor_val, available_val, price_val);
    });
    it("room is created", () => {
        cy.getRoom();
    });
    it("edit room", () => {
        cy.editRoom(feat_val, cat_val, 1337, 1337, available_val, 1337);
    });
    it("room is edited", () => {
        cy.getRoom()
    })
});