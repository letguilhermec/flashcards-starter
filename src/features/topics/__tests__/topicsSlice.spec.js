import reducer, { selectTopics, addTopic } from "../topicsSlice";

describe("Topics Slice", () => {
  it("should return initial value when no information is passed", () => {
    expect(reducer(undefined, {})).toEqual({
      topics: {}
    });
  });
});
