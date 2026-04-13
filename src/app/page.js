"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const router = useRouter();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 900);
    const t3 = setTimeout(() => setPhase(3), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="mobile-container" style={{ background: "linear-gradient(160deg, #003e6f 0%, #005696 50%, #003e6f 100%)" }}>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative floating orbs */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-20%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(161, 201, 255, 0.08)",
            filter: "blur(60px)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "-15%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "rgba(160, 243, 153, 0.06)",
            filter: "blur(50px)",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />

        {/* Emblem / Logo */}
        <div
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "scale(1)" : "scale(0.8)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "28px",
              background: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(20px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 60px rgba(161, 201, 255, 0.15)",
            }}
          >
            <span
              className="material-symbols-rounded"
              style={{ fontSize: "56px", color: "#ffffff" }}
            >
              account_balance
            </span>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            textAlign: "center",
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "0.75rem",
              letterSpacing: "-0.01em",
            }}
          >
            भडगाव नगरपरिषद सेवा
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.125rem",
              color: "rgba(255, 255, 255, 0.75)",
              lineHeight: 1.6,
              marginBottom: "0.5rem",
            }}
          >
            आपले स्वागत आहे
          </p>
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "0.8125rem",
              color: "rgba(255, 255, 255, 0.5)",
              letterSpacing: "0.03em",
            }}
          >
            डिजिटल इंडिया आणि महाराष्ट्र ई-गव्हर्नन्स अंतर्गत एक पाऊल पुढे
          </p>
        </div>

        {/* CTA Button */}
        <div
          style={{
            marginTop: "3rem",
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            width: "100%",
            maxWidth: "280px",
          }}
        >
          <button
            onClick={() => router.push("/login")}
            className="btn btn-lg btn-full"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(12px)",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "var(--radius-2xl)",
              fontSize: "1rem",
              fontWeight: 600,
              padding: "1rem 2rem",
              cursor: "pointer",
              animation: "pulse-glow 3s infinite",
            }}
          >
            <span className="material-symbols-rounded" style={{ fontSize: "20px" }}>
              arrow_forward
            </span>
            प्रवेश करा
          </button>
        </div>

        {/* Footer Badge */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            opacity: phase >= 3 ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "0.6875rem",
              color: "rgba(255, 255, 255, 0.35)",
              textAlign: "center",
              letterSpacing: "0.05em",
            }}
          >
            महाराष्ट्र शासन • डिजिटल इंडिया
          </p>
        </div>
      </div>
    </div>
  );
}
