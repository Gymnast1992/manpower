import Homepage from "../../fixtures/pom/home.page";
import Search from "../../fixtures/pom/search.page";

const errorMessage =
  "Please enter at least one keyword to perform the Site Search";

describe("Search", () => {
  beforeEach(() => {
    cy.visit("/");
    Homepage.getAllCookies;
  });

  it("Sould verify Workforce Solutions", () => {
    Homepage.buttonSearch.click();
    Search.buttonSearch.click();
    Search.errorMessage.should("contains.text", errorMessage);
  });
});
