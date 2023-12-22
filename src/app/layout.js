import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "프론트엔드 김태이 포트폴리오",
  description: "프론트엔드 김태이 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: "0px" }} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
