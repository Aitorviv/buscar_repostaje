describe('Mapa de gasolineras en la página About', () => {
  it('debería mostrar el mapa y los marcadores', () => {
    cy.visit('/about');
    cy.wait(2000); // da tiempo al renderizado del mapa

    cy.get('.leaflet-container', { timeout: 10000 }).should('be.visible');

    // Haz clic en marcador y muestra popup
    cy.get('.leaflet-marker-icon').first().click();

    cy.contains('Gasolinera Bilbao Centro', { timeout: 4000 }).should('exist');
  });
});


