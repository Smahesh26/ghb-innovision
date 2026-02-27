"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Script from "next/script";

export default function Contact({ showFootprints = true }: { showFootprints?: boolean }) {
  const [scriptsReady, setScriptsReady] = useState(false);
  const [inView, setInView] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [leafletInView, setLeafletInView] = useState(false);
  const mapRef = useRef<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const leafletContainerRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);
  const markerAnimationStartedRef = useRef(false);
  const markerTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const leafletMarkerTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const statesWithMarkers = [
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

  const pinPath = "M28 4c-12.4 0-22.5 10.1-22.5 22.5C5.5 40.4 28 68 28 68s22.5-27.6 22.5-41.5C50.5 14.1 40.4 4 28 4z";

  const markMapLibraryReady = () => {
    if (typeof window === "undefined") {
      return;
    }
    const AmCharts = (window as any).AmCharts;
    if (AmCharts?.AmMap && AmCharts?.maps?.indiaLow) {
      setScriptsReady(true);
    }
  };

  useEffect(() => {
    if (!showFootprints || typeof window === "undefined") {
      return;
    }

    markMapLibraryReady();
    const interval = setInterval(markMapLibraryReady, 250);

    return () => clearInterval(interval);
  }, [showFootprints]);

  useEffect(() => {
    if (!showFootprints) {
      return;
    }

    if (mapRef.current || typeof window === "undefined") {
      return;
    }

    const AmCharts = (window as any).AmCharts;
    if (!AmCharts?.AmMap || !AmCharts?.maps?.indiaLow) {
      return;
    }

    const map = new AmCharts.AmMap();
    map.theme = "light";
    map.panEventsEnabled = true;
    map.backgroundColor = "transparent";
    map.backgroundAlpha = 0;
    map.zoomControl.panControlEnabled = false;
    map.zoomControl.zoomControlEnabled = false;

    map.dataProvider = {
      map: "indiaLow",
      getAreasFromMap: true,
      images: [],
    };

    map.imagesSettings = {
      rollOverScale: 1.08,
      selectedScale: 1.08,
      pauseDuration: 0.1,
      animationDuration: 0.2,
    };

    map.areasSettings = {
      autoZoom: false,
      color: "#f2f4f8",
      colorSolid: "#EF2B2D",
      selectedColor: "#c81f24",
      outlineColor: "#e5e7eb",
      outlineThickness: 1.2,
      rollOverColor: "#f8d7da",
      rollOverOutlineColor: "#d1d5db",
      selectable: true,
    };

    map.write("footprints-india-map");
    mapRef.current = map;
    setMapReady(true);

    return () => {
      if (mapRef.current?.clear) {
        mapRef.current.clear();
      }
      markerTimeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      markerTimeoutsRef.current = [];
      markerAnimationStartedRef.current = false;
      setMapReady(false);
      mapRef.current = null;
    };
  }, [scriptsReady, showFootprints]);

  useEffect(() => {
    if (!showFootprints || !inView || !mapReady || !mapRef.current || markerAnimationStartedRef.current) {
      return;
    }

    markerAnimationStartedRef.current = true;

    statesWithMarkers.forEach((state, index) => {
      const timeout = setTimeout(() => {
        if (!mapRef.current?.dataProvider?.images) {
          return;
        }

        const marker = {
          latitude: state.lat,
          longitude: state.lng,
          title: state.name,
          svgPath: pinPath,
          color: "#EF2B2D",
          scale: 0.38,
          alpha: 1,
          label: state.name,
          labelColor: "#FFFFFF",
          labelFontSize: 11,
          labelShiftY: 18,
        };

        mapRef.current.dataProvider.images.push(marker);
        mapRef.current.validateData();
      }, index * 220);

      markerTimeoutsRef.current.push(timeout);
    });

    return () => {
      markerTimeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      markerTimeoutsRef.current = [];
    };
  }, [inView, mapReady, showFootprints]);

  useEffect(() => {
    if (!showFootprints || !leafletInView || !leafletContainerRef.current || leafletMapRef.current) {
      return;
    }

    let cancelled = false;

    const initLeaflet = async () => {
      const leafletModule = await import("leaflet");
      const L = leafletModule.default;

      if (cancelled || !leafletContainerRef.current) {
        return;
      }

      const map = L.map(leafletContainerRef.current, {
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: true,
        attributionControl: true,
      }).setView([22.8, 79.0], 5);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      leafletMapRef.current = map;

      setTimeout(() => {
        if (!cancelled && leafletMapRef.current) {
          leafletMapRef.current.invalidateSize();
        }
      }, 120);

      statesWithMarkers.forEach((state, index) => {
        const timeout = setTimeout(() => {
          if (cancelled || !leafletMapRef.current) {
            return;
          }

          const icon = L.divIcon({
            className: "innovision-leaflet-pin-wrapper",
            html: '<span class="innovision-leaflet-pin"><span class="innovision-leaflet-pin-dot"></span></span>',
            iconSize: [26, 34],
            iconAnchor: [13, 34],
          });

          L.marker([state.lat, state.lng], { icon })
            .addTo(leafletMapRef.current)
            .bindTooltip(state.name, { direction: "top", offset: [0, -28], opacity: 0.9 });
        }, index * 220);

        leafletMarkerTimeoutsRef.current.push(timeout);
      });
    };

    initLeaflet();

    return () => {
      cancelled = true;
      leafletMarkerTimeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      leafletMarkerTimeoutsRef.current = [];
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, [leafletInView, showFootprints]);

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
        {showFootprints && (
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onViewportEnter={() => setInView(true)}
            className="pt-6"
          >
            {/* <p className="mb-3 mt-2 text-center text-xs font-semibold uppercase tracking-[0.35em] text-[#EF2B2D]">
              Pan-India Presence
            </p> */}
            <h3 className="mb-4 text-center text-3xl font-light text-gray-900 sm:text-4xl">
              Our Footprints
            </h3>

            <p className="mx-auto mb-8 max-w-3xl text-center text-base leading-relaxed text-gray-600">
              Pan-India operational footprint with 55+ offices across all major regions.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mx-auto max-w-5xl overflow-hidden rounded-2xl transition duration-700"
            >
              <div className="relative h-[560px] w-full rounded-2xl bg-transparent">
                <Script
                  src="https://www.amcharts.com/lib/3/ammap.js"
                  strategy="afterInteractive"
                  onLoad={markMapLibraryReady}
                  onReady={markMapLibraryReady}
                />
                <Script
                  src="https://www.amcharts.com/lib/3/maps/js/indiaLow.js"
                  strategy="afterInteractive"
                  onLoad={markMapLibraryReady}
                  onReady={markMapLibraryReady}
                />
                <Script
                  src="https://www.amcharts.com/lib/3/themes/light.js"
                  strategy="afterInteractive"
                  onLoad={markMapLibraryReady}
                  onReady={markMapLibraryReady}
                />
                <div id="footprints-india-map" className="h-full w-full" />
                {!scriptsReady && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-600">
                    Loading map...
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              viewport={{ once: true }}
              onViewportEnter={() => setLeafletInView(true)}
              className="mx-auto mt-10 max-w-5xl"
            >
              <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#EF2B2D]">
                Interactive Leaflet Map
              </p>
              <div className="h-[520px] w-full overflow-hidden rounded-2xl border border-[#EF2B2D]/20">
                <div ref={leafletContainerRef} className="h-full w-full" />
              </div>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-18 mb-16 text-center"
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
