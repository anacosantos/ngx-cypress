//import cypress to identifu methods
/// <reference types="cypress"/>

describe('First suite', () => {

    it('First test', () => {

        cy.visit('/')
        console.log( 'aewara')
        //basic method get any element and most of test

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()


        //by Tag Name
        cy.get('input')

        //by Id 
        cy.get('#inputEmail1')   

        //by Class name (put first class name)
        cy.get('.input-full-width')

        //by Attribute name
        cy.get('[placeholder]')

        //by Attribute name and value
        cy.get('[placeholder="Email"]')

        //by Class value (put all the value of class into square braces)
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by Tag name and Attribute with vale
        cy.get('input[placeholder="Email"]')

        //by two different Attributes or more attributes
        cy.get('[placeholder="Email"][type="email"]')

        //by tag name, attribute with value, ID and Class name (use without space)
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //the most recommended way by Cypress
        cy.get('[data-cy="imputEmail1"]')
    })



})