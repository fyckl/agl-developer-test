import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

it('If API works correctly', async () => {
  async function fetchData() {
    const res = await fetch('http://agl-developer-test.azurewebsites.net/people.json')
    const json = await res.json()
  
    return json
  }
  const data = await fetchData()
    expect(data.length).toEqual(6)
})
