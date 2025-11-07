import React from 'react';
import { Users, Boxes, ClipboardList, ShieldCheck, Bell } from 'lucide-react';

const ModuleCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-white dark:bg-neutral-900 rounded-xl p-5 shadow-sm border border-neutral-200/60 dark:border-neutral-800">
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800">
        <Icon size={18} />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{desc}</p>
      </div>
    </div>
  </div>
);

const ModulesPreview = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ModuleCard icon={ClipboardList} title="Orders" desc="Create, edit, track, and fulfill orders with clear statuses and timelines." />
      <ModuleCard icon={Boxes} title="Inventory" desc="Add items, update stock, and get alerts when levels run low." />
      <ModuleCard icon={Users} title="Customers" desc="Store customer details and view order history for each account." />
      <ModuleCard icon={ShieldCheck} title="Roles & Access" desc="Admin and Staff permissions keep your data protected." />
      <ModuleCard icon={Bell} title="Notifications" desc="Automatic flags for low stock and pending orders." />
    </section>
  );
};

export default ModulesPreview;
