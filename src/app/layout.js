import "./globals.css";

export const metadata = {
  title: "भडगाव नगरपरिषद सेवा | Bhadgav Nagarpalika Seva",
  description:
    "भडगाव नगरपरिषदेच्या सर्व डिजिटल सेवा एकाच ठिकाणी. मालमत्ता कर, पाणी बिल, तक्रार नोंदणी, दाखले आणि बरेच काही.",
  keywords:
    "भडगाव, नगरपरिषद, E-Nagarpalika, Municipal, Bhadgav, Services, Marathi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="mr">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#003e6f" />
      </head>
      <body>{children}</body>
    </html>
  );
}
