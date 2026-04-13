"use client";
import BottomNav from "@/components/BottomNav";

export default function ProfilePage() {
  return (
    <div className="mobile-container pb-nav bg-surface">
      <header className="app-header" style={{ borderBottom: "none", background: "transparent" }}>
        <div className="header-title">माझे प्रोफाईल</div>
      </header>

      <div className="section-padding stagger">
        <div className="animate-fade-in-up" style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ 
            width: "90px", height: "90px", borderRadius: "50%", margin: "0 auto 1rem",
            background: "var(--primary-container)", color: "var(--on-primary-container)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem",
            boxShadow: "var(--civic-glow)"
          }}>
            <span className="material-symbols-rounded" style={{ fontSize: "3rem" }}>person</span>
          </div>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>रमेश भोसले</h1>
          <p style={{ color: "var(--outline)", fontSize: "0.9375rem", marginBottom: "1rem" }}>+91 98765 43210</p>
          <span className="badge badge-success">सत्यापित नागरिक</span>
        </div>

        <div className="animate-fade-in-up" style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.125rem", marginBottom: "1rem", color: "var(--primary)" }}>लिंक केलेली खाती</h2>
          <div className="card-tray" style={{ padding: "0.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <div className="list-item" style={{ background: "transparent", padding: "0.75rem 1rem" }}>
              <div className="icon-wrap icon-primary" style={{ width: "40px", height: "40px" }}><span className="material-symbols-rounded">real_estate_agent</span></div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "0.9375rem", margin: 0 }}>मालमत्ता (Property)</h3>
                <p style={{ fontSize: "0.75rem", margin: 0, color: "var(--outline)" }}>P-102: शिवाजी नगर</p>
              </div>
              <span className="material-symbols-rounded" style={{ color: "var(--primary)" }}>link</span>
            </div>
            <div className="list-item" style={{ background: "transparent", padding: "0.75rem 1rem" }}>
              <div className="icon-wrap icon-secondary" style={{ width: "40px", height: "40px" }}><span className="material-symbols-rounded">water_drop</span></div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "0.9375rem", margin: 0 }}>पाणी जोडणी (Water)</h3>
                <p style={{ fontSize: "0.75rem", margin: 0, color: "var(--outline)" }}>W-504: निवासी</p>
              </div>
              <span className="material-symbols-rounded" style={{ color: "var(--primary)" }}>link</span>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.125rem", marginBottom: "1rem", color: "var(--primary)" }}>सेटिंग्स</h2>
          <div className="card-tray" style={{ padding: "0.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <div className="list-item" style={{ background: "transparent", padding: "0.75rem 1rem" }}>
              <span className="material-symbols-rounded" style={{ color: "var(--on-surface-variant)" }}>language</span>
              <h3 style={{ fontSize: "0.9375rem", flex: 1, margin: 0 }}>भाषा (Language)</h3>
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--primary)" }}>मराठी</span>
            </div>
            <div className="list-item" style={{ background: "transparent", padding: "0.75rem 1rem" }}>
              <span className="material-symbols-rounded" style={{ color: "var(--on-surface-variant)" }}>help_center</span>
              <h3 style={{ fontSize: "0.9375rem", flex: 1, margin: 0 }}>मदत आणि समर्थन</h3>
              <span className="material-symbols-rounded" style={{ color: "var(--outline)" }}>chevron_right</span>
            </div>
            <div className="list-item" style={{ background: "transparent", padding: "0.75rem 1rem" }}>
              <span className="material-symbols-rounded" style={{ color: "var(--error)" }}>logout</span>
              <h3 style={{ fontSize: "0.9375rem", flex: 1, margin: 0, color: "var(--error)" }}>लॉग आउट करा</h3>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
