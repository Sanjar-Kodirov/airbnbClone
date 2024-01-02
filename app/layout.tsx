import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import ClientOnly from "@/app/ClientOnly";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import LoginModal from "@/app/components/modals/LoginModal";
import RegisterModal from "@/app/components/modals/RegisterModal";
import RentModal from "@/app/components/modals/RentModal";
import Navbar from "@/app/components/navbar/Navbar";
import ToasterProvider from "@/app/providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bnb",
  description: "Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />

        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
          <div className="pb-20 pt-28">{children}</div>
        </ClientOnly>
      </body>
    </html>
  );
}
