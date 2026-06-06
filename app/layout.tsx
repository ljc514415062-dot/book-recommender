import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "城市新中产阅读品味测试",
  description: "12 道题生成当前人生阶段、阅读人格，并推荐 6 本适合此刻阅读的书。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
