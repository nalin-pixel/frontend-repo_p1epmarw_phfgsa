import React from 'react';
import HeroSection from './components/HeroSection';
import Dashboard from './components/Dashboard';
import CompanyProfile from './components/CompanyProfile';
import ModulesPreview from './components/ModulesPreview';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-50">
      <header className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=200&auto=format&fit=crop"
            alt="3D Extrude Logo"
            className="w-9 h-9 rounded-lg object-cover"
          />
          <div>
            <p className="text-sm text-neutral-500">Welcome to</p>
            <h1 className="text-lg font-semibold">3D Extrude Management System</h1>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <a href="#dashboard" className="hover:underline">Dashboard</a>
          <a href="#company" className="hover:underline">Company</a>
          <a href="#modules" className="hover:underline">Modules</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        <HeroSection />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Dashboard />
          </div>
          <div>
            <CompanyProfile />
          </div>
        </div>

        <section id="modules" className="mt-10 mb-16">
          <h2 className="text-xl font-semibold mb-4">Core Modules</h2>
          <ModulesPreview />
        </section>
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-8">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-neutral-600 dark:text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} 3D Extrude. All rights reserved.</p>
          <p>Built with love for efficient manufacturing.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
