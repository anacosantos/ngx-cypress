
export class FormLayoutsPage {

    submitInlineFormWithNameAndEmail(name, email){
        cy.contains('nb-card', 'Inline form').find('form').then(form => {
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit()
        })     
    }

    submitBasicFormWithEmailAndPassword(emailBasic, password){
        cy.contains('nb-card', 'Basic form').find('form').then(formBasic =>{
            cy.wrap(formBasic).find('[placeholder="Email"]').type(emailBasic)
            cy.wrap(formBasic).find('[placeholder="Password"]').type(password)
            cy.wrap(formBasic).find('[type="checkbox"]').check({force: true})
            cy.wrap(formBasic).submit()
        })
    }
       
}

export const onFormLayoutsPage = new FormLayoutsPage