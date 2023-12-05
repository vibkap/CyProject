class ShopPage{

    getShopButton()
    {
       return cy.get(':nth-child(2) > .nav-link')
    }
    getProducts()
    {
        return cy.get('.card-title')
    }

    getCheckOut()
    {
        return cy.get('.nav-link.btn.btn-primary')
    }
    getTotal()
    {
        return cy.get('.text-center:nth-child(4) strong')
    }
    getPrice()
    {
        return cy.get('h3 strong')  
    }
    getcheckout()
    {
        return cy.get('.btn.btn-success')
    }
    getCountry()
    {
        return cy.get('#country')
    
    }
    getSuggestion()
    {
        return cy.get('#country')
    }
    getcheckBox()
    {
        return cy.get('#checkbox2')
    }
    getPurchase()
   {
    return cy.get('.ng-untouched > .btn')
   }
   getAlert()
   {
    cy.get('.alert')
   }
}

export default ShopPage;