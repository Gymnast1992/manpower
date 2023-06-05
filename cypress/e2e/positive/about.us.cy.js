import AboutUs from "../../fixtures/pom/about.us.page";
import Homepage from "../../fixtures/pom/home.page";


const text = 'Our Innovative Workforce Solutions';

describe("AboutUs", () => {
    beforeEach(() => {  
      cy.visit("/about");
      Homepage.getAllCookies;
    });
  
    it("Sould verify Workforce Solutions", () => {
      AboutUs.subHeading.should('contains.text', text);
      AboutUs.cardWrapper.should('have.length', 3);
    });
  });