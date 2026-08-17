import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState('admin@banco.com.br');
  const [password, setPassword] = useState('admin');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (email === 'admin@banco.com.br' && password === 'admin') {
        toast.success('Conexão Estabelecida', {
          style: { background: '#10B981', color: 'white', fontWeight: 600 }
        });
        onLogin();
        navigate('/');
      } else {
        toast.error('Acesso Negado', {
          style: { background: '#EF4444', color: 'white', fontWeight: 600 }
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      width: '100vw', 
      backgroundColor: '#050914', 
      position: 'absolute', top: 0, left: 0, 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: "'Outfit', sans-serif"
    }}>
      {/* Background Glows */}
      <div style={{ position: 'absolute', top: '10%', left: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(0, 71, 171, 0.15) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }}></div>

      {/* Centered Floating Card */}
      <div className="animate-fade-in" style={{
        display: 'flex',
        width: '100%',
        maxWidth: '1050px',
        minHeight: '600px',
        backgroundColor: '#0f1629',
        borderRadius: '24px',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        border: '1px solid rgba(255,255,255,0.08)',
        zIndex: 10,
        overflow: 'hidden'
      }}>
        {/* Left Side (Banner) */}
        <div style={{
          flex: 1.1,
          backgroundColor: '#0b1120',
          padding: '4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRight: '1px solid rgba(255,255,255,0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '4rem' }}>
            <div style={{ background: 'var(--brand-primary)', padding: '0.6rem', borderRadius: '8px' }}>
              <Activity size={24} color="#ffffff" />
            </div>
            <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.4rem', letterSpacing: '0.02em' }}>FraudControl</span>
          </div>

          <h1 style={{ fontSize: '3rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Proteção ativa<br/>em tempo real.
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 400 }}>
            Plataforma de inteligência antifraudes corporativa. Monitoramento, análise de risco e resposta a incidentes.
          </p>
        </div>

        {/* Right Side (Form) */}
        <div style={{
          flex: 1,
          padding: '4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.5rem' }}>Acessar Plataforma</h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', fontWeight: 400 }}>Insira suas credenciais corporativas</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#cbd5e1', marginBottom: '0.5rem' }}>E-mail Corporativo</label>
              <input 
                type="email" 
                placeholder="admin@banco.com.br" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '1rem 1rem',
                  backgroundColor: '#070b15',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#60a5fa'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#cbd5e1', marginBottom: '0.5rem' }}>Senha de Acesso</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '1rem 1rem',
                  backgroundColor: '#070b15',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#60a5fa'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.25rem', fontSize: '0.875rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: 'var(--brand-primary)', width: '16px', height: '16px' }} /> Manter conectado
              </label>
              <a href="#" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 500 }}>Esqueci minha senha</a>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              style={{
                marginTop: '1.5rem',
                width: '100%',
                padding: '1rem',
                backgroundColor: 'var(--brand-primary)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                opacity: isLoading ? 0.7 : 1,
                boxShadow: '0 4px 15px rgba(0, 71, 171, 0.3)',
                fontFamily: 'inherit'
              }}
              onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(1.15)'}
              onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(1)'}
            >
              {isLoading ? 'Autenticando...' : 'Entrar no Sistema'}
            </button>
          </form>
          
          <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.875rem', color: '#94a3b8' }}>
            Novo colaborador? <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 500 }}>Solicite seu acesso</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
