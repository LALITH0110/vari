"use client"

import { OceanCurrentMap } from "@/components/ocean-current-map"

export default function LiveMapPage() {
  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Results Showcase Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-sentient mb-4">
              Simulation <i className="font-light">Results</i>
            </h2>
            <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
              Validation and performance metrics from our distributed computing network
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-foreground/5 border border-foreground/10 rounded-lg overflow-hidden hover:border-primary/50 transition-colors group">
              <div className="aspect-video relative overflow-hidden bg-black">
                <img
                  src="/01.png"
                  alt="Plastic drift trajectory predictions"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Trajectory Predictions</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Monte Carlo simulations showing plastic drift paths from multiple source points across the Atlantic Ocean
                </p>
              </div>
            </div>

            <div className="bg-foreground/5 border border-foreground/10 rounded-lg overflow-hidden hover:border-primary/50 transition-colors group">
              <div className="aspect-video relative overflow-hidden bg-black">
                <img
                  src="/02.png"
                  alt="North Atlantic Garbage Patch visualization"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">3D Drift Visualization</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Real-time 3D rendering of plastic accumulation patterns converging toward the North Atlantic Garbage Patch
                </p>
              </div>
            </div>

            <div className="bg-foreground/5 border border-foreground/10 rounded-lg overflow-hidden hover:border-primary/50 transition-colors group">
              <div className="aspect-video relative overflow-hidden bg-black">
                <img
                  src="/03.png"
                  alt="Model comparison: Physics-based vs RL-corrected"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AI-Enhanced Predictions</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Comparison of physics-based models with RL-corrected predictions achieving 86.8% error reduction
                </p>
              </div>
            </div>

            <div className="bg-foreground/5 border border-foreground/10 rounded-lg overflow-hidden hover:border-primary/50 transition-colors group">
              <div className="aspect-video relative overflow-hidden bg-black">
                <img
                  src="/04.png"
                  alt="Model validation metrics dashboard"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Validation Metrics</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  R² = 0.87 correlation with observed data, demonstrating high prediction accuracy across temporal validation
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-sentient mb-4">
            Live <i className="font-light">Plastic Drift</i> Map
          </h1>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            Real-time ocean plastic drift predictions powered by distributed volunteer computing
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-xl border border-foreground/10" style={{ height: "70vh", minHeight: "500px" }}>
            <OceanCurrentMap />
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <h3 className="font-bold">Live simulation</h3>
            </div>
            <p className="text-sm text-foreground/70">3,000+ trajectory simulations running in real-time across the North Atlantic</p>
          </div>

          <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6">
            <h3 className="font-bold mb-4">Current Flow Legend</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                <span className="text-foreground/70">Slow (0-1 mph)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-300 rounded-full" />
                <span className="text-foreground/70">Medium (1-2 mph)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-2 bg-gradient-to-r from-blue-300 to-white rounded-full" />
                <span className="text-foreground/70">Fast (2+ mph)</span>
              </div>
            </div>
          </div>

          <div className="bg-foreground/5 border border-foreground/10 rounded-lg p-6">
            <h3 className="font-bold mb-4">Active Regions</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground/70">North Atlantic Gyre</span>
                <span className="text-red-400">High</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Caribbean Basin</span>
                <span className="text-green-400">Normal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
