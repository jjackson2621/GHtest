Cypress.Commands.add('logintoSauceDemo', (username, password)=> {
    cy.visit('https://www.saucedmo.com/');
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();

});
describe('login test', () => {
    it('should login successfully', () => {
       cy.visit('https://www.saucedemo.com/',);
       cy.get('[data-test="username"]').type('standard_user');
       cy.get('[data-test="password"]').type('secret_sauce');
       cy.get('[data-test="login-button"]').click()
  
    })
  })