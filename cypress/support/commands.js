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

Cypress.Commands.add(
  "create_recipe",
  ({
    title,
    ingredient1,
    quantity1,
    ingredient2,
    quantity2,
    ingredient3,
    quantity3,
    ingredient4,
    quantity4,
    description,
  }) => {
    cy.get('[data-test-id="title-recipe-form"]')
      .type(title)
      .should("have.value", title);

    cy.get('[data-test-id="category-select-form"]')
      .select("Pollo")
      .should("have.value", "pollo");

    cy.get('[data-test-id="food-type-form"]')
      .select("Cena")
      .should("have.value", "cena");

    cy.get('[data-test-id="ingredients-select-form"]')
      .select("4")
      .should("have.value", "4");

    cy.get('[data-test-id="ingredient-1"]')
      .type(ingredient1)
      .should("have.value", ingredient1);

    cy.get('[data-test-id="quantity-1"]')
      .type(quantity1)
      .should("have.value", quantity1);

    cy.get('[data-test-id="ingredient-2"]')
      .type(ingredient2)
      .should("have.value", ingredient2);

    cy.get('[data-test-id="quantity-2"]')
      .type(quantity2)
      .should("have.value", quantity2);

    cy.get('[data-test-id="ingredient-3"]')
      .type(ingredient3)
      .should("have.value", ingredient3);

    cy.get('[data-test-id="quantity-3"]')
      .type(quantity3)
      .should("have.value", quantity3);

    cy.get('[data-test-id="ingredient-4"]')
      .type(ingredient4)
      .should("have.value", ingredient4);

    cy.get('[data-test-id="quantity-4"]')
      .type(quantity4)
      .should("have.value", quantity4);

    cy.get('[data-test-id="description-recipe-form"]')
      .type(description)
      .should("have.value", description);

    cy.get('[data-test-id="photos-recipe-form"]').attachFile(fixtureFile);
    cy.wait(2000);

    cy.get('[id="button-create-recipe"]').click();
  }
);

Cypress.Commands.add("clear_recipes", () => {
  cy.get('[data-test-id="title-recipe-form"]').clear();
  cy.get('[data-test-id="ingredients-recipe-form"]').clear();
  cy.get('[data-test-id="description-recipe-form"]').clear();
});
