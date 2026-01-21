export const FlowingWave = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main flowing wave */}
      <svg
        className="absolute w-full h-full animate-flow"
        viewBox="0 0 1440 2800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-100 200 Q 200 100, 400 300 T 700 250 T 1000 400 T 1300 350 T 1600 500 
             Q 1400 700, 1200 800 T 900 950 T 600 1100 T 300 1000 T 0 1200
             Q 200 1400, 500 1500 T 800 1650 T 1100 1800 T 1400 1900 T 1600 2100
             Q 1300 2300, 1000 2400 T 700 2500 T 400 2600 T 100 2700"
          stroke="hsl(45 45% 78% / 0.4)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M-50 300 Q 250 200, 450 400 T 750 350 T 1050 500 T 1350 450 T 1650 600 
             Q 1450 800, 1250 900 T 950 1050 T 650 1200 T 350 1100 T 50 1300
             Q 250 1500, 550 1600 T 850 1750 T 1150 1900 T 1450 2000 T 1650 2200"
          stroke="hsl(45 50% 88% / 0.3)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      
      {/* Subtle gold circles */}
      <div 
        className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full opacity-20"
        style={{ 
          background: 'radial-gradient(circle, hsl(45 45% 78% / 0.4) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute top-[45%] left-[5%] w-48 h-48 rounded-full opacity-15"
        style={{ 
          background: 'radial-gradient(circle, hsl(45 45% 78% / 0.3) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute top-[75%] right-[15%] w-56 h-56 rounded-full opacity-20"
        style={{ 
          background: 'radial-gradient(circle, hsl(45 50% 88% / 0.4) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};
