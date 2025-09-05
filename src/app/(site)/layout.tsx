// Layout padrão do Ecommerce.
export default function EcommerceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const teste = 'teste';

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
