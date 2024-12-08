import { configureStore } from "@reduxjs/toolkit";
import questionnaireReducer from './features/questonnaire/questionnaireSlice';

export const store = configureStore({
    reducer: {
        questionnaire: questionnaireReducer,
    },
    });