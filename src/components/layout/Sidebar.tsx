import { BookOpen, Database, Gamepad2, ChevronLeft, Menu } from 'lucide-react';

export type ViewState = 'summary' | 'verbs' | 'quiz';

interface SidebarProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ currentView, onViewChange, isOpen, onToggle }: SidebarProps) {
  const navItems = [
    { id: 'summary', label: 'Resumo de Regras', icon: BookOpen },
    { id: 'verbs', label: 'Banco de Verbos', icon: Database },
    { id: 'quiz', label: 'Quizzes Interativos', icon: Gamepad2 },
  ] as const;

  return (
    <aside className={`bg-white border-r border-gray-200 flex flex-col h-full transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className={`p-4 border-b border-gray-200 flex items-center ${isOpen ? 'justify-between' : 'justify-center'}`}>
        {isOpen && (
          <div className="flex items-center gap-2 select-none overflow-hidden">
            <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h1 className="text-lg font-bold text-blue-600 whitespace-nowrap">Verb Tenses</h1>
            </div>
          </div>
        )}
        <button 
          onClick={onToggle} 
          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
          title={isOpen ? "Recolher menu" : "Expandir menu"}
        >
          {isOpen ? <ChevronLeft className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      
      <nav className="flex-1 p-3 space-y-2 overflow-hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              title={!isOpen ? item.label : undefined}
              className={`w-full flex items-center gap-3 py-3 rounded-lg text-sm font-medium transition-colors select-none ${
                isOpen ? 'px-4 justify-start' : 'px-0 justify-center'
              } ${
                isActive 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
              {isOpen && <span className="whitespace-nowrap">{item.label}</span>}
            </button>
          );
        })}
      </nav>
      
      {isOpen && (
        <div className="p-4 border-t border-gray-200 text-xs text-gray-400 text-center select-none whitespace-nowrap">
          &copy; {new Date().getFullYear()} Verb Mastery
        </div>
      )}
    </aside>
  );
}
