import { MuiThemeProvider, createTheme } from "@material-ui/core"
import React from "react"
import { Provider } from "react-redux"
import Controls from "../components/Controls"
import Scene from "../components/Scene"
import store from "../redux/Store"

const theme = createTheme({
  palette: {
    primary: {
      main: "#545355"
    },
    secondary: {
      main: "#057F65"
    }
  }
})

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Scene />
        <Controls />
      </Provider>
    </MuiThemeProvider>
  )
}
