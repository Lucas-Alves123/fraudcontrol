import React from 'react';
import { FileText, Shield, UserX, CheckCircle, Search, Filter } from 'lucide-react';

const Audit = () => {
  const logs = [
    { id: 'LOG-8992', user: 'Lucas Luna (Admin)', action: 'Bloqueio de Conta', target: 'Carlos Santos (CLI-1040)', time: 'Hoje, 14:45', icon: UserX, color: 'var(--accent-danger)' },
    { id: 'LOG-8991', user: 'Lucas Luna (Admin)', action: 'Aprovação de Transação', target: 'TRX-98231 (Empresa Alpha)', time: 'Hoje, 14:32', icon: CheckCircle, color: 'var(--accent-success)' },
    { id: 'LOG-8990', user: 'Sistema (Auto)', action: 'Alerta Crítico Gerado', target: 'AL-1042 (Pix Alto Valor)', time: 'Hoje, 14:28', icon: Shield, color: 'var(--accent-danger)' },
    { id: 'LOG-8989', user: 'Sistema (Auto)', action: 'Atualização de Motor de Regras', target: 'IA Preditiva v2.4', time: 'Hoje, 04:00', icon: FileText, color: 'var(--brand-primary)' },
    { id: 'LOG-8988', user: 'Mariana Silva (Analista)', action: 'Resolução de Alerta', target: 'AL-1039 (Falso Positivo)', time: 'Hoje, 03:20', icon: CheckCircle, color: 'var(--accent-success)' },
  ];

  return (
    <div className="animate-fade-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--brand-dark)', marginBottom: '0.25rem' }}>Logs de Auditoria (Compliance)</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Trilha imutável de todas as ações e decisões tomadas no sistema.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', borderRadius: '10px', backgroundColor: '#ffffff', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <Search size={18} color="var(--text-secondary)" style={{ marginRight: '0.75rem' }} />
            <input type="text" placeholder="Buscar operador ou ID..." style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none', width: '220px', fontSize: '0.9rem', fontFamily: 'inherit' }} />
          </div>
          <button className="btn" style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', color: 'var(--text-primary)', boxShadow: 'var(--shadow-sm)' }}>
            <Filter size={18} /> Filtros
          </button>
        </div>
      </header>

      <div className="glass-panel" style={{ backgroundColor: '#ffffff', padding: '1.5rem' }}>
        <div className="table-container" style={{ border: 'none' }}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>ID Log</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>Data e Hora</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>Operador / Sistema</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>Ação Realizada</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>Alvo da Ação</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, i) => {
                const Icon = log.icon;
                return (
                  <tr key={i}>
                    <td style={{ fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{log.id}</td>
                    <td style={{ color: 'var(--text-secondary)' }}>{log.time}</td>
                    <td style={{ fontWeight: 600, color: log.user.includes('Sistema') ? 'var(--text-secondary)' : 'var(--brand-dark)' }}>{log.user}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: log.color }}>
                        <Icon size={16} /> {log.action}
                      </div>
                    </td>
                    <td style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>{log.target}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Audit;
