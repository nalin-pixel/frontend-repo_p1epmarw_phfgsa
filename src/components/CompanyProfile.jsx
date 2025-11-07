import React from 'react';
import { Mail, Phone, MapPin, Target, Lightbulb } from 'lucide-react';

const CompanyProfile = () => {
  return (
    <section id="company" className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-sm border border-neutral-200/60 dark:border-neutral-800">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop"
          alt="3D Extrude Logo"
          className="w-24 h-24 rounded-xl object-cover"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">3D Extrude</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mt-1">Precision in every layer.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-1" size={18} />
            <div>
              <h3 className="font-semibold">Vision</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">To power efficient, sustainable manufacturing through data-driven automation.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Target className="mt-1" size={18} />
            <div>
              <h3 className="font-semibold">Mission</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">Deliver reliable 3D printing products on time with full production transparency.</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm"><Mail size={16} /> contact@3dextrude.com</div>
          <div className="flex items-center gap-3 text-sm"><Phone size={16} /> +1 (555) 013-2456</div>
          <div className="flex items-center gap-3 text-sm"><MapPin size={16} /> 245 Maker Ave, Suite 300, San Francisco, CA</div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
