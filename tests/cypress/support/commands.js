// Login
Cypress.Commands.add("login", () => {
    cy.request({
        method: "POST",
        url: "/api/login", 
        body: {"username":"oskar","password":"oskar123"}
    }).then((res) => {
        Cypress.env({loginToken: res.body})
    });
});
Cypress.Commands.add("createRoom", (feat_val, cat_val, num_val, floor_val, available_val, price_val) => {
    cy.request({
        method: "POST",
        url: "/api/room/new",
        body: {features: feat_val, category: cat_val, number: num_val, floor: floor_val, available: available_val, price: price_val},
        headers: { 
            "X-User-Auth": `${JSON.stringify(Cypress.env("loginToken"))}`,
            "Content-Type": "application/json"
        }
    }).then((res) => {
        cy.log(JSON.stringify(res.body))
    });
});
Cypress.Commands.add("editRoom", (feat_val, cat_val, num_val, floor_val, available_val, price_val) => {

});