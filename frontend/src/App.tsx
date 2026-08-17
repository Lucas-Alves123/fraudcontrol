import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { LayoutDashboard, AlertTriangle, ArrowRightLeft, Users, Settings, LogOut, Lock, FileText } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Alerts from './pages/Alerts';
import Customers from './pages/Customers';
import SettingsPage from './pages/Settings';
import Audit from './pages/Audit';
import Login from './pages/Login';

const Sidebar = ({ onLogout, onLock }: { onLogout: () => void, onLock: () => void }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/transactions', label: 'Transações', icon: ArrowRightLeft },
    { path: '/alerts', label: 'Alertas de Fraude', icon: AlertTriangle },
    { path: '/customers', label: 'Clientes', icon: Users },
    { path: '/audit', label: 'Auditoria (Logs)', icon: FileText },
  ];

  return (
    <div className="sidebar">
      <div style={{ padding: '0 1rem 2rem', borderBottom: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <AlertTriangle color="var(--accent-primary)" />
          FraudControl
        </h1>
      </div>
      
      <nav style={{ flex: 1 }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`nav-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      
      <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Link to="/configuracoes" className={`nav-link ${location.pathname === '/configuracoes' ? 'active' : ''}`}>
          <Settings size={20} /> Configurações
        </Link>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          <button onClick={onLock} className="btn btn-outline" style={{ flex: 1, justifyContent: 'center', color: '#fbbf24', borderColor: 'rgba(251,191,36,0.3)' }} title="Bloquear Sessão">
            <Lock size={20} /> Bloquear
          </button>
          <button onClick={onLogout} className="btn btn-outline" style={{ flex: 1, justifyContent: 'center', color: '#f87171', borderColor: 'rgba(239,68,68,0.3)' }} title="Sair do Sistema">
            <LogOut size={20} /> Sair
          </button>
        </div>
      </div>
    </div>
  );
};

const ProtectedRoute = ({ isAuth, children }: { isAuth: boolean, children: JSX.Element }) => {
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [unlockPassword, setUnlockPassword] = useState('');

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);
  
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if(unlockPassword === 'admin') {
      setIsLocked(false);
      setUnlockPassword('');
    }
  };

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
        <Route path="*" element={
          <ProtectedRoute isAuth={isAuthenticated}>
            <div className="app-container" style={{ position: 'relative' }}>
              
              {/* LOCK SCREEN OVERLAY */}
              {isLocked && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, backgroundColor: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(12px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div className="animate-fade-in glass-panel" style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '400px' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--brand-dark)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <Lock size={40} color="#fff" />
                    </div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--brand-dark)', marginBottom: '0.5rem' }}>Sessão Bloqueada</h2>
                    <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>O sistema foi bloqueado por inatividade para sua segurança. Insira sua senha para retornar.</p>
                    <form onSubmit={handleUnlock} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <input 
                        type="password" 
                        placeholder="Senha (admin)"
                        value={unlockPassword}
                        onChange={(e) => setUnlockPassword(e.target.value)}
                        style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none' }}
                        required
                      />
                      <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                        Desbloquear Sessão
                      </button>
                    </form>
                  </div>
                </div>
              )}

              <Sidebar onLogout={handleLogout} onLock={() => setIsLocked(true)} />
              <main className="main-content" style={{ filter: isLocked ? 'blur(10px)' : 'none', pointerEvents: isLocked ? 'none' : 'auto', transition: 'filter 0.3s' }}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/transactions" element={<Transactions />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/audit" element={<Audit />} />
                  <Route path="/configuracoes" element={<SettingsPage />} />
                </Routes>
              </main>
            </div>
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
