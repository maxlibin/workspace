import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CopilotKit } from "@copilotkit/react-core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Research Canvas",
  description: "AI-Powered Visual Research and Collaboration Tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <CopilotKit runtimeUrl="/api/copilot">{children}</CopilotKit>
      </body>
    </html>
  );
}
