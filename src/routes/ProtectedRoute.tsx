import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import type { RootState } from "../app/store";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactElement;
}) {
  const token = useSelector((state: RootState) => state.user.token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}