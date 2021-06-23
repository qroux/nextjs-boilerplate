/// <reference types="cypress" />

context('Actions', () => {
  it('Auth flow', () => {
    cy.visit('/');
    cy.get('[name="register"]').click();

    cy.location().should((path) => {
      expect(path.href).to.eql('http://localhost:3000/register');
    });

    cy.get('#new-email').should('exist');
    cy.get('#new-email').type('test');
    cy.get('#new-password').type('test');
    cy.get('form').submit();

    cy.visit('/login');
    cy.get('#current-email').should('exist');
    cy.get('#current-email').type('test');
    cy.get('#current-password').type('test');
    cy.get('form').submit();

    cy.location().should((path) => {
      expect(path.href).to.eql('http://localhost:3000/');
    });

    cy.get('#indicator')
      .first()
      .should('have.css', 'background-color', 'rgb(0, 128, 0)');
  });
});
