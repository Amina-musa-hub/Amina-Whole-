import { useContext } from "react";
import { UserProvider, UserContext } from "/src/context/UserContext";
import QuoteCard from "./QuoteCard";

function AppContent() {
  const { username, setUsername } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Hello: {username} 👋</h1>

      <input
        placeholder="Enter your name"
        className="border p-2 rounded mb-6 text-center"
        onChange={(e) => setUsername(e.target.value)}
      />

      <QuoteCard />
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}


