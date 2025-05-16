import pageData from '../fixtures/inputData'
import urls from '../fixtures/urls'
import { mainPageSelectors } from '../support/commonToDo'
import { removeSelectors } from '../support/removeToDo'

describe('Test counter', () => {
  it('Add 3 elements and check counter', () => {
    cy.visit(urls.urlToDo);
    cy.get(mainPageSelectors.searchField).should('be.visible');
    cy.get(mainPageSelectors.searchField).click().type(pageData.inputData.firstElement).type('{enter}');
    cy.get(mainPageSelectors.elementDisplay).should('contain',pageData.inputData.firstElement)
    
    // Counter shows '1'
    cy.get(mainPageSelectors.counterToDo).contains('1')

    cy.get(mainPageSelectors.searchField).click().type(pageData.inputData.secondElement).type('{enter}');
    cy.get(mainPageSelectors.elementDisplay).should('contain',pageData.inputData.secondElement)

    // Counter shows '2'
    cy.get(mainPageSelectors.counterToDo).contains('2')

    cy.get(mainPageSelectors.searchField).click().type(pageData.inputData.thirdElement).type('{enter}');
    cy.get(mainPageSelectors.elementDisplay).should('contain',pageData.inputData.thirdElement)

    // Counter shows '3'
    cy.get(mainPageSelectors.counterToDo).contains('3')

    // Remove one element
    cy.get(removeSelectors.listElements).contains(pageData.inputData.firstElement).parent()
      .find(removeSelectors.removeIcon) 
      .click({ force: true });
    
    // Counter shows '2'
    cy.get(mainPageSelectors.counterToDo).contains('2')
  })
})