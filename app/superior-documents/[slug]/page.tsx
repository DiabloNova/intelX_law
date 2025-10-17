import ComprehensiveLawViewer from "@/components/comprehensive-law-viewer"
import { notFound } from "next/navigation"

const superiorDocuments = {
  constitutional: {
    title: "مجموعه قوانین اساسی",
    description:
      "قانون اساسی جمهوری اسلامی ایران مصوب سال 1358 و اصلاحیه آن در سال 1368، شامل اصول کلی، حقوق ملت، قوای سه‌گانه و سایر مباحث مربوط به نظام جمهوری اسلامی",
  },
  program: {
    title: "مجموعه قوانین برنامه",
    description:
      "قوانین برنامه‌های پنج‌ساله توسعه اقتصادی، اجتماعی و فرهنگی جمهوری اسلامی ایران، شامل سیاست‌ها، اهداف و برنامه‌های کلان کشور",
  },
  budget: {
    title: "مجموعه قوانین بودجه",
    description: "قوانین بودجه سالانه کل کشور، شامل بودجه عمومی دولت، شرکت‌های دولتی، بانک‌ها و مؤسسات عمومی غیردولتی",
  },
}

export default function SuperiorDocumentPage({ params }: { params: { slug: string } }) {
  const document = superiorDocuments[params.slug as keyof typeof superiorDocuments]

  if (!document) {
    notFound()
  }

  return <ComprehensiveLawViewer title={document.title} description={document.description} />
}
