export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
