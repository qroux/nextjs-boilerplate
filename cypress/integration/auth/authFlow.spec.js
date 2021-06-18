/// <reference types="cypress" />

context('Actions', () => {
  it('Auth flow', () => {
    cy.visit('/');
    cy.get('[name="register"]').click();

    cy.location().should((path) => {
      expect(path.href).to.eql('http://localhost:3000/register');
    });

    cy.get('#email-input').should('exist');
    cy.get('#email-input').type('test');
    cy.get('#password-input').type('test');
    cy.get('form').submit();

    cy.visit('/login');
    cy.get('#email-input').should('exist');
    cy.get('#email-input').type('test');
    cy.get('#password-input').type('test');
    cy.get('form').submit();

    cy.location().should((path) => {
      expect(path.href).to.eql('http://localhost:3000/');
    });

    cy.get('#indicator')
      .first()
      .should('have.css', 'background-color', 'rgb(0, 128, 0)');
  });
});
