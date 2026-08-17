import React, { useState } from 'react';
import { Users, Search, Filter, ShieldCheck, ShieldAlert, XCircle, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Customers = () => {
  const initialCustomers = [
    { id: 'CLI-1042', name: 'João Silva', type: 'Pessoa Física', account: 'Corrente', status: 'BLOQUEADO', riskLevel: 'CRÍTICO', joined: 'Há 2 anos' },
    { id: 'CLI-1041', name: 'Maria Oliveira', type: 'Pessoa Física', account: 'Poupança', status: 'EM ANÁLISE', riskLevel: 'ALTO', joined: 'Há 5 meses' },
    { id: 'CLI-1040', name: 'Carlos Santos', type: 'Pessoa Física', account: 'Corrente', status: 'SUSPENSO', riskLevel: 'MÉDIO', joined: 'Há 4 anos' },
    { id: 'CLI-1039', name: 'Ana Costa', type: 'Pessoa Física', account: 'Corrente', status: 'ATIVO', riskLevel: 'BAIXO', joined: 'Há 1 ano' },
    { id: 'CLI-1038', name: 'Empresa Alpha Ltda', type: 'Pessoa Jurídica', account: 'Empresarial', status: 'ATIVO', riskLevel: 'BAIXO', joined: 'Há 6 anos' },
    { id: 'CLI-1037', name: 'Lucas Costa', type: 'Pessoa Física', account: 'Corrente', status: 'ATIVO', riskLevel: 'BAIXO', joined: 'Há 3 anos' },
  ];

  const [customers, setCustomers] = useState(initialCustomers);

  const handleAction = (id: string, action: string) => {
    if (action === 'block') {
      setCustomers(prev => prev.map(c => c.id === id ? { ...c, status: 'BLOQUEADO' } : c));
      toast.error(`Cliente ${id} foi bloqueado com sucesso.`, { style: { background: '#EF4444', color: '#fff' } });
    } else {
      setCustomers(prev => prev.map(c => c.id === id ? { ...c, status: 'ATIVO' } : c));
      toast.success(`Conta do cliente ${id} liberada.`, { style: { background: '#10B981', color: '#fff' } });
    }
  };

  return (
    <div className="animate-fade-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--brand-dark)', marginBottom: '0.25rem' }}>Gestão de Clientes</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Controle de perfis, contas e níveis de risco da base de usuários.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', borderRadius: '10px', backgroundColor: '#ffffff', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <Search size={18} color="var(--text-secondary)" style={{ marginRight: '0.75rem' }} />
            <input type="text" placeholder="Buscar por Nome, CPF/CNPJ..." style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none', width: '250px', fontSize: '0.9rem', fontFamily: 'inherit' }} />
          </div>
        </div>
      </header>

      <div className="glass-panel" style={{ backgroundColor: '#ffffff', padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', padding: '0 0.5rem' }}>
          <Users size={20} color="var(--brand-primary)" />
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--brand-dark)' }}>Base de Clientes (Recentes)</h2>
        </div>
        
        <div className="table-container" style={{ border: 'none' }}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>ID Cliente</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>Nome / Razão Social</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>Tipo de Conta</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>Nível de Risco</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>Tempo de Conta</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)' }}>Status da Conta</th>
                <th style={{ backgroundColor: 'transparent', borderBottom: '2px solid var(--bg-main)', textAlign: 'right' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((cli, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>{cli.id}</td>
                  <td style={{ fontWeight: 600 }}>{cli.name}<br/><span style={{fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 400}}>{cli.type}</span></td>
                  <td style={{ color: 'var(--text-secondary)' }}>{cli.account}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: cli.riskLevel === 'CRÍTICO' || cli.riskLevel === 'ALTO' ? 'var(--accent-danger)' : cli.riskLevel === 'MÉDIO' ? 'var(--accent-warning)' : 'var(--accent-success)' }}>
                      {cli.riskLevel === 'BAIXO' ? <ShieldCheck size={16} /> : <ShieldAlert size={16} />}
                      <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{cli.riskLevel}</span>
                    </div>
                  </td>
                  <td style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{cli.joined}</td>
                  <td>
                    <span className={`badge ${cli.status === 'ATIVO' ? 'badge-success' : cli.status === 'BLOQUEADO' ? 'badge-danger' : 'badge-warning'}`}>
                      {cli.status}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    {cli.status === 'BLOQUEADO' || cli.status === 'SUSPENSO' ? (
                      <button onClick={() => handleAction(cli.id, 'unblock')} className="btn btn-sm btn-outline" style={{ color: 'var(--accent-success)', borderColor: 'var(--accent-success)' }}>
                        <CheckCircle size={14} /> Desbloquear
                      </button>
                    ) : (
                      <button onClick={() => handleAction(cli.id, 'block')} className="btn btn-sm btn-outline" style={{ color: 'var(--accent-danger)', borderColor: 'var(--accent-danger)' }}>
                        <XCircle size={14} /> Bloquear
                      </button>
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

export default Customers;
