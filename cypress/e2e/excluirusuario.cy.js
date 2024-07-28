describe('template spec', () => {
  //Função para excluir um usuário
    it('Excluir usuario', () => {
      //Login Administrador
      cy.visit('https://front.serverest.dev/login')
      cy.get('[data-testid="email"]').type("teste@mail.com")
      cy.get('[data-testid="senha"]').type("teste123")
      cy.get('[data-testid="entrar"]').click()
      //Exclusão de usuário
      cy.get('[data-testid="listar-usuarios"]').click()
      cy.get(':nth-child(2) > :nth-child(5) > .row > .btn-danger').click()
    })
  })