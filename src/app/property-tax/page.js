"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";

export default function PropertyTaxPage() {
  const router = useRouter();
  const [searchStep, setSearchStep] = useState(true);
  const [propertyId, setPropertyId] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock Property Details
  const taxDetails = {
    ownerName: "रमेश भोसले",
    address: "वॉर्ड क्र. ४, शिवाजी नगर, भडगाव",
    currentTax: "१,२०० ऱु",
    arrears: "४५० ऱु",
    totalDue: "१,६५० ऱु",
    dueDate: "३१ मार्च २०२६"
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSearchStep(false);
    }, 1000);
  };

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    }, 2000);
  };

  return (
    <div className="mobile-container pb-nav bg-surface">
      {/* Header */}
      <header className="app-header">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            onClick={() => {
              if (!searchStep && !paymentSuccess) setSearchStep(true);
              else router.back();
            }}
            className="btn btn-ghost"
            style={{ padding: "0.25rem", minWidth: "auto" }}
          >
            <span className="material-symbols-rounded">arrow_back</span>
          </button>
          <div className="header-title">मालमत्ता कर</div>
        </div>
      </header>

      <div className="section-padding stagger">
        {paymentSuccess ? (
          <div className="animate-fade-in-up" style={{ textAlign: "center", paddingTop: "2rem" }}>
            <div style={{ 
              width: "80px", height: "80px", borderRadius: "50%", 
              background: "var(--secondary-container)", color: "var(--secondary)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 1.5rem", fontSize: "2.5rem"
            }}>
              <span className="material-symbols-rounded">task_alt</span>
            </div>
            <h2 style={{ fontSize: "1.5rem", color: "var(--secondary)", marginBottom: "0.5rem" }}>
              पेमेंट यशस्वी!
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--on-surface-variant)", marginBottom: "1.5rem" }}>
              तुमचा मालमत्ता कर ({taxDetails.totalDue}) यशस्वीरित्या भरला गेला आहे.
            </p>
            <div className="card-elevated" style={{ padding: "1rem", marginBottom: "2rem", textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ color: "var(--outline)", fontSize: "0.875rem" }}>पावती क्र:</span>
                <span style={{ fontWeight: 600 }}>TX-9023412</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--outline)", fontSize: "0.875rem" }}>तारीख:</span>
                <span style={{ fontWeight: 600 }}>{new Date().toLocaleDateString("mr-IN")}</span>
              </div>
            </div>
          </div>
        ) : searchStep ? (
          <div className="animate-fade-in-up">
            <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>कर शोध व भरणा</h1>
            <p style={{ marginBottom: "2rem", fontSize: "0.9375rem" }}>
              तुमची घरपट्टी किंवा मालमत्ता कर भरण्यासाठी मालमत्ता क्रमांक (Property No) प्रविष्ट करा.
            </p>

            <form onSubmit={handleSearch} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="card-elevated" style={{ padding: 0 }}>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="मालमत्ता क्रमांक टाका (उदा. P-102)" 
                  value={propertyId}
                  onChange={(e) => setPropertyId(e.target.value)}
                  required
                  style={{ borderRadius: "var(--radius-md)" }}
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary btn-full"
                disabled={isLoading || !propertyId}
              >
                {isLoading ? "शोधत आहे..." : "शोध घ्या"}
                {!isLoading && <span className="material-symbols-rounded">search</span>}
              </button>
            </form>
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>मालमत्ता तपशील</h2>
            
            <div className="card-elevated" style={{ marginBottom: "1.5rem", padding: "1.25rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label className="label" style={{ color: "var(--outline)" }}>मालकाचे नाव</label>
                  <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--on-surface)", margin: 0 }}>
                    {taxDetails.ownerName}
                  </p>
                </div>
                <div>
                  <label className="label" style={{ color: "var(--outline)" }}>पत्ता</label>
                  <p style={{ fontSize: "0.9375rem", color: "var(--on-surface)", margin: 0 }}>
                    {taxDetails.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-gradient" style={{ borderRadius: "var(--radius-xl)", padding: "1.5rem", marginBottom: "2rem", boxShadow: "var(--civic-glow)" }}>
              <h3 style={{ fontSize: "1rem", color: "var(--primary-fixed-dim)", marginBottom: "1rem", fontWeight: 500 }}>
                कराचा तपशील (२०२५-२६)
              </h3>
              
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                <span>चालू कर:</span>
                <span style={{ fontWeight: 600 }}>{taxDetails.currentTax}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                <span>थकबाकी:</span>
                <span style={{ fontWeight: 600 }}>{taxDetails.arrears}</span>
              </div>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "1.125rem", fontWeight: 600 }}>एकूण देय रक्कम:</span>
                <span style={{ fontSize: "1.5rem", fontWeight: 700 }}>{taxDetails.totalDue}</span>
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--primary-fixed-dim)", marginTop: "0.5rem", textAlign: "right" }}>
                अंतिम मुदत: {taxDetails.dueDate}
              </p>
            </div>

            <button 
              className="btn btn-secondary btn-full"
              style={{ backgroundColor: "var(--surface-container-highest)", color: "var(--on-surface)", fontWeight: 700 }}
              onClick={handlePayment}
              disabled={isLoading}
            >
              {isLoading ? "प्रक्रिया करत आहे..." : `सशुल्क करा (${taxDetails.totalDue})`}
            </button>
          </div>
        )}
      </div>
      
      <BottomNav />
    </div>
  );
}
