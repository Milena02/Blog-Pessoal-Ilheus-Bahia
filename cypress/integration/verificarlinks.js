describe('Links de navegação', () => {
    it('Deve redirecionar para as seções corretas', () => {
      cy.visit('caminho/para/sua/página.html');
      
      cy.get('a[href="#história"]').click();
      cy.url().should('include', '#história');
      cy.get('h2').contains('História de Ilhéus');
  
      cy.get('a[href="#curiosidades"]').click();
      cy.url().should('include', '#curiosidades');
      cy.get('h2').contains('Curiosidades');
  
      cy.get('a[href="#paixao"]').click();
      cy.url().should('include', '#paixao');
      cy.get('h2').contains('Ilhéus: Um Amor à Primeira Vista');
      
      cy.get('a[href="#galeria"]').click();
      cy.url().should('include', '#galeria');
      cy.get('.galeria').should('exist');
    });
  });
  