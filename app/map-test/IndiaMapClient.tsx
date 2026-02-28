"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import India from "@svg-maps/india";

type StatePin = {
  state: string;
  lat: number;
  lng: number;
};

type UpCityMarker = {
  project: string;
  name: string;
  lat: number;
  lng: number;
  state: string;
};

type MhProjectMarker = {
  project: string;
  city: string;
  lat: number;
  lng: number;
  state: string;
};

type CgProjectMarker = {
  project: string;
  city: string;
  lat: number;
  lng: number;
  state: string;
};

type HrProjectMarker = {
  project: string;
  city: string;
  lat: number;
  lng: number;
  state: string;
};

const footprintPins: StatePin[] = [
  { state: "Haryana", lat: 29.1, lng: 76.0333 },
  { state: "West Bengal", lat: 24.35, lng: 87.85 },
  { state: "Odisha", lat: 20.2, lng: 84.4 },
  { state: "Rajasthan", lat: 26.6250, lng: 73.8917 },
  { state: "Delhi", lat: 28.64, lng: 77.1 },
  { state: "Punjab", lat: 30.93, lng: 75.42 },
  { state: "Uttar Pradesh", lat: 27.14, lng: 80.87 },
  { state: "Chhattisgarh", lat: 20.94, lng: 82.2 },
  { state: "Bihar", lat: 25.9285, lng: 85.8125 },
  { state: "Madhya Pradesh", lat: 23.95, lng: 78.15 },
  { state: "Karnataka", lat: 15.0, lng: 76.3 },
  { state: "Tamil Nadu", lat: 10.83, lng: 78.29 },
  { state: "Telangana", lat: 17.85, lng: 79.35 },
  { state: "Maharashtra", lat: 19.7515, lng: 75.7139 },
  { state: "Gujarat", lat: 22.6708, lng: 71.5724 },
];

const upCityMarkers: UpCityMarker[] = [
  { project: "UP", name: "Varanasi", lat: 25.3176, lng: 82.9739, state: "Uttar Pradesh" },
  { project: "UPSDM", name: "Varanasi", lat: 25.3176, lng: 82.9739, state: "Uttar Pradesh" },
  { project: "UPSDM", name: "Ghazipur", lat: 25.5878, lng: 83.5783, state: "Uttar Pradesh" },
  { project: "UPSDM", name: "Ghazipur", lat: 25.5878, lng: 83.5783, state: "Uttar Pradesh" },
  { project: "UPSDM", name: "Prayagraj", lat: 25.4358, lng: 81.8463, state: "Uttar Pradesh" },
  { project: "UPSDM", name: "Prayagraj", lat: 25.4358, lng: 81.8463, state: "Uttar Pradesh" },
  { project: "UPSDM", name: "Barabanki", lat: 26.9268, lng: 81.1834, state: "Uttar Pradesh" },
];

const mhProjectMarkers: MhProjectMarker[] = [
  { project: "PMGKVK", city: "Kolhapur", lat: 16.7064, lng: 74.2482, state: "Maharashtra" },
  { project: "PMGKVK", city: "Kolhapur", lat: 16.7064, lng: 74.2482, state: "Maharashtra" },
  { project: "PMGKVK", city: "Kolhapur", lat: 16.7064, lng: 74.2482, state: "Maharashtra" },
  { project: "PMGKVK", city: "Kolhapur", lat: 16.7064, lng: 74.2482, state: "Maharashtra" },
];

const cgProjectMarkers: CgProjectMarker[] = [
  { project: "MMKVY", city: "Gariyaband", lat: 20.6348, lng: 82.0615, state: "Chhattisgarh" },
  { project: "MMKVY", city: "Sukma", lat: 18.3909, lng: 81.6588, state: "Chhattisgarh" },
];

const hrProjectMarkers: HrProjectMarker[] = [
  { project: "PMKVY|VIKALP", city: "Mewat", lat: 28.0107, lng: 77.0564, state: "Haryana" },
  { project: "PMKK", city: "Gurugram", lat: 28.4595, lng: 77.0266, state: "Haryana" },
  { project: "PMKK", city: "Mahendergarh", lat: 28.2734, lng: 76.1401, state: "Haryana" },
  { project: "PMKK", city: "Rewari", lat: 28.1920, lng: 76.6191, state: "Haryana" },
  { project: "PMKK", city: "Palwal", lat: 28.1473, lng: 77.3260, state: "Haryana" },
  { project: "PMKK", city: "Nuh", lat: 28.1024, lng: 76.9931, state: "Haryana" },
  { project: "PMKK", city: "Faridabad", lat: 28.4089, lng: 77.3178, state: "Haryana" },
];

const highlightedStates = new Set([
  "haryana",
  "west bengal",
  "odisha",
  "rajasthan",
  "delhi",
  "national capital territory of delhi",
  "punjab",
  "uttar pradesh",
  "chhattisgarh",
  "bihar",
  "madhya pradesh",
  "karnataka",
  "tamil nadu",
  "telangana",
  "maharashtra",
  "gujarat",
]);

const projectToSVG = (lat: number, lng: number) => {
  const minLng = 68.0;
  const maxLng = 97.5;
  const minLat = 8.0;
  const maxLat = 37.0;

  let x = ((lng - minLng) / (maxLng - minLng)) * 559;
  let y = ((maxLat - lat) / (maxLat - minLat)) * 861;

  x = x * 0.95 + 15;
  y = y * 0.92 + 25 - 68;

  return {
    x: Math.max(20, Math.min(530, x)),
    y: Math.max(14, Math.min(802, y)),
  };
};

const pinOffsetByState: Record<string, { x: number; y: number }> = {
  "Tamil Nadu": { x: 0, y: -60 },
  "Madhya Pradesh": { x: 0, y: 20 },
  "Bihar": { x: 20, y: 20 },
  "Uttar Pradesh": { x: 20, y: 20 },
  "Delhi": { x: 30, y: 20 },
  "Odisha": { x: 20, y: -20 },
  "West Bengal": { x: 40, y: 40 },
  "Haryana": { x: 20, y: 40 },
  "Punjab": { x: 0, y: 40 },
};

export default function IndiaMapClient() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationStartedRef = useRef(false);
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [animateStatePins, setAnimateStatePins] = useState(false);
  const [showSubordinates, setShowSubordinates] = useState(false);

  useEffect(() => {
    let stateStartTimer: number | undefined;
    let subordinateTimer: number | undefined;

    const startAnimationSequence = () => {
      if (animationStartedRef.current) {
        return;
      }

      animationStartedRef.current = true;
      stateStartTimer = window.setTimeout(() => {
        setAnimateStatePins(true);
      }, 80);

      const stateAnimationDuration = 80 + (footprintPins.length - 1) * 140 + 460;
      subordinateTimer = window.setTimeout(() => {
        setShowSubordinates(true);
      }, stateAnimationDuration + 120);
    };

    const observedSection = sectionRef.current;
    if (!observedSection) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          startAnimationSequence();
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(observedSection);

    return () => {
      observer.disconnect();
      if (stateStartTimer) {
        window.clearTimeout(stateStartTimer);
      }
      if (subordinateTimer) {
        window.clearTimeout(subordinateTimer);
      }
    };
  }, []);

  const viewBox = (India as any).viewBox ?? "0 0 1000 1200";
  const locations = ((India as any).locations ?? []) as Array<{ id: string; name?: string; path: string }>;

  const handleLocationMouseOver = (event: React.MouseEvent<SVGPathElement>) => {
    const locationName =
      event.currentTarget.getAttribute("data-name") || event.currentTarget.getAttribute("id") || "Location";
    setTooltipContent(locationName);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleLocationMouseOut = () => {
    setTooltipContent("");
  };

  const isHighlightedState = (name?: string) => {
    if (!name) return false;
    return highlightedStates.has(name.trim().toLowerCase());
  };

  const tooltipParts = tooltipContent
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  const tooltipTitle = tooltipParts[0] ?? tooltipContent;
  const tooltipSubtitle = tooltipParts.slice(1).join(" • ");

  const subordinateRevealOrder = useMemo(() => {
    const orderedPoints: Array<{ key: string; y: number }> = [];

    upCityMarkers.forEach((marker, index) => {
      const { y: baseY } = projectToSVG(marker.lat, marker.lng);
      const y = baseY + (index % 3 === 0 ? -4 : index % 3 === 1 ? 4 : 0);
      orderedPoints.push({ key: `up-${index}`, y });
    });

    mhProjectMarkers.forEach((marker, index) => {
      const { y: baseY } = projectToSVG(marker.lat, marker.lng);
      const y = baseY + (index < 2 ? -6 : 6) - 48;
      orderedPoints.push({ key: `mh-${index}`, y });
    });

    cgProjectMarkers.forEach((marker, index) => {
      const { y } = projectToSVG(marker.lat, marker.lng);
      const adjustedY = marker.city === "Sukma" ? y - 30 : y;
      orderedPoints.push({ key: `cg-${index}`, y: adjustedY });
    });

    hrProjectMarkers.forEach((marker, index) => {
      const { y: baseY } = projectToSVG(marker.lat, marker.lng);
      const y = baseY + (index % 3 === 0 ? -4 : 4);
      orderedPoints.push({ key: `hr-${index}`, y });
    });

    orderedPoints.sort((a, b) => a.y - b.y);

    const orderMap = new Map<string, number>();
    orderedPoints.forEach((point, order) => {
      orderMap.set(point.key, order);
    });

    return orderMap;
  }, []);

  return (
    <div ref={sectionRef} className="india-map-section mx-auto w-full max-w-[900px]">
      <div className="india-map-stage" style={{ position: "relative" }}>
        <svg
          viewBox={viewBox}
          className="india-map"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "all",
            zIndex: 5,
          }}
        >
          <g>
            {locations.map((location) => (
              <path
                key={location.id}
                id={location.id}
                d={location.path}
                data-name={location.name ?? location.id}
                fill={isHighlightedState(location.name) ? "#e8f4f8" : "#eef2f7"}
                stroke={isHighlightedState(location.name) ? "#ef4444" : "#ef4444"}
                strokeWidth={1.4}
                onMouseMove={handleLocationMouseOver}
                onMouseLeave={handleLocationMouseOut}
                style={{ transition: "fill 0.2s ease" }}
              />
            ))}
          </g>

          {footprintPins.map((pin, index) => {
            const { x: baseX, y: baseY } = projectToSVG(pin.lat, pin.lng);
            const offset = pinOffsetByState[pin.state] ?? { x: 0, y: 0 };
            const x = baseX + offset.x;
            const y = baseY + offset.y;

            return (
              <g
                key={`${pin.state}-${index}`}
                style={{
                  pointerEvents: "all",
                  cursor: "pointer",
                  opacity: animateStatePins ? 1 : 0,
                  transform: animateStatePins ? "scale(1)" : "scale(0.2)",
                  transformOrigin: "center",
                  transformBox: "fill-box",
                  animation: animateStatePins
                    ? `state-pin-pop-in 460ms cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 140}ms both`
                    : "none",
                }}
                onMouseEnter={(event) => {
                  setTooltipContent(pin.state);
                  setTooltipPosition({ x: event.clientX, y: event.clientY });
                }}
                onMouseMove={(event) => {
                  setTooltipPosition({ x: event.clientX, y: event.clientY });
                }}
                onMouseLeave={() => setTooltipContent("")}
              >
                <ellipse cx={x} cy={y + 7} rx="4.6" ry="2.3" fill="#000" opacity="0.28" />
                <path
                  d={`M ${x},${y + 10} C ${x + 5},${y + 3} ${x + 8},${y - 1} ${x + 8},${y - 6} A 8 8 0 1 0 ${x - 8},${y - 6} C ${x - 8},${y - 1} ${x - 5},${y + 3} ${x},${y + 10} Z`}
                  fill="#ee2430"
                  stroke="#d81f2a"
                  strokeWidth="1"
                />
                <ellipse cx={x} cy={y - 6.6} rx="4.8" ry="2" fill="#ff5a63" opacity="0.65" />
                <circle cx={x} cy={y - 4.7} r="3.5" fill="#ffffff" />
                <circle cx={x} cy={y} r="8" fill="transparent" stroke="#007bff" strokeWidth="2" opacity="0" />
              </g>
            );
          })}

          {upCityMarkers.map((marker, index) => {
            const { x: baseX, y: baseY } = projectToSVG(marker.lat, marker.lng);
            const x = baseX + (index % 2 === 0 ? -4 : 4);
            const y = baseY + (index % 3 === 0 ? -4 : index % 3 === 1 ? 4 : 0);
            const revealOrder = subordinateRevealOrder.get(`up-${index}`) ?? index;

            return (
              <g
                key={`${marker.name}-${index}`}
                style={{
                  pointerEvents: "all",
                  cursor: "pointer",
                  opacity: showSubordinates ? 1 : 0,
                  transform: showSubordinates ? "translateY(0) scale(1)" : "translateY(6px) scale(0.9)",
                  transformOrigin: "center",
                  transformBox: "fill-box",
                  animation: showSubordinates
                    ? `subordinate-reveal 360ms ease ${revealOrder * 90}ms both`
                    : "none",
                }}
                onMouseEnter={(event) => {
                  setTooltipContent(`${marker.project}, ${marker.name}, ${marker.state}`);
                  setTooltipPosition({ x: event.clientX, y: event.clientY });
                }}
                onMouseMove={(event) => {
                  setTooltipPosition({ x: event.clientX, y: event.clientY });
                }}
                onMouseLeave={() => setTooltipContent("")}
              >
                <rect x={x - 5} y={y - 5 + 3} width="10" height="10" rx="2" fill="#000" opacity="0.35" />
                <rect x={x - 6} y={y - 6} width="12" height="12" rx="2" fill="#ef4444" stroke="#fff" strokeWidth="2" />
              </g>
            );
          })}

          {mhProjectMarkers.map((marker, index) => {
            const { x: baseX, y: baseY } = projectToSVG(marker.lat, marker.lng);
            const x = baseX + (index % 2 === 0 ? -8 : 8);
            const y = baseY + (index < 2 ? -6 : 6) - 48;
            const revealOrder = subordinateRevealOrder.get(`mh-${index}`) ?? index;

            return (
              <g
                key={`${marker.project}-${marker.city}-${index}`}
                style={{
                  pointerEvents: "all",
                  cursor: "pointer",
                  opacity: showSubordinates ? 1 : 0,
                  transform: showSubordinates ? "translateY(0) scale(1)" : "translateY(6px) scale(0.9)",
                  transformOrigin: "center",
                  transformBox: "fill-box",
                  animation: showSubordinates
                    ? `subordinate-reveal 360ms ease ${revealOrder * 90}ms both`
                    : "none",
                }}
                onMouseEnter={(event) => {
                  setTooltipContent(`${marker.project}, ${marker.city}, ${marker.state}`);
                  setTooltipPosition({ x: event.clientX, y: event.clientY });
                }}
                onMouseMove={(event) => {
                  setTooltipPosition({ x: event.clientX, y: event.clientY });
                }}
                onMouseLeave={() => setTooltipContent("")}
              >
                <rect x={x - 5} y={y - 5 + 3} width="10" height="10" rx="2" fill="#000" opacity="0.35" />
                <rect x={x - 6} y={y - 6} width="12" height="12" rx="2" fill="#ef4444" stroke="#fff" strokeWidth="2" />
              </g>
            );
          })}

          {cgProjectMarkers.map((marker, index) => {
            const { x, y } = projectToSVG(marker.lat, marker.lng);
            const adjustedY = marker.city === "Sukma" ? y - 30 : y;
            const revealOrder = subordinateRevealOrder.get(`cg-${index}`) ?? index;

            return (
              <g
                key={`${marker.project}-${marker.city}-${index}`}
                style={{
                  pointerEvents: "all",
                  cursor: "pointer",
                  opacity: showSubordinates ? 1 : 0,
                  transform: showSubordinates ? "translateY(0) scale(1)" : "translateY(6px) scale(0.9)",
                  transformOrigin: "center",
                  transformBox: "fill-box",
                  animation: showSubordinates
                    ? `subordinate-reveal 360ms ease ${revealOrder * 90}ms both`
                    : "none",
                }}
                onMouseEnter={(event) => {
                  setTooltipContent(`${marker.project}, ${marker.city}, ${marker.state}`);
                  setTooltipPosition({ x: event.clientX, y: event.clientY });
                }}
                onMouseMove={(event) => {
                  setTooltipPosition({ x: event.clientX, y: event.clientY });
                }}
                onMouseLeave={() => setTooltipContent("")}
              >
                <rect x={x - 5} y={adjustedY - 5 + 3} width="10" height="10" rx="2" fill="#000" opacity="0.32" />
                <rect x={x - 6} y={adjustedY - 6} width="12" height="12" rx="2" fill="#ef4444" stroke="#fff" strokeWidth="2" />
              </g>
            );
          })}

          {hrProjectMarkers.map((marker, index) => {
            const { x: baseX, y: baseY } = projectToSVG(marker.lat, marker.lng);
            const x = baseX + (index % 2 === 0 ? -5 : 5);
            const y = baseY + (index % 3 === 0 ? -4 : 4);
            const revealOrder = subordinateRevealOrder.get(`hr-${index}`) ?? index;

            return (
              <g
                key={`${marker.project}-${marker.city}-${index}`}
                style={{
                  pointerEvents: "all",
                  cursor: "pointer",
                  opacity: showSubordinates ? 1 : 0,
                  transform: showSubordinates ? "translateY(0) scale(1)" : "translateY(6px) scale(0.9)",
                  transformOrigin: "center",
                  transformBox: "fill-box",
                  animation: showSubordinates
                    ? `subordinate-reveal 360ms ease ${revealOrder * 90}ms both`
                    : "none",
                }}
                onMouseEnter={(event) => {
                  setTooltipContent(`${marker.project}, ${marker.city}, ${marker.state}`);
                  setTooltipPosition({ x: event.clientX, y: event.clientY });
                }}
                onMouseMove={(event) => {
                  setTooltipPosition({ x: event.clientX, y: event.clientY });
                }}
                onMouseLeave={() => setTooltipContent("")}
              >
                <circle cx={x} cy={y + 3} r="6" fill="#000" opacity="0.28" />
                <circle cx={x} cy={y} r="7" fill="#ef4444" stroke="#fff" strokeWidth="2" />
              </g>
            );
          })}
        </svg>

        <div className="symbol-guide-card">
          <div className="symbol-guide-title">Symbol Guide</div>

          <div className="symbol-guide-row">
            <svg width="20" height="20" viewBox="-1 -1 22 22" aria-hidden="true" style={{ overflow: "visible" }}>
              <path
                d="M 10,18 C 14,12 17,9 17,6 A 7 7 0 1 0 3,6 C 3,9 6,12 10,18 Z"
                fill="#ee2430"
                stroke="#d81f2a"
                strokeWidth="1"
              />
              <circle cx="10" cy="6" r="2.4" fill="#fff" />
            </svg>
            <span className="symbol-guide-label">Offices</span>
          </div>

          <div className="symbol-guide-row">
            <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
              <rect x="4" y="4" width="12" height="12" rx="2" fill="#ef4444" stroke="#fff" strokeWidth="1.6" />
            </svg>
            <span className="symbol-guide-label">Training Centers</span>
          </div>

          <div className="symbol-guide-row">
            <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="10" cy="10" r="6.2" fill="#ef4444" stroke="#fff" strokeWidth="1.6" />
            </svg>
            <span className="symbol-guide-label">Toll Plazas</span>
          </div>
        </div>

        {tooltipContent && (
          <div
            style={{
              position: "fixed",
              left: tooltipPosition.x + 12,
              top: tooltipPosition.y + 12,
              background: "linear-gradient(160deg, #ffffff 0%, #fff8f8 100%)",
              color: "#111827",
              padding: "10px 12px",
              borderRadius: "10px",
              fontSize: "12px",
              pointerEvents: "none",
              zIndex: 9999,
              minWidth: "140px",
              maxWidth: "260px",
              boxShadow: "0 10px 26px rgba(17, 24, 39, 0.18)",
              border: "1px solid #ef444433",
              backdropFilter: "blur(3px)",
              lineHeight: 1.35,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: "12.5px", color: "#b91c1c", marginBottom: tooltipSubtitle ? "4px" : 0 }}>
              {tooltipTitle}
            </div>
            {tooltipSubtitle && <div style={{ color: "#4b5563", fontWeight: 500 }}>{tooltipSubtitle}</div>}
          </div>
        )}
      </div>
    </div>
  );
}