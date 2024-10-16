import Image from "next/image"
import { Category } from "@prisma/client"


type categoryIconProps = {
    category: Category
}

export default function CategoryIcon({ category }: categoryIconProps) {
    return (
        <div
            className={` flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
        >
            <div className="w-16 h-16 relative">
                <Image
                    fill
                    src={`/icon_${category.slug}.svg`}
                    alt="imagen categoria"
                />
            </div>

            <p
                className="text-xl font-bold"
            >{category.name}</p>
        </div>

    )
}
