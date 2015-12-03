require("./reset.scss");
require("babel/polyfill");
import $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import CircleApp from "./CircleApp";

console.log(React);

ReactDOM.render(<CircleApp/>, $("#content")[0]);
