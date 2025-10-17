import HomePageClient from "./HomePageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "اینتل ایکس - مشاوره حقوقی آنلاین | اولین هوش مصنوعی حقوقدان کشور",
  description:
    "دسترسی سریع و آسان به وکلای متخصص و هوش مصنوعی حقوقی در تمامی زمینه‌های حقوقی تحت قوانین جمهوری اسلامی ایران",
  keywords: "مشاوره حقوقی، وکیل آنلاین، هوش مصنوعی حقوقی، قوانین ایران، مشاوره حقوقی آنلاین",
  openGraph: {
    title: "اینتل ایکس - مشاوره حقوقی آنلاین",
    description: "دسترسی سریع و آسان به وکلای متخصص در تمامی زمینه‌های حقوقی",
    type: "website",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
