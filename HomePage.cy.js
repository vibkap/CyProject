class HomePage

{
getEditBox()
{
   return  cy.get(':nth-child(1) > .form-control')
}
getPassword()
{
    return cy.get('input[name=email]')
}
getDOB()
{

}

getTwoWayData()
{
    return cy.get('input[type=text]:nth-child(1)')
}
getGender()
{
    return cy.get('select')

}
getEnterpreniurButton()
{
    return cy.get('#inlineRadio3')
}
}


export default HomePage;