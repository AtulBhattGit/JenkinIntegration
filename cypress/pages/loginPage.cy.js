export class LoginPage{

    // ######### Define Locators #####################

    loginpage_username_locator='#username'
    loginpage_password_locator='#password'
    loginpage_loginbtn_locator='.btn'
    navdropdown_locator='#navbarDropdown1'
    logoutbtn_locator='.dropdown-menu > :nth-child(4)'
    reset_password_locator= '.reset-link'
    toast_message_locator='.snackbar-text'
    group_locator='div.ng-star-inserted > app-selected-group > .ng-star-inserted'
    groupdropdown_locator='.form-control'
    done_button='.text-center > .btn'
   

    // ######### Class Methods #####################


    checkResetMailSendValidation(){

        cy.get(this.toast_message_locator).should('be.visible')  // success toast visible
        cy.get(this.toast_message_locator).invoke('text').then((resp)=>{
          expect(resp).to.equal('Password reset instructions will be emailed if your submission matches our records.');
        })
    
    }

    checkInvalidCredendialsValidation(){

        cy.get(this.toast_message_locator).should('be.visible')  // success toast visible
        cy.get(this.toast_message_locator).invoke('text').then((resp)=>{
        expect(resp).to.equal('Not authorized: Invalid username or password')
        })
    }

    clickResetPassword(){
        cy.get(this.reset_password_locator).click();
    }

    navigate(login_url){
        cy.visit(login_url);
    }

    enterUsername(username){
        cy.get(this.loginpage_username_locator).type(username);
    }

    enterPassword(password){
        cy.get(this.loginpage_password_locator).type(password)
    }

    clickLoginButton(){
        cy.get(this.loginpage_loginbtn_locator).click()
    }

  
    clickchangegroup(){
        cy.get(this.group_locator).click()
        cy.get(this.groupdropdown_locator).select(9)
        cy.get(this.done_button).click()
    }

  
    clickLogoutButton(){
      
        //cy.get(this.navdropdown_locator).click()
        cy.get('.avatar-content').click();
        cy.wait(5000)
        cy.get(this.logoutbtn_locator).click()
    }


}