export default function ScreenHeader({ title, onBack, rightActions }) {
  return (
    <div className="screen-header">
      <button className="screen-header-btn" onClick={onBack}>
        {onBack ? '‹' : ''}
      </button>
      <span className="screen-header-title">{title}</span>
      <div style={{ display: 'flex', gap: 8 }}>
        {rightActions || <span style={{ width: 32 }} />}
      </div>
    </div>
  );
}
