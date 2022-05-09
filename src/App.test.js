import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import renderer from "react-test-renderer";
import List from "./Components/List";
import Item from "./Components/Item";
import App from './App';

configure({ adapter: new Adapter() });

describe("App", () => {
  it("app renders correctly", () => {
    shallow(<App />)
  })
  it("sorted cats of female owners correctly", () => {
    let component = renderer.create(<App />).getInstance()
    let arr = component.testData()

    expect(arr.data).toMatch(["Garfield", "Simba", "Tabby"])
  })
})