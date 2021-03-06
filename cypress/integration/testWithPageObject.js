import { onDatepickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"


describe('Test with Page Object', () => {

    beforeEach('open the application', () =>{
        cy.openHomePage()
    })

    it('Verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.tooltipPage()
    })

    it('Should submit Inline and Basic form and select tomorrow date in the calendar ', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Carol', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
        navigateTo.datePickerPage()
        onDatepickerPage.selectCommomDatepickerDateFromToday(1)
        onDatepickerPage.selectDatepickerWithRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Carol', 'Santos')
        onSmartTablePage.updateAgeByFirstName('Carol', '35')
        onSmartTablePage.deleteRowByIndex(1)
    })
    
})    