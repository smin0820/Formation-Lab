import { Navigate, Route, Routes } from "react-router";
import SignIn from "./components/pages/signIn";

export default function RootRoute() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" />

      <Route path="/" />
      <Route path="about" />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
