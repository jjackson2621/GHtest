const validUsername = 'standard_user';
const validPassword = 'secret_sauce';

describe('Login Test', () => {
  it('should login successfully', () => {
    cy.visit('https://www/saucedemo.com')
    cy.get('#username').type ('standard_user')
    cy.get('#password').type ('secret_sauce')
    cy.get('#log-in').click()
    cy.screenshot()
    