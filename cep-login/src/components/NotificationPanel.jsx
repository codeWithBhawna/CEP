import React, { useState } from 'react';
import { X } from 'lucide-react';

function NotificationPanel() {
  const [open, setOpen] = useState(true);

  const notifications = [
    {
      date: '22 AUG',
      items: [
        { id: 1, title: 'Message (3)', time: '7:17 AM', description: 'A message description for testing notification bar', read: false },
        { id: 2, title: 'Login (1)', time: '1:43 AM', description: 'A message description for testing notification bar', read: true },
      ],
    },
    {
      date: '24 JUL',
      items: [
        { id: 3, title: 'Login (4)', time: '12:40 PM', description: 'A message description for testing notification bar', read: false },
        { id: 4, title: 'Critical (3)', time: '7:20 AM', description: 'A message description for testing notification bar', read: true },
      ],
    },
  ];

  if (!open) return null;

  return (
    <div className="relative w-[50rem] h-[50vh] bg-black text-white rounded-xl shadow-2xl p-6 flex flex-col">
      {/* Close button */}
      <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-white hover:text-gray-400">
        <X size={20} />
      </button>

      {/* Header */}
      <h4 className="text-2xl font-bold mb-4">Notifications</h4>

      {/* Notifications */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-8">
        {notifications.map((section) => (
          <div key={section.date}>
            {/* Date label */}
            <div className="text-sm text-gray-400 font-semibold mb-3">{section.date}</div>

            {/* Items */}
            <div className="space-y-4">
              {section.items.map((item, index) => (
                <div key={item.id}>
                  <div className="bg-white text-black rounded-md px-4 py-3 shadow-md hover:shadow-lg transition">
                    <div className="flex justify-between items-center mb-1">
                      <span className={`${item.read ? 'font-normal' : 'font-bold'} text-sm`}>
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-600">{item.time}</span>
                    </div>
                    <p className={`text-sm ${item.read ? 'font-normal text-gray-700' : 'font-semibold text-gray-800'}`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Separator */}
                  {index !== section.items.length - 1 && (
                    <div className="border-t border-gray-300 my-3"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer link */}
      <div className="text-right mt-4">
        <a href="#" className="text-blue-400 text-sm font-medium hover:underline">
          VIEW ALL
        </a>
      </div>
    </div>
  );
}

export default NotificationPanel;
