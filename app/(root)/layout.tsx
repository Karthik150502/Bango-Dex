import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Bango - Exchange",
    description: "Streamlined online Crypto EWxchange platform.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={` antialiased`}
            >
                <main className="min-h-screen relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden flex flex-col items-center justify-center">
                    {children}
                </main>
            </body>
        </html>
    );
}
