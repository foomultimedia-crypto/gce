import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full" />
        
        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          
          {/* Stylized G part */}
          <path 
            d="M 30 50 A 20 20 0 1 1 30 51 L 30 50 Z" 
            fill="none" 
            stroke="url(#logo-gradient)" 
            strokeWidth="12" 
            strokeLinecap="round" 
          />
          <path 
            d="M 45 50 L 35 50" 
            stroke="url(#logo-gradient)" 
            strokeWidth="12" 
            strokeLinecap="round" 
          />
          
          {/* Stylized C part - overlapping/connecting */}
          <path 
            d="M 60 50 A 20 20 0 1 1 60 51 Z" 
            fill="none" 
            stroke="url(#logo-gradient)" 
            strokeWidth="12" 
            strokeLinecap="round"
            className="opacity-80" 
          />

          {/* Stylized E with 'flame/wave' at top right */}
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            d="M 75 30 Q 90 20 95 40 Q 90 50 75 60" 
            fill="none" 
            stroke="#22d3ee" 
            strokeWidth="8" 
            strokeLinecap="round" 
          />
        </svg>
      </div>
      
      {showText && (
        <span className="text-xl font-display font-black tracking-tight text-white uppercase group-hover:text-cyan-400 transition-colors">
          GCE <span className="text-cyan-400">INSTITUTE</span>
        </span>
      )}
    </div>
  );
}
