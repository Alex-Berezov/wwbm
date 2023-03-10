import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IQuestion } from './../../models/IQuestion'
import { fetchQuestions } from './ActionCreators'

interface QuestionsState {
  questions: IQuestion[]
  isLoading: boolean
  error: string
  questionsAmount: number
}

const initialState: QuestionsState = {
  questions: [],
  isLoading: false,
  error: '',
  questionsAmount: 15,
}

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchQuestions.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchQuestions.fulfilled.type]: (
      state,
      action: PayloadAction<IQuestion[]>
    ) => {
      state.isLoading = false
      state.error = ''
      state.questions = action.payload
    },
    [fetchQuestions.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default questionsSlice.reducer
