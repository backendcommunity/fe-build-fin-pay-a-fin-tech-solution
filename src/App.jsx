import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Auth pages
import SignUp from "./pages/Auth/SignUp";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import EnterCode from "./pages/Auth/EnterCode";
import Verified from "./pages/Auth/Verified";
import Login from "./pages/Auth/Login";

// Protected Layout
import Layout from "./components/Layout";

// Sidebar pages
import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices";
import Cards from "./pages/Cards";
import Transactions from "./pages/Transactions";
import Wallet from "./pages/Wallet";

// Components (standalone)
import ConvertFunds from "./components/ConvertFunds";
import ConvertSuccess from "./components/ConvertSuccess";
import SendMoney from "./components/SendMoney";
import DirectBank from "./components/DirectBank";
import AddRecipientModal from "./components/AddRecipientModal";
import NewInvoicePage from "./components/NewInvoicePage";
import NewInvoiceSuccess from "./components/NewInvoiceSuccess";

import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/enter-code" element={<EnterCode />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transactions" element={<Transactions />} />

          <Route path="/convert-funds" element={<ConvertFunds />} />
          <Route path="/convert-success" element={<ConvertSuccess />} />
          <Route path="/send-money" element={<SendMoney />} />
          <Route path="/direct-bank" element={<DirectBank />} />
          <Route path="/add-recipient" element={<AddRecipientModal />} />
          <Route path="/new-invoice" element={<NewInvoicePage />} />
          <Route path="/new-invoice-success" element={<NewInvoiceSuccess />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
