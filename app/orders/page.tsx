"use client"
import useSWR from "swr";
import Logo from "@/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import LatestOrderItem from "@/components/order/LatestOrderItem";

export default function OrdersPage() {

    const url = '/admin/orders/api'
    const fetcher = () => fetch(url).then(res => res.json()).then(data => data)
    const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 60000,
        revalidateOnFocus: false // para no ahcer consultas cuando se cambia de ventana
    })
    //const orders = await getPendingOrders()
    //console.log(JSON.stringify(orders, null, 2))
    //const refresOrders = async () => {
    //    "use server"
    //    revalidatePath('/admin/orders')
    //}

    if (isLoading) return <p>'Cargando.. '</p>

    if (data) return (
        <>
            <h1 className="text-center mt-20 text-6xl font-black"> Ordenes Listas</h1>
            <Logo />

            {data.length ? (
                <div className="grid grid-cols-1 gap-5 max-w-5xl mx-auto mt-10">
                    {data.map(order => (
                        <LatestOrderItem
                            key={order.id}
                            order={order}
                        />
                    ))}

                </div>
            ) : <p className="text-center my-10">No hay ordenes listas</p>}
        </>
    )
}
