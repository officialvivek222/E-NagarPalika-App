"use client";
import BottomNav from "@/components/BottomNav";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "पाणी कपातीची सूचना",
      message: "दुरुस्तीच्या कामामुळे उद्या (१५ एप्रिल) भवानी पेठ आणि शिवाजी नगर भागात पाणीपुरवठा बंद राहील.",
      date: "१४ एप्रिल २०२६",
      type: "alert",
      read: false
    },
    {
      id: 2,
      title: "आपली तक्रार सोडवली गेली आहे",
      message: "तुमची तक्रार क्र. C-0845 (रस्त्यावरील खड्डे) सोडवली गेली आहे. धन्यवाद!",
      date: "१० मार्च २०२६",
      type: "success",
      read: true
    },
    {
      id: 3,
      title: "मालमत्ता कर सवलत योजना",
      message: "३१ मार्च अगोदर मालमत्ता कर भरल्यास ५% सवलत मिळेल. आजच आपला कर भरा.",
      date: "१ मार्च २०२६",
      type: "info",
      read: true
    }
  ];

  return (
    <div className="mobile-container pb-nav bg-surface">
      <header className="app-header">
        <div className="header-title">सूचना व अपडेट्स</div>
        <button className="btn btn-ghost" style={{ padding: "0.5rem", borderRadius: "50%" }}>
          <span className="material-symbols-rounded">done_all</span>
        </button>
      </header>

      <div className="section-padding stagger">
        <div className="animate-fade-in-up" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              className="card ghost-border"
              style={{
                padding: "1rem",
                display: "flex",
                gap: "1rem",
                background: notif.read ? "var(--surface-container-lowest)" : "var(--surface-container-low)"
              }}
            >
              <div 
                style={{ 
                  width: "40px", height: "40px", borderRadius: "50%", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: notif.type === "alert" ? "var(--error-container)" : 
                              notif.type === "success" ? "var(--secondary-container)" : 
                              "var(--primary-fixed)",
                  color: notif.type === "alert" ? "var(--on-error-container)" : 
                         notif.type === "success" ? "var(--on-secondary-container)" : 
                         "var(--primary)"
                }}
              >
                <span className="material-symbols-rounded">
                  {notif.type === "alert" ? "warning" : notif.type === "success" ? "check_circle" : "info"}
                </span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.25rem" }}>
                  <h3 style={{ fontSize: "0.9375rem", margin: 0, fontWeight: notif.read ? 600 : 700 }}>{notif.title}</h3>
                  {!notif.read && <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)" }}></div>}
                </div>
                <p style={{ fontSize: "0.8125rem", marginBottom: "0.5rem", color: "var(--on-surface-variant)" }}>{notif.message}</p>
                <div style={{ fontSize: "0.75rem", color: "var(--outline)" }}>{notif.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
