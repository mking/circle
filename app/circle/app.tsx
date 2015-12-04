require("./reset.scss");
require("babel/polyfill");
import $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import CircleApp from "./CircleApp";

// Avoid "React is undefined".
// Should be fixed with https://github.com/palantir/tslint/issues/689.
/* tslint:disable */
React;
/* tslint:enable */

ReactDOM.render(<CircleApp/>, $("#content")[0]);
