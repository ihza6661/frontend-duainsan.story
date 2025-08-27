// src/App.tsx (Versi Final)

// --- Imports dari library ---
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// --- Imports Provider Konteks ---
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/components/ui/Cart";
import { AuthProvider } from "@/context/AuthContext";

// --- Imports Komponen UI & Layout ---
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import FloatingIcons from "@/components/ui/WhatsAppFloat";
import ProtectedRoute from "@/components/ProtectedRoute";
import PublicOnlyRoute from "@/components/PublicOnlyRoute";

// --- Imports Halaman (Pages) ---
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Gallery from "./pages/Gallery";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CaraMemesan from "./pages/CaraMemesan";
import ProfilePage from "./pages/ProfilePage"; // ✅ Pastikan impor ini aktif

// Inisialisasi Query Client
const queryClient = new QueryClient();

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* Routes only for guests (not logged in) */}
                <Route element={<PublicOnlyRoute />}>
                  <Route path="login" element={<LoginPage />} />
                  <Route path="register" element={<RegisterPage />} />
                </Route>

                {/* Routes only for authenticated users */}
                <Route element={<ProtectedRoute />}>
                  <Route path="profile" element={<ProfilePage />} />
                </Route>

                {/* Public routes */}
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route
                  path="products/category/:category"
                  element={<Products />}
                />
                <Route path="product/:id" element={<ProductDetail />} />
                <Route path="cart" element={<Cart />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="CaraPesan" element={<CaraMemesan />} />

                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
            <FloatingIcons />
          </AuthProvider>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
