import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import List from "./Components/List";
import Item from "./Components/Item";
import App from './App';

configure({ adapter: new Adapter() });

describe("App", () => {
  it("app renders correctly", () => {
    shallow(<App />)
  })

})