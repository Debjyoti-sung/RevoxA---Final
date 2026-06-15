import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Copilot from '../components/Copilot';
import './globals.css';

export const metadata = {
  title: 'REVOXA — Enterprise Memory Intelligence Platform',
  description: 'AI-driven long-term feedback memory, semantic clustering, and product recommendations powered by REVOXA.',
  applicationName: 'REVOXA',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'REVOXA — Enterprise Memory Intelligence Platform',
    description: 'AI-driven long-term feedback memory, semantic clustering, and product recommendations.',
    siteName: 'REVOXA',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'REVOXA Logo' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REVOXA — Enterprise Memory Intelligence Platform',
    description: 'AI-driven long-term feedback memory, semantic clustering, and product recommendations.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-primaryText font-sans min-h-screen">
        <div className="flex min-h-screen">
          {/* Side Navigation Sidebar */}
          <Sidebar />

          {/* Main Content Pane */}
          <div className="flex-1 pl-64 flex flex-col min-h-screen">
            {/* Header Toolbar */}
            <Header />

            {/* Viewport Render Area */}
            <main className="flex-1 p-8 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>

        {/* Floating Copilot Widget */}
        <Copilot />
      </body>
    </html>
  );
}

