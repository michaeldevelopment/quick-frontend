import "cypress-file-upload";

const fixtureFile = "arroz.jpg";

Cypress.Commands.add(
  "signup",
  ({ name, lastname, email, username, password, validpassword }) => {
    cy.get('[data-test-id="name-signup-form"]')
      .type(name)
      .should("have.value", name);

    cy.get('[data-test-id="lastname-signup-form"]')
      .type(lastname)
      .should("have.value", lastname);

    cy.get('[data-test-id="email-signup-form"]')
      .type(email)
      .should("have.value", email);

    cy.get('[data-test-id="username-signup-form"]')
      .type(username)
      .should("have.value", username);

    cy.get('[data-test-id="password-signup-form"]')
      .type(password)
      .should("have.value", password);

    cy.get('[data-test-id="validpassword-signup-form"]')
      .type(validpassword)
      .should("have.value", validpassword);

    cy.get('[id="button-signup-form"]').click();
  }
);

Cypress.Commands.add("login", ({ username, password }) => {
  cy.get('[data-test-id="username-login-form"]')
    .type(username)
    .should("have.value", username);

  cy.get('[data-test-id="password-login-form"]')
    .type(password)
    .should("have.value", password);

  cy.get('[id="button-login-form"]').click();
});

Cypress.Commands.add("create_recipe", ({ title, ingredients, description }) => {
  cy.get('[data-test-id="title-recipe-form"]')
    .type(title)
    .should("have.value", title);

  cy.get('[data-test-id="category-select-form"]')
    .select("Pollo")
    .should("have.value", "pollo");

  cy.get('[data-test-id="food-type-form"]')
    .select("Cena")
    .should("have.value", "cena");

  cy.get('[data-test-id="ingredients-recipe-form"]')
    .type(ingredients)
    .should("have.value", ingredients);

  cy.get('[data-test-id="description-recipe-form"]')
    .type(description)
    .should("have.value", description);

  cy.get('[data-test-id="photos-recipe-form"]').attachFile(fixtureFile);
  cy.wait(2000);

  cy.get('[id="button-create-recipe"]').click();
});

Cypress.Commands.add("clear_recipes", () => {
  cy.get('[data-test-id="title-recipe-form"]').clear();
  cy.get('[data-test-id="ingredients-recipe-form"]').clear();
  cy.get('[data-test-id="description-recipe-form"]').clear();
});
