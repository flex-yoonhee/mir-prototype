import { useState, useCallback } from 'react';
import SpecPanel from './components/SpecPanel';
import RecordingBar from './components/RecordingBar';
import HomeScreen from './screens/HomeScreen';
import SignalsScreen from './screens/SignalsScreen';
import SignalDetailScreen from './screens/SignalDetailScreen';
import TopicsScreen from './screens/TopicsScreen';
import TopicDetailScreen from './screens/TopicDetailScreen';
import TopicArchiveScreen from './screens/TopicArchiveScreen';
import CalendarScreen from './screens/CalendarScreen';
import MeetingDetailScreen from './screens/MeetingDetailScreen';
import ChatScreen from './screens/ChatScreen';
import VoiceScreen from './screens/VoiceScreen';
import MirrorScreen from './screens/MirrorScreen';
import EmailDetailScreen from './screens/EmailDetailScreen';
import TownhallScreen from './screens/TownhallScreen';
import SettingsScreen from './screens/SettingsScreen';
import { specs } from './data/mock-data';

const screenSpecMap = {
  home: specs.home,
  signals: specs.signals,
  'signal-detail': specs.signals,
  topics: specs.topics,
  'topic-detail': specs.topics,
  'topic-archive': specs.topics,
  calendar: specs.calendar,
  'meeting-detail': specs.calendar,
  chat: specs.chat,
  voice: specs.voice,
  mirror: specs.mirror,
  'email-detail': specs.email,
  townhall: specs.email,
  settings: specs.settings,
};

export default function App() {
  const [history, setHistory] = useState([{ screen: 'home', data: null }]);
  const current = history[history.length - 1];

  const navigate = useCallback((screen, data = null) => {
    setHistory(prev => [...prev, { screen, data }]);
  }, []);

  const goBack = useCallback(() => {
    setHistory(prev => prev.length > 1 ? prev.slice(0, -1) : prev);
  }, []);

  const currentSpec = screenSpecMap[current.screen] || null;

  const renderScreen = () => {
    const props = {
      onNavigate: navigate,
      onBack: history.length > 1 ? goBack : undefined,
      data: current.data,
    };

    switch (current.screen) {
      case 'home': return <HomeScreen {...props} />;
      case 'signals': return <SignalsScreen {...props} />;
      case 'signal-detail': return <SignalDetailScreen {...props} />;
      case 'topics': return <TopicsScreen {...props} />;
      case 'topic-detail': return <TopicDetailScreen {...props} />;
      case 'topic-archive': return <TopicArchiveScreen {...props} />;
      case 'calendar': return <CalendarScreen {...props} />;
      case 'meeting-detail': return <MeetingDetailScreen {...props} />;
      case 'chat': return <ChatScreen {...props} />;
      case 'voice': return <VoiceScreen {...props} />;
      case 'mirror': return <MirrorScreen {...props} />;
      case 'email-detail': return <EmailDetailScreen {...props} />;
      case 'townhall': return <TownhallScreen {...props} />;
      case 'settings': return <SettingsScreen {...props} />;
      default: return <HomeScreen {...props} />;
    }
  };

  return (
    <div className="app-layout">
      <div className="phone-frame-wrapper">
        <div className="phone-frame">
          <div className="phone-status-bar">
            <span>9:41</span>
            <div className="status-right">
              <span>●●●</span>
              <span>WiFi</span>
              <span>🔋</span>
            </div>
          </div>
          {renderScreen()}
          {current.screen !== 'chat' && current.screen !== 'voice' && (
            <RecordingBar onNavigate={navigate} />
          )}
        </div>
      </div>
      <SpecPanel screenSpec={currentSpec} />
    </div>
  );
}
