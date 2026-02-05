"use client";
import React from "react";
import "./grid.css";
import { Diamond } from "lucide-react";

const features = [
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

export default function FeaturesTags() {
  const colors = [
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
    <section className="features-section">
      <div className="features-wrapper">
        {features.map((item, index) => (
          <div key={item.id} className="feature-pill feature-tag">
            <span
              className="feature-icon"
              style={{ color: colors[index % colors.length] }}
            >
              <Diamond
                size={16}
                fill="currentColor"
                stroke="none"
              />
            </span>
            <span className="feature-text">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
