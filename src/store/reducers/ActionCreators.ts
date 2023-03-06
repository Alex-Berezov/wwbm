import { questionsAPI } from '../../api/questionsAPI'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async (value: number, thunkAPI) => {
    try {
      const response = await questionsAPI.getQuestions(value)
      // Почему я не могу обратиться к полю results у объекта response.data???
      //@ts-ignore
      return response.data.results
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка загрузки вопросов')
    }
  }
)
