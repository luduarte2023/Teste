describe('template spec', () => {
    //Método Get
    it('GET', () => {
          cy.request({
            method: 'GET',
            url: 'http://localhost:3000/produtos',
            body: {
              "quantidade": 2,
              "produtos": [
                {
                  "nome": "Logitech MX Vertical",
                  "preco": 470,
                  "descricao": "Mouse",
                  "quantidade": 382,
                  "_id": "BeeJh5lz3k6kSIzA"
                },
                {
                  "nome": "Samsung 60 polegadas",
                  "preco": 5240,
                  "descricao": "TV",
                  "quantidade": 49977,
                  "_id": "K6leHdftCeOJj8BJ"
                }
              ]
            }
              
            
          }).then((response)=>{
            expect(response.status).to.equal(200)
          })
    })
  })