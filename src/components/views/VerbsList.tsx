import { useState, useMemo } from 'react';
import { verbsData } from '../../data/verbs';
import { Search } from 'lucide-react';

export function VerbsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'regular' | 'irregular'>('all');

  const filteredVerbs = useMemo(() => {
    return verbsData.filter((verb) => {
      const matchesSearch = 
        verb.base.toLowerCase().includes(searchTerm.toLowerCase()) ||
        verb.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        verb.v2.toLowerCase().includes(searchTerm.toLowerCase()) ||
        verb.v3.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = filterType === 'all' || verb.type === filterType;

      return matchesSearch && matchesType;
    });
  }, [searchTerm, filterType]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Banco de Verbos</h2>
        <p className="text-gray-500 mt-2">
          Consulte rapidamente os verbos essenciais, suas formas no passado (V2) e particípio (V3).
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Buscar por verbo em inglês ou tradução..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex rounded-lg shadow-sm">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-l-lg ${filterType === 'all' ? 'bg-blue-50 text-blue-700 z-10' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilterType('regular')}
            className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-300 ${filterType === 'regular' ? 'bg-blue-50 text-blue-700 z-10' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
          >
            Regulares
          </button>
          <button
            onClick={() => setFilterType('irregular')}
            className={`px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-300 rounded-r-lg ${filterType === 'irregular' ? 'bg-blue-50 text-blue-700 z-10' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
          >
            Irregulares
          </button>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base (V1)</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Past Simple (V2)</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Past Participle (V3)</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Future (Will)</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tradução</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredVerbs.length > 0 ? (
                filteredVerbs.map((verb, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{verb.base}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{verb.v2}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{verb.v3}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">will {verb.base}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{verb.translation}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${verb.type === 'regular' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>
                        {verb.type}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    Nenhum verbo encontrado para "{searchTerm}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
