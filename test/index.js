import React from "react";
import TestUtils from "react-addons-test-utils";
import expect from "expect";
import Hello from "../src/hello.js";
import jsdom from "mocha-jsdom";

jsdom()

describe("<Hello />", () => {

  it("should return an h1 with 'hello' string", () => {

    // 1 - Renderizamos o HTML.
    const component = TestUtils.renderIntoDocument(
      <Hello />
    );

    // 2 - Buscamos o nó a ser testado.
    const h1 = TestUtils.findRenderedDOMComponentWithTag(
      component, "h1"
    );

    // 3 - Verificamos se está correto.
    expect(h1.textContent).toEqual("Hello");

  });

});
