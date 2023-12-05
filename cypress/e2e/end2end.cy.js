/// <reference types ="Cypress"/>
import HomePage from "../pageObjects/HomePage.cy"
import ShopPage from "../pageObjects/ShopPage.cy"
describe('Text1',()=> {
    before(function() {
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
        it('Text1', function(){
          cy.visit(Cypress.env('url')+"/angularpractice/")
          const homePage =new HomePage()
          const shopPage= new ShopPage()

      homePage.getEditBox().type(this.data.Name)
      homePage.getGender().select(this.data.gender)
      homePage.getPassword().type(this.data.password)
      homePage.getTwoWayData().should('have.value',this.data.Name)
      homePage.getEnterpreniurButton().should('be.disabled')
      homePage.getEditBox().should('have.attr','minlength',2)
      shopPage.getShopButton().click()
      
          this.data.productName.forEach(function(element)  {
          cy.selectProduct(element)
        
           });
           var sum=0
      shopPage.getCheckOut().click()
      shopPage.getTotal().each(($e1,index, $list)=>{
        ($e1.text())
        const amt =$e1.text()
        var price= amt.split(' ')
            price= price[1].trim()
            sum = Number(sum)+Number(price)
      }).then(function()
      {
          cy.log('Sum= ', sum)  
      })
      shopPage.getPrice().then(function(element) 
        {
            var tot= element.text()
            var tot= tot.split(" ")
            const total=tot[1].trim()
            expect(Number(total)).to.equal(sum)
            cy.log('total=', total)
      })
      shopPage.getcheckout().click()
      shopPage.getCountry().type('India')
      Cypress.config('defaultCommandTimeout',8000);

      shopPage.getSuggestion().click()
      Cypress.config('defaultCommandTimeout',8000);
      shopPage.getcheckBox().check({force: true} ).should('be.checked')
      shopPage.getPurchase().click()
      ///shopPage.getAlert().expect(str).to.equal('Success! Thank you! Your order will be delivered in next few weeks :-).')




        
      })

    
        }) 
        
      