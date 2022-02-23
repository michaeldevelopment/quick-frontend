describe("Quick Testing", () => {
  //////// SIGNUP form
  it("Sup Username not valid", () => {
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
    cy.request("DELETE", `${Cypress.env("api_url")}/recipes`);
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

  it("Photo not valid", () => {
    cy.get('[id="navbar-recipes-button"]').click();
    cy.get('[id="navbar-createrecipe-button"]').click();
    cy.create_recipe_without_photo({
      title: "Arroz con pollo",
      ingredients: "Cebolla, Alverja, Ajo, Pollo, Arroz, etc.",
      description: "Preparacion detallada del arroz con pollo",
    });
    cy.clear_recipes();
  });

  it("Title not valid", () => {
    cy.create_recipe({
      title: "Arroz",
      ingredients: "Cebolla, Alverja, Ajo, Pollo, Arroz, etc.",
      description: "Preparacion detallada del arroz con pollo",
    });
    cy.clear_recipes();
  });

  // it("Ingredients not valid", () => {
  //   cy.create_recipe({
  //     title: "Arroz con pollo",
  //     ingredients: "Cebolla",
  //     description: "Preparacion detallada del arroz con pollo",
  //   });
  //   cy.clear_recipes();
  // });

  // it("Create Recipe", () => {
  //   cy.create_recipe({
  //     title: "Arroz con pollo",
  //     ingredients: "Cebolla, Alverja, Ajo, Pollo, Arroz, etc.",
  //     description: "Preparacion detallada del arroz con pollo",
  //   });
  //   cy.get('[id="navbar-recipes-button"]').click();
  // });
});
