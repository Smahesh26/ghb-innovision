'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import IndiaMap from 'react-svgmap-india';

const IndiaMapComponent = IndiaMap as any;

const FOOTPRINT_STATES = [
  { code: 'HR', name: 'Haryana', pin: [250, 150] as [number, number] },
  { code: 'WB', name: 'West Bengal', pin: [550, 140] as [number, number] },
  { code: 'OR', name: 'Odisha', pin: [580, 260] as [number, number] },
  { code: 'RJ', name: 'Rajasthan', pin: [320, 220] as [number, number] },
  { code: 'DL', name: 'Delhi', pin: [260, 110] as [number, number] },
  { code: 'PB', name: 'Punjab', pin: [190, 130] as [number, number] },
  { code: 'UP', name: 'Uttar Pradesh', pin: [320, 120] as [number, number] },
  { code: 'CT', name: 'Chhattisgarh', pin: [420, 180] as [number, number] },
  { code: 'BR', name: 'Bihar', pin: [430, 130] as [number, number] },
  { code: 'MP', name: 'Madhya Pradesh', pin: [350, 200] as [number, number] },
  { code: 'KA', name: 'Karnataka', pin: [480, 420] as [number, number] },
  { code: 'TN', name: 'Tamil Nadu', pin: [500, 470] as [number, number] },
  { code: 'TG', name: 'Telangana', pin: [520, 320] as [number, number] },
  { code: 'MH', name: 'Maharashtra', pin: [420, 280] as [number, number] },
  { code: 'GJ', name: 'Gujarat', pin: [340, 270] as [number, number] },
];

const IndiaGeoMap = () => {
  const [selected, setSelected] = useState('');
  const [animatedPins, setAnimatedPins] = useState<Record<string, boolean>>({});
  const [pinPositions, setPinPositions] = useState<Record<string, [number, number]>>({});
  const [mapViewBox, setMapViewBox] = useState('0 0 650 650');
  const mapWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    FOOTPRINT_STATES.forEach((state, index) => {
      const timeout = setTimeout(() => {
        if (cancelled || !state?.code) {
          return;
        }

        setAnimatedPins((prev) => ({
          ...prev,
          [state.code]: true,
        }));
      }, (index + 1) * 300);

      timeouts.push(timeout);
    });

    return () => {
      cancelled = true;
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  useEffect(() => {
    let retries = 0;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const measurePinsFromSvg = () => {
      const wrapper = mapWrapRef.current;
      if (!wrapper) {
        return false;
      }

      const svg = wrapper.querySelector('svg');
      if (!svg) {
        return false;
      }

      const viewBox = svg.getAttribute('viewBox');
      if (viewBox) {
        setMapViewBox(viewBox);
      }

      const nextPositions: Record<string, [number, number]> = {};

      FOOTPRINT_STATES.forEach((state) => {
        const statePath = svg.querySelector(`#${state.code}`) as SVGGraphicsElement | null;
        if (!statePath) {
          return;
        }

        const box = statePath.getBBox();
        nextPositions[state.code] = [box.x + box.width / 2, box.y + box.height / 2];
      });

      if (Object.keys(nextPositions).length > 0) {
        setPinPositions(nextPositions);
        return true;
      }

      return false;
    };

    const scheduleMeasure = () => {
      const done = measurePinsFromSvg();
      if (done || retries > 20) {
        return;
      }
      retries += 1;
      timeout = setTimeout(scheduleMeasure, 120);
    };

    scheduleMeasure();
    window.addEventListener('resize', scheduleMeasure);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      window.removeEventListener('resize', scheduleMeasure);
    };
  }, []);

  const handleLocationClick = useCallback((code: string) => {
    setSelected(code);
  }, []);

  const PinAnimation = ({ cx, cy, code, isActive }: { cx: number; cy: number; code: string; isActive: boolean }) => (
    <g className={`pin-${code}`}>
      <path
        d="M0 -18c-6.6 0-12 5.4-12 12 0 9.5 12 24 12 24S12 3.5 12-6c0-6.6-5.4-12-12-12z"
        fill="#EF2B2D"
        stroke="white"
        strokeWidth={isActive ? 2.8 : 2}
        opacity={isActive ? 1 : 0.4}
        style={{
          transform: `translate(${cx}px, ${cy}px)`,
          transformOrigin: `${cx}px ${cy}px`,
          animation: isActive ? 'pinPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'none',
        }}
      />
      <circle cx={cx} cy={cy - 6} r={4} fill="white" opacity={isActive ? 1 : 0.75} />
      <circle
        cx={cx}
        cy={cy}
        r={isActive ? 20 : 14}
        fill="rgba(239, 43, 45, 0.3)"
        stroke="rgba(239, 43, 45, 0.6)"
        strokeWidth={2}
        opacity={isActive ? 1 : 0}
        style={{
          transformOrigin: `${cx}px ${cy}px`,
          animation: isActive ? 'pulseRing 1.2s infinite cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'none',
        }}
      />
      <text
        x={cx + 15}
        y={cy - 2}
        fontSize="10"
        fontWeight="bold"
        fill="#7f1d1d"
        textAnchor="start"
        style={{ filter: isActive ? 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))' : 'none' }}
      >
        {code}
      </text>
    </g>
  );

  return (
    <div
      style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        padding: '20px',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: '#EF2B2D',
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '10px',
        }}
      >
        Our Footprints
      </h1>

      <div style={{ textAlign: 'center', color: '#991b1b', marginBottom: '30px', fontSize: '1.1rem' }}>
        15 States Covered
      </div>

      <div ref={mapWrapRef} style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
        <IndiaMapComponent
          onClick={handleLocationClick as any}
          size="650px"
          mapColor="#ffffff"
          strokeColor="#EF2B2D"
          strokeWidth={1.2}
          hoverColor="#dc2626"
          className="india-map"
        />

        <svg
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
          width="650"
          height="650"
          viewBox={mapViewBox}
        >
          {FOOTPRINT_STATES.map(({ code }) => {
            const pin = pinPositions[code];
            if (!pin) {
              return null;
            }

            const [cx, cy] = pin;
            return <PinAnimation key={code} cx={cx} cy={cy} code={code} isActive={animatedPins[code] || false} />;
          })}
        </svg>
      </div>

      <div
        style={{
          textAlign: 'center',
          padding: '15px',
          background: '#fff5f5',
          border: '1px solid #fecaca',
          borderRadius: '12px',
          color: '#7f1d1d',
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        <div style={{ marginBottom: '8px' }}>
          <span
            style={{
              display: 'inline-block',
              width: '16px',
              height: '16px',
              background: '#EF2B2D',
              borderRadius: '50%',
              marginRight: '8px',
              boxShadow: '0 0 12px rgba(239,43,45,0.6)',
            }}
          />
          Our Footprint States ({FOOTPRINT_STATES.length})
        </div>
        {selected && (
          <p>
            Selected: <strong>{FOOTPRINT_STATES.find((s) => s.code === selected)?.name}</strong>
          </p>
        )}
      </div>

      <style jsx>{`
        @keyframes pinPop {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .india-map path {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .india-map path:hover {
          stroke: #ef2b2d !important;
          stroke-width: 2 !important;
          filter: drop-shadow(0 2px 8px rgba(239, 43, 45, 0.3));
        }

        #HR,
        #WB,
        #OR,
        #RJ,
        #DL,
        #PB,
        #UP,
        #CT,
        #BR,
        #MP,
        #KA,
        #TN,
        #TG,
        #MH,
        #GJ {
          fill: #fff3f3 !important;
          stroke: rgba(239, 43, 45, 0.3) !important;
        }
      `}</style>
    </div>
  );
};

export default IndiaGeoMap;
