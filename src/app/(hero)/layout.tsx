import Header from "../componets/header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;  
}>) {
  return (
        <>
        <Header />
        {children}
        </>
  );
}
