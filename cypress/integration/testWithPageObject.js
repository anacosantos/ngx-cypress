import { navigateTo } from "../support/page_objects/navigationPage"


describe('Test with Page Object', () => {

    beforeEach('open the application', () =>{
        cy.visit('/')
    })

    it('Verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.tooltipPage()
    })
})