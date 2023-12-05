// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

const { default: ShopPage } = require("../pageObjects/ShopPage.cy")

// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("selectProduct", (productName) => {
        cy.get('.card-title').each(($e1,index, $list)=>{
        if($e1.text().includes(productName))
        {
            cy.get('button.btn.btn-info').eq(index).click()}
        })
    })

    Cypress.Commands.add('SixProduct', (item) => { 
     cy.get('.inventory_item').each(($e1, index, $list)=>{
      if($e1.text().includes(item))
     {cy.get('.btn_primary').eq(index).click()}

        })
    })
   
   
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })