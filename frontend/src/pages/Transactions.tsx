import React from 'react';
import { ArrowRightLeft, Search, Filter, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';
import toast from 'react-hot-toast';

const Transactions = () => {
  const handleFilter = () => {
    toast('Menu de filtros aberto', {
      icon: '🔍',
      style: { background: '#ffffff', color: 'var(--text-primary)', border: '1px solid var(--border-color)', fontWeight: 500 }
    });
  };

  const kpis = [
    { title: 'Volume Hoje', value: 'R$ 2.45M', trend: '+12%', isPositive: true },
    { title: 'Transações', value: '8.234', trend: '+5%', isPositive: true },
    { title: 'Bloqueadas', value: '142', trend: '-2%', isPositive: true },
  ];

  const transactions = [
    { id: 'TRX-98231', customer: 'Empresa Alpha Ltda', type: 'TED', amount: 'R$ 145.000,00', date: 'Hoje, 14:32', status: 'APROVADO', riskScore: '12' },
    { id: 'TRX-98230', customer: 'João Silva', type: 'PIX', amount: 'R$ 15.000,00', date: 'Hoje, 14:28', status: 'EM ANÁLISE', riskScore: '95' },
    { id: 'TRX-98229', customer: 'Maria Oliveira', type: 'TED', amount: 'R$ 2.450,00', date: 'Hoje, 14:15', status: 'EM ANÁLISE', riskScore: '80' },
    { id: 'TRX-98228', customer: 'Ana Costa', type: 'PIX', amount: 'R$ 800,00', date: 'Hoje, 03:15 AM', status: 'APROVADO', riskScore: '35' },
    { id: 'TRX-98227', customer: 'Lucas Costa', type: 'PIX', amount: 'R$ 1.200,00', date: 'Hoje, 13:45', status: 'APROVADO', riskScore: '15' },
    { id: 'TRX-98226', customer: 'Comércio Beta', type: 'Boleto', amount: 'R$ 4.500,00', date: 'Hoje, 13:10', status: 'RECUSADO', riskScore: '92' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Cabeçalho */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--brand-dark)', marginBottom: '0.25rem' }}>Transações</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Histórico completo de transações e motor de regras.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', borderRadius: '10px', backgroundColor: '#ffffff', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <Search size={18} color="var(--text-secondary)" style={{ marginRight: '0.75rem' }} />
            <input type="text" placeholder="Buscar ID, Cliente ou Valor..." style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none', width: '220px', fontSize: '0.9rem', fontFamily: 'inherit' }} />
          </div>
          <button className="btn" onClick={handleFilter} style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', color: 'var(--text-primary)', boxShadow: 'var(--shadow-sm)' }}>
            <Filter size={18} /> Filtros Avançados
          </button>
        </div>
      </header>

      {/* Mini KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        {kpis.map((kpi, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '1.5rem', backgroundColor: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{kpi.title}</p>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--brand-dark)' }}>{kpi.value}</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: kpi.isPositive ? 'var(--accent-success)' : 'var(--accent-danger)', backgroundColor: kpi.isPositive ? '#D1FAE5' : '#FEE2E2', padding: '0.4rem 0.6rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.85rem' }}>
              {kpi.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              {kpi.trend}
            </div>
          </div>
        ))}
      </div>

      {/* Tabela de Transações */}
      <div className="glass-panel" style={{ backgroundColor: '#ffffff', padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', padding: '0 0.5rem' }}>
          <ArrowRightLeft size={20} color="var(--brand-primary)" />
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--brand-dark)' }}>Registro de Operações</h2>
        </div>
        
        <div className="table-container" style={{ border: 'none' }}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>ID Transação</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>Cliente</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>Método</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>Valor</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>Data / Hora</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>Risco (0-100)</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)', textAlign: 'right' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trx, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>{trx.id}</td>
                  <td style={{ fontWeight: 500 }}>{trx.customer}</td>
                  <td>
                    <span style={{ backgroundColor: 'var(--bg-main)', padding: '0.3rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      {trx.type}
                    </span>
                  </td>
                  <td style={{ fontWeight: 600 }}>{trx.amount}</td>
                  <td style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{trx.date}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '40px', height: '6px', backgroundColor: 'var(--bg-main)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ 
                          height: '100%', 
                          width: `${trx.riskScore}%`, 
                          backgroundColor: parseInt(trx.riskScore) > 75 ? 'var(--accent-danger)' : parseInt(trx.riskScore) > 40 ? 'var(--accent-warning)' : 'var(--accent-success)' 
                        }} />
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{trx.riskScore}</span>
                    </div>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <span className={`badge ${trx.status === 'APROVADO' ? 'badge-success' : trx.status === 'RECUSADO' ? 'badge-danger' : 'badge-warning'}`}>
                      {trx.status}
                    </span>
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

export default Transactions;
