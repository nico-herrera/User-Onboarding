///

describe("Testing form inputs", () => {
  it("Loads the page", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Types text in input and checks the value", () => {
    cy.get("[data-cy=name]").type("Nico").should("have.value", "Nico");
  });

  it("Types an email in email input", () => {
    cy.get("[data-cy=email]")
      .type("inbox@gmail.com")
      .should("have.value", "inbox@gmail.com");
  });

  it("Types a password in password input", () => {
    cy.get("[data-cy=password]")
      .type("password123")
      .should("have.value", "password123");
  });

  it("Will try to check the terms of serivce box", () => {
    cy.get("[data-cy=checkbox]").check().should("be.checked");
  });

  it("Tries to submit the form", () => {
    cy.get("[data-cy=submit-button]").click();
  });

  // TESTING FOR FORM VALIDATION

  it("Clears Name input", () => {
    cy.get("[data-cy=name]").clear();
  });
});
