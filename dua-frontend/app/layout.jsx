import { Amiri, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Dua & Ruqyah - Supplications for Daily Life",
  description: "created by IRD Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${amiri.variable} min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div aria-hidden="true" className="ambient-glow" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
