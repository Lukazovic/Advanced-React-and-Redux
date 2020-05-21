import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";

it("has a comment area and a button", () => {
  const wrapped = mount(<CommentBox />);

  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});
