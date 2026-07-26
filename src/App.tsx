import { useState } from "react";
import { Toaster } from "sonner";
import MainContent from "@/components/MainContent";
import type { UserRole, User } from "@/types";
import { USERS } from "@/constants";

export default function App() {
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);

  const currentUser: User = USERS.find(u => u.role === currentRole) || USERS[0];

  return (
    <>
      <Toaster position="top-right" richColors />
      {currentRole ? (
        <MainContent
          role={currentRole}
          user={currentUser}
          onBack={() => setCurrentRole(null)}
        />
      ) : (
        <div className="min-h-screen bg-background">
          <MainContent role="customer" user={USERS[0]} onBack={() => {}} />
        </div>
      )}
    </>
  );
}