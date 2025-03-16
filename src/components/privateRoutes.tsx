import { Navigate, Outlet } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

export default function PrivateRoute() {
  const [user, setUser] = useState<boolean | null>(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? true : false);
    });

    return () => unsubscribe();
  }, [auth]);

  if (user === null) return null; // Prevents flickering during state check

  return user ? <Outlet /> : <Navigate to="/signin" />;
}
