import { DM_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata = {
  title: "Luca Lima — Desenvolvedor de Software",
  description:
    "Portfólio de Luca Lima: desenvolvedor de software, formando em Análise e Desenvolvimento de Sistemas pelo IFBA e tricampeão em robótica.",
  keywords: [
    "Luca Lima",
    "desenvolvedor",
    "portfólio",
    "IFBA",
    "Kotlin",
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "robótica"
  ],
  authors: [{ name: "Luca Lima", url: "https://github.com/LSLuca13" }],
  openGraph: {
    title: "Luca Lima — Código com intenção.",
    description:
      "Desenvolvimento de software, formação no IFBA e uma trajetória construída entre código e robótica.",
    type: "website",
    locale: "pt_BR"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Luca Lima",
    url: "https://github.com/LSLuca13",
    sameAs: ["https://github.com/LSLuca13"],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Instituto Federal de Educação, Ciência e Tecnologia da Bahia"
    },
    knowsAbout: [
      "Kotlin",
      "Java",
      "Python",
      "PHP",
      "JavaScript",
      "TypeScript",
      "Desenvolvimento Android",
      "Robótica"
    ]
  };

  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} ${dmMono.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
