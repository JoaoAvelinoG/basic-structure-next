import { Main } from 'next/document';

// Layout específico para Dashboard.
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Sidebar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
