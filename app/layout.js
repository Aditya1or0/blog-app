import "./globals.css";
import { ThemeProvider } from "@/Components/ThemeProvider";

export const metadata = {
  title: "Blog",
  description: "A full-stack blog platform built with Next.js, TailwindCSS, and ShadCN. Manage blog posts from the admin panel, display them on the frontend, and allow users to subscribe for email updates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
