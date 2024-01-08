/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

it('My FirstTest case',function() {


    cy.visit("https://able.trooinbounddev.com/admin/login")

    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('123456')
    cy.get('.btn').click()

    cy.get(':nth-child(4) > .nav-link').click()
    cy.get('.pull-right > .btn').click()
    cy.get('.form-group > .form-control').type('Creator')
   // cy.get('input[type="checkbox"]').check([' company-list',' employee-list'])
   

//    cy.get('input[type="checkbox"]').each(($checkbox) => {
//     if ($checkbox.is('[value="company-list"]') || $checkbox.is('[value="employee-list"]')) {
//       cy.wrap($checkbox).check();
//     }
//   });
    cy.get(':nth-child(51)').click()
    cy.get(':nth-child(19)').click()
    cy.get('.text-center > .btn').click()
    cy.get('.pull-right > .btn').click()

    cy.get('.nav > :nth-child(3) > .nav-link').click()
    cy.get(':nth-child(2) > :nth-child(5) > .btn-primary').click()
    cy.get('select').select('Creator')
    cy.get('.text-center > .btn').click()
    cy.get('.main-header > :nth-child(1) > :nth-child(3) > .nav-link').click()

    cy.get(':nth-child(2) > .form-control').type('TRP123@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('1122')
    cy.get('.btn').click()
})
//const logo=cy.get('.brand')
//cy.log(cy.get('.brand').text())
// cy.log(logo.text())











//fixture

}  )


