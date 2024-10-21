import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppUserList } from "../components/AppUserList/AppUserList";

export function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppUserList />
    </QueryClientProvider>
  );
}
