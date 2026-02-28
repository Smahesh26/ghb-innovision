"use client";

import dynamic from "next/dynamic";

const IndiaMapClient = dynamic(() => import("./IndiaMapClient"), {
  ssr: false,
});

export default function MapTestClientShell() {
  return <IndiaMapClient />;
}