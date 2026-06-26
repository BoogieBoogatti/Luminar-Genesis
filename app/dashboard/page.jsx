import React from 'react';

export default function CardGrid() {
  const items = [
    { id: 1, title: 'Card 1', desc: 'First card content goes here.' },
    { id: 2, title: 'Card 2', desc: 'Second card content goes here.' },
    { id: 3, title: 'Card 3', desc: 'Third card content goes here.' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          My Card Grid
        </h1>
        
        {/* CORRECTED LINE: 'grid' is now included before 'grid-cols' */}
        <div className="mt-8 grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="rounded-xl border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
