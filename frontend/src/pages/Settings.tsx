import React, { useState } from 'react';
import { Shield, Sliders, Lock, Bell, Server, Save } from 'lucide-react';
import toast from 'react-hot-toast';

const Settings = () => {
  const [pixLimit, setPixLimit] = useState(10000);
  const [loginAttempts, setLoginAttempts] = useState(3);

  const handleSave = () => {
    toast.success('Políticas de segurança atualizadas com sucesso!', {
      style: { background: '#10B981', color: '#fff', fontWeight: 500 }
    });
  };

  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--brand-dark)', marginBottom: '0.25rem' }}>Políticas de Segurança</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Configuração do Motor de Risco e regras automatizadas.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
        
        {/* Main Settings Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="glass-panel" style={{ backgroundColor: '#ffffff', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              <Sliders color="var(--brand-primary)" />
              <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--brand-dark)' }}>Limites Operacionais</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                  Gatilho de Pix Alto Valor
                  <span style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>R$ {pixLimit.toLocaleString('pt-BR')}</span>
                </label>
                <input 
                  type="range" min="1000" max="50000" step="1000" 
                  value={pixLimit} onChange={(e) => setPixLimit(Number(e.target.value))}
                  style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--brand-primary)' }}
                />
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Qualquer Pix acima deste valor fora do padrão do cliente gerará um alerta CRÍTICO.</p>
              </div>

              <div>
                <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                  Tentativas de Login (Bloqueio Automático)
                  <span style={{ color: 'var(--accent-warning)', fontWeight: 600 }}>{loginAttempts} tentativas</span>
                </label>
                <input 
                  type="range" min="1" max="10" step="1" 
                  value={loginAttempts} onChange={(e) => setLoginAttempts(Number(e.target.value))}
                  style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--accent-warning)' }}
                />
              </div>
            </div>
          </div>

          <div className="glass-panel" style={{ backgroundColor: '#ffffff', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              <Shield color="var(--accent-danger)" />
              <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--brand-dark)' }}>Filtros de Geofencing e IP</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked style={{ width: '1.1rem', height: '1.1rem', accentColor: 'var(--brand-primary)' }} />
                <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Bloquear acessos via Tor Network (Onion Routing)</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked style={{ width: '1.1rem', height: '1.1rem', accentColor: 'var(--brand-primary)' }} />
                <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Alerta de Alto Risco para VPNs Comerciais (NordVPN, ExpressVPN, etc)</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                <input type="checkbox" style={{ width: '1.1rem', height: '1.1rem', accentColor: 'var(--brand-primary)' }} />
                <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>Bloquear transações internacionais automaticamente</span>
              </label>
            </div>
          </div>

          <button onClick={handleSave} className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '0.75rem 2rem' }}>
            <Save size={18} /> Salvar Políticas
          </button>
        </div>

        {/* Sidebar Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ backgroundColor: '#f8fafc', padding: '1.25rem', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Server size={18} color="var(--text-secondary)" />
              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-secondary)' }}>STATUS DO MOTOR</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-success)' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-success)', boxShadow: '0 0 8px var(--accent-success)' }}></div>
              <span style={{ fontWeight: 600 }}>IA Ativa e Operacional</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Última atualização do modelo preditivo: Hoje, 04:00 AM</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Settings;
