import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/header/Header";
import { useAuth } from "../contexts/AuthContext";
import { AuthRoutes } from "./auth.routes";
import { Routes } from "./routes";

export function IndexRoutes() {
  const { signed } = useAuth();

  if (signed) {
    return (
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <AuthRoutes />
      </BrowserRouter>
    );
  }
}
