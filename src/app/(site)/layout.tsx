import { Main } from "next/document";

// Layout padrão do Ecommerce.
export default function EcommerceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Container>
        <Main>{children}</Main>
      </Container>
      <Footer />
    </>
  );
}
