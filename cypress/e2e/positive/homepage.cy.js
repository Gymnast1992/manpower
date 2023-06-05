import Homepage from "../../fixtures/pom/home.page";

const string = Homepage.getRandomString(7);
const message = 'Thank you for subscribing!';

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
    Homepage.getAllCookies;
  });

  it("Should navigate to the Homepage", () => {
    Homepage.imgManpowerGroup.should("be.visible");
    Homepage.buttonGetInTouch.should("have.text", "get in touch");
  });

  it("Should sign up for a newsletter", () => {
    Homepage.inputEmail.type(string + '@gmail.com');
    Homepage.checkboxMark.click({ multiple: true });
    Homepage.buttonSignUp.click();
    Homepage.messageSubmited.should('have.text', message);
  });
});