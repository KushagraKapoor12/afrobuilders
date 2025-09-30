import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Afrobuilders - Plateforme des projets innovants d'Afrique",
  description:
    "Découvrez et explorez les projets innovants développés en Afrique. Une plateforme open-source pour mettre en valeur l'innovation africaine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
        {/* Intégration du widget Google Translate de façon compatible Next.js */}
        <div
          id="google_translate_element"
          className="google_translate_element"
        ></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.gtranslateSettings = {
                "default_language": "en",
                "native_language_names": true,
                "detect_browser_language": false,
                "languages": ["fr", "en", "de", "it", "es", "pl"],
                "wrapper_selector": ".google_translate_element"
              }
            `,
          }}
        />
        <script
          src="https://cdn.gtranslate.net/widgets/latest/float.js"
          defer
        />
      </body>
    </html>
  );
}
