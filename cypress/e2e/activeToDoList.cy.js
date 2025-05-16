import pageData from '../fixtures/inputData'
import urls from '../fixtures/urls'
import { mainPageSelectors } from '../support/commonToDo'
import { completeSelectors } from '../support/completeToDo'
import { activeSelectors } from '../support/activeToDoList'

describe('Mark item as completed', () => {
  it('Add 3 elements', () => {
    cy.visit(urls.urlToDo);
    cy.get(mainPageSelectors.searchField).should('be.visible');
    cy.get(mainPageSelectors.searchField).click().type(pageData.inputData.firstElement).type('{enter}');
    cy.get(mainPageSelectors.elementDisplay).should('contain',pageData.inputData.firstElement)
    cy.get(mainPageSelectors.searchField).click().type(pageData.inputData.secondElement).type('{enter}');
    cy.get(mainPageSelectors.elementDisplay).should('contain',pageData.inputData.secondElement)
    cy.get(mainPageSelectors.searchField).click().type(pageData.inputData.thirdElement).type('{enter}');
    cy.get(mainPageSelectors.elementDisplay).should('contain',pageData.inputData.thirdElement)

    // Choose element and mark
    cy.get(completeSelectors.checkboxToDo).eq(0).click()

    // Check does element is marked
    cy.get(completeSelectors.markedElement).eq(0).should('have.class', 'completed');

    // Click 'Active' only list
    cy.get(mainPageSelectors.activeButton).click()

    // Check that displayed elements are only 'active'
    cy.get(activeSelectors.activeElements).should('exist');
    cy.get(activeSelectors.notActiveElements).should('not.exist');
  })
})