describe("Quick Testing", () => {
  //////// SIGNUP form
  it("Sup Username not valid", () => {
    cy.request("DELETE", `${Cypress.env("api_url")}/recipes`);
    cy.visit(`${Cypress.env("client_url")}`);
    cy.get('[id="navbar-signup-button"]').click();
    cy.url().should("include", "/signup");
    cy.signup({
      name: "Quick",
      lastname: "Prueba",
      username: "xxx",
      email: "prueba@hotmail.com",
      password: "prueba123",
      validpassword: "prueba123",
    });
    cy.get("input").clear();
  });

  it("Sup Email not valid", () => {
    cy.url().should("include", "/signup");
    cy.signup({
      name: "Quick",
      lastname: "Prueba",
      username: "quickprueba",
      email: "quick",
      password: "prueba123",
      validpassword: "prueba123",
    });
    cy.get("input").clear();
  });

  it("Sup Password doesnt match", () => {
    cy.url().should("include", "/signup");
    cy.signup({
      name: "Quick",
      lastname: "Prueba",
      username: "quickprueba",
      email: "prueba@hotmail.com",
      password: "prueba",
      validpassword: "prueba123",
    });
    cy.get("input").clear();
  });

  it("Sup Password doesnt match 2", () => {
    cy.url().should("include", "/signup");
    cy.signup({
      name: "Quick",
      lastname: "Prueba",
      username: "quickprueba",
      email: "prueba@hotmail.com",
      password: "prueba123",
      validpassword: "prueba",
    });
    cy.get("input").clear();
  });

  it("Successful signup", () => {
    cy.url().should("include", "/signup");
    cy.signup({
      name: "Quick",
      lastname: "Prueba",
      username: "quickprueba",
      email: "example@gmail.com",
      password: "quickprueba",
      validpassword: "quickprueba",
    });
  });

  it("log out", () => {
    cy.get('[id="quick-dropdown"]').click();
    cy.get('[id="dropdown-logout-button"]').click();
  });

  //////// LOGIN form

  it("Ln Username not valid", () => {
    cy.get('[id="navbar-login-button"]').click();
    cy.url().should("include", "/login");
    cy.login({
      username: "xxx",
      password: "prueba123",
    });
    cy.get("input").clear();
  });

  it("Ln Password not valid", () => {
    cy.url().should("include", "/login");
    cy.login({
      username: "quickprueba",
      password: "quickpr",
    });
    cy.get("input").clear();
  });

  it("Successful Login", () => {
    cy.url().should("include", "/login");
    cy.login({
      username: "quickprueba",
      password: "quickprueba",
    });
  });

  it("Create Recipe", () => {
    cy.get('[id="navbar-recipes-button"]').click();
    cy.get('[id="navbar-createrecipe-button"]').click();
    cy.create_recipe({
      title: "Arroz con pollo",
      ingredient1: "Arroz",
      quantity1: "100 g",
      ingredient2: "Pollo",
      quantity2: "1/2 kg",
      ingredient3: "Cebolla",
      quantity3: "1",
      ingredient4: "Tomate",
      quantity4: "1",
      description: "Preparacion detallada del arroz con pollo",
    });
    cy.wait(1000);
    cy.get('[id="recipe-created-button-home"]').click();
    cy.get('[id="navbar-recipes-button"]').click();
  });
});
