import { IndexRoutes } from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

export function App() {
  return (
    <AuthProvider>
      <IndexRoutes />
    </AuthProvider>
  );
}

export default App;
