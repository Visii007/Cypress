/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

it('My FirstTest case',function() {


cy.visit("https://able.trooinbounddev.com/admin/login")

cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
cy.get(':nth-child(3) > .form-control').type('123456')
cy.get('.btn').click()

//Employees Creation

cy.get('.nav > :nth-child(2) > .nav-link').click()
cy.get('.pull-right > .btn').click()
cy.get(':nth-child(1) > .form-group > .form-control').type('Test')
cy.get(':nth-child(2) > .form-group > .form-control').type('Demo')
cy.get(':nth-child(3) > .form-group > .form-control').type('Demo123@yopmail.com')
cy.get(':nth-child(5) > .form-group > .form-control').type('1234')
cy.get(':nth-child(6) > .form-group > .form-control').type('1234')
cy.get(':nth-child(7) > .form-group > .form-control').type('English')
cy.get('.text-center > .btn').click()
cy.get('.pull-right > .btn').click()

})
//const logo=cy.get('.brand')
//cy.log(cy.get('.brand').text())
// cy.log(logo.text())











//fixture

}  )


