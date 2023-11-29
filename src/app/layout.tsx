import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import ClientOnly from "@/src/app/ClientOnly";
import getCurrentUser from "@/src/app/actions/getCurrentUser";
import { ourFileRouter } from "@/src/app/api/uploadthing/core";
import LoginModal from "@/src/app/components/modals/LoginModal";
import RegisterModal from "@/src/app/components/modals/RegisterModal";
import RentModal from "@/src/app/components/modals/RentModal";
import Navbar from "@/src/app/components/navbar/Navbar";
import ToasterProvider from "@/src/app/providers/ToasterProvider";

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
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />

        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
          <div className="pb-20 pt-28">{children}</div>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
