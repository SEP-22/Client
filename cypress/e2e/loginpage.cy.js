describe("renders home page", () => {
    it("renders correctly", () => {
        cy.visit('/login')
        cy.contains('Log in to your account')
       

    })
})