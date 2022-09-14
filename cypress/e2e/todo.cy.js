describe('TodoMVC', function() {
  beforeEach(function() {
    // Load our app before starting each test case
    cy.visit('https://www.google.com/')
  })

  it('Loads the Google app', function() {
    cy.get('.L3eUgb').should('exist')
    cy.contains('Google')
    cy.get('.gb_A').click()
    cy.percySnapshot()
  })

})
