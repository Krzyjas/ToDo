import pageData from '../fixtures/inputData'
import urls from '../fixtures/urls'
import { mainPageSelectors } from '../support/commonToDo'
import { completeSelectors } from '../support/completeToDo'
import { activeSelectors } from '../support/activeToDoList'

describe('List of completed', () => {
  it('List of completed elements', () => {
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

    // Click 'Completed' only list
    cy.get(mainPageSelectors.completedButton).click()

    // Check that displayed elements are only 'completed'
    cy.get(activeSelectors.activeElements).should('not.exist');
    cy.get(activeSelectors.notActiveElements).should('exist');
  })
})