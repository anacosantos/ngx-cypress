//import cypress to identify methods
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

    it('Test invoke command', () => {

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

    it('Assert property', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('input').then((input) => {
            cy.wrap(input).click()        
            cy.get('nb-calendar-day-picker').contains('17').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'May 17, 2021')
        })      
    })

    it('radio button', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        ///cy.get('[type="radio"]').first().check()
                                                //cab use get too
        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then((radioButtons) => {
            cy.wrap(radioButtons)
                .first()
                //input hidden, have to use force
                .check({force: true})
                .should('be.checked') 

            cy.wrap(radioButtons)
                //get index
                .eq(1)   
                .check({force: true})  

            cy.wrap(radioButtons)
                .eq(0)
                .should('not.be.checked')

            cy.wrap(radioButtons)   
                .eq(2)
                .should('be.disabled')

        })
    })    

    it('check boxes', () => {

        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        //will all checkboxes unchecked, don't became default checked as uncheked. 
        //all elements checked by default will continue checked
        //to became element defalt unchecked have to click to became unchecked
        ///cy.get('[type="checkbox"]').check({force: true}) 

        //to became element default unchecked have to click to became unchecked
        cy.get('[type="checkbox"]').eq(0).click({force: true})

        //element default still checked
        ///cy.get('[type="checkbox"]').eq(0).check({force: true})

        //check second element
        cy.get('[type="checkbox"]').eq(1).check({force: true})

        //use check of type checkbox and radio CHECK methods will work
        //just check ,but not uncheck
    })


    it('list and dropdown', () => {
        cy.visit('/')
        // //long way for one element 
        // cy.get('nav nb-select').click()
        // ///cy.get('.options-list') to get dark
        // cy.get('[class="options-list"]').contains('Dark').click()
        // //or
        // cy.get('[class="appearance-outline size-medium status-primary shape-rectangle"]').should('contain', 'Dark')
        // //or
        // cy.get('nav nb-select').should('contain', 'Dark')
        // //above input nav loook at the styles on styles : nb-layout-header nav 
        // //converrte this #222b45 to rgb 34, 43, 69
        // cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')
    

       
        // // best option reach each element e verify the colors
        cy.get('nav nb-select').then((dropdown) => {
            cy.wrap(dropdown).click()
            const colors = {
                'Light': 'rgb(255, 255, 255)',
                'Dark': 'rgb(34, 43, 69)',
                'Cosmic': 'rgb(50, 50, 89)',
                'Corporate': 'rgb(255, 255, 255)'
            }

            //()trim to remove space text
            cy.get('.options-list nb-option').each((listItem, index) => {
                const itemText = listItem.text().trim()

                cy.wrap(listItem).click()
                cy.wrap(dropdown).should('contain', itemText)

                cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
                if(index < 3){
                    cy.wrap(dropdown).click()
                }
                
            })   
            
        })
    })

    it('Web tables', () => {
       cy.visit('/')
       cy.contains('Tables & Data').click()
       cy.contains('Smart Table').click()

       cy.get('tbody').contains('tr', 'Larry').then((tableRow) => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', '25')
       })
    })   

    it('add name and last name', () =>{
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then((tableRow) => {
            cy.wrap(tableRow).find('[placeholder="First Name"]').type('Kikito')
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Menezes')
            cy.wrap(tableRow).find('.nb-checkmark').click()
        })

        cy.get('tbody tr').first().find('td').then((tableColumns) => {
            cy.wrap(tableColumns).eq(2).should('contain', 'Kikito')
            cy.wrap(tableColumns).eq(3).should('contain', 'Menezes')

        })
    })

    it('filter the data from de age', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        //create new scenarios with age
        const age = [20, 30, 40, 200]  
        cy.wrap(age).each(age => {
            ///cy.get('thead tr').find('[placeholder="Age"]').type('20')
            //or
            cy.get('thead [placeholder="Age"]').clear().type(age)
            //used it, because table has i short delay to update
            cy.wait(500)
            cy.get('tbody tr').each(tableR => {
                if(age == 200){
                    cy.wrap(tableR).should('contain', 'No data found')
                } else {
                    cy.wrap(tableR).find('td').eq(6).should('contain', age)
                }
           
            })
        })
    })

    it.only('Web Datapicker generating a new dates', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
        //use this from JS
        let date = new Date()
        //add a certain number of days to these dates
        date.setDate(date.getDate() + 70)
        let futureDay = date.getDate()
        //return number of month 
        //let futureMonth = date.getMonth() ORRRRRR
        let futureMonth = date.toLocaleDateString ('default', {month: 'short'})// extract month
        let dateAssert = futureMonth+' '+futureDay+', '+date.getFullYear()

        cy.contains('nb-card', 'Common Datepicker').find('input').then((input) => {
            cy.wrap(input).click()  
            selectDayFromCurrent()
            function selectDayFromCurrent(){
                cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAttribute => {
                    if(!dateAttribute.includes(futureMonth)){
                        cy.get('[data-name="chevron-right"]').click()
                        selectDayFromCurrent()
                    } else {
                        cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
                    }
                })            
        
            }
            cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
        })      
    })
})