// describe("Renders home page", () => {
//     it("renders correctly", () => {
//         cy.visit('/')
//         cy.contains('EatSmart')
//         cy.get('.landingContainer')
//         cy.get('.landingBtn')
//         cy.get('#signup').as('signup')
//         cy.get('#login').as('login')
//         cy.get('@login').click()
//         cy.contains('Log in to your account')
//         cy.get('#login-email').type('piu')
//         cy.get('#login').click()
//         cy.contains('Please enter email and password')
//         cy.get('#login-email').clear()
//         cy.get('#login-password').type('12')
//         cy.get('#login').click()
//         cy.contains('Please enter email and password')
//         cy.get('#login-email').clear()
//         cy.get('#login-password').clear()
//         cy.get('#login-email').type('piu')
//         cy.get('#login-password').type('128')
//         cy.get('#login').click()
//         cy.contains('Invalid email or password')
//         cy.get('#login-email').clear()
//         cy.get('#login-password').clear()
//         cy.get('#login-email').type('piumini95kaveesha@gmail.com')
//         cy.get('#login-password').type('12345678')
//         cy.get('#login').click()


//     })
// })

describe("Renders home page", () => {
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
    it('navigates to signup page',() => {
        cy.get('#signup').click()
    })

    // it('navigates to login page',() => {
    //      cy.get('#login').click()
    // })
})

describe("Signup Page works correctly", () => {
    it('Signup page is rendered',() => {
        cy.contains('Create Your Account')
        cy.get('.signUpFormContainer')
        cy.get('.formItem')
    })
    it('Enters name only',() => {
        cy.get(':nth-child(1) > .MuiInputBase-root > #outlined-basic').type('mynameis')
        cy.get('.MuiButtonBase-root').click()
        cy.contains('All fields should be filled!')
        cy.get(':nth-child(1) > .MuiInputBase-root > #outlined-basic').clear()
    })
    it('Enters email only',() => {
        cy.get(':nth-child(2) > .MuiInputBase-root > #outlined-basic').type('mynameis@')
        cy.get('.MuiButtonBase-root').click()
        cy.contains('All fields should be filled!')
        cy.get(':nth-child(2) > .MuiInputBase-root > #outlined-basic').clear()
    })
    it('Enters name email phonenumber',() => {
        cy.get(':nth-child(1) > .MuiInputBase-root > #outlined-basic').type('mynameis')
        cy.get(':nth-child(2) > .MuiInputBase-root > #outlined-basic').type('mynameis@')
        cy.get(':nth-child(3) > .MuiInputBase-root > #outlined-basic').type('myphonenumber')
        cy.get('.MuiButtonBase-root').click()
        cy.contains('All fields should be filled!')
    })
    it('Check with Invalid Email',() => {
        cy.get(':nth-child(4) > .MuiInputBase-root > #outlined-basic').type("pass")
        cy.get(':nth-child(5) > .MuiInputBase-root > #outlined-basic').type("pass")
        cy.get('.MuiButtonBase-root').click()
        cy.contains('Please enter a valid Email!')
    })
    it('Check with Invalid phone number',() => {
        cy.get(':nth-child(2) > .MuiInputBase-root > #outlined-basic').type('gmail.com')
        cy.get('.MuiButtonBase-root').click()
        cy.contains('Please enter a valid phone number!')
    })
    it('Check with Invalid phone number - missed digits',() => {
        cy.get(':nth-child(3) > .MuiInputBase-root > #outlined-basic').clear()
        cy.get(':nth-child(3) > .MuiInputBase-root > #outlined-basic').type('1234')
        cy.get('.MuiButtonBase-root').click()
        cy.contains('Please enter a valid phone number!')
    })
    it('Check with Invalid phone number - more digits',() => {
        cy.get(':nth-child(3) > .MuiInputBase-root > #outlined-basic').clear()
        cy.get(':nth-child(3) > .MuiInputBase-root > #outlined-basic').type('07142908101234')
        cy.get('.MuiButtonBase-root').click()
        cy.contains('Please enter a valid phone number!')
    })
    it('Check with Mismatching password',() => {
        cy.get(':nth-child(3) > .MuiInputBase-root > #outlined-basic').clear()
        cy.get(':nth-child(3) > .MuiInputBase-root > #outlined-basic').type('0714290810')
        cy.get(':nth-child(4) > .MuiInputBase-root > #outlined-basic').type("pass")
        cy.get(':nth-child(5) > .MuiInputBase-root > #outlined-basic').type("password")
        cy.get('.MuiButtonBase-root').click()
        cy.contains('Passwords do not match!')
    })
    it('Check with short password',() => {
        cy.get(':nth-child(4) > .MuiInputBase-root > #outlined-basic').clear()
        cy.get(':nth-child(5) > .MuiInputBase-root > #outlined-basic').clear()
        cy.get(':nth-child(4) > .MuiInputBase-root > #outlined-basic').type("pass")
        cy.get(':nth-child(5) > .MuiInputBase-root > #outlined-basic').type("pass")
        cy.get('.MuiButtonBase-root').click()
        cy.contains('Password length should be more than 8!')
    })

    it('Sucessfully create account',() => {
        cy.get(':nth-child(4) > .MuiInputBase-root > #outlined-basic').clear()
        cy.get(':nth-child(5) > .MuiInputBase-root > #outlined-basic').clear()
        cy.get(':nth-child(4) > .MuiInputBase-root > #outlined-basic').type("password123")
        cy.get(':nth-child(5) > .MuiInputBase-root > #outlined-basic').type("password123")
        cy.get('.MuiButtonBase-root').click()
        cy.contains('Log in to your account')
    })

})

describe("Login Page works correctly", () => {
    it('Login page is rendered',() => {
        cy.contains('Log in to your account')
        cy.get('.loginContainer')
        cy.get('.loginFormContainer')
    })
    it('Enters email only',() => {
        cy.get('#login-email').type('piu')
        cy.get('#login').click()
        cy.contains('Please enter email and password')
    })
    it('Enters password only',() => {
        cy.get('#login-email').clear()
        cy.get('#login-password').type('12')
        cy.get('#login').click()
        cy.contains('Please enter email and password')
    })
    it('Check with Invalid Email and password',() => {
        cy.get('#login-email').clear()
        cy.get('#login-password').clear()
        cy.get('#login-email').type('piu')
        cy.get('#login-password').type('128')
        cy.get('#login').click()
        cy.contains('Invalid email or password')
    })

    it('Sucessfully login to account',() => {
        cy.get('#login-email').clear()
        cy.get('#login-password').clear()
        cy.get('#login-email').type('piumini95kaveesha@gmail.com')
        cy.get('#login-password').type('12345678')
        cy.get('#login').click()
    })

})