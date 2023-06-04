import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import RoutesApp from "./routes/RoutesApp"

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RoutesApp />
    </QueryClientProvider>
  )
}

export default App
