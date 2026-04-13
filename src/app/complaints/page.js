"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";

export default function ComplaintsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("new");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Mock complaints data
  const myComplaints = [
    { id: "C-1092", title: "कचरा संकलन नाही", date: "१२ एप्रिल २०२६", status: "pending", statusText: "प्रलंबित" },
    { id: "C-0845", title: "रस्त्यावरील खड्डे", date: "५ मार्च २०२६", status: "success", statusText: "सोडवले" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setActiveTab("mine");
      }, 3000);
    }, 1500);
  };

  return (
    <div className="mobile-container pb-nav bg-surface">
      {/* Header */}
      <header className="app-header">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className="header-title">तक्रारी व निवारण</div>
        </div>
      </header>

      <div className="section-padding stagger">
        <div className="animate-fade-in-up" style={{ marginBottom: "1.5rem" }}>
          <h1 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>नागरी समस्या</h1>
          <p style={{ fontSize: "0.9375rem" }}>शहरातील कोणत्याही समस्येची ऑनलाइन तक्रार नोंदवा.</p>
        </div>

        {/* Custom Tabs */}
        <div 
          className="animate-fade-in-up" 
          style={{ 
            display: "flex", 
            background: "var(--surface-container-high)", 
            padding: "0.25rem", 
            borderRadius: "var(--radius-lg)",
            marginBottom: "2rem"
          }}
        >
          <button 
            className="btn"
            style={{ 
              flex: 1, 
              background: activeTab === "new" ? "var(--surface-container-lowest)" : "transparent",
              color: activeTab === "new" ? "var(--primary)" : "var(--on-surface-variant)",
              boxShadow: activeTab === "new" ? "var(--civic-glow)" : "none",
            }}
            onClick={() => setActiveTab("new")}
          >
            नवीन तक्रार
          </button>
          <button 
            className="btn"
            style={{ 
              flex: 1, 
              background: activeTab === "mine" ? "var(--surface-container-lowest)" : "transparent",
              color: activeTab === "mine" ? "var(--primary)" : "var(--on-surface-variant)",
              boxShadow: activeTab === "mine" ? "var(--civic-glow)" : "none",
            }}
            onClick={() => setActiveTab("mine")}
          >
            माझ्या तक्रारी
          </button>
        </div>

        {activeTab === "new" ? (
          <div className="animate-fade-in-up">
            {submitted ? (
              <div className="card-elevated" style={{ textAlign: "center", padding: "2rem 1.5rem" }}>
                <div style={{ 
                  width: "64px", height: "64px", borderRadius: "50%", 
                  background: "var(--secondary-container)", color: "var(--secondary)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1rem", fontSize: "2rem"
                }}>
                  <span className="material-symbols-rounded">check_circle</span>
                </div>
                <h2 style={{ fontSize: "1.25rem", color: "var(--secondary)", marginBottom: "0.5rem" }}>तक्रार नोंदवली!</h2>
                <p>तुमची तक्रार यशस्वीरित्या नोंदवली गेली आहे. आमचे अधिकारी लवकरच लक्ष देतील.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className="card-elevated" style={{ padding: "0" }}>
                  <select className="input-field" required style={{ appearance: "none" }} defaultValue="">
                    <option value="" disabled>समस्येचा प्रकार निवडा</option>
                    <option value="water">पाणी पुरवठा</option>
                    <option value="road">रस्ते आणि खड्डे</option>
                    <option value="garbage">कचरा व्यवस्थापन</option>
                    <option value="light">पथदिवे (Streetlights)</option>
                    <option value="other">इतर</option>
                  </select>
                  <textarea 
                    className="input-field" 
                    placeholder="समस्येचे सविस्तर वर्णन..." 
                    rows="4" 
                    required
                    style={{ resize: "none", borderTop: "1px solid var(--surface-variant)", borderRadius: "0 0 var(--radius-md) var(--radius-md)" }}
                  ></textarea>
                </div>

                <div className="card-elevated" style={{ padding: "0" }}>
                  <input type="text" className="input-field" placeholder="ठिकाण (वॉर्ड किंवा खुणा)" required />
                </div>

                <button 
                  type="button" 
                  className="btn btn-secondary btn-full" 
                  style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}
                >
                  <span className="material-symbols-rounded">photo_camera</span>
                  फोटो जोडा (पर्यायी)
                </button>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-full"
                  style={{ marginTop: "1rem" }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "नोंदवत आहे..." : "तक्रार नोंदवा"}
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="animate-fade-in-up" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {myComplaints.map(complaint => (
              <div key={complaint.id} className="card-elevated" style={{ padding: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                  <h3 style={{ fontSize: "1rem", margin: 0 }}>{complaint.title}</h3>
                  <span className={`badge badge-${complaint.status}`}>{complaint.statusText}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="label" style={{ color: "var(--outline)" }}>तक्रार क्र: {complaint.id}</span>
                  <span style={{ fontSize: "0.8125rem", color: "var(--on-surface-variant)" }}>{complaint.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
