export default function ScreenHeader({ title, onBack, rightActions }) {
  return (
    <div className="screen-header">
      <button className="screen-header-btn" onClick={onBack}>
        {onBack ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg> : ''}
      </button>
      <span className="screen-header-title">{title}</span>
      <div style={{ display: 'flex', gap: 8 }}>
        {rightActions || <span style={{ width: 32 }} />}
      </div>
    </div>
  );
}
