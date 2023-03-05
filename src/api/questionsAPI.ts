import axios from 'axios'
import { IQuestion } from './../models/IQuestion'

export const instance = axios.create({
  baseURL: 'https://opentdb.com/api.php',
})

export const questionsAPI = {
  getQuestions(value: number) {
    return instance.get<IQuestion[]>(`?amount=${value}`)
  },
}
