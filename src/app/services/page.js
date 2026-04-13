"use client";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div className="mobile-container pb-nav bg-surface">
      {/* Header */}
      <header className="app-header">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            onClick={() => router.push("/dashboard")}
            className="btn btn-ghost"
            style={{ padding: "0.25rem", minWidth: "auto" }}
          >
            <span className="material-symbols-rounded">arrow_back</span>
          </button>
          <div className="header-title">सेवा</div>
        </div>
        <button
          className="btn btn-ghost"
          style={{ padding: "0.5rem", borderRadius: "50%" }}
        >
          <span className="material-symbols-rounded">search</span>
        </button>
      </header>

      <div className="section-padding stagger">
        {/* Intro */}
        <div className="animate-fade-in-up" style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "1.75rem",
              lineHeight: 1.3,
              marginBottom: "0.75rem",
            }}
          >
            नगरपरिषद सेवा केंद्र
          </h1>
          <p style={{ fontSize: "0.9375rem" }}>
            सर्व नागरिक सेवा आता एकाच ठिकाणी. तुमच्या बिलांचा भरणा करा आणि अर्जांची
            स्थिती तपासा.
          </p>
        </div>

        {/* Section 1: Tax Services */}
        <div className="animate-fade-in-up" style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.125rem", marginBottom: "1rem", color: "var(--primary)" }}>
            महत्वाच्या कर सेवा
          </h2>
          <div className="card-tray" style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div className="list-item" style={{ background: "var(--surface-container-lowest)", cursor: "pointer" }} onClick={() => router.push("/property-tax")}>
              <div
                className="icon-wrap"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-lg)",
                  background: "var(--primary-fixed)",
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="material-symbols-rounded">real_estate_agent</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1rem", marginBottom: "0.125rem" }}>मालमत्ता कर</h3>
                <p style={{ fontSize: "0.8125rem", margin: 0 }}>घरपट्टी पहा आणि ऑनलाइन भरा</p>
              </div>
              <span className="material-symbols-rounded" style={{ color: "var(--outline)" }}>chevron_right</span>
            </div>

            <div className="list-item" style={{ background: "var(--surface-container-lowest)" }}>
              <div
                className="icon-wrap"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-lg)",
                  background: "var(--secondary-container)",
                  color: "var(--secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="material-symbols-rounded">water_drop</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1rem", marginBottom: "0.125rem" }}>पाणी बिल</h3>
                <p style={{ fontSize: "0.8125rem", margin: 0 }}>पाणीपट्टी थकबाकी आणि भरणा</p>
              </div>
              <span className="material-symbols-rounded" style={{ color: "var(--outline)" }}>chevron_right</span>
            </div>
          </div>
        </div>

        {/* Section 2: Certificates */}
        <div className="animate-fade-in-up" style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.125rem", marginBottom: "1rem", color: "var(--primary)" }}>
            दाखले व प्रमाणपत्रे
          </h2>
          <div className="card-tray" style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div className="list-item" style={{ background: "var(--surface-container-lowest)" }}>
              <div
                className="icon-wrap"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-lg)",
                  background: "var(--surface-container-high)",
                  color: "var(--on-surface)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="material-symbols-rounded">badge</span>
              </div>
              <h3 style={{ fontSize: "1rem", flex: 1, margin: 0 }}>जन्म दाखला</h3>
              <span className="material-symbols-rounded" style={{ color: "var(--outline)" }}>chevron_right</span>
            </div>

            <div className="list-item" style={{ background: "var(--surface-container-lowest)" }}>
              <div
                className="icon-wrap"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-lg)",
                  background: "var(--surface-container-high)",
                  color: "var(--on-surface)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="material-symbols-rounded">personal_injury</span>
              </div>
              <h3 style={{ fontSize: "1rem", flex: 1, margin: 0 }}>मृत्यू दाखला</h3>
              <span className="material-symbols-rounded" style={{ color: "var(--outline)" }}>chevron_right</span>
            </div>

            <div className="list-item" style={{ background: "var(--surface-container-lowest)" }}>
              <div
                className="icon-wrap"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-lg)",
                  background: "var(--surface-container-high)",
                  color: "var(--on-surface)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="material-symbols-rounded">favorite</span>
              </div>
              <h3 style={{ fontSize: "1rem", flex: 1, margin: 0 }}>विवाह नोंदणी</h3>
              <span className="material-symbols-rounded" style={{ color: "var(--outline)" }}>chevron_right</span>
            </div>
          </div>
        </div>

        {/* Section 3: Other Services Grid */}
        <div className="animate-fade-in-up" style={{ marginBottom: "2rem" }}>
          <div className="service-grid">
            <div className="service-card" style={{ background: "var(--surface-container-low)", cursor: "pointer" }} onClick={() => router.push("/complaints")}>
              <div className="icon-wrap" style={{ background: "var(--error-container)", color: "var(--on-error-container)" }}>
                <span className="material-symbols-rounded">campaign</span>
              </div>
              <div>
                <h3 style={{ fontSize: "0.9375rem", marginBottom: "0.25rem" }}>तक्रार नोंदणी</h3>
                <p style={{ fontSize: "0.75rem", lineHeight: 1.4 }}>शहरातील समस्यांची तक्रार करा</p>
              </div>
            </div>

            <div className="service-card" style={{ background: "var(--surface-container-low)" }}>
              <div className="icon-wrap" style={{ background: "var(--primary-fixed)", color: "var(--primary)" }}>
                <span className="material-symbols-rounded">foundation</span>
              </div>
              <div>
                <h3 style={{ fontSize: "0.9375rem", marginBottom: "0.25rem" }}>परवाना सेवा</h3>
                <p style={{ fontSize: "0.75rem", lineHeight: 1.4 }}>व्यवसाय व बांधकाम परवाना</p>
              </div>
            </div>

            <div className="service-card" style={{ background: "var(--surface-container-low)" }}>
              <div className="icon-wrap" style={{ background: "var(--secondary-container)", color: "var(--secondary)" }}>
                <span className="material-symbols-rounded">account_balance_wallet</span>
              </div>
              <div>
                <h3 style={{ fontSize: "0.9375rem", marginBottom: "0.25rem" }}>शासकीय योजना</h3>
                <p style={{ fontSize: "0.75rem", lineHeight: 1.4 }}>विविध योजनांची माहिती व अर्ज</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="animate-fade-in-up" style={{ textAlign: "center", padding: "1rem 0 2rem" }}>
          <h4 style={{ fontSize: "0.9375rem", color: "var(--primary)", marginBottom: "0.5rem" }}>
            डिजिटल भडगाव, विकसित भडगाव
          </h4>
          <p style={{ fontSize: "0.8125rem", color: "var(--on-surface-variant)" }}>
            आम्ही तुमच्यासाठी प्रशासकीय प्रक्रिया सोप्या आणि पारदर्शक बनवण्यासाठी कटिबद्ध आहोत.
          </p>
        </div>

      </div>
      
      <BottomNav />
    </div>
  );
}
