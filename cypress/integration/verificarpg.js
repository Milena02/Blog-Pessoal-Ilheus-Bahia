describe('Página Ilhéus - Bahia', () => {
    it('Deve carregar a página corretamente', () => {
      cy.visit('caminho/para/sua/página.html');  // Substitua com o caminho real da sua página
      cy.title().should('include', 'Ilhéus- Bahia');
      cy.get('body').should('exist');
    });
  });
  