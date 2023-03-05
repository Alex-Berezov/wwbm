import { questionsAPI } from '../../api/questionsAPI'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async (value: number, thunkAPI) => {
    try {
      const response = await questionsAPI.getQuestions(value)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка загрузки вопросов')
    }
  }
)
