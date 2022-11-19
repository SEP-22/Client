//import '@testing-library/cypress/add-commands'

describe("Renders landing page", () => {
    it("renders correctly", () => {
        cy.visit('/')
    })
    it('EatSmart landing page is rendered',() => {
        cy.contains('EatSmart')
        cy.get('.landingContainer')
        cy.get('.landingBtn')
    })
    it('has login and singup buttons',() => {
        cy.contains('EatSmart')
        cy.get('#signup').as('signup')
        cy.get('#login').as('login')
    })
    it('navigates to login page',() => {
        cy.get('#login').click()
    })

})

describe("Login Page works correctly", () => {
    it('Login page is rendered',() => {
        cy.contains('Log in to your account')
        cy.get('.loginContainer')
        cy.get('.loginFormContainer')
    })
    it('Enters email only',() => {
        cy.get('#login-email').type('jithmi')
        cy.get('#login').click()
        cy.contains('Please enter email and password')
    })
    it('Enters password only',() => {
        cy.get('#login-email').clear()
        cy.get('#login-password').type('1234')
        cy.get('#login').click()
        cy.contains('Please enter email and password')
    })
    it('Check with Invalid Email and password',() => {
        cy.get('#login-email').clear()
        cy.get('#login-password').clear()
        cy.get('#login-email').type('jithmi')
        cy.get('#login-password').type('1234')
        cy.get('#login').click()
        cy.contains('Invalid email or password')
    })

    it('Sucessfully login',() => {
        cy.get('#login-email').clear()
        cy.get('#login-password').clear()
        cy.get('#login-email').type('jithmi@gmail.com')
        cy.get('#login-password').type('12341234')
        cy.get('#login').click()
         
        // cy.get('#dietplans').click({force: true})
        // cy.contains('Lorem ipsum')
        // cy.get('#quiz').click()
        // cy.contains("Let's get started by answering this simple QUIZ !!!")
        // cy.get('#birthday').type('11112000')
        // cy.get('#female').check()
        // cy.get('#height').type(165)
        // cy.get('#weight').type(65)
    
    })
    it('Sucessfully does the quiz',() => { 
        cy.contains('EatSmart') 
        cy.get('#dietplans').click({force: true})
        cy.contains('Lorem ipsum')
        cy.get('#quiz').click()
        cy.contains("Let's get started by answering this simple QUIZ !!!")
        cy.get('#birthday').type('11112000')
        cy.get('#female').check()
        cy.get('#height').type(165)
        cy.get('#weight').type(65)
    
    })
    
})
