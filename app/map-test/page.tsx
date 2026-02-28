import type { Metadata } from "next";
import indiaGeoJson from "../../public/data/india-country.json";

export const metadata: Metadata = {
  title: "Map Test | Innovision Security",
  description: "Custom India map test.",
};

const locations = [
  { name: "Haryana", lat: 29.0, lng: 77.5 },
  { name: "West Bengal", lat: 24.0, lng: 88.0 },
  { name: "Odisha", lat: 20.0, lng: 84.0 },
  { name: "Rajasthan", lat: 27.5, lng: 73.0 },
  { name: "Delhi", lat: 28.6, lng: 77.2 },
  { name: "Punjab", lat: 31.5, lng: 75.5 },
  { name: "Uttar Pradesh", lat: 26.0, lng: 80.0 },
  { name: "Chhattisgarh", lat: 21.5, lng: 82.0 },
  { name: "Bihar", lat: 25.5, lng: 85.5 },
  { name: "Madhya Pradesh", lat: 23.0, lng: 78.0 },
  { name: "Karnataka", lat: 15.5, lng: 76.0 },
  { name: "Tamil Nadu", lat: 11.0, lng: 79.0 },
  { name: "Telangana", lat: 17.5, lng: 78.5 },
  { name: "Maharashtra", lat: 19.5, lng: 75.5 },
  { name: "Gujarat", lat: 22.5, lng: 71.5 },
];

const polygon = indiaGeoJson.features[0].geometry.coordinates[0];

const width = 960;
const height = 900;
const padding = 42;

const toMercatorY = (latitude: number) => {
  const clamped = Math.max(-85, Math.min(85, latitude));
  const radians = (clamped * Math.PI) / 180;
  return Math.log(Math.tan(Math.PI / 4 + radians / 2));
};

type ProjectedPoint = {
  lon: number;
  lat: number;
  xRaw: number;
  yRaw: number;
};

const projectedPolygon: ProjectedPoint[] = polygon.map(([lon, lat]) => ({
  lon,
  lat,
  xRaw: lon,
  yRaw: toMercatorY(lat),
}));

const xMin = Math.min(...projectedPolygon.map((point) => point.xRaw));
const xMax = Math.max(...projectedPolygon.map((point) => point.xRaw));
const yMin = Math.min(...projectedPolygon.map((point) => point.yRaw));
const yMax = Math.max(...projectedPolygon.map((point) => point.yRaw));

const drawableWidth = width - padding * 2;
const drawableHeight = height - padding * 2;

const scale = Math.min(drawableWidth / (xMax - xMin), drawableHeight / (yMax - yMin));
const xOffset = (width - (xMax - xMin) * scale) / 2;
const yOffset = (height - (yMax - yMin) * scale) / 2;

const project = (lon: number, lat: number) => {
  const x = xOffset + (lon - xMin) * scale;
  const y = yOffset + (yMax - toMercatorY(lat)) * scale;
  return { x, y };
};

const pathData = polygon
  .map(([lon, lat], index) => {
    const { x, y } = project(lon, lat);
    return `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
  })
  .join(" ") + " Z";

export default function MapTestPage() {
  return (
    <main className="min-h-screen bg-white p-6 md:p-10">
      <div className="mx-auto w-full max-w-4xl rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm md:p-6">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label="India custom map">
          <defs>
            <linearGradient id="indiaFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>

          <path d={pathData} fill="url(#indiaFill)" stroke="#94a3b8" strokeWidth={2.4} />

          {locations.map((location) => {
            const { x, y } = project(location.lng, location.lat);

            return (
              <g key={location.name}>
                <title>{location.name}</title>
                <circle cx={x} cy={y} r={12} fill="#ef2b2d" opacity={0.18} />
                <circle cx={x} cy={y} r={5.5} fill="#ef2b2d" stroke="#ffffff" strokeWidth={2} />
              </g>
            );
          })}
        </svg>
      </div>
    </main>
  );
}