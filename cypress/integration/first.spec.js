//import cypress to identifu methods
/// <reference types="cypress"/>


describe('First suite', () => {

    it('First test', () => {

        cy.visit('/')
        //console.log( 'aewara')

        //basic method GET() any element and most of test

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
    //want to run only this test
    it('Second Test', () =>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //create on button data-cy inside on Using the Grid (form-layouts.components.html)
        cy.get('[data-cy="signInButton"]')
        //use exactly the same name of text DOM
        cy.contains('Sign in')

        //find second sign in from Horizontal form
        //cy.get('[status="warning"]')
        //or
        cy.contains('[status="warning"]','Sign in')
 
        //find the form where is content email, pass and sign in(travel paranet element)and a child
        //email into of form and find button
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            //go to (remember me) square
            .parents('form')
            .find('nb-checkbox')
            .click()

        //another way to fins email
        //cypress will find nb-card which contains text horizontal form and find web element
        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')//or find('[id="inputEmail3"]')

    })

    it('then and wrap methods', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password' )
        // cy.contains('nb-card','Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address' )
        // cy.contains('nb-card','Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')


        //***** selenium put the same variable with const
        //this sort of isn't works with cy
        //const firstForm = cy.contains('nb-card','Using the Grid')
        //const secondForm = cy.contains('nb-card','Basic form')
        //firstForm.find('[for="inputEmail1"]').should('contain', 'Email')
        //firstForm.find('[for="inputPassword2"]').should('contain', 'Password' )
        //secondForm.find('[for="exampleInputEmail1"]').should('contain', 'Email address' )
        

        //**** CYPRESS STYLE
        // cy.contains('nb-card','Using the Grid').then( firstForm => {
        //     const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
        //     const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
        //     expect(emailLabelFirst).to.equal('Email')
        //     expect(passwordLabelFirst).to.equal('Password')
        // })
        
        cy.contains('nb-card','Basic form').then( secondForm => {
            // const emailLabelSecond = secondForm.find('[for="exampleInputEmail1"]').text()
            // const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
            // expect(emailLabelSecond).to.equal('Email address')
            // expect(passwordLabelSecond).to.equal('Password')

            //or THE BEST WAY 
            cy.wrap(secondForm).find('[for="exampleInputEmail1"]').should('contain', 'Email address')
            cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
            
            //or
            //cy.wrap(cy.contains('nb-card','Basic form').then(s => {return s})).find('[for="exampleInputEmail1"]').should('contain', 'Email address')

        })
    })

    it.only('Test invoke command', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //ex1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //ex2
        cy.get('[for="exampleInputEmail1"]').then((label) => {
            expect(label.text()).to.equal('Email address')
        })

        //ex3 using invoke comand
        cy.get('[for="exampleInputEmail1"]').invoke('text').then((text) =>{
            expect(text).to.equal('Email address')
        })

        //ex4 check is checkbox was checked
        // cy.contains('nb-card','Basic form')
        //     .find('nb-checkbox')
        //     .click()
        //     .find('.custom-checkbox')
        //     .invoke('attr', 'class')
        //     .should('contain', 'checked')

       //ex5
       cy.contains('nb-card','Basic form')
       .find('nb-checkbox')
       .click()
       .find('.custom-checkbox')
       .invoke('attr', 'class')
       .then((classValue => {
           expect(classValue).to.contain('checked')
       }))

        
       


    })
})