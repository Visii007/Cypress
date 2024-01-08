/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

it('My FirstTest case',function() {

    cy.visit("https://able.trooinbounddev.com/admin/login")

    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('123456')
    cy.get('.btn').click()
//Company Edit
    cy.get('.nav > :nth-child(1) > .nav-link').click()
    cy.get(':nth-child(2) > :nth-child(5) > .btn-primary').click()
    cy.get(':nth-child(3) > .form-group > .form-control').type('123')
    cy.get(':nth-child(4) > .form-group > .form-control').type('123')
    cy.get('.text-center > .btn').click()

})
//const logo=cy.get('.brand')
//cy.log(cy.get('.brand').text())
// cy.log(logo.text())











//fixture

}  )



