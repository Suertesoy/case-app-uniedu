import TccCasePage from "./pages/TccCasePage";
import RecruitingCasePage from "./pages/RecruitingCasePage";

export default function App() {
  const path = window.location.pathname;

  if (path === "/recrutamento" || path === "/recrutamento/") {
    return <RecruitingCasePage />;
  }

  return <TccCasePage />;
}
