
Cypress.Commands.add("createClient", (name_val, email_val, tel_val) => {
    cy.request({
        method: "POST",
        url: `/api/client/new`,
        body: {
            name: name_val,
            email: email_val,
            telephone: tel_val
        },
        headers: {
            "X-User-Auth": JSON.stringify(Cypress.env("loginToken")),
            "Content-Type": "application/json"
        }
    }).then((res) => {
        expect(res.status).to.equal(200)
        Cypress.env({ createdClientId: res.body.id })
        cy.log(JSON.stringify(res.body, undefined, 4))
    });
})

Cypress.Commands.add("getClient", (clientId=Cypress.env("createdClientId")) => {
    cy.request({
        method: "GET",
        url: `/api/client/${ clientId }`,
        headers: {
            "X-User-Auth": `${JSON.stringify(Cypress.env("loginToken"))}`,
            "Content-Type": "application/json"
        }
    }).its("status").should("eq", 200)
});