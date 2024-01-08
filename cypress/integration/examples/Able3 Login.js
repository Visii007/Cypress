/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

it('My FirstTest case',function() {


cy.visit("https://able.trooinbounddev.com/login")

cy.get('#email').type('TRP123@gmail.com')
cy.get('#Password').type('1122')
cy.get('.able-submit-btn > input').click()

})
//const logo=cy.get('.brand')
//cy.log(cy.get('.brand').text())
// cy.log(logo.text())











//fixture

}  )


