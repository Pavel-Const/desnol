import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "@/styles/_globals.scss";
import Header from "@/component/layouts/Header";
import cn from "classnames";
import {AuthProvider} from "@/component/AuthProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Desnol",
    description: "Desnol-test",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={cn(inter.className, "grayBg")}>
        <AuthProvider>
            <Header/>
            {children}
        </AuthProvider>
        </body>
        </html>
    );
}
