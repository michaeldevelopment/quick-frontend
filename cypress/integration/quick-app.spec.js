describe("Quick Testing", () => {
  it("Username not valid", () => {
    cy.visit(`${Cypress.env("client_url")}/signup`);
    cy.url().should("include", "/signup");
    cy.signup({
      name: "Quick",
      lastname: "Prueba",
      username: "xxx",
      email: "prueba@hotmail.com",
      password: "prueba123",
      validpassword: "prueba123",
    });
  });

  // it("Email not valid", () => {
  //   cy.visit(`${Cypress.env("client_url")}/signup`);
  //   cy.url().should("include", "/signup");
  //   cy.signup({
  //     name: "Quick",
  //     lastname: "Prueba",
  //     username: "quickprueba",
  //     email: "quick",
  //     password: "prueba123",
  //     validpassword: "prueba123",
  //   });
  // });

  // it("Password doesnt match", () => {
  //   cy.visit(`${Cypress.env("client_url")}/signup`);
  //   cy.url().should("include", "/signup");
  //   cy.signup({
  //     name: "Quick",
  //     lastname: "Prueba",
  //     username: "quickprueba",
  //     email: "prueba@hotmail.com",
  //     password: "prueba",
  //     validpassword: "prueba123",
  //   });
  // });

  // it("Password doesnt match 2", () => {
  //   cy.visit(`${Cypress.env("client_url")}/signup`);
  //   cy.url().should("include", "/signup");
  //   cy.signup({
  //     name: "Quick",
  //     lastname: "Prueba",
  //     username: "quickprueba",
  //     email: "prueba@hotmail.com",
  //     password: "prueba123",
  //     validpassword: "prueba",
  //   });
  // });

  // it("Successful signup", () => {
  //   cy.visit(`${Cypress.env("client_url")}/signup`);
  //   cy.url().should("include", "/signup");
  //   cy.request("DELETE", `${Cypress.env("api_url")}/cleanusers`);
  //   cy.signup({
  //     username: "waykiprueba",
  //     email: "maicolsana12@gmail.com",
  //     password: "wayki123",
  //     validpassword: "wayki123",
  //   });
  // });

  // it("log out", () => {
  //   cy.get('[id="username-menu"]').click();
  //   // my profile and my posts - button
  //   cy.get('[id="logout-button"]').click();
  // });
});
