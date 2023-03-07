import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'
import { IStepList } from './models/IStepList'

const store = setupStore()

const StepList: IStepList[] = [
  { id: 0, money: '$ 100' },
  { id: 1, money: '$ 200' },
  { id: 2, money: '$ 300' },
  { id: 3, money: '$ 500' },
  { id: 4, money: '$ 1 000' },
  { id: 5, money: '$ 2 000' },
  { id: 6, money: '$ 4 000' },
  { id: 7, money: '$ 8 000' },
  { id: 8, money: '$ 16 000' },
  { id: 9, money: '$ 32 000' },
  { id: 10, money: '$ 64 000' },
  { id: 11, money: '$ 125 000' },
  { id: 12, money: '$ 250 000' },
  { id: 13, money: '$ 500 000' },
  { id: 14, money: '$ 1 000 000' },
]

export const ThemeContext = createContext<IStepList[]>(StepList)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeContext.Provider value={StepList}>
      <App />
    </ThemeContext.Provider>
  </Provider>
)
