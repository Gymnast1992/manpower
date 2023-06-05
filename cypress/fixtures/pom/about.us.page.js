class AboutUs {
  get subHeading() {
    return cy.get(".col-lg-10").eq(0);
  }
  get cardWrapper() {
    return cy.get(".card-wrapper");
  }
}

export default new AboutUs();
