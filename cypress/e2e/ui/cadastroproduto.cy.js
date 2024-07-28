describe('template spec', () => {
  //Função para cadastrar um novo produto
    it('Cadastrar produto', () => {
      //Login Administrador
      cy.visit('https://front.serverest.dev/login')
      cy.get('[data-testid="email"]').type("teste@mail.com")
      cy.get('[data-testid="senha"]').type("teste123")
      cy.get('[data-testid="entrar"]').click()
      //Cadastro produto
      cy.get('[data-testid="cadastrar-produtos"]').click()
      cy.get('[data-testid="nome"]').type("Carros")
      cy.get('[data-testid="preco"]').type("10000")
      cy.get('[data-testid="descricao"]').type("Descrição do carro")
      cy.get('[data-testid="quantity"]').type("10")
      cy.get('[data-testid="cadastarProdutos"]').click()
    })
  })
   

