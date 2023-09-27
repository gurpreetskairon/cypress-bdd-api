import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

When("I send a GET request with following inputs:", (datatable) => {
  // get the base URL from the config file
  cy.fixture("config").then((config) => {
    datatable.hashes().forEach((row) => {
      // get the query string parameters to be passed
      let params = row.params;

      // make the get request
      cy.request({
        method: "GET",
        url: `${config.baseURL}${row.endpoint}`,
        qs: { params },
      }).as("response"); // strore the reponse in response variable
    });
  });
});

Then("I see the response code is {string}", (expectedResonseCode) => {
  cy.get("@response").its("status").should("eq", Number(expectedResonseCode));
});

And("I see the response contains the following data:", (datatable) => {
  datatable.hashes().forEach((row) => {
    //expect(response.body[row.field].toString()).to.eq(row.value);
    cy.get("@response")
      .its("body")
      .its(`${row.field}`)
      .then((x) => {
        expect(x.toString()).to.eq(row.value);
      });
  });
});

And(
  "The {string} element with {string} as {string} has a {string} that contains the text {string}",
  (element, attribute, attrValue, siblingAttribute, expAttributeValue) => {
    cy.get("@response")
      .its("body")
      .its(element)
      .each((children) => {
        // iterate all the child array elements
        if (children[attribute] === attrValue) {
          expect(children[siblingAttribute]).to.eq(expAttributeValue);
        }
      });
  }
);
