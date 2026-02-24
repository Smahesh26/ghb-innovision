"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

// India boundaries (exact)
const INDIA_BOUNDS: [[number, number], [number, number]] = [[8.0, 68.0], [37.0, 97.0]];

const offices = [
  { id: 1, name: "Gurugram HQ", lat: 28.4595, lng: 77.0266, type: "Corporate", region: "North" },
  { id: 2, name: "Delhi", lat: 28.6139, lng: 77.2090, type: "Regional", region: "North" },
  { id: 3, name: "Noida", lat: 28.5355, lng: 77.3910, type: "Regional", region: "North" },
  { id: 4, name: "Ghaziabad", lat: 28.6692, lng: 77.4538, type: "Regional", region: "North" },
  { id: 5, name: "Bangalore", lat: 12.9716, lng: 77.5946, type: "Regional", region: "South" },
  { id: 6, name: "Hyderabad", lat: 17.3850, lng: 78.4867, type: "Regional", region: "South" },
  { id: 7, name: "Chennai", lat: 13.0827, lng: 80.2707, type: "Regional", region: "South" },
  { id: 8, name: "Pune", lat: 18.5204, lng: 73.8567, type: "Regional", region: "West" },
  { id: 9, name: "Mumbai", lat: 19.0760, lng: 72.8777, type: "Regional", region: "West" },
  { id: 10, name: "Ahmedabad", lat: 23.0225, lng: 72.5714, type: "Regional", region: "West" },
  { id: 11, name: "Kolkata", lat: 22.5726, lng: 88.3639, type: "Regional", region: "East" },
  { id: 12, name: "Jaipur", lat: 26.9124, lng: 75.7873, type: "Regional", region: "North" },
  { id: 13, name: "Lucknow", lat: 26.8467, lng: 80.9462, type: "Regional", region: "North" },
  { id: 14, name: "Chandigarh", lat: 30.7333, lng: 76.7794, type: "Regional", region: "North" },
  { id: 15, name: "Indore", lat: 22.7196, lng: 75.8577, type: "Branch", region: "Central" },
  { id: 16, name: "Bhopal", lat: 23.1815, lng: 79.9864, type: "Branch", region: "Central" },
];

export default function Contact() {
  const [selectedOffice, setSelectedOffice] = useState<typeof offices[0] | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [leafletIcons, setLeafletIcons] = useState<Record<string, any> | null>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = mapRef.current;
    map.fitBounds(INDIA_BOUNDS, { padding: [50, 50] });
    map.setMaxBounds(INDIA_BOUNDS);
    map.options.maxBoundsViscosity = 1.0;
  }, [isClient]);

  useEffect(() => {
    let active = true;

    const loadLeafletIcons = async () => {
      const leaflet = await import("leaflet");
      if (!active) {
        return;
      }

      const colors: Record<string, string> = {
        Corporate: "#EF2B2D",
        Regional: "#3B82F6",
        Branch: "#9CA3AF",
      };

      const makeIcon = (type: string) =>
        leaflet.divIcon({
          className: "custom-marker",
          html: `
            <div style="
              background-color: ${colors[type]};
              width: 30px;
              height: 30px;
              border-radius: 50%;
              border: 3px solid white;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              cursor: pointer;
            ">
              <div style="width: 8px; height: 8px; background-color: white; border-radius: 50%;"></div>
            </div>
          `,
          iconSize: [30, 30],
          iconAnchor: [15, 15],
          popupAnchor: [0, -15],
        });

      setLeafletIcons({
        Corporate: makeIcon("Corporate"),
        Regional: makeIcon("Regional"),
        Branch: makeIcon("Branch"),
      });
    };

    if (isClient) {
      loadLeafletIcons();
    }

    return () => {
      active = false;
    };
  }, [isClient]);

  const services = [
    "Security Services",
    "Facility Management",
    "Manpower Sourcing & Payroll",
    "Toll Plaza Management",
    "Skill Development",
    "Overseas Recruitment",
    "Drone Flying Training"
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 text-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div className="absolute -top-20 left-10 h-96 w-96 rounded-full bg-[#EF2B2D]/10 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-[#EF2B2D]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 text-center text-3xl font-light text-gray-900 sm:text-4xl">
            Our Footprints
          </h3>
          
          <p className="mx-auto mb-8 max-w-3xl text-center text-base leading-relaxed text-gray-600">
            Pan-India operational footprint with 55+ offices across all major regions. Click markers to explore our network.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl overflow-hidden rounded-xl border-2 border-[#EF2B2D]/20 bg-gray-50 shadow-lg"
          >
            <div className="relative w-full h-[400px]">
              {isClient && leafletIcons ? (
                <>
                  <MapContainer 
                    ref={mapRef}
                    bounds={INDIA_BOUNDS}
                    boundsOptions={{ padding: [50, 50] }}
                    zoom={5}
                    minZoom={5}
                    maxZoom={13}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {offices.map((office) => (
                      <Marker
                        key={office.id}
                        position={[office.lat, office.lng]}
                        icon={leafletIcons[office.type]}
                        eventHandlers={{
                          click: () => setSelectedOffice(office),
                        }}
                      >
                        <Popup>
                          <div className="text-sm">
                            <h4 className="font-bold text-[#EF2B2D]">{office.name}</h4>
                            <p className="text-xs text-gray-600">{office.type}</p>
                            <p className="text-xs text-gray-500">{office.region}</p>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </>
              ) : (
                <div className="h-full bg-gray-200 flex items-center justify-center text-gray-600">
                  Loading map...
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 border-t border-gray-200 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-gray-700">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EF2B2D]" /> Corporate HQ
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" /> Regional
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-gray-400" /> Branch
              </span>
            </div>

            {selectedOffice && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-gray-200 bg-gradient-to-r from-[#EF2B2D]/5 to-[#EF2B2D]/10 px-4 py-4 text-center"
              >
                <h4 className="text-lg font-bold text-[#EF2B2D]">{selectedOffice.name}</h4>
                <p className="text-sm text-gray-600">{selectedOffice.type} • {selectedOffice.region}</p>
                <button
                  onClick={() => setSelectedOffice(null)}
                  className="mt-2 text-xs text-gray-500 hover:text-gray-700 underline"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 mb-16 text-center"
        >
          <h2 className="text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl">
            Get In Touch!
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            We look forward to hearing from you. If you have any questions or need support, please feel free to reach out.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#EF2B2D]">
              Registered Address
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              First Floor, 1/209, Sadar Bazaar, Delhi Cantonment, New Delhi, Delhi 110010
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#EF2B2D]">
              Registered Phone No.
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">+91-9289063231</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#EF2B2D]">
              Mail Address
            </h3>
            <p className="text-sm text-gray-700">contact@innovision.co.in</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#EF2B2D]">
              Corporate Address
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Plot 251, 1st Floor, Udyog Vihar IV, Gurugram HR 122015
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#EF2B2D]">
              Corporate Phone No.
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              0124-4387354<br />
              0124-2341602 (F)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#EF2B2D]">
              CIN Number
            </h3>
            <p className="text-sm text-gray-700">U74910DL2007PLC157700</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg lg:p-12"
        >
          <h3 className="mb-8 text-center text-3xl font-light text-gray-900 sm:text-4xl">
            What Are You Looking For?
          </h3>

          <form className="mx-auto max-w-2xl space-y-6">
            <select
              name="service"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-1 focus:ring-[#EF2B2D]/50"
            >
              <option value="">SELECT SERVICES</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-1 focus:ring-[#EF2B2D]/50"
              />
              <input
                type="email"
                name="email"
                placeholder="E-MAIL"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-1 focus:ring-[#EF2B2D]/50"
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Phone No."
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-1 focus:ring-[#EF2B2D]/50"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-[#EF2B2D] focus:outline-none focus:ring-1 focus:ring-[#EF2B2D]/50"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-[#EF2B2D] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#d62426] hover:shadow-[0_0_25px_rgba(239,43,45,0.6)]"
            >
              SEND
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
