describe('Cypress test', () => {
  beforeEach(() => {
    cy.visit('https://www.cypress.io');
  })

  it('should has text \'npm install cypress\'', () => {
    cy.get('[class="filler"]').should('contain', 'npm install cypress');
  })
})