import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "@/store";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/global";
import { HomePage } from "@/pages/HomePage";
import { UserDetailPage } from "./pages/UserDetailPage";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users/:id" element={<UserDetailPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
