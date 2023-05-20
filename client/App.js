import React from 'react'
import { Center, extendTheme, NativeBaseProvider } from 'native-base'
import Home from './components/pages/Home/Home'

const newColorTheme = {
  brand: {
    primary: '#AC1483',
    secondary: '#7F96FF',
    secondSecondary: '#A6CFD5',
    third: '#DBFCFF',
    thirdSecondary: '#73683B',
  },
}
const theme = extendTheme({ colors: newColorTheme })

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Home />
    </NativeBaseProvider>
  )
}
