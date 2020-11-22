

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

// Create Room
Cypress.Commands.add("createRoom", (feat_val, cat_val, num_val, floor_val, available_val, price_val) => {
    cy.request({
        method: "POST",
        url: "/api/room/new",
        body: {
            features: feat_val, 
            category: cat_val,
            number: num_val, 
            floor: floor_val, 
            available: available_val, 
            price: price_val
        },
        headers: { 
            "X-User-Auth": `${JSON.stringify(Cypress.env("loginToken"))}`,
            "Content-Type": "application/json"
        }
    }).then((res) => {
        expect(res.status).to.equal(200)
        Cypress.env({ createdRoomId: res.body.id })
        cy.log(JSON.stringify(res.body))
    });
    
});

// Get Room
Cypress.Commands.add("getRoom", (roomId=Cypress.env("createdRoomId")) => {
    cy.request({
        method: "GET",
        url: `/api/room/${ roomId }`,
        headers: {
            "X-User-Auth": `${JSON.stringify(Cypress.env("loginToken"))}`,
            "Content-Type": "application/json"
        }
    });
});

// Edit room
Cypress.Commands.add("editRoom", (feat_val, cat_val, num_val, floor_val, available_val, price_val) => {
    cy.request({
        method: "PUT",
        url: `/api/room/${Cypress.env("createdRoomId")}`,
        body: {
            id: Cypress.env("createdRoomId"),
            created: new Date(),
            features: feat_val, 
            category: cat_val,
            number: num_val, 
            floor: floor_val, 
            available: available_val, 
            price: price_val
        },
        headers: { 
            "X-User-Auth": `${JSON.stringify(Cypress.env("loginToken"))}`,
            "Content-Type": "application/json"
        }
    }).then((res) => {
        cy.log(JSON.stringify(res.body))
        Cypress.env({"editPayload": JSON.stringify(res.body)})
    }) 
});

// Delete room
Cypress.Commands.add("deleteRoom", (roomId=Cypress.env("createdRoomId")) => {
    cy.request({
        method: "DELETE",
        url: `/api/room/${roomId}`,
        headers: { 
            "X-User-Auth": JSON.stringify(Cypress.env("loginToken")),
            "Content-Type": "application/json"
        }
    }).then((res) => {
        expect(res.body.ok).to.equal(true)
        cy.log(res.body)
    })
});
