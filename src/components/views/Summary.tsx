import { tensesData } from '../../data/tenses';
import { ArrowRight } from 'lucide-react';

export function Summary() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Resumo de Regras</h2>
        <p className="text-gray-500 mt-2">
          Entenda a mecânica de cada tempo verbal e como ele se transforma no discurso indireto (Reported Speech).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tensesData.map((tense) => (
          <div key={tense.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-blue-50 px-5 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-blue-900">{tense.name}</h3>
            </div>
            
            <div className="p-5 space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <span className="font-bold text-green-600 w-6">+</span>
                  <span className="text-gray-700 font-mono text-xs bg-gray-100 px-2 py-1 rounded">{tense.affirmative}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="font-bold text-red-600 w-6">-</span>
                  <span className="text-gray-700 font-mono text-xs bg-gray-100 px-2 py-1 rounded">{tense.negative}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <span className="font-bold text-blue-600 w-6">?</span>
                  <span className="text-gray-700 font-mono text-xs bg-gray-100 px-2 py-1 rounded">{tense.interrogative}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-1">Exemplo:</p>
                <p className="text-gray-800 italic">"{tense.example}"</p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2">Palavras-chave (Time Expressions):</p>
                <div className="flex flex-wrap gap-2">
                  {tense.keywords.map(kw => (
                    <span key={kw} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200">{kw}</span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 bg-orange-50 -mx-5 -mb-5 p-5">
                <p className="text-xs font-semibold text-orange-800 uppercase tracking-wider mb-2">Reported Speech</p>
                <div className="flex items-center gap-2 text-orange-900 font-medium">
                  <span>{tense.name}</span>
                  <ArrowRight className="w-4 h-4" />
                  <span>{tense.reportedSpeech}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
