describe('Rodapé', () => {
    it('Deve exibir o rodapé corretamente', () => {
      cy.visit('caminho/para/sua/página.html');
      cy.get('.rodape').should('exist');
      cy.get('.rodape').contains('Milena Cezar-2025');
    });
  });
  