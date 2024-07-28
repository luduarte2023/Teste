describe('template spec', () => {
  //Função para listar compras
    it('passes', () => {
        //Login
      cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="email"]').type("teste1@mail.com")
        cy.get('[data-testid="senha"]').type("teste1123")
        cy.get('[data-testid="entrar"]').click()
        //Listar compra
        cy.get('[data-testid="pesquisar"]').type("Carros")
        cy.get('[data-testid="botaoPesquisar"]').click()
        cy.get('[data-testid="adicionarNaLista"]').click()
        //Limpar lista
        cy.get('[data-testid="limparLista"]').click()   
    })
  })