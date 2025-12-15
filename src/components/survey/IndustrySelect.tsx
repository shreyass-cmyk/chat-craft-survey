import { useState, useMemo } from 'react';
import { Search, Check } from 'lucide-react';
import { industries } from '@/data/surveyQuestions';

interface IndustrySelectProps {
  onSelect: (value: string, label: string) => void;
}

export function IndustrySelect({ onSelect }: IndustrySelectProps) {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!search.trim()) return industries;
    const lower = search.toLowerCase();
    return industries.filter((i) => i.label.toLowerCase().includes(lower));
  }, [search]);

  const handleSelect = (id: string, label: string) => {
    setSelected(id);
    setTimeout(() => onSelect(id, label), 150);
  };

  return (
    <div className="space-y-3 animate-fade-in-up">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search industries..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-foreground
                     placeholder:text-muted-foreground focus:outline-none focus:ring-2 
                     focus:ring-ring focus:border-transparent transition-all"
          autoFocus
        />
      </div>
      <div className="max-h-64 overflow-y-auto rounded-xl border border-border bg-card divide-y divide-border">
        {filtered.map((industry) => {
          const isSelected = selected === industry.id;
          return (
            <button
              key={industry.id}
              onClick={() => handleSelect(industry.id, industry.label)}
              className={`w-full flex items-center justify-between px-4 py-3 text-left
                         transition-colors hover:bg-accent ${
                           isSelected ? 'bg-accent' : ''
                         }`}
            >
              <span className="text-[15px]">{industry.label}</span>
              {isSelected && <Check className="w-5 h-5 text-primary" />}
            </button>
          );
        })}
        {filtered.length === 0 && (
          <p className="px-4 py-6 text-center text-muted-foreground">
            No industries found
          </p>
        )}
      </div>
    </div>
  );
}
