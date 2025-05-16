import pageData from '../fixtures/inputData'
import urls from '../fixtures/urls'
import { mainPageSelectors } from '../support/commonToDo'
import { removeSelectors } from '../support/removeToDo'

describe('Remove item from page To Do', () => {
  it('Add elements and remove one', () => {
    cy.visit(urls.urlToDo);
    cy.get(mainPageSelectors.searchField).should('be.visible');
    cy.get(mainPageSelectors.searchField).click().type(pageData.inputData.firstElement).type('{enter}');
    cy.get(mainPageSelectors.elementDisplay).should('contain',pageData.inputData.firstElement)
    cy.get(mainPageSelectors.searchField).click().type(pageData.inputData.secondElement).type('{enter}');
    cy.get(mainPageSelectors.elementDisplay).should('contain',pageData.inputData.secondElement)
    cy.get(mainPageSelectors.searchField).click().type(pageData.inputData.thirdElement).type('{enter}');
    cy.get(mainPageSelectors.elementDisplay).should('contain',pageData.inputData.thirdElement)

    // remove one element
    cy.get(removeSelectors.listElements).contains(pageData.inputData.firstElement).parent()
      .find(removeSelectors.removeIcon) 
      .click({ force: true }); 

    // checking does element exist 
    cy.contains(removeSelectors.listElements, pageData.inputData.firstElement).should('not.exist');
  })
})