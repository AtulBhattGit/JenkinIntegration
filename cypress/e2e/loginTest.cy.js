/// <reference types = "cypress" />

import { LoginPage } from "../Pages/loginPage.cy"
import msxCredential from '../fixtures/msxCred.json'

const login_page_object = new LoginPage()

describe('Login-Logout Test Cases', () => {

  let login_url;
  var username;
  var username1;
  var password;

before(()=>{
 cy.fixture('msxCred.json').then((usrdata) => {
   login_url = msxCredential.msx_url;
   username = usrdata.msx_username;
   username1 = 'test@1234';
   password = usrdata.msx_password;
  })
})

  it('Should Login Successfully', function () {
    login_page_object.navigate(login_url);
    login_page_object.enterUsername(username);
    login_page_object.enterPassword(password);
    login_page_object.clickLoginButton();
    cy.wait(6000)


  })

  it('Should Logout Successfully', function () {

    login_page_object.navigate(login_url);
    login_page_object.enterUsername(username);
    login_page_object.enterPassword(password);
    login_page_object.clickLoginButton();

    cy.wait(10000)
    login_page_object.clickLogoutButton();

  })
})