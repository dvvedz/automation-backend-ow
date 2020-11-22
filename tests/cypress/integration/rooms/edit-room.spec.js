const faker = require('faker');

describe("edit room", () => {
    const feat_val = [faker.lorem.word()];
    const cat_val = "single";
    const num_val = faker.random.number();
    const floor_val = faker.random.number();
    const available_val = faker.random.boolean();
    const price_val = faker.random.number();

    const num_edit = 1337;
    const floor_edit = 1337;
    const price_edit = 1337;

    it("create room", () => {
        cy.createRoom(feat_val, cat_val, num_val, floor_val, available_val, price_val);
    });
    it("room is created", () => {
        cy.getRoom().its("status").should("eq", 200)
    });
    it("edit room", () => {
        cy.editRoom(feat_val, cat_val, num_edit, floor_edit, available_val, price_edit);
    });
    it("room is edited", () => {
        cy.getRoom().then((res) => {
            expect(JSON.stringify(res.body)).to.equal(Cypress.env("editPayload"))
        });
    })
});