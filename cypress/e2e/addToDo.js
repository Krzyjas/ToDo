import pageData from '../fixtures/inputData'
import urls from '../fixtures/urls'

describe('Page To Do', () => {
  it('passes', () => {
    cy.visit(urls.urlToDo)
  })
})