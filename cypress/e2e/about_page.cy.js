describe('About page enhanced test', () => {
  it('debería mostrar la sección de misión', () => {
    cy.visit('/about');
    cy.wait(1000);

    cy.contains('misión', { matchCase: false, timeout: 8000 }).should('exist');
    cy.contains('¿Cómo funciona?', { timeout: 8000 }).should('exist');
    cy.contains('Ventajas para los usuarios', { timeout: 8000 }).should('exist');
  });
});

