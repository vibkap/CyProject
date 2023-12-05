/// <reference types ="Cypress" />
import HomePage from "../pageObjects/HomePage.cy"
import ShopPage from "../pageObjects/ShopPage.cy"

describe('template spec', function() {
 
    before(function() {
        cy.fixture('example').then(function(data) {
            this.data=data
            cy.log('THIS: ', this.data)
        })
    })
    
 
    it('passes',function() {


      const homePage=new HomePage()

      cy.visit(Cypress.env('url')+"/angularpractice/")
      homePage.getEditBox().type(this.data.Name)
      homePage.getGender().select(this.data.gender)
      homePage.getPassword().type(this.data.password)

      homePage.getTwoWayData().should('have.value',this.data.Name)
      homePage.getEnterpreniurButton().should('be.disabled')
      
      ///selector DOB to add to example
      homePage.getEditBox().should('have.attr','minlength',2)
     
      const shopPage =new ShopPage()
    
      shopPage.getShopButton().click()

        this.data.productName.forEach(function(element) {
                  cy.selectProduct(element)
      });
    
      shopPage.getCheckOut().click()
           /// total - adding the price of 2 products
     var sum=0

      shopPage.getTotal().each(($e1, index,$list) =>
      {
        const amount=$e1.text()
        var price= amount.split(" ") 
        price=price[1].trim()
        cy.log(price)

        sum=Number(sum)+Number(price) 
      }).then(function()
        {
          cy.log(sum)
        })
        shopPage.getPrice().then(function(element){
          cy.log(element.text())
          const amot = element.text()
          
          var total = amot.split(' ')
          cy.log('total= ', total)
          total= total[1].trim()
         cy.log('total=', total)
          expect(Number(total)).to.eq(Number(sum))
        })
   
        
      shopPage.getcheckout().click()
      shopPage.getCountry().type(this.data.country).click()///Ukraine
               
      shopPage.getcheckBox().check({force: true}).should('be.checked')
      shopPage.getPurchase().click()

      ///shopPage.getAlert().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')

      shopPage.getAlert().then(function(element)
      {
      const actualText = element.text()
      expect(actualText.includes("Success")).to.be.true
     })
          })
        })


