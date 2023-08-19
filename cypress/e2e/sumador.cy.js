describe("Sumador", () => {
  it("Muestra el total de la suma al usuario", () => {
    cy.visit("/");
    cy.get("#first-number").type(4);
    cy.get("#second-number").type(5);
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "9");
  });
});
