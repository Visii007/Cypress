/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

it('My FirstTest case',function() {


cy.visit("https://able.trooinbounddev.com/admin/login")

cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
cy.get(':nth-child(3) > .form-control').type('123456')
cy.get('.btn').click()

//User Creation
cy.get('.nav > :nth-child(3) > .nav-link').click()
cy.get('.pull-right > .btn').click()
cy.get(':nth-child(1) > .form-group > .form-control').type('TRP')
cy.get(':nth-child(2) > .form-group > .form-control').type('TRP123@gmail.com')
cy.get(':nth-child(3) > .form-group > .form-control').type('1122')
cy.get(':nth-child(4) > .form-group > .form-control').type('1122')
cy.get(':nth-child(6) > .form-group > .form-control').type('985678955')
cy.get('select').select('Employee')
cy.get('.text-center > .btn').click()
cy.get('.pull-right > .btn').click()

cy.get(':nth-child(2) > :nth-child(5) > .btn-primary').click()
cy.get('select').select('Admin')

cy.get('.text-center > .btn').click()
})












//fixture

}  )


