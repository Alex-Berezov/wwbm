import { questionsAPI } from '../../api/questionsAPI'
import { AppDispatch } from '../store'
import { questionsSlice } from './QuestionsSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'

// export const fetchQuestions = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(questionsSlice.actions.questionsFetching())
//     const response = await questionsAPI.getQuestions(15)
//     dispatch(questionsSlice.actions.questionsFetchingSuccess(response.data))
//   } catch (e: any) {
//     dispatch(questionsSlice.actions.questionsFetchingError(e.message))
//   }
// }

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async (_, thunkAPI) => {
    try {
      const response = await questionsAPI.getQuestions(15)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка загрузки вопросов')
    }
  }
)
