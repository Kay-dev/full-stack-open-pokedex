describe('Pokedex', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:5000/')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Can open a particular Pokemon', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:5000/')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})