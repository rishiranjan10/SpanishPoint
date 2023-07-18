describe("spanishpoint spec", () => {
  it("Open 'Content & Collaboration'", () => {
    // load url
    cy.visit("https://www.spanishpoint.ie");
    // click on burger menu
    cy.get(".navbar-toggle").click();

    // click  'Modern Work' menu option
    cy.get("li a span").contains("Modern Work").click();

    cy.get('#wt-cli-accept-btn').click();
    cy.wait(3000)
    // scroll down until 'Content & Collaboration' is visible then click on it
    cy.get("li a span")
      .contains("Content & Collaboration")
      .scrollIntoView()
      .should("be.visible")
      .click();

    // assert on header and paragraph under 'Content & Collaboration'
    cy.get(".vc_tta-container h3").each(($el, index) => {
      if (index == 1) {
        cy.get($el).should("have.text", "Content & Collaboration");
        cy.get(".vc_tta-panel-body p").should(
          "include.text",
          "panish Point customers tell us that people are their most important asset"
        );
      }
    });
  });
});
