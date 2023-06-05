const imgManpowerGroup =
  '[src="/-/jssmedia/project/manpowergroup/admin/logos/brand/light-bg/manpowergroup-logo-horizontal.svg?h=36&iar=0&w=200&hash=19E97AF66A68905DA7F412BD4DF3F226"]';

class Homepage {
  get imgManpowerGroup() {
    return cy.get(imgManpowerGroup);
  }
  get buttonGetInTouch() {
    return cy.get('[title="Contact Us"]');
  }
  get getAllCookies() {
    return cy.get("#onetrust-accept-btn-handler").click();
  }
  get inputEmail() {
    return cy.get('[name="email"]');
  }
  get checkboxMark() {
    return cy.get('label [type="checkbox"]');
  }
  get buttonSignUp() {
    return cy.get('.actions [type="submit"]');
  }
  get messageSubmited() {
    return cy.get(".submitted-message");
  }
  get buttonSearch() {
    return cy.contains('Search');
  }
  get errorMessage() {
    return cy.get('[class="hs-main-font-element"]');
  }

  getRandomString(length) {
    let text = "";
    let possible = "Dabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}

export default new Homepage();
