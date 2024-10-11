import OrderSidebar from "@/components/order/OrderSidebar";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <div className="md:flex">
        <OrderSidebar />

        <main>
          {children}
        </main>
      </div>
    </>
  )
}
