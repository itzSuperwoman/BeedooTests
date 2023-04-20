/// <reference types="cypress" />

function allUsers() {
    return cy.request({
        method: 'GET',
        url: 'https://randomuser.me/api',
        failOnStatusCode: false,
    })
}

export{ allUsers };