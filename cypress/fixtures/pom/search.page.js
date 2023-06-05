class Search {
    get buttonSearch() {
        return cy.get('.col-lg-3 .button');
    }
    get errorMessage() {
        return cy.get('.error-msg');
    }
}

export default new Search();