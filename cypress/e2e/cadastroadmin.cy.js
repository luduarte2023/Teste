describe('template spec', () => {
  //Função faz cadastro de usuários administrador
  it('Login Administrador', () => {
    cy.visit('https://front.serverest.dev/login')  
      cy.get('[data-testid="cadastrar"]').click()
      cy.get('[data-testid="nome"]').type("Teste")
      cy.get('[data-testid="email"]').type("teste@mail.com")
      cy.get('[data-testid="password"]').type("teste123")
      cy.get('[data-testid="checkbox"]').click()
      cy.get('[data-testid="cadastrar"]').click()    
  })
})