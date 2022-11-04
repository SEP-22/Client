describe("renders home page", () => {
    it("renders correctly", () => {
        cy.visit('/')
        cy.contains('EatSmart')
        cy.get('.landingContainer')
        cy.get('.landingBtn')
        cy.get('#signup').as('signup')
        cy.get('#login').as('login')
        cy.get('@login').click()
        cy.contains('Log in to your account')
        cy.get('#login-email').type('piumini95kaveesha@gmail.com')
        cy.get('#login-password').type('12345678')
        cy.get('#login').click()


    })
})