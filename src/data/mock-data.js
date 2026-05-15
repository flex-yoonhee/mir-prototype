// MIR prototype mock data — based on figma design

export const company = {
  name: 'MIR',
  ceoName: '한원용',
};

export const todaysBrief = {
  date: '4.29',
  dayOfWeek: '수요일',
  updateTime: '8:00 업데이트',
  summary: '오늘 이사회에서 동남아 법인 건이 논의됩니다. 지난달 검토한 인력 계획을 함께 보세요. PM팀 번아웃으로 인한 팀 만족도 응답률 하락 시그널도 주의가 필요합니다.',
  signals: [
    { severity: 'urgent', text: 'PM팀 번아웃 — PM팀 평균 초과근무 주 12시간. 팀 만족도 설문 응답률 하락.' },
    { severity: 'caution', text: '김서준, 이하린 — 최근 면담 요청 증가, 외부 채용 플랫폼 활동 감지. 보상 격차 가능성.' },
    { severity: 'normal', text: '디자인 팀 보상 격차 — 시장 대비 보상 수준 하위 20%. 연말 리뷰 전 선제 대응 필요 가능성.' },
  ],
};

export const todaysFocus = [
  { type: 'schedule', title: '김서준 시니어 면담', time: '09:00', tag: '핵심인력 리텐션', icon: 'calendar' },
  { type: 'task', title: '동남아 법인 고용계약 검토', tag: '긴급', tagType: 'urgent', subtitle: '오늘 마감 · 동남아 법인 설립' },
  { type: 'task', title: 'Q2 마케팅 예산 초과 승인', tag: '할 일', tagType: 'detected', subtitle: '오늘 마감 · Q2 예산 집행' },
  { type: 'schedule', title: '이사회 — 동남아 법인 안건', tag: '일정', tagType: 'normal', time: '14:00', subtitle: '동남아 법인 설립' },
  { type: 'schedule', title: 'CHRO 주간 싱크', tag: '일정', tagType: 'normal', time: '16:30' },
];

export const topics = [
  {
    id: 't1',
    title: '핵심인력 리텐션',
    severity: 'urgent',
    lastUpdate: '최근: 개발팀 시니어 이탈 징후 감지',
    stats: { detected: 2, tracking: 2, closed: 1 },
    daysAgo: 4,
    status: 'active',
    conversations: 2,
    hasRecentUpdate: true,
  },
  {
    id: 't2',
    title: '동남아 법인 설립',
    severity: 'urgent',
    isNew: true,
    lastUpdate: '최근: 현지 법규 변경 — 고용계약 조항 확인 필요',
    stats: { detected: 2, tracking: 2, closed: 1 },
    daysAgo: 2,
    status: 'active',
    conversations: 1,
    hasRecentUpdate: true,
  },
  {
    id: 't3',
    title: 'Q2 예산 집행',
    severity: 'caution',
    lastUpdate: '최근: 마케팅 예산 15% 초과 지출 감지',
    stats: { detected: 2, tracking: 2, closed: 1 },
    daysAgo: 7,
    status: 'active',
    conversations: 0,
    hasRecentUpdate: false,
  },
  {
    id: 't4',
    title: '예외 상황 감지',
    severity: 'normal',
    lastUpdate: '최근: 마케팅팀 초과근무 3주 연속 증가',
    stats: { detected: 2, tracking: 2, closed: 1 },
    daysAgo: 12,
    status: 'active',
    conversations: 0,
    hasRecentUpdate: false,
  },
];

export const homeTopics = [
  {
    id: 'ht1',
    title: '핵심인력 리텐션',
    lastUpdate: '최근: 개발팀 시니어 이탈 징후 감지',
    stats: { detected: 2, tracking: 2, closed: 1 },
    isNew: false,
  },
  {
    id: 'ht2',
    title: '동남아 법인 설립',
    lastUpdate: '최근: 현지 법규 변경 — 고용계약 조항 확인 필요',
    stats: { detected: 2, tracking: 2, closed: 1 },
    isNew: true,
  },
  {
    id: 'ht3',
    title: 'Q2 예산 집행',
    lastUpdate: '최근: 마케팅 예산 15% 초과 지출 감지',
    stats: { detected: 2, tracking: 2, closed: 1 },
    isNew: false,
  },
  {
    id: 'ht4',
    title: '예외 상황 감지',
    lastUpdate: '최근: 마케팅팀 초과근무 3주 연속 증가',
    stats: { detected: 2, tracking: 2, closed: 1 },
    isNew: false,
  },
];

export const archivedTopics = [
  {
    id: 'at1',
    title: '개발팀 시니어 이탈 징후',
    severity: 'urgent',
    description: '김서준은 3월 면담에서 역할 확장에 관심을 보였습니다. 이하린은 최근 외부 채용 플랫폼 프로필을 업데이트했습니다. 두 사람 모두 시장 대비 보상 하위 25%에 위치합니다. 최대 세줄까지...',
    conversations: 2,
    status: 'closed',
  },
  {
    id: 'at2',
    title: 'PM팀 번아웃 감지',
    severity: 'caution',
    description: '최근 PM팀 평균 초과근무 주 12시간을 넘는 빈도가 올라갔습니다. 최근 팀 만족도 설문 응답에서 부정적 피드백을 남긴 구성원이 과반을 넘겨 이에대한 체크가 필요합니다.',
    status: 'closed',
  },
  {
    id: 'at3',
    title: '디자인 팀 보상 격차',
    severity: 'normal',
    description: '시장 대비 보상 수준 하위 20%. 연말 리뷰 전 선제 대응이 필요해 보입니다.',
    status: 'closed',
  },
];

export const signals = [
  {
    id: 's1',
    title: '개발팀 시니어 2인 이탈 징후 포착',
    titleNote: '(타이틀은 최대 두줄까지 표시합니다.)',
    severity: 'urgent',
    date: '2026. 4. 27 (목) 12:55',
    month: '2026년 4월',
    briefing: '김서준은 3월 면담에서 역할 확장에 관심을 보였습니다. 이하린은 최근 외부 채용 플랫폼 프로필을 업데이트했습니다. 두 사람 모두 시장 대비 보상 하위 25%에 위치합니다. 최대 세줄까지...',
    fullBriefing: '김서준은 3월 면담에서 역할 확장에 관심을 보였습니다. 이하린은 최근 외부 채용 플랫폼 프로필을 업데이트했습니다. 두 사람 모두 시장 대비 보상 하위 25%에 위치합니다.',
    evidence: [
      { label: '김서준 — 외부 채용 플랫폼 프로필 업데이트 (4/12)', items: ['보상 벤치마크 리포트 — 시장 대비 하위 25%'] },
      { label: '이하린 — 1:1 면담 요청 빈도 2배 증가 (3월 대비)', items: ['김서준 3월 면담 기록 — 역할 확장 희망 언급', '이하린 최근 면담 요청 로그 (4건)'] },
      { label: '두 명 모두 최근 3개월 초과근무 감소 추세', items: ['개발팀 분기 서베이 결과 (Q1 2025)', '근태 데이터 — 3월 대비 주당 평균 -4h'] },
    ],
    actions: [
      '보상 시뮬레이션 확인 (+15~22% 조정안)',
      '2025.03 면담 기록 리뷰',
      '역할 전환 가능 포지션 목록 준비',
      'CHRO와 보상 조율 범위 사전 합의',
    ],
    relatedPeople: [
      { name: '김서준', type: 'person' },
      { name: '이하린', type: 'person' },
      { name: 'Engineering', type: 'org' },
      { name: 'Backend Chapter', type: 'org' },
    ],
    conversationCount: 2,
    topicCreatedCount: 2,
    conversations: [
      { title: '김서준 후속 대응 방향을 제안해줘', date: '2026. 4. 27 (목) 12:55', hasUnread: true },
      { title: '이하린 후속 대응 방향을 제안해줘', date: '2026. 4. 24 (월) 15:20', hasUnread: false },
    ],
  },
  {
    id: 's2',
    title: 'PM팀 번아웃 감지',
    severity: 'caution',
    date: '2026. 4. 27 (목) 12:55',
    month: '2026년 4월',
    briefing: '최근 PM팀 평균 초과근무 주 12시간을 넘는 빈도가 올라갔습니다. 최근 팀 만족도 설문 응답에서 부정적 피드백을 남긴 구성원이 과반을 넘겨 이에대한 체크가 필요합니다.',
    conversationCount: 1,
    topicCreatedCount: 0,
    actionItems: [
      'PM팀 초과근무 현황 데이터 확인',
      '팀 만족도 설문 상세 결과 리뷰',
      'PM팀 리더와 1:1 면담 진행',
    ],
    relatedPeople: [
      { name: '박지민', type: 'person', avatar: 'PJ' },
      { name: 'PM Chapter', type: 'org' },
    ],
    conversations: [
      { title: 'PM팀 번아웃 대응 방안을 제안해줘', date: '2026. 4. 27 (목) 14:30', hasUnread: false },
    ],
  },
  {
    id: 's3',
    title: '디자인 팀 보상 격차',
    severity: 'normal',
    date: '2026. 4. 27 (목) 12:55',
    month: '2026년 3월',
    briefing: '시장 대비 보상 수준 하위 20%. 연말 리뷰 전 선제 대응이 필요해 보입니다.',
    conversationCount: 0,
    topicCreatedCount: 0,
    actionItems: [
      '디자인 팀 보상 벤치마크 데이터 확인',
      '연말 리뷰 전 보상 조정안 검토',
    ],
    relatedPeople: [
      { name: '최유진', type: 'person', avatar: 'CY' },
      { name: 'Design Chapter', type: 'org' },
    ],
    conversations: [],
  },
  {
    id: 's4',
    title: '디자인 팀 보상 격차',
    severity: 'normal',
    date: '2026. 4. 27 (목) 12:55',
    month: '2026년 3월',
    briefing: '시장 대비 보상 수준 하위 20%. 연말 리뷰 전 선제 대응이 필요해 보입니다.',
    conversationCount: 0,
    topicCreatedCount: 0,
    actionItems: [],
    relatedPeople: [],
    conversations: [],
  },
];

export const topicDetail = {
  id: 't1-detail',
  title: '개발팀 시니어 2인 이탈 징후 포착 (타이틀은 말줄임 없이 모두 표시합니다.)',
  severity: 'urgent',
  daysAgo: 4,
  briefing: '김서준은 3월 면담에서 역할 확장에 관심을 보였습니다. 이하린은 최근 외부 채용 플랫폼 프로필을 업데이트했습니다. 두 사람 모두 시장 대비 보상 하위 25%에 위치합니다.',
  evidence: [
    { label: '김서준 — 외부 채용 플랫폼 프로필 업데이트 (4/12)', items: ['보상 벤치마크 리포트 — 시장 대비 하위 25%'] },
    { label: '이하린 — 1:1 면담 요청 빈도 2배 증가 (3월 대비)', items: ['김서준 3월 면담 기록 — 역할 확장 희망 언급', '이하린 최근 면담 요청 로그 (4건)'] },
    { label: '두 명 모두 최근 3개월 초과근무 감소 추세', items: ['개발팀 분기 서베이 결과 (Q1 2025)', '근태 데이터 — 3월 대비 주당 평균 -4h'] },
  ],
  actions: [
    '보상 시뮬레이션 확인 (+15~22% 조정안)',
    '2025.03 면담 기록 리뷰',
    '역할 전환 가능 포지션 목록 준비',
    'CHRO와 보상 조율 범위 사전 합의',
  ],
  relatedPeople: [
    { name: '김서준', type: 'person' },
    { name: '이하린', type: 'person' },
    { name: 'Engineering', type: 'org' },
    { name: 'Backend Chapter', type: 'org' },
  ],
  timeline: [
    { date: '2026. 5. 11 (월)', change: '보통 → 긴급', severity: 'urgent', severityFrom: 'normal', severityTo: 'urgent', content: '김서준은 3월 면담에서 역할 확장에 관심을 보였습니다. 이하린은 최근 외부 채용 플랫폼 프로필을 업데이트했습니다. 두 사람 모두 시장 대비 보상 하위 25%에 위치합니다.' },
    { date: '2026. 5. 4 (월)', change: '주의 → 보통', severity: 'normal', severityFrom: 'caution', severityTo: 'normal', content: '김서준은 3월 면담에서 역할 확장에 관심을 보였습니다. 이하린은 최근 외부 채용 플랫폼 프로필을 업데이트했습니다.' },
    { date: '2026. 4. 27 (목)', change: '주의', severity: 'caution', severityFrom: null, severityTo: 'caution', content: '김서준은 3월 면담에서 역할 확장에 관심을 보였습니다. 이하린은 최근 외부 채용 플랫폼 프로필을 업데이트했습니다. 두 사람 모두 시장 대비 보상 하위 25%에 위치합니다.' },
  ],
  conversations: [
    { title: '김서준 후속 대응 방향을 제안해줘', date: '2026. 4. 27 (목) 12:55', hasUnread: true },
    { title: '이하린 후속 대응 방향을 제안해줘', date: '2026. 4. 24 (월) 15:20', hasUnread: false },
  ],
  tasks: [
    { title: '보상 격차 데이터 검토', deadline: '오늘 마감', severity: 'urgent', done: true },
    { title: 'CHRO에게 리텐션 플랜 요청', deadline: '이번 주', severity: 'normal', done: false },
  ],
  schedules: [
    { title: '김서준 시니어 면담', duration: '1시간 30분', time: '오늘 09:00 - 10:30', location: '3층 소회의실', person: '김서준' },
    { title: '이하린 시니어 면담', duration: '1시간 30분', time: '어제 16:30 - 18:00', location: '3층 소회의실', person: '이하린' },
  ],
};

export const calendarEvents = {
  allDay: ['flex CEO 배포', 'Labor Day', '하루 종일 이벤트'],
  events: [
    { time: '09:00', endTime: '10:00', title: '2026 1Q 이사회', duration: '1시간', location: '본사 대회의실', attendees: 8, avatar: true },
    { time: '10:30', endTime: '11:00', title: 'CTO 주간 싱크', duration: '30분', attendees: 3, avatar: true },
    { time: '11:30', endTime: '13:30', title: '투자사 점심 미팅', duration: '2시간', location: '농민 백암 순대 시청점', attendees: 2 },
    { time: '14:30', endTime: '15:30', title: '제품 로드맵 리뷰', duration: '1시간', location: 'Baseball', attendees: 7, avatar: true, conflict: true },
    { time: '15:00', endTime: '15:30', title: 'HR 분기 리뷰', duration: '30분', location: 'Pingpong', attendees: 7, conflict: true },
    { time: '16:00', endTime: '17:30', title: '김서준 시니어 면담', duration: '1시간 30분', location: 'CEO Room', attendees: 2 },
    { time: '17:30', endTime: '18:30', title: '전사 타운홀 준비', duration: '1시간', location: 'CEO Room', attendees: 8, avatar: true },
    { time: '17:30', endTime: '18:00', title: 'CHRO 보상 조율 미팅', duration: '30분', location: 'CEO Room', attendees: 2, avatar: true },
  ],
};

export const meetingDetail = {
  title: '김서준 시니어 리텐션 면담',
  date: '4월 17일 목요일',
  time: '15:00-16:00',
  duration: '1시간',
  attendees: [
    { name: '나 (대표)', role: '' },
    { name: '김서준 (개발팀 시니어)', role: '' },
  ],
  location: '본사 3층 소회의실',
  zoomLink: 'zoom.us/j/948-271-003',
  note: '앞으로의 미래를 위해 서로에게 좋은 방향을 가감없이 논의하고, 결정하는 자리가 된다면 좋겠습니다.',
  coach: {
    strategy: '안부로 시작해 최근 업무 만족도를 먼저 물어보세요. 퇴사 의향을 직접 묻기보다 역할 확장 의향 → 보상 기대치 순서로 자연스럽게 이끌어가는 것이 효과적입니다.',
    topics: [
      '"최근 프로젝트에서 리드 역할 잘 해주셨는데, 더 맡고 싶은 영역이 있나요?"',
      '"팀 기술 방향에 대해 의견이 있으면 듣고 싶습니다" — 의사결정 참여감 부여',
      '"보상 체계 개편을 검토 중인데, 현재 처우에 대한 솔직한 의견을 부탁드려요"',
    ],
    preparation: [
      '보상 시뮬레이션 확인 (+15~22% 조정안)',
      '2025.03 면담 기록 리뷰',
      '역할 전환 가능 포지션 목록 준비',
      'CHRO와 보상 조율 범위 사전 합의',
    ],
  },
};

export const voiceRecords = [
  { time: '09:00', title: '2026 1Q 이사회', type: 'meeting', timeRange: '09:00 - 10:00', summary: '동남아 법인 설립 안건 논의. CFO 비용 분석 발표, CHRO 인력 수급 계획 공유. 6월 이사회 전까지 최종 결정 필요.', subtitle: '본사 대회의실 · 안건 4건 · AI 요약 완료' },
  { time: '09:55', title: '이사회 소감 정리', type: 'memo', timeRange: '09:55 - 10:05', summary: '동남아 법인 조직도 초안 메모. 베트남 vs 싱가포르 법적 안정성 비교 필요.', subtitle: '동남아 법인 조직도 초안 · 텍스트 OCR 완료' },
  { time: '11:15', title: '본사 → 강남 레스토랑 이동', type: 'memo', timeRange: '11:15 - 11:33', summary: '이동 중 투자사 미팅 관련 메모. 시리즈 B 진행 상황 및 질문 사항 정리.', subtitle: '이동 18분 · 투자사 미팅 일정과 자동 매칭' },
  { time: '14:00', title: '로드맵 리뷰 회의', type: 'meeting', timeRange: '14:00 - 15:00', summary: 'Q2 제품 로드맵 리뷰. 핵심 기능 5건 우선순위 재조정. 디자인팀 리소스 부족 이슈 논의.', subtitle: '3층 회의실 · 핵심 논의 5건 추출 · AI 요약 완료' },
  { time: '15:20', title: 'CHRO 통화 녹취 12분', type: 'memo', timeRange: '15:20 - 15:32', summary: '김서준 면담 사전 조율. 보상 조정 범위와 역할 전환 가능성에 대해 CHRO와 합의.', subtitle: '김서준 면담 사전 조율 내용 · AI 요약 완료' },
];

export const mirrorData = {
  date: '4월 20일 일요일',
  summary: '오늘은 3건의 의사결정과 2건의 면담을 처리했습니다. 김서준 면담에서 역할 전환 합의를 이끌어낸 것이 핵심 성입니다. 다만 고용계약 검토가 마감 직전에 이루어져 여유가 부족했습니다. 내일 이사회 전 법인 안건 사전 정리를 추천합니다.',
  good: [
    { title: '면담에서 구체적 합의 도출', description: '김서준 면담에서 역할 전환 + 보상 기준을 한 번에 정리했습니다. 이전 대비 면담 효율이 높아지고 있습니다.' },
    { title: '토픽 해결 속도 개선', description: '이번 주 토픽 평균 해결 기간이 9일로, 지난 달(14일) 대비 36% 단축되었습니다.' },
  ],
  warning: [
    { title: '마감 직전 처리 패턴', description: '고용계약 검토가 마감일에 이루어졌습니다. 최근 2주간 긴급 할일의 70%가 당일 처리되고 있어, 사전 검토 시간 확보가 필요합니다.' },
    { title: '위임 비율 낮음', description: '이번 주 할 일 중 위임된 건이 1건뿐입니다. CHRO 리텐션 플랜처럼 위임 가능한 건을 더 활용하면 시간 여유를 확보할 수 있습니다.' },
  ],
  conversations: [
    { title: '김서준 후속 대응 방향을 제안해줘', date: '2026. 4. 27 (목) 12:55', hasUnread: true },
    { title: '이하린 후속 대응 방향을 제안해줘', date: '2026. 4. 27 (목) 12:55', hasUnread: false },
  ],
};

export const emailDetail = {
  title: '동남아 법인 고용계약서 v3 검토 의견',
  topicTag: '동남아 법인 안건',
  severity: 'urgent',
  aiBriefing: '3건의 메일에서 베트남·싱가포르 두 후보지에 대한 의견이 갈립니다. CFO는 비용, CHRO는 인력 수급, 법무실장은 규제 리스크를 중심으로 판단하고 있습니다. 핵심 쟁점은 "비용 효율의 베트남 vs. 법적 안정성의 싱가포르"이며, 6월 이사회 전까지 방향 확정이 필요합니다.',
  email: {
    from: '정태영 법무',
    date: '4월 20일 14:10',
    content: '대표님, 안녕하세요.\n법무팀 정태영입니다.\n\n베트남 현지 자문사 의견을 반영해 v3를 업데이트했습니다. 비경쟁 조항(12개월)이 현지법 기준으로 과도할 수 있어 6개월로 단축을 권고드립니다.\n\n확인 부탁드립니다.\n\n감사합니다.\n정태영 드림',
  },
  aiReply: {
    to: '정태영 법무',
    subject: 'RE: 동남아 법인 고용계약서 v3 검토 의견',
    content: '정태영님,\n\n계약서 v3 검토했습니다. 두 가지 수정을 요청드립니다.\n\n1. 비경쟁 조항: 12개월 → 6개월로 단축 (현지 자문사 권고 반영)\n2. 수습 기간: 60일 → 90일로 연장 (현지 관행 반영)\n\n수정본은 오늘 중으로 받을 수 있을까요? 내일 이사회에서 공유할 예정입니다.\n\n감사합니다.',
  },
  thread: [
    { from: '박소연 CHRO', date: '4월 19일 17:32', content: '법무팀에서 계약서 v3 전달받았습니다. 수습 기간 조항과 해고 사유 부분을 대표님이 직접 확인해 주시면 좋겠습니다.' },
    { from: '정태영 법무', date: '4월 18일 14:10', content: '베트남 현지 자문사 의견을 반영해 v3를 업데이트했습니다. 비경쟁 조항(12개월)이 현지법 기준으로 과도할 수 있어 6개월로 단축을 권고드립니다.' },
    { from: 'Nguyen (현지 자문)', date: '4월 17일 09:45', content: 'The non-compete clause exceeds the standard 6-month limit under Vietnam labor law. I recommend revision before signing.' },
  ],
};

export const townhallPrep = {
  title: '전사 타운홀 준비',
  aiBriefing: '3명이 타운홀 준비 현황과 아젠다 구성에 대해 논의하고 있습니다. 경영지원팀장은 운영 로지스틱스, 브랜드팀 리드는 콘텐츠 연출, CHRO는 조직 메시지 방향을 각각 담당하고 있으며, 핵심 쟁점은 "대표 키노트에 구조조정 언급을 포함할지 여부"입니다. 타운홀은 5월 9일이며, 아젠다 확정 데드라인은 5월 2일입니다.',
  messages: [
    {
      from: '박소연 CHRO',
      date: '4월 19일 17:32',
      content: '장소/장비 셋업 다 됐고요, 아젠다 초안 올립니다. 키노트 30분 → 부문 하이라이트 20분 → Q&A 30분 → 어워드 10분이요. Q&A 때 어떻게 할지 방향 잡아주시면 좋겠습니다.',
      reactions: { heart: 147, sparkle: 107, bolt: 3, party: 47 },
    },
    {
      from: '정태영 법무',
      date: '4월 18일 14:10',
      content: '키노트 슬라이드 작년처럼 숫자 나열하면 또 "슬라이드 너무 많다" 나올 거예요 (작년 설문 1위였음 ㅠ). Q1 성과는 고객 사례 하나로 압축하고, Q2 목표는 스토리 중심으로 가면 어떨까요?',
    },
    {
      from: 'Nguyen (현지 자문)',
      date: '4월 17일 09:45',
      content: '사전 질문 보니까 구조조정 이슈 피하면 Q&A에서 더 세게 나올 겁니다. 키노트에서 대표님이 직접 꺼내시는 게 낫고요, 단어는 "조직 재설계"로 가고 전환 배치·지원 패키지 같이 말씀하시면 불안감이 줄어요. Q&A 때 HR 질문은 제가 옆에서 직접 받겠습니다.',
    },
  ],
};

export const chatHistory = [
  { title: '점심 저녁 식사 비용은 얼마야?', date: '2025. 11. 27 (목) 오후 12:55', hasUnread: true, month: '2025. 12' },
  { title: '우리 회사의 근무 제도에 대해 설명해 줄래?', date: '2025. 11. 27 (목) 오후 12:55', month: '2025. 12' },
  { title: '개인 카드로 먼저 결제한 경우 회사에 비용을청구하...', date: '2025. 11. 27 (목) 오후 12:55', month: '2025. 12' },
  { title: '사무실 근무 외 어떤 근무 방식이 있는지 알려주고, ...', date: '2025. 11. 27 (목) 오후 12:55', hasUnread: true, month: '2025. 12' },
  { title: '우리 회사의 비용 정책과 프로세스를 알려줘', date: '2025. 11. 27 (목) 오후 12:55', month: '2025. 11' },
  { title: '우리 팀이 원온원을 장려하는 이유가 뭘까?', date: '2025. 11. 27 (목) 오후 12:55', month: '2025. 11' },
  { title: '휴가 제도에 대해서 설명해줘.', date: '2025. 11. 27 (목) 오후 12:55', month: '2025. 11' },
  { title: '업무 관련 세미나 비용을 지원받을 수 있어?', date: '2025. 11. 27 (목) 오후 12:55', month: '2025. 11' },
];

export const specs = {
  valueProposition: {
    title: '밸류 프로포지션',
    sections: [
      {
        element: '현재 포지셔닝',
        decisions: [
          '"chief of staff가 없는 CEO에게, AI chief of staff"',
          'exceptional한 상황에 대한 리포트 + 사람이 아니라서 더 객관적일 수 있는 근거 제공',
          '사람-사람 네트워크의 사각지대까지 포착하는 데이터 기반 인사이트',
        ],
        open: [
          '7월 출시 시점에 고객이 "이것 때문에 쓴다"고 말할 한 가지가 뭔지 합의 필요',
        ],
      },
      {
        element: '킬러 피처 후보 3가지',
        decisions: [
          '1. 시그널 — exceptional case 감지 + 근거/반증. 인텔리전스 파이프라인 의존도 높음',
          '2. 미팅 코치 — 대화 전략/소재/사전준비. gcal만으로 동작, 데이터 요구 가장 낮음',
          '3. 이메일/슬랙 AI 브리핑 — 흩어진 맥락을 한 곳에서. gmail restricted scope 이슈 있음',
        ],
        open: [
          '3가지 중 7월 출시의 핵심 가치 1개 선택 필요',
          '시그널 품질이 곧 제품 신뢰 — 인텔리전스 322개 지표 중 7월 커버 범위에 따라 밸류 달라짐',
        ],
      },
{
        element: '가격과 포지셔닝',
        decisions: [
          '"사람이 아니라서 객관적"이라는 가치가 고가격 rationale',
          'chief of staff 연봉 대비 pricing 프레이밍',
        ],
        open: [],
      },
      {
        element: '시그널 생성 — 현재 진행 상황',
        decisions: [
          '현재는 인텔리전스 지표에 의존도가 높음',
          '차주 중 선구님이 서드파티 연동 비정형 데이터로 시그널 생성 테스트 예정',
        ],
        open: [],
      },
      {
        element: '폴백 플랜 — mock 데이터 테스트 (진행 중)',
        status: [
          'PoC 프롬프트를 출시 스펙에 맞게 변형하여 mock 데이터로 테스트 중',
          '200명 규모 가상 회사(강남언니 st 페르소나), flex+서드파티+STT mock 데이터 생성 완료',
          '4주치 데이터 기준 시그널 약 10개 추출됨',
          '테스트 목적 1) flex 아닌 회사 데이터로 시그널 뽑히는지',
          '테스트 목적 2) flex 데이터 없이 서드파티+STT만으로도 시그널 뽑히는지',
        ],
      },
      {
        element: 'CEO 핵심 니즈 — 목표 달성 트래킹',
        status: [
          '대표의 핵심 니즈는 결국 목표 달성을 트래킹하는 것',
          '필요한 데이터: 매출, 태스크 매니지먼트 — HR 데이터만으로는 커버 안 됨',
          '임플리멘테이션으로 자료를 받아 보여주는 것부터 시작할 수 있지 않을까',
        ],
      },
    ],
  },
  home: {
    title: '홈',
    sections: [
      {
        element: '오늘의 요약 (today\'s brief)',
        dataSource: '인텔리전스 지표 스토어 + gcal + 서드파티',
        refreshCycle: '매일 오전 배치 생성. 시그널 발생 시 업데이트',
        decisions: [
          '시그널 노출: visible=true인 시그널만, 긴급→주의→발견 순 정렬',
          'LLM이 요약 본문 생성, 타이틀/본문 글자수 제한만 적용',
        ],
        open: [],
      },
      {
        element: '추적중 토픽',
        dataSource: 'CEO가 추적 중인 토픽 목록 + 각 토픽의 최신 업데이트 요약',
        refreshCycle: '매일 배치 + 실시간(시그널 전환/대화 등록 시 즉시)',
        decisions: [
          '2열 그리드: category별 그룹핑 (긴급/주의)',
          'last_topic_updated_at 기준 정렬',
          '토픽 상한: 활성 20개 / 보관 포함 100개 (5/14 확정)',
        ],
        open: [],
      },
      {
        element: '오늘 일정',
        dataSource: 'gcal 프라이빗 커넥터 (CEO 개인 OAuth)',
        refreshCycle: '동기화 방식 미정',
        decisions: [
          '종일 이벤트 + 시간별 리스트',
          '일정 충돌 표시',
        ],
        open: [],
      },
    ],
  },
  signals: {
    title: '시그널',
    sections: [
      {
        element: '시그널 목록',
        dataSource: '인텔리전스 지표 스토어 322개 지표 기반 LLM 분석',
        refreshCycle: '하루 1회 배치 (지표 스토어 갱신 주기)',
        decisions: [
          '카테고리 3단계: 긴급(push알림+홈최상단) / 주의(앱배지+홈) / 발견(홈만)',
          'reflex 첫 출시 제외 (7월 이후)',
          '시그널 재료: 인텔리전스 지표 + 서드파티 + 크로스도메인 + 녹음 인사이트(STT) + 토픽 업데이트',
          '반증 UI 분리 제거 — LLM 본문에 자연스럽게 포함',
        ],
        open: [],
      },
      {
        element: '시그널 상세',
        dataSource: '인텔리전스 + matrix drill-down',
        decisions: [
          'AI 브리핑(summary) + 포착 징후(evidence) + 꼬리 질문(follow_up_questions) + 추천 액션(recommended_actions)',
          '관련 인물/조직: DB 분리 저장(related_user_ids, related_department_ids), API 분리 전달. UI에서 통합 노출 (5/14 확정)',
          '액션 직접 tool call 제외 — 채팅으로 이동 후 function call',
          'MVP UI: LLM 출력 형식 위임 (게시판 형태)',
        ],
        open: [],
      },
      {
        element: '데이터 스펙 — ceo_signal_scenario',
        dataSource: 'DB 테이블 (고객 노출 X)',
        decisions: [
          'IntelligenceAgent에 전송할 prompt 템플릿 저장',
          '시나리오마다 도메인/기간만 치환하여 사용',
          '활성 시나리오(deleted_at IS NULL) 대상으로 배치 실행',
        ],
        open: [],
      },
      {
        element: '데이터 스펙 — ceo_signal',
        dataSource: 'DB 테이블',
        decisions: [
          '필드: id, customer_id, user_id, scenario_id, category(긴급/주의/발견), visible, title, summary, evidence, follow_up_questions(JSON), recommended_actions(JSON), related_user_ids(JSON), related_department_ids(JSON), fetched_data_detail(JSON)',
          'visible 결정: 동일 시나리오의 최근 N일 시그널과 LLM 의미적 중복 판정 → 중복이면 visible=false',
          'visible=false 시그널은 모든 노출/알림에서 제외',
          'related_user_ids, related_department_ids, fetched_data_detail은 LLM이 아닌 에이전트 아티팩트에서 코드로 추출',
        ],
        open: [],
      },
      {
        element: '시그널 생성 흐름',
        decisions: [
          '생성 방식: 배치(cron) + 사용자 요청(on-demand) 병행 (5/14 확정)',
          '시그널 중복 탐지: 최근 7일 내 동일/유사 시그널 존재 시 미딜리버리 (5/14 확정)',
          '출처 규칙: 서드파티=서비스별 아이콘+랜딩 / flex 단일제품=제품 아이콘+랜딩 / flex 분석데이터=공통 아이콘+랜딩 없음 (5/14 확정)',
          '1. 매일 cron 또는 사용자 요청 → 활성 시나리오 조회',
          '2. 각 시나리오 question_text를 IntelligenceAgent에 전송',
          '3. 응답 JSON 파싱 (항목별 시그널 후보)',
          '4. LLM 의미적 중복 판정 → visible 결정',
          '5. ceo_signal INSERT',
          '6. category별 노출/알림 분기',
        ],
        open: [],
      },
    ],
  },
  topics: {
    title: '토픽',
    sections: [
      {
        element: '토픽 목록/상세',
        dataSource: '시그널 기반 생성 + CEO 직접 등록',
        decisions: [
          '등록 방식: 명시적 폼(제목+설명) + 대화 중 tool call (5/8 확정)',
          '상세 = 주제에 대한 최신 응답 시간순 + 심각도 변화 타임라인',
          '양방향/연결 토픽 자동추천은 출시 이후',
          '토픽 지표 고정 매핑 출시 제외',
          '토픽 상한: 활성 20개 / 보관 포함 100개 (5/14 확정)',
        ],
        open: [],
      },
      {
        element: '토픽 보관함',
        dataSource: 'CEO가 종료한 토픽 목록',
        decisions: [
          '종료 → 보관 (archived_at 기록), "다시 추적"으로 복원 가능 (status=ACTIVE)',
        ],
        open: [],
      },
      {
        element: '데이터 스펙 — ceo_topic',
        dataSource: 'DB 테이블',
        decisions: [
          '필드: id, customer_id, user_id, title, description(nullable), status(ACTIVE/ARCHIVED), archived_at, last_topic_updated_id, last_topic_updated_at',
          '첫 update 없이 생성 가능 (last_topic_updated_id nullable)',
          '시그널-토픽 직접 매핑 테이블 없음 — ceo_topic_update.source_id로 경유',
        ],
        open: [],
      },
      {
        element: '데이터 스펙 — ceo_topic_update',
        dataSource: 'DB 테이블',
        decisions: [
          '필드: id, topic_id, category(긴급/주의/발견), visible, source_type, source_id, summary, evidence, follow_up_questions, recommended_actions, related_user_ids, related_department_ids, fetched_data_detail',
          'source_type 4가지: SIGNAL(시그널 전환) / CHAT(대화 중 등록) / BATCH(이후 갱신 배치) / MANUAL(CEO 직접, 향후)',
          'visible 결정: 직전 update와 LLM 의미적 중복 판정',
        ],
        open: [],
      },
      {
        element: '토픽 생성 3가지 경로',
        decisions: [
          'B-1. 시그널에서 전환: CEO "토픽 등록" 클릭 → title/summary 시그널에서 복사 → topic + topic_update(SIGNAL) INSERT',
          'B-2. CEO 명시적 등록: title+description 입력 → topic INSERT (update 없이 시작) → 이후 배치로 채움',
          'B-3. 대화 중 등록: tool call → 맥락에서 title/description 추출 → topic + topic_update(CHAT) INSERT → 대화 지속',
        ],
        open: [],
      },
      {
        element: '토픽 업데이트 누적 배치',
        decisions: [
          '매일 cron → 활성 토픽 조회 → 토픽 메타 + 직전 update를 prompt에 포함',
          'IntelligenceAgent에 "토픽 주제 최신 현황" 요청',
          '직전 update 이후 변화 중심으로 작성 지시',
          'LLM 중복 판정 후 visible 결정 → ceo_topic_update(BATCH) INSERT',
        ],
        open: [],
      },
    ],
  },
  calendar: {
    title: '캘린더',
    sections: [
      {
        element: '캘린더 뷰',
        dataSource: 'gcal 프라이빗 커넥터 (CEO 개인 OAuth) + flex 캘린더',
        refreshCycle: '동기화 방식 미정',
        decisions: [
          '주간 스트립(compact) + 월간(expanded) 전환',
          '일정 충돌 표시',
          '구글캘린더와 flex 캘린더를 별개 타입으로 클라이언트에 전달. 클라이언트에서 각 타입에 맞게 대응 (5/14 확정)',
        ],
        open: [
          'gcal 연동 방식 — AI팀 구캘 매트릭스 적재 활용 vs 별도 구현',
        ],
      },
      {
        element: '일정 상세 + 미팅 코치',
        dataSource: 'gcal + flex 1on1/미팅 + 인텔리전스',
        decisions: [
          '미팅 코치: 대화 전략 + 대화 소재 + 사전 준비',
          '미팅 triage: gcal 데이터만으로 3가지 구분 (내가 주최/필수/선택)',
        ],
        open: [
          '브리핑 생성: 배치 기본 + 폴백(미니배치/온디맨드) 논의 중',
        ],
      },
    ],
  },
  chat: {
    title: '채팅',
    sections: [
      {
        element: 'flex AI 채팅',
        dataSource: 'LLM + 전체 데이터 소스',
        decisions: [
          '진입점의 맥락은 대화에 반영됨 (토픽→해당 토픽, 피드백→해당 피드백). 다만 진입점에 따라 동작이 달라지거나 제한되지 않음 — 자유롭게 다른 주제 전환 가능 (5/8, 5/14 보정)',
          '토픽 드롭다운으로 맥락 힌트 제공 가능',
          '리더십 피드백: 채팅 탭에 통합 (4/23 확정)',
          '사용자 메모리 첫 출시 제외',
        ],
        open: [
          '시스템 프롬프트 구성: CEO/회사 기본정보 + 에이전트 행동지침 + 진입점별 맥락',
        ],
      },
    ],
  },
  voice: {
    title: '음성 기록',
    sections: [
      {
        element: '녹음 + 음성 메모',
        dataSource: '디바이스 마이크 → STT → 서버 적재',
        decisions: [
          '미팅 자동 on(gcal 연동) 또는 CEO 수동 on/off',
          '24시간 상시 녹음 안 함',
          '녹음 원본 폐기, 서버에 가공 적재',
          '녹음 파일 업로드 미지원',
          '"음성 메모" 타입 = 미팅과 매핑되지 않는 녹음 (이동 중 메모, 통화 등)',
          '미팅-녹음 매칭: 같은 시간 여러 일정 등 엣지케이스는 사용자 확인 UX로 해결 방향',
        ],
        open: [
          '푸시 알림 정책 고민 중',
        ],
      },
    ],
  },
  mirror: {
    title: 'mirror (리더십 피드백)',
    sections: [
      {
        element: 'mirror 일별 리뷰',
        dataSource: '미팅 STT (녹음 전사 텍스트)',
        refreshCycle: '주간 피드백 확정. 이번 주 기반 생성, 지난 주 아카이빙',
        decisions: [
          '종합 의견 + 잘하고 있는 것 + 주의해야 할 것 구조',
          '채팅 통합이 아닌 별도 섹션으로 디자인됨 — 기존 결정(채팅 통합)과 다름, 확인 필요',
        ],
        open: [
          '일간+주간 병행 고도화 시점',
        ],
      },
    ],
  },
  email: {
    title: '메일 상세',
    sections: [
      {
        element: '이메일 AI 브리핑 + 답장 초안',
        dataSource: 'gmail OAuth2 (restricted scope)',
        decisions: [
          'gmail 접근: workspace 허용 목록(4-5) 방식으로 7월 출시, CASA 병렬',
          '테스트 workspace: integration-test.grapeisfruit.com',
        ],
        open: [
          'AI 답장 초안 — 액션 직접 tool call 제외 원칙과의 정합성 (복사 후 CEO 전송이라 OK?)',
        ],
      },
    ],
  },
  settings: {
    title: '설정 + 배포 + 콜드스타트',
    sections: [
      {
        element: '내 정보 / 연동',
        dataSource: '-',
        decisions: [
          '첫 출시 서드파티: gcal, slack, gmail, notion. 개발 우선순위: 슬랙, 지메일 먼저 → 그다음 노션 (5/14 확정)',
          '이후: gdrive, ms teams, ms office',
          '노션 연동: search API(커넥터) 방식 채택. MCP는 token 유효기간 이슈로 제외 (5/14 확정)',
        ],
        open: [
          'slack 연동 상세 (어떤 데이터, 어떤 주기) 미정',
        ],
      },
      {
        element: '배포 방식 (5/12 논의 결과)',
        decisions: [
          '결정: flex 앱 위에 얹어서 제공 (일반 모드 ↔ CEO 모드). 앱보다는 서비스에 가까운 형태',
          '앱 스킴은 분리',
          '알림은 혼용되지 않음 (flex 알림과 CEO 알림 별도)',
          'BE에서 제공해야 할 정보 파악 위해 상태 다이어그램 리뷰 예정',
        ],
        open: [],
      },
      {
        element: '콜드스타트 전략',
        decisions: [],
        open: [
          'flex 사용 회사: HR 데이터는 즉시 활용 가능하나 서드파티(gcal/slack/gmail) 연동 전까지 시그널 품질 제한',
          'flex 미사용 회사: 협업 도구 + 녹음만으로 시작. 수동 적재(급여대장 등) 필요',
          '데이터 없을 때 첫 경험을 어떻게 설계할지 — 빈 홈 vs 온보딩 가이드 vs 샘플 시그널',
          '시그널 배치가 의미있는 결과를 내려면 최소 어느 정도 데이터가 필요한지 기준 정의',
          '임플리멘테이션 vs 셀프서브 온보딩 경로 구분',
        ],
      },
    ],
  },
};
