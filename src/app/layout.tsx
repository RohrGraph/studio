import type { Metadata } from 'next';
import './globals.css';
import { data } from '@/lib/data';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: data.site.title,
  description: data.site.description,
  openGraph: {
    title: data.site.title,
    description: data.site.description,
    url: `https://${data.site.domain}`,
    siteName: data.site.title,
    images: [
      {
        url: data.seo.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: data.site.title,
    description: data.site.description,
    images: [data.seo.ogImage],
    creator: data.seo.twitter,
  },
  metadataBase: new URL(`https://${data.site.domain}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
