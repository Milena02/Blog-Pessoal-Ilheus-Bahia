describe('Galeria de imagens', () => {
    it('Deve exibir as imagens da galeria corretamente', () => {
      cy.visit('caminho/para/sua/página.html');
      
      cy.get('.galeria img').should('have.length', 25);  // Verifica que há 25 imagens
      cy.get('.galeria img').each(($img) => {
        cy.wrap($img).should('be.visible');  // Garante que cada imagem esteja visível
        cy.wrap($img).should('have.attr', 'alt').and('not.be.empty');  // Verifica o atributo alt das imagens
      });
    });
  });
  