import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      let newTopic = { ...action.payload, quizIds: [] };
      state.topics[action.payload.id] = newTopic;
    }
  }
});

export const selectTopics = (state) => state.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
