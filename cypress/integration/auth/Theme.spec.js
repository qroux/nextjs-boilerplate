/// <reference types="cypress" />

context('Actions', () => {
  it('Theme Switching', () => {
    cy.visit('/');
    cy.get('body').should('have.css', 'background-color', 'rgb(249, 249, 249)');

    cy.get('[name="darkmode"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(27, 38, 44)');
  });
});
