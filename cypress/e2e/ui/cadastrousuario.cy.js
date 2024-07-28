describe('template spec', () => {
  //Função para cadastro de usuário comum
    it('Cadastro usuario', () => {
      cy.visit('https://front.serverest.dev/login')  
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('[data-testid="nome"]').type("Teste 1")
        cy.get('[data-testid="email"]').type("teste1@mail.com")
        cy.get('[data-testid="password"]').type("teste1123")
        cy.get('[data-testid="cadastrar"]').click()    
    })
  })