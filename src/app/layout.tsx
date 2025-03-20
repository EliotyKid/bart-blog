
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ApolloProvider} from "@apollo/client"
import { client } from "@/lib/apollo";
import ApolloClientProvider from "@/components/ApolloClientProvider";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-gray-50`}
      >
        <ApolloClientProvider>
          <Header/>
          {children}
        </ApolloClientProvider>

        
      </body>
    </html>
  );
}
