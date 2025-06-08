describe('Footer content test', () => {
  it('should display the names of the team members in the footer', () => {
    cy.visit('/');
    cy.wait(2000); // espera a que cargue la app

    cy.get('footer').should('contain.text', 'Sergio Martinez');
    cy.get('footer').should('contain.text', 'Jesus Alejandro');
    cy.get('footer').should('contain.text', 'Aitor Vivanco');
  });
});

