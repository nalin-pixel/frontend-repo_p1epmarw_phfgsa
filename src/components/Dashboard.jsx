import React from 'react';
import { Package, ShoppingCart, AlertTriangle, Activity } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, trend }) => (
  <div className="bg-white dark:bg-neutral-900 rounded-xl p-5 shadow-sm border border-neutral-200/60 dark:border-neutral-800">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-neutral-500">{label}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
        {trend && (
          <p className={`text-xs mt-1 ${trend.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>{trend} this week</p>
        )}
      </div>
      <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800">
        <Icon className="text-neutral-700 dark:text-neutral-300" size={22} />
      </div>
    </div>
  </div>
);

const RecentActivity = () => (
  <div className="bg-white dark:bg-neutral-900 rounded-xl p-5 shadow-sm border border-neutral-200/60 dark:border-neutral-800">
    <div className="flex items-center gap-2 mb-3">
      <Activity size={18} />
      <h3 className="font-semibold">Recent Activity</h3>
    </div>
    <ul className="space-y-3 text-sm">
      <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> Order #1042 shipped to Acme Corp.</li>
      <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-amber-500" /> Low stock alert: PLA Filament – Black.</li>
      <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-sky-500" /> New customer added: Nova Robotics.</li>
    </ul>
  </div>
);

const Dashboard = () => {
  return (
    <section id="dashboard" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard icon={ShoppingCart} label="Open Orders" value="32" trend="+8%" />
        <StatCard icon={Package} label="Items in Stock" value="1,284" trend="-2%" />
        <StatCard icon={AlertTriangle} label="Low Stock" value="7" trend="+2" />
      </div>
      <RecentActivity />
    </section>
  );
};

export default Dashboard;
