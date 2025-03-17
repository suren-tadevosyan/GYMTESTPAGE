import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "GYM App",
  description:
    "Get fit and stay healthy with GYM App. Explore workouts, nutrition plans, and personalized training.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`antialiased ${montserrat.className}`}>{children}</body>
    </html>
  );
}
