import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    topics: {},
    quizzes: {},
    cards: {},
  },
});
