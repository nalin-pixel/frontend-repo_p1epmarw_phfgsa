import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Factory } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-2xl mb-10 shadow-xl">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background/70 pointer-events-none" />

      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm">
            <Factory size={16} />
            <span>3D Extrude • Manufacturing Management</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            3D Extrude Management System
          </h1>
          <p className="text-white/90 text-base md:text-lg">
            A modern Order & Inventory platform with dashboards, role controls, and smart alerts to keep your production line flowing.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-medium px-4 py-2 rounded-lg shadow hover:shadow-md transition"
            >
              <Rocket size={18} />
              Go to Dashboard
            </a>
            <a
              href="#company"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-medium px-4 py-2 rounded-lg hover:bg-white/20 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
