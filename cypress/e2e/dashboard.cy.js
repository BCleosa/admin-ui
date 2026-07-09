// SOAL 7 - End to End Test
// Skenario: User mengakses halaman dashboard (overview)

describe("User accesses the dashboard (overview) page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("TC-01: should redirect an unauthenticated user to the login page", () => {
    cy.url().should("include", "/login");
  });

  it("TC-02: should log in with valid credentials and land on the dashboard", () => {
    cy.get("input#email").should("be.visible").type("hello@example.com");
    cy.get("input#password").should("be.visible").type("123456");
    cy.get("button").contains("Login").click();

    cy.url().should("eq", "http://localhost:5173/");
  });

  it("TC-03: should display the sidebar navigation with Overview active", () => {
    cy.get("input#email").type("hello@example.com");
    cy.get("input#password").type("123456");
    cy.get("button").contains("Login").click();

    cy.get("nav").contains("Overview").should("be.visible");
    cy.get("nav")
      .contains("Overview")
      .closest("a")
      .should("have.class", "bg-primary");
  });

  it("TC-04: should display the main dashboard summary cards", () => {
    cy.get("input#email").type("hello@example.com");
    cy.get("input#password").type("123456");
    cy.get("button").contains("Login").click();

    cy.contains("Total Balance").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
    cy.contains("Recent Transaction").should("be.visible");
  });

  it("TC-05: should log out and redirect back to the login page", () => {
    cy.get("input#email").type("hello@example.com");
    cy.get("input#password").type("123456");
    cy.get("button").contains("Login").click();

    cy.contains("Logout").click();
    cy.url().should("include", "/login");
  });
});