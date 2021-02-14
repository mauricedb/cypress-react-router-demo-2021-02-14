context('App', () => {
  it('Renders', () => {
    cy.visit('http://localhost:3000');

    cy.contains('This is Home').should('be.visible');

    cy.historyPush('/p1');

    cy.contains('This is P1').should('be.visible');
  });
});
