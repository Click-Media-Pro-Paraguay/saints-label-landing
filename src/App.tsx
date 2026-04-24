import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import V3 from "./pages/V3.tsx";
import Listicle5Reasons from "./pages/Listicle5Reasons.tsx";
import MethodPage from "./pages/MethodPage.tsx";
import SilentStruggle from "./pages/SilentStruggle.tsx";
import QuietReturn from "./pages/QuietReturn.tsx";
import Legacy from "./pages/Legacy.tsx";
import SmallGroupFavorite from "./pages/SmallGroupFavorite.tsx";
import OpsBrief from "./pages/OpsBrief.tsx";
import StrategyBrief from "./pages/StrategyBrief.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<V3 />} />
          <Route path="/5-reasons" element={<Listicle5Reasons />} />
          <Route path="/method" element={<MethodPage />} />
          <Route path="/silent-struggle" element={<SilentStruggle />} />
          <Route path="/quiet-return" element={<QuietReturn />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/small-group-favorite" element={<SmallGroupFavorite />} />
          <Route path="/ops" element={<OpsBrief />} />
          <Route path="/strategy" element={<StrategyBrief />} />
          <Route path="/v2" element={<Navigate to="/" replace />} />
          <Route path="/v3" element={<Navigate to="/" replace />} />
          <Route path="/v4" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
