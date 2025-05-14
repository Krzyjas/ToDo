import pageData from '../fixtures/inputData'
import urls from '../fixtures/urls'
import { mainPageSelectors } from '../support/addToDo'

describe('Page To Do', () => {
  it('passes', () => {
    cy.visit(urls.urlToDo);
    cy.get(mainPageSelectors.searchField).should('be.visible');
    cy.get(mainPageSelectors.searchField).click().type(pageData.inputData.firstElement).type('{enter}');
    cy.get(mainPageSelectors.elementDisplay).should('contain',pageData.inputData.firstElement)
    cy.get(mainPageSelectors.searchField).click().type(pageData.inputData.secondElement).type('{enter}');
    cy.get(mainPageSelectors.elementDisplay).should('contain',pageData.inputData.secondElement)
    cy.get(mainPageSelectors.searchField).click().type(pageData.inputData.thirdElement).type('{enter}');
    cy.get(mainPageSelectors.elementDisplay).should('contain',pageData.inputData.thirdElement)
  })
})