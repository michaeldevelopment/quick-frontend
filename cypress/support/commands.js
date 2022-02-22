import "cypress-file-upload";

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
