describe('Portfolio Page', () => {
  it('successfully loads and displays elements', () => {
    cy.visit('/'); // change this to the path of your page if it's not the home page

    cy.get('div.container.relative').within(() => {
      cy.get('h1').within(() => {
        cy.contains('Portfolio'); // checks for the heading
      });
    });
  });
});
