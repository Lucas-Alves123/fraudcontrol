import React, { useState } from 'react';
import { ShieldAlert, CheckCircle, Clock, AlertTriangle, ArrowRight, X, MapPin, Smartphone, User, DollarSign, Activity, History } from 'lucide-react';
import toast from 'react-hot-toast';

const Alerts = () => {
  const [selectedAlert, setSelectedAlert] = useState<any>(null);

  const alertsList = [
    { 
      id: 'AL-1042', customer: 'João Silva', type: 'Pix de Alto Valor', amount: 'R$ 15.000,00', risk: 'CRÍTICO', status: 'PENDENTE', time: 'Hoje, 14:28', 
      desc: 'Transferência Pix de valor muito acima do histórico do cliente para conta recém-criada.', 
      location: 'São Paulo, SP - BR', device: 'iPhone 14 Pro (Novo Dispositivo)', ip: '189.122.45.10',
      score: '98%', history: 'Cliente desde 2021. Média de transferências: R$ 1.500/mês.', ipReputation: 'ALTO RISCO (Proxy/VPN Detectado)'
    },
    { 
      id: 'AL-1041', customer: 'Maria Oliveira', type: 'Divergência de Localidade', amount: 'R$ 2.450,00', risk: 'ALTO', status: 'EM ANÁLISE', time: 'Hoje, 14:15', 
      desc: 'TED iniciada em São Paulo, mas o celular principal está em registro no Rio de Janeiro.', 
      location: 'Rio de Janeiro, RJ - BR', device: 'Samsung Galaxy S22', ip: '177.20.15.89',
      score: '82%', history: 'Cliente desde 2023. Perfil de viagem: Baixo.', ipReputation: 'RISCO MÉDIO (IP Público)'
    },
    { 
      id: 'AL-1040', customer: 'Carlos Santos', type: 'Múltiplas Falhas de Login', amount: '-', risk: 'MÉDIO', status: 'PENDENTE', time: 'Hoje, 13:55', 
      desc: '5 tentativas de login com senha incorreta e 2 requisições de reset de senha negadas.', 
      location: 'Curitiba, PR - BR', device: 'Chrome / Windows 10', ip: '200.150.40.12',
      score: '65%', history: 'Cliente desde 2020. Trocou de senha há 3 meses.', ipReputation: 'BAIXO RISCO (IP Residencial)'
    },
    { 
      id: 'AL-1039', customer: 'Ana Costa', type: 'Horário Incomum', amount: 'R$ 800,00', risk: 'BAIXO', status: 'RESOLVIDO', time: 'Hoje, 03:15 AM', 
      desc: 'Transação na madrugada. Cliente autenticou com biometria e confirmou a operação.', 
      location: 'Belo Horizonte, MG - BR', device: 'iPhone 12', ip: '179.90.33.21',
      score: '20%', history: 'Cliente VIP desde 2018. Movimentação noturna frequente.', ipReputation: 'BAIXO RISCO (IP Conhecido)'
    },
  ];

  const handleAction = (action: string) => {
    if (action === 'approve') {
      toast.success(`Alerta ${selectedAlert.id} marcado como Seguro.`, { style: { background: '#10B981', color: '#fff' } });
    } else {
      toast.error(`Conta bloqueada por Fraude Confirmada (${selectedAlert.id}).`, { style: { background: '#EF4444', color: '#fff' } });
    }
    setSelectedAlert(null);
  };

  return (
    <div className="animate-fade-in" style={{ position: 'relative' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--brand-dark)', marginBottom: '0.25rem' }}>Fila de Alertas de Fraude</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Gerenciamento e investigação detalhada dos incidentes.</p>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', backgroundColor: '#ffffff', borderLeft: '4px solid var(--accent-danger)' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Pendentes (Alta Prioridade)</p>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--brand-dark)' }}>2</h3>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem', backgroundColor: '#ffffff', borderLeft: '4px solid var(--accent-warning)' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Em Investigação</p>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--brand-dark)' }}>1</h3>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem', backgroundColor: '#ffffff', borderLeft: '4px solid var(--accent-success)' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Resolvidos (Hoje)</p>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--brand-dark)' }}>1</h3>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {alertsList.map((alert, idx) => (
          <div key={idx} className="glass-panel" style={{ backgroundColor: '#ffffff', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.2s', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ padding: '1rem', backgroundColor: alert.risk === 'CRÍTICO' ? '#FEE2E2' : alert.risk === 'ALTO' ? '#FFEDD5' : alert.risk === 'MÉDIO' ? '#FEF9C3' : '#D1FAE5', borderRadius: '12px', color: alert.risk === 'CRÍTICO' ? 'var(--accent-danger)' : alert.risk === 'ALTO' ? '#F97316' : alert.risk === 'MÉDIO' ? 'var(--accent-warning)' : 'var(--accent-success)' }}>
                <AlertTriangle size={24} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-dark)' }}>{alert.id} - {alert.type}</h3>
                  <span className={`badge ${alert.risk === 'CRÍTICO' || alert.risk === 'ALTO' ? 'badge-danger' : alert.risk === 'MÉDIO' ? 'badge-warning' : 'badge-success'}`}>Risco {alert.risk}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={14} /> {alert.time}</span>
                </div>
                <p style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 500 }}>Cliente: <span style={{ color: 'var(--brand-primary)' }}>{alert.customer}</span> {alert.amount !== '-' && `| Valor: ${alert.amount}`}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{alert.desc}</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
              <span className={`badge ${alert.status === 'RESOLVIDO' ? 'badge-success' : 'badge-warning'}`}>{alert.status}</span>
              <button onClick={() => setSelectedAlert(alert)} className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', color: 'var(--brand-primary)', borderColor: 'var(--brand-primary)' }}>
                Ver Detalhes <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DE DETALHES COMPLETOS */}
      {selectedAlert && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.5)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', backdropFilter: 'blur(4px)' }}>
          <div className="animate-fade-in" style={{ backgroundColor: '#ffffff', borderRadius: '16px', width: '700px', maxWidth: '90%', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8fafc' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: selectedAlert.risk === 'CRÍTICO' ? '#FEE2E2' : selectedAlert.risk === 'ALTO' ? '#FFEDD5' : selectedAlert.risk === 'MÉDIO' ? '#FEF9C3' : '#D1FAE5', borderRadius: '10px', color: selectedAlert.risk === 'CRÍTICO' ? 'var(--accent-danger)' : selectedAlert.risk === 'ALTO' ? '#F97316' : selectedAlert.risk === 'MÉDIO' ? 'var(--accent-warning)' : 'var(--accent-success)' }}>
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--brand-dark)' }}>Dossiê do Alerta: {selectedAlert.id}</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>Motor de Regras: {selectedAlert.type}</p>
                </div>
              </div>
              <button onClick={() => setSelectedAlert(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}><X size={24} /></button>
            </div>

            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ backgroundColor: '#f8fafc', padding: '1.2rem', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Confiança de Fraude (Score)</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: selectedAlert.risk === 'CRÍTICO' ? 'var(--accent-danger)' : selectedAlert.risk === 'ALTO' ? '#F97316' : 'var(--accent-warning)', lineHeight: 1 }}>{selectedAlert.score}</h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>A IA do FraudControl detectou um comportamento extremamente anômalo para este perfil.</p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <User color="var(--text-secondary)" size={20} />
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>DADOS DO CLIENTE</p>
                    <p style={{ fontWeight: 600, color: 'var(--brand-dark)' }}>{selectedAlert.customer}</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--brand-primary)', marginTop: '0.25rem' }}>{selectedAlert.history}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Activity color="var(--text-secondary)" size={20} />
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>CONTEXTO DA TRANSAÇÃO</p>
                    <p style={{ fontWeight: 600, color: 'var(--brand-dark)' }}>Valor: {selectedAlert.amount}</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Motivo: {selectedAlert.desc}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <MapPin color="var(--text-secondary)" size={20} />
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>REPUTAÇÃO DE REDE (IP)</p>
                    <p style={{ fontWeight: 600, color: 'var(--brand-dark)' }}>{selectedAlert.location}</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent-danger)', marginTop: '0.25rem', fontWeight: 600 }}>{selectedAlert.ipReputation} ({selectedAlert.ip})</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Smartphone color="var(--text-secondary)" size={20} />
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>TELEMETRIA DE DISPOSITIVO</p>
                    <p style={{ fontWeight: 600, color: 'var(--brand-dark)' }}>{selectedAlert.device}</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>ID Aparelho: Não reconhecido.</p>
                  </div>
                </div>
              </div>

            </div>

            <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end', gap: '1rem', backgroundColor: '#f8fafc' }}>
              {selectedAlert.confirmingFraud ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-danger)' }}>Ação Crítica: Insira o PIN de Segurança</span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input type="password" placeholder="****" maxLength={4} style={{ width: '80px', textAlign: 'center', letterSpacing: '0.2rem', padding: '0.4rem', borderRadius: '6px', border: '1px solid var(--accent-danger)', outline: 'none' }} />
                    <button onClick={() => handleAction('block')} className="btn btn-danger">Confirmar Bloqueio</button>
                    <button onClick={() => setSelectedAlert({...selectedAlert, confirmingFraud: false})} className="btn btn-outline">Cancelar</button>
                  </div>
                </div>
              ) : (
                <>
                  <button onClick={() => setSelectedAlert(null)} className="btn btn-outline" style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-color)' }}>
                    Cancelar
                  </button>
                  <button onClick={() => handleAction('approve')} className="btn btn-success">
                    <CheckCircle size={18} /> Aprovar Transação
                  </button>
                  <button onClick={() => setSelectedAlert({...selectedAlert, confirmingFraud: true})} className="btn btn-danger">
                    <AlertTriangle size={18} /> Confirmar Fraude
                  </button>
                </>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Alerts;
