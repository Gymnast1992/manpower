import Homepage from "../../fixtures/pom/home.page";

const errorMessage = "Please complete all required fields.";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
    Homepage.getAllCookies;
  });

  it("Sould not be able to sign up for a newsletter without email adress", () => {
    Homepage.checkboxMark.click();
    Homepage.buttonSignUp.click();
    Homepage.errorMessage.should("contains.text", errorMessage);
  });
});
