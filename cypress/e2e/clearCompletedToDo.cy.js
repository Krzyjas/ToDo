import pageData from '../fixtures/inputData'
import urls from '../fixtures/urls'
import { mainPageSelectors } from '../support/commonToDo'
import { completeSelectors } from '../support/completeToDo'
import { activeSelectors } from '../support/activeToDoList'
import { clearCompletedSelectors } from '../support/clearCompletedToDo'

describe('List of completed and clear them', () => {
  it('List of completed elements to be cleared and check', () => {
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

    // Click 'Clear Completed' button
    cy.get(mainPageSelectors.clearCompletedButton).click()

    // Check if completed are located on current list
    cy.get('.completed').should('not.exist');
    cy.get(clearCompletedSelectors.listElement).should('not.exist');

    // Check if completed are located on 'All' list
    cy.get(mainPageSelectors.allButton).click();
    cy.get(activeSelectors.notActiveElements).should('not.exist');
  })
})