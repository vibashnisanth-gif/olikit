import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getLocale} from "@/lib/seo/locales";
import {buildMetadata} from "@/lib/seo/metadata";
import {LocaleTracker} from "@/components/locale-tracker";

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale: localeSlug} = await params;
  const locale = getLocale(localeSlug);
  if (!locale) return {};

  return buildMetadata(locale, null, `/${locale.slug}`);
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale: localeSlug} = await params;
  const locale = getLocale(localeSlug);
  if (!locale) notFound();

  return (
    <>
      <LocaleTracker slug={locale.slug} />
      {children}
    </>
  );
}
