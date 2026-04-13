"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleSendOtp = () => {
    if (mobileNumber.length === 10) {
      setShowOtp(true);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        const next = document.getElementById(`otp-${index + 1}`);
        next?.focus();
      }
    }
  };

  const handleVerify = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1200);
  };

  return (
    <div className="mobile-container" style={{ minHeight: "100vh" }}>
      {/* Hero Gradient Header */}
      <div
        className="hero-gradient"
        style={{
          padding: "3rem 1.5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background shapes */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(161, 201, 255, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "10%",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "rgba(161, 201, 255, 0.05)",
          }}
        />

        {/* Back button */}
        <button
          onClick={() => router.push("/")}
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "none",
            borderRadius: "var(--radius-lg)",
            padding: "0.5rem",
            cursor: "pointer",
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="material-symbols-rounded" style={{ color: "#fff", fontSize: "24px" }}>
            arrow_back
          </span>
        </button>

        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span className="material-symbols-rounded" style={{ fontSize: "32px", color: "rgba(255,255,255,0.9)" }}>
              account_balance
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.375rem",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              भडगाव नगरपरिषद
            </h1>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.75rem",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.3,
              marginBottom: "0.5rem",
            }}
          >
            डिजिटल भडगाव,
            <br />
            प्रगत भडगाव.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              maxWidth: "320px",
            }}
          >
            नगरपरिषदेच्या सर्व सेवा आता एका क्लिकवर. सुरक्षित, जलद आणि
            पारदर्शक नागरिक अनुभव.
          </p>
        </div>
      </div>

      {/* Login Form Card */}
      <div
        style={{
          margin: "-2rem 1.25rem 0",
          position: "relative",
          zIndex: 10,
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s ease 0.2s",
        }}
      >
        <div
          className="card-elevated"
          style={{
            borderRadius: "var(--radius-2xl)",
            padding: "2rem 1.5rem",
            boxShadow: "var(--civic-glow-lg)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.25rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
              color: "var(--on-surface)",
            }}
          >
            स्वागत आहे
          </h3>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--on-surface-variant)",
              marginBottom: "1.75rem",
              lineHeight: 1.6,
            }}
          >
            {showOtp
              ? `+91 ${mobileNumber} वर पाठवलेला OTP टाका`
              : "आपल्या नोंदणीकृत मोबाईल क्रमांकाने प्रवेश करा"}
          </p>

          {!showOtp ? (
            <>
              {/* Mobile Number Input */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  className="label"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "var(--on-surface-variant)",
                  }}
                >
                  मोबाईल क्रमांक
                </label>
                <div style={{ position: "relative" }}>
                  <span
                    style={{
                      position: "absolute",
                      left: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontFamily: "var(--font-label)",
                      fontSize: "0.9375rem",
                      color: "var(--on-surface-variant)",
                      fontWeight: 500,
                    }}
                  >
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={mobileNumber}
                    onChange={(e) =>
                      setMobileNumber(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="तुमचा मोबाईल नंबर"
                    className="input-field"
                    style={{
                      paddingLeft: "3.5rem",
                      borderRadius: "var(--radius-lg)",
                      border: "none",
                      borderBottom: "2px solid var(--outline-variant)",
                    }}
                    id="mobile-input"
                  />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "0.6875rem",
                    color: "var(--outline)",
                    marginTop: "0.5rem",
                  }}
                >
                  ओटीपी (OTP) आपल्या या क्रमांकावर पाठवला जाईल
                </p>
              </div>

              <button
                className="btn btn-primary btn-lg btn-full"
                onClick={handleSendOtp}
                disabled={mobileNumber.length !== 10}
                style={{
                  borderRadius: "var(--radius-2xl)",
                  opacity: mobileNumber.length === 10 ? 1 : 0.5,
                  cursor:
                    mobileNumber.length === 10 ? "pointer" : "not-allowed",
                }}
                id="send-otp-btn"
              >
                OTP पाठवा
                <span className="material-symbols-rounded" style={{ fontSize: "20px" }}>
                  arrow_forward
                </span>
              </button>
            </>
          ) : (
            <>
              {/* OTP Input */}
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  justifyContent: "center",
                  marginBottom: "1.75rem",
                }}
              >
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    type="tel"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    style={{
                      width: "56px",
                      height: "56px",
                      textAlign: "center",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-display)",
                      background: "var(--surface-container-low)",
                      border: "none",
                      borderBottom: `2px solid ${digit ? "var(--primary)" : "var(--outline-variant)"}`,
                      borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
                      outline: "none",
                      color: "var(--on-surface)",
                      transition: "all 0.25s ease",
                    }}
                  />
                ))}
              </div>

              <button
                className="btn btn-primary btn-lg btn-full"
                onClick={handleVerify}
                disabled={otp.some((d) => !d)}
                style={{
                  borderRadius: "var(--radius-2xl)",
                  opacity: otp.every((d) => d) ? 1 : 0.5,
                  position: "relative",
                }}
                id="verify-otp-btn"
              >
                {isLoading ? (
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "2px solid rgba(255,255,255,0.3)",
                      borderTopColor: "#fff",
                      borderRadius: "50%",
                      animation: "spin 0.8s linear infinite",
                    }}
                  />
                ) : (
                  <>
                    सत्यापित करा
                    <span className="material-symbols-rounded" style={{ fontSize: "20px" }}>
                      verified
                    </span>
                  </>
                )}
              </button>

              <button
                className="btn btn-ghost btn-full"
                onClick={() => setShowOtp(false)}
                style={{ marginTop: "0.75rem", fontSize: "0.8125rem" }}
              >
                मोबाईल नंबर बदला
              </button>
            </>
          )}
        </div>

        {/* Additional Links */}
        <div
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <p style={{ fontSize: "0.875rem", color: "var(--on-surface-variant)" }}>
            नवीन वापरकर्ता आहात का?{" "}
            <a
              href="#"
              style={{
                color: "var(--primary)",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              नोंदणी करा
            </a>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginTop: "0.5rem",
            }}
          >
            <a
              href="#"
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.75rem",
                color: "var(--outline)",
                textDecoration: "none",
              }}
            >
              मदत हवी आहे?
            </a>
            <a
              href="#"
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.75rem",
                color: "var(--outline)",
                textDecoration: "none",
              }}
            >
              नियम आणि अटी
            </a>
          </div>
        </div>
      </div>

      {/* Inline keyframes for spinner */}
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
