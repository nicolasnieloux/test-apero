// describe('test1', () => {
//   it('response 200', () => {
//     cy.request({
//       url: 'http://localhost:8080/api/est-ce-que-c-est-l-heure-de-l-apero',
//       timeout: 300
//     }).then((response) => {
//
//       expect(response.status).to.eq(200);
//       expect(response.duration).to.be.lessThan(300);
//       expect(response.body).to.have.length.of.at.least(5);
//     });
//   });
// });
//
// describe('test 2',() => {
//   it('Vérifier que le composant affiche ...', () => {
//     cy.intercept({
//       url: '**/api/est-ce-que-c-est-l-heure-de-l-apero'
//     }).as('apero')
//     cy.visit('http://localhost:4200')
//     cy.get('#1').contains('...')
//
//     cy.wait('@apero').then((interception) => {
//       // @ts-ignore
//       expect(interception.response.body).to.not.be.null;
//     })
//
//   })
// })

describe('test 3', () => {
  it('Une erreur est affichée en cas de déconnexion du backend', () => {
    cy.intercept(
      '**/api/est-ce-que-c-est-l-heure-de-l-apero',
      { statusCode: 500 }
    ).as('getServerFailure')
    cy.visit('http://localhost:4200')
    cy.wait('@getServerFailure')

    cy.get('h2').first().contains('Service indisponible :/')

  });


})
