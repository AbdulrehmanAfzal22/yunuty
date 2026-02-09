"use client";
import React from "react";
import "./grid.css";
import { Diamond } from "lucide-react";

const featureItems = [
  { id: 1, text: "Inventory Visibility" },
  { id: 2, text: "Customer Portal Access" },
  { id: 3, text: "Interconnectivity" },
  { id: 4, text: "Integrated Financial Management" },
  { id: 5, text: "Process Automation" },
  { id: 6, text: "Real-Time Analytics & Reporting" },
  { id: 7, text: "Demand Forecasting & Planning" },
  { id: 8, text: "Mobile Accessibility" },
  { id: 9, text: "Live Quickbooks Connection" },
  { id: 10, text: "Process Automation" },
  { id: 11, text: "Real-Time Analytics & Reporting" },
  { id: 12, text: "Online Payment" },
];

export default function FeatureChips() {
  const chipColors = [
    "#ff8c00",
    "#ffd700",
    "#00bfff",
    "#32cd32",
    "#1e90ff",
    "#ff4500",
    "#facc15",
    "#a855f7",
    "#fb923c",
    "#38bdf8",
    "#22c55e",
    "#4ade80",
  ];

  return (
    <section className="chip-section">
      <div className="chip-container">
        {featureItems.map((item, index) => (
          <div key={item.id} className="chip-pill chip-hover">
            <span
              className="chip-icon"
              style={{ color: chipColors[index % chipColors.length] }}
            >
              <Diamond size={16} fill="currentColor" stroke="none" />
            </span>
            <span className="chip-label">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
