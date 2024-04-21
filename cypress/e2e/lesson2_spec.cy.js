describe("home page", () => {
  it("the h1 contains the correct text", () => {
    cy.visit('https://example.cypress.io')
cy.get("h1").contains("Kitchen Sink")
cy.visit('https://example.cypress.io/commands/actions')
cy.get('.action-email')
.type('jasmine@email.com').should('have.value', 'jasmine@email.com')










  })
})
