/* eslint-disable no-undef */
describe('Integration tests', () => {
  it('should render correctly', () => {
    cy.visit('/');
    cy.get('[data-testid=container]').should('exist');
    cy.get('[data-testid=product-searching]').should('exist');
    cy.get('[data-testid=product-list-1]').should('exist');
  });

  it('should allow checkboxes to be used and then updates the product list correctly', () => {
    cy.visit('/');
    // Data Analytics category click
    cy.get('[data-testid="checkbox-Data Analytics"]').click();
    cy.findAllByText('Tableau Desktop Professional').should('exist');
    cy.findAllByText('Foxit software PhantomPDF Standard').should('not.exist');
    cy.get('[data-testid="product-list-9"]').should('exist');
    cy.get('[data-testid="product-list-1"]').should('not.exist');

    // Daily Business category click
    cy.get('[data-testid="checkbox-Daily Business"]').click();
    cy.findAllByText('Foxit software PhantomPDF Standard').should('exist');
    cy.findAllByText('Tableau Desktop Professional').should('exist');
    cy.get('[data-testid="product-list-1"]').should('exist');
    cy.get('[data-testid="product-list-9"]').should('exist');

    // Daily Business category clicks again. Data Analytics has already selected
    cy.get('[data-testid="checkbox-Daily Business"]').click();
    cy.findAllByText('Tableau Desktop Professional').should('exist');
    cy.findAllByText('Foxit software PhantomPDF Standard').should('not.exist');
    cy.get('[data-testid="product-list-9"]').should('exist');
    cy.get('[data-testid="product-list-1"]').should('not.exist');
  });

  it('should click the developer category, search and then updates the product list correctly', () => {
    cy.visit('/');
    cy.get('[data-testid="checkbox-Developer"]').click();
    cy.get('[data-testid=search-box]').type('x');
    cy.findAllByText('JetBrain ReSharper Ultimate 2020.x').should('exist');
    cy.get('[data-testid="product-list-8"]').should('exist');

    // types another word
    cy.get('[data-testid=search-box]').type('s');
    cy.findAllByText('JetBrain ReSharper Ultimate 2020.x').should('not.exist');
    cy.get('[data-testid="product-list-8"]').should('not.exist');

    // Backspace
    cy.get('[data-testid=search-box]').type('{backspace}');
    cy.findAllByText('JetBrain ReSharper Ultimate 2020.x').should('exist');
    cy.get('[data-testid="product-list-8"]').should('exist');
  });

  it('should search the products and then updates product list correctly', () => {
    cy.visit('/');
    cy.get('[data-testid=search-box]').type('q');
    cy.get('[data-testid="product-list-1"]').should('not.exist');

    // clears the input and then find the zoom product
    cy.get('[data-testid=search-box]').clear();
    cy.get('[data-testid=search-box]').type('zoom');
    cy.get('[data-testid="product-list-1"]').should('not.exist');
    cy.get('[data-testid="product-list-10"]').should('exist');
  });

  it('should click the product and then product details should appear on the screen with right data', () => {
    cy.visit('/');
    cy.get('[data-testid="product-list-1"]').click();
    cy.get('[data-testid="product-detail-1"]').should('exist');
    cy.get('[data-testid="product-detail-1"]').contains('Foxit software PhantomPDF Standard');
  });

  it('should click the product and then clicks another product', () => {
    cy.visit('/');
    cy.get('[data-testid="product-list-1"]').click();
    cy.get('[data-testid="product-detail-1"]').should('exist');
    cy.get('[data-testid="product-detail-1"]').contains('Foxit software PhantomPDF Standard');

    cy.get('[data-testid="product-list-3"]').click();
    cy.get('[data-testid="product-detail-3"]').should('exist');
    cy.get('[data-testid="product-detail-3"]').contains('Autodesk AutoCAD 2020.x');
  });

  it('should click the product and then clicks the link button', () => {
    cy.visit('/');
    cy.get('[data-testid="product-list-7"]').click();
    cy.get('[data-testid="button-7"]').click();
  });
});
