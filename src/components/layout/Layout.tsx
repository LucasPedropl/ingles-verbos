import { ReactNode, useState } from 'react';
import { Sidebar, ViewState } from './Sidebar';

interface LayoutProps {
  children: ReactNode;
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

export function Layout({ children, currentView, onViewChange }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
      <Sidebar 
        currentView={currentView} 
        onViewChange={onViewChange} 
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <main className="flex-1 overflow-y-auto p-8 transition-all duration-300">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
