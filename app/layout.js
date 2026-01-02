import "./globals.css";
import Navbar from "../components/Navbar";
import WebVitalsTracker from "../components/performance/WebVitalsTracker";
import Script from "next/script";

export const metadata = {
  title:
    "OR Productions - אטרקציות לאירועים | השכרת ציוד מקצועי לאירועים בישראל",
  description:
    "השכרת אטרקציות מקצועיות לאירועים בישראל | עמדות צילום, מיצגי תפאורה ועוד. מחירים הוגנים, שירות מקצועי ומהיר. הזמינו עכשיו!",
  keywords:
    "אטרקציות לאירועים, השכרת ציוד לאירועים,  עמדות צילום, אירועים בישראל, חתונות, בר מצווה, ימי הולדת",
  author: "OR Productions",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",

  openGraph: {
    title: "OR Productions - אטרקציות מקצועיות לאירועים",
    description:
      "השכרת אטרקציות מקצועיות לאירועים בישראל. פוטובוט, בר מיצים, עמדות צילום ועוד. שירות מקצועי ומהיר!",
    url: "https://orproductions.co.il",
    siteName: "OR Productions",
    images: [
      {
        url: "https://res.cloudinary.com/your-cloud/image/upload/v1/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OR Productions - אטרקציות לאירועים",
      },
    ],
    locale: "he_IL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OR Productions - אטרקציות לאירועים",
    description: "השכרת אטרקציות מקצועיות לאירועים בישראל",
    images: [
      "https://res.cloudinary.com/your-cloud/image/upload/v1/og-image.jpg",
    ],
  },

  other: {
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
    "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    "theme-color": "#7c3aed",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* ✅ Facebook Pixel (Next.js App Router way) */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1826301894912517');
              fbq('track', 'PageView');
            `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1826301894912517&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* ✅ End Facebook Pixel */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-rubik">
        <WebVitalsTracker />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
