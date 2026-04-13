"use client";
import BottomNav from "@/components/BottomNav";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className="mobile-container pb-nav bg-surface">
      {/* Header */}
      <header className="app-header">
        <div className="header-title">
          <span className="material-symbols-rounded">account_balance</span>
          भडगाव नगरपरिषद
        </div>
        <button
          className="btn btn-ghost"
          style={{ padding: "0.5rem", borderRadius: "50%" }}
        >
          <span className="material-symbols-rounded">notifications</span>
        </button>
      </header>

      <div className="section-padding stagger">
        {/* Welcome Section */}
        <div className="animate-fade-in-up" style={{ marginBottom: "2rem" }}>
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "0.875rem",
              color: "var(--outline)",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "0.25rem",
            }}
          >
            नमस्कार, नागरिक
          </p>
          <h1
            style={{
              fontSize: "1.75rem",
              lineHeight: 1.3,
              marginBottom: "0.5rem",
            }}
          >
            भडगाव नगरपरिषद डिजिटल सेवेमध्ये आपले स्वागत आहे.
          </h1>
        </div>

        {/* Quick Services Tray */}
        <div className="card-tray animate-fade-in-up" style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <h2 style={{ fontSize: "1.125rem" }}>त्वरित सेवा</h2>
            <a
              href="/services"
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.8125rem",
                color: "var(--primary)",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              सर्व सेवा पहा
            </a>
          </div>

          <div className="service-grid">
            <div className="service-card" style={{ cursor: "pointer" }} onClick={() => router.push("/property-tax")}>
              <div className="icon-wrap icon-primary">
                <span className="material-symbols-rounded">real_estate_agent</span>
              </div>
              <div>
                <h3 style={{ fontSize: "0.9375rem", marginBottom: "0.25rem" }}>
                  मालमत्ता कर
                </h3>
                <p style={{ fontSize: "0.75rem", lineHeight: 1.4 }}>
                  तुमचा घरपट्टी किंवा मालमत्ता कर भरा
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="icon-wrap icon-secondary">
                <span className="material-symbols-rounded">water_drop</span>
              </div>
              <div>
                <h3 style={{ fontSize: "0.9375rem", marginBottom: "0.25rem" }}>
                  पाणी बिल
                </h3>
                <p style={{ fontSize: "0.75rem", lineHeight: 1.4 }}>
                  पाणी पुरवठा देयके त्वरित भरा
                </p>
              </div>
            </div>

            <div className="service-card" style={{ cursor: "pointer" }} onClick={() => router.push("/complaints")}>
              <div className="icon-wrap icon-tertiary" style={{ background: "var(--error-container)", color: "var(--on-error-container)" }}>
                <span className="material-symbols-rounded">campaign</span>
              </div>
              <div>
                <h3 style={{ fontSize: "0.9375rem", marginBottom: "0.25rem" }}>
                  तक्रार नोंदणी
                </h3>
                <p style={{ fontSize: "0.75rem", lineHeight: 1.4 }}>
                  नागरी समस्यांची तक्रार नोंदवा
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="icon-wrap icon-primary">
                <span className="material-symbols-rounded">description</span>
              </div>
              <div>
                <h3 style={{ fontSize: "0.9375rem", marginBottom: "0.25rem" }}>
                  दाखले
                </h3>
                <p style={{ fontSize: "0.75rem", lineHeight: 1.4 }}>
                  जन्म, मृत्यू किंवा रहिवासी दाखला
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notices */}
        <div className="animate-fade-in-up" style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
            महत्वाच्या सूचना
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              className="card ghost-border"
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1rem",
                borderRadius: "var(--radius-lg)",
                background: "var(--surface-container-lowest)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "var(--secondary-container)",
                  color: "var(--on-secondary-container)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span className="material-symbols-rounded">recycling</span>
              </div>
              <div>
                <h4 style={{ fontSize: "0.9375rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                  स्वच्छ भडगाव अभियान २०२४
                </h4>
                <p style={{ fontSize: "0.8125rem" }}>
                  आपल्या शहराला सुंदर बनवण्यासाठी कचरा व्यवस्थापनात सहकार्य करा. ओला आणि सुका कचरा वेगळा ठेवा.
                </p>
              </div>
            </div>

            <div
              className="card ghost-border"
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1rem",
                borderRadius: "var(--radius-lg)",
                background: "var(--surface-container-lowest)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "var(--primary-fixed)",
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span className="material-symbols-rounded">groups</span>
              </div>
              <div>
                <h4 style={{ fontSize: "0.9375rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                  लोकशाही दिन
                </h4>
                <p style={{ fontSize: "0.8125rem", marginBottom: "0.5rem" }}>
                  प्रत्येक महिन्याच्या पहिल्या सोमवारी तक्रारींचे निवारण करण्यात येईल.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "var(--primary)" }}>
                  <span className="material-symbols-rounded" style={{ fontSize: "16px" }}>event</span>
                  <span style={{ fontFamily: "var(--font-label)", fontSize: "0.75rem", fontWeight: 600 }}>
                    ४ मार्च २०२४ | १०:०० AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Status */}
        <div className="animate-fade-in-up" style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>
            तुमचा अर्ज स्थिती
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div
              className="card-elevated"
              style={{
                padding: "1rem 1.25rem",
                borderRadius: "var(--radius-lg)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h5 style={{ fontSize: "0.9375rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                  जन्म दाखला अर्ज
                </h5>
                <p style={{ fontFamily: "var(--font-label)", fontSize: "0.75rem", color: "var(--outline)" }}>
                  क्रमांक: BN-89231
                </p>
              </div>
              <span className="badge badge-success">मंजूर</span>
            </div>

            <div
              className="card-elevated"
              style={{
                padding: "1rem 1.25rem",
                borderRadius: "var(--radius-lg)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h5 style={{ fontSize: "0.9375rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                  नळ जोडणी अर्ज
                </h5>
                <p style={{ fontFamily: "var(--font-label)", fontSize: "0.75rem", color: "var(--outline)" }}>
                  क्रमांक: BN-90442
                </p>
              </div>
              <span className="badge badge-pending">प्रलंबित</span>
            </div>
          </div>
        </div>

        {/* Help/Support Section */}
        <div
          className="hero-gradient animate-fade-in-up"
          style={{
            padding: "1.5rem",
            borderRadius: "var(--radius-xl)",
            textAlign: "center",
          }}
        >
          <span
            className="material-symbols-rounded"
            style={{ fontSize: "32px", marginBottom: "0.5rem" }}
          >
            support_agent
          </span>
          <h3 style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>
            मदत हवी आहे?
          </h3>
          <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.8)", marginBottom: "1.25rem" }}>
            आमच्या हेल्पलाईन क्रमांकावर संपर्क साधा किंवा चॅट करा.
          </p>
          <button
            className="btn btn-secondary btn-full"
            style={{ color: "var(--primary)" }}
          >
            संपर्क करा
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
