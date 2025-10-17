import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Suspense } from "react"
import localFont from "next/font/local"

const fanavari = localFont({
  src: "../public/fonts/Fanavari-Bold.ttf",
  variable: "--font-fanavari",
  display: "swap",
})

const ibmPlexMedium = localFont({
  src: "../public/fonts/IBMPlexSansArabic-Medium.ttf",
  variable: "--font-ibm-medium",
  display: "swap",
})

const ibmPlexRegular = localFont({
  src: "../public/fonts/IBMPlexSansArabic-Regular.ttf",
  variable: "--font-ibm-regular",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "اینتل ایکس - مشاوره حقوقی آنلاین | اولین هوش مصنوعی حقوقدان کشور",
    template: "%s | اینتل ایکس",
  },
  description:
    "دسترسی سریع و آسان به وکلای متخصص و هوش مصنوعی حقوقی در تمامی زمینه‌های حقوقی تحت قوانین جمهوری اسلامی ایران. مشاوره حقوقی آنلاین، قوانین جامع، حقوق مدنی، حقوق کیفری، حقوق خانواده، و خدمات تخصصی حقوقی با بهترین وکلا",
  keywords: [
    "مشاوره حقوقی",
    "وکیل آنلاین",
    "هوش مصنوعی حقوقی",
    "قوانین ایران",
    "مشاوره حقوقی آنلاین",
    "حقوق مدنی",
    "حقوق کیفری",
    "حقوق خانواده",
    "حقوق تجاری",
    "قوانین جامع",
    "اینتل ایکس",
    "وکیل تهران",
    "مشاوره حقوقی تلفنی",
    "تنظیم دادخواست",
    "وکالت دادگستری",
    "مشاور حقوقی",
    "قانون مدنی",
    "قانون آیین دادرسی",
    "حقوق ملکی",
    "حقوق کار",
  ],
  authors: [{ name: "اینتل ایکس" }],
  creator: "اینتل ایکس",
  publisher: "اینتل ایکس",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://intelx.ir"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "اینتل ایکس - مشاوره حقوقی آنلاین | اولین هوش مصنوعی حقوقدان کشور",
    description:
      "دسترسی سریع و آسان به وکلای متخصص و هوش مصنوعی حقوقی در تمامی زمینه‌های حقوقی تحت قوانین جمهوری اسلامی ایران",
    url: "https://intelx.ir",
    siteName: "اینتل ایکس",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "اینتل ایکس - مشاوره حقوقی آنلاین",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "اینتل ایکس - مشاوره حقوقی آنلاین",
    description: "دسترسی سریع و آسان به وکلای متخصص و هوش مصنوعی حقوقی",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "اینتل ایکس",
              description: "مشاوره حقوقی آنلاین و دسترسی به وکلای متخصص",
              url: "https://intelx.ir",
              telephone: "+98-930-919-8686",
              email: "law@intelx.ir",
              address: {
                "@type": "PostalAddress",
                streetAddress: "خیابان عبدالمجید اکبری، برج سپهر ساعی، طبقه دهم، واحد ۱۰۰۴",
                addressLocality: "یوسف آباد",
                addressRegion: "تهران",
                addressCountry: "IR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "35.7447",
                longitude: "51.4045",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              priceRange: "$$",
              areaServed: {
                "@type": "Country",
                name: "Iran",
              },
              serviceType: ["مشاوره حقوقی", "حقوق مدنی", "حقوق کیفری", "حقوق خانواده", "حقوق تجاری"],
            }),
          }}
        />
        <link rel="canonical" href="https://intelx.ir" />
      </head>
      <body
        className={`${fanavari.variable} ${ibmPlexMedium.variable} ${ibmPlexRegular.variable} font-body antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
