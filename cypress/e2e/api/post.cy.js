describe('template spec', () => {
    //Método Post
    it('POST', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:3000/login',
          body: 
            {
                "email": "fulano@qa.com",
                "password": "teste"
              }
            , failOnStatusCode: false
            
          
        }).then((response)=>{
          expect(response.status).to.equal(200)
        })
  })
    it('', () => {
          cy.request({
            method: 'POST',
            url: 'http://localhost:3000/produtos',
            body: {
                "nome": "Logitech MX Vertical",
                "preco": 470,
                "descricao": "Mouse",
                "quantidade": 381
              }, failOnStatusCode: false
              
            
          }).then((response)=>{
            expect(response.status).to.equal(201)
          })
    });
    it('', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:3000/produtos',
          body: {
              "nome": "Logitech MX Vertical",
              "preco": 470,
              "descricao": "Mouse",
              "quantidade": 381
            }, failOnStatusCode: false
            
          
        }).then((response)=>{
          expect(response.status).to.equal(400)
        })
  });
    it('', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/produtos',
      body: {
          "nome": "Logitech MX Vertical",
          "preco": 470,
          "descricao": "Mouse",
          "quantidade": 381
        }, failOnStatusCode: false
        
      
    }).then((response)=>{
      expect(response.status).to.equal(401)
    })
    })
    it('', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:3000/produtos',
          body: {
              "nome": "Logitech MX Vertical",
              "preco": 470,
              "descricao": "Mouse",
              "quantidade": 381
            }, failOnStatusCode: false
            
          
        }).then((response)=>{
          expect(response.status).to.equal(403)
        })
  })
  })