import { useState } from 'react';
import { Layout } from './components/layout/Layout';
import { ViewState } from './components/layout/Sidebar';
import { Summary } from './components/views/Summary';
import { VerbsList } from './components/views/VerbsList';
import { Quiz } from './components/views/Quiz';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('summary');

  const renderView = () => {
    switch (currentView) {
      case 'summary':
        return <Summary />;
      case 'verbs':
        return <VerbsList />;
      case 'quiz':
        return <Quiz />;
      default:
        return <Summary />;
    }
  };

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {renderView()}
    </Layout>
  );
}
