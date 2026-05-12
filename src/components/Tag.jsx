const severityLabel = {
  urgent: '긴급',
  detected: '감지됨',
  caution: '주의',
  normal: '보통',
  tracking: '추적 중',
};

export default function Tag({ severity, children }) {
  return (
    <span className={`tag ${severity}`}>
      <span className="dot" />
      {children || severityLabel[severity] || severity}
    </span>
  );
}
