import { useState } from 'react';
import { specs } from '../data/mock-data';

const tabs = [
  { key: 'vp', label: '밸류 프로포지션', spec: specs.valueProposition },
  { key: 'deploy', label: '배포 전략', spec: specs.settings },
];

export default function StrategyBar() {
  const [activeTab, setActiveTab] = useState('vp');
  const [collapsed, setCollapsed] = useState(false);

  const current = tabs.find(t => t.key === activeTab);

  return (
    <div className="strategy-bar">
      <div className="strategy-header">
        <div className="strategy-tabs">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`strategy-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => { setActiveTab(tab.key); setCollapsed(false); }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button className="strategy-toggle" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? '펼치기 ▾' : '접기 ▴'}
        </button>
      </div>

      {!collapsed && current && (
        <div className="strategy-content">
          {current.spec.sections.map((section, i) => (
            <div className="strategy-card" key={i}>
              <div className="strategy-card-title">{section.element}</div>

              {section.decisions?.length > 0 && (
                <div className="strategy-card-items">
                  {section.decisions.map((d, j) => (
                    <div className="strategy-decision" key={j}>{d}</div>
                  ))}
                </div>
              )}

              {section.open?.length > 0 && (
                <div className="strategy-card-items">
                  {section.open.map((o, j) => (
                    <div className="strategy-open" key={j}>{o}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
