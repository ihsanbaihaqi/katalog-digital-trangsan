"use client";

import { useEffect, useRef, useState } from "react";

interface ModelViewerProps {
  src: string;
  alt: string;
}

export default function ModelViewer({ src, alt }: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    // Load model-viewer script only once globally
    const existing = document.querySelector('script[data-model-viewer]');
    if (existing) {
      setScriptReady(true);
      return;
    }
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js";
    script.setAttribute("data-model-viewer", "true");
    script.onload = () => setScriptReady(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    // Create model-viewer element via DOM to avoid JSX type issues
    const existing = containerRef.current.querySelector("model-viewer");
    if (existing) {
      existing.setAttribute("src", src);
      existing.setAttribute("alt", alt);
      return;
    }
    const mv = document.createElement("model-viewer");
    mv.setAttribute("src", src);
    mv.setAttribute("alt", alt);
    mv.setAttribute("auto-rotate", "");
    mv.setAttribute("camera-controls", "");
    mv.setAttribute("shadow-intensity", "1");
    mv.setAttribute("exposure", "0.9");
    mv.setAttribute("loading", "lazy");
    mv.setAttribute("reveal", "auto");
    mv.style.width = "100%";
    mv.style.height = "100%";
    mv.style.backgroundColor = "transparent";
    containerRef.current.appendChild(mv);
  }, [scriptReady, src, alt]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
      aria-label={alt}
    >
      {!scriptReady && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "3px solid rgba(82,183,136,0.3)",
              borderTopColor: "#52b788",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}
    </div>
  );
}
