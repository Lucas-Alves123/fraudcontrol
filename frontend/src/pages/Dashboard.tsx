import React, { useState } from 'react';
import { ShieldAlert, TrendingUp, Users, ArrowUpRight, ArrowDownRight, CheckCircle, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const stats = [
    { title: 'Alertas Críticos', value: '24', icon: ShieldAlert, color: 'var(--accent-danger)' },
    { title: 'Transações Bloqueadas', value: '1,245', icon: TrendingUp, color: 'var(--accent-warning)' },
    { title: 'Clientes em Risco', value: '89', icon: Users, color: 'var(--accent-primary)' }
  ];

  const initialAlerts = [
    { id: 'AL-1042', customer: 'João Silva', type: 'Pix de Alto Valor', amount: 'R$ 15.000,00', risk: 'CRÍTICO', status: 'PENDENTE', time: 'Há 5 min' },
    { id: 'AL-1041', customer: 'Maria Oliveira', type: 'Divergência de Localidade', amount: 'R$ 2.450,00', risk: 'ALTO', status: 'EM ANÁLISE', time: 'Há 12 min' },
    { id: 'AL-1040', customer: 'Carlos Santos', type: 'Múltiplas Falhas de Login', amount: '-', risk: 'MÉDIO', status: 'PENDENTE', time: 'Há 25 min' },
    { id: 'AL-1039', customer: 'Ana Costa', type: 'Horário Incomum', amount: 'R$ 800,00', risk: 'BAIXO', status: 'RESOLVIDO', time: 'Há 1 hora' },
  ];

  const [recentAlerts, setRecentAlerts] = useState(initialAlerts);

  const handleGenerateReport = () => {
    toast.success('Relatório gerado e baixado com sucesso!', {
      style: { background: '#10B981', color: '#ffffff', fontWeight: 500, border: 'none' }
    });
  };

  const handleAction = (actionType: string, id: string) => {
    if (actionType === 'approve') {
      toast.success(`Transação do alerta ${id} liberada.`, {
         style: { background: '#10B981', color: '#ffffff', fontWeight: 500, border: 'none' }
      });
      setRecentAlerts(prev => prev.map(a => a.id === id ? { ...a, status: 'LIBERADO' } : a));
    } else {
      toast.error(`Conta do cliente bloqueada devido ao alerta ${id}.`, {
         style: { background: '#EF4444', color: '#ffffff', fontWeight: 500, border: 'none' }
      });
      setRecentAlerts(prev => prev.map(a => a.id === id ? { ...a, status: 'BLOQUEADO' } : a));
    }
  };

  return (
    <div className="animate-fade-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '0.25rem' }}>Visão Geral</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Monitoramento em tempo real do sistema de prevenção a fraudes.</p>
        </div>
        <button className="btn btn-primary" onClick={handleGenerateReport}>
          <TrendingUp size={18} /> Gerar Relatório
        </button>
      </header>

      <div className="stat-grid">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="stat-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="stat-title">{stat.title}</span>
                <Icon size={20} color={stat.color} />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span className="stat-value">{stat.value}</span>
                {i === 1 && <ArrowUpRight size={16} color="var(--accent-warning)" />}
              </div>
            </div>
          );
        })}
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Alertas Recentes</h2>
          <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            Ver todos <ArrowUpRight size={16} />
          </button>
        </div>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID Alerta</th>
                <th>Cliente</th>
                <th>Regra Quebrada</th>
                <th>Valor</th>
                <th>Risco</th>
                <th>Status</th>
                <th>Tempo</th>
                <th style={{ textAlign: 'right' }}>Ação Rápida</th>
              </tr>
            </thead>
            <tbody>
              {recentAlerts.map((alert, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500 }}>{alert.id}</td>
                  <td>{alert.customer}</td>
                  <td>{alert.type}</td>
                  <td>{alert.amount}</td>
                  <td>
                    <span className={`badge ${alert.risk === 'CRÍTICO' || alert.risk === 'ALTO' ? 'badge-danger' : alert.risk === 'MÉDIO' ? 'badge-warning' : 'badge-success'}`}>
                      {alert.risk}
                    </span>
                  </td>
                  <td style={{ fontWeight: 600, color: alert.status === 'BLOQUEADO' ? 'var(--accent-danger)' : alert.status === 'LIBERADO' ? 'var(--accent-success)' : 'inherit' }}>{alert.status}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{alert.time}</td>
                  <td style={{ textAlign: 'right' }}>
                    {alert.status === 'PENDENTE' ? (
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                        <button onClick={() => handleAction('approve', alert.id)} className="btn btn-sm btn-success" title="Aprovar e Liberar">
                          <CheckCircle size={16} /> Liberar
                        </button>
                        <button onClick={() => handleAction('block', alert.id)} className="btn btn-sm btn-danger" title="Bloquear Conta">
                          <XCircle size={16} /> Bloquear
                        </button>
                      </div>
                    ) : (
                      <span style={{ color: alert.status === 'BLOQUEADO' ? 'var(--accent-danger)' : 'var(--accent-success)', fontSize: '0.85rem', fontWeight: 600 }}>
                        {alert.status === 'BLOQUEADO' ? '🚫 Conta Bloqueada' : '✅ Já analisado'}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
