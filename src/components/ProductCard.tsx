import { useUser } from "@clerk/nextjs"
import { type Product } from "@prisma/client";

export function ProductCard({ product }: {product: Product}) {
    return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg" alt="" />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name} - ${product.price}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-6">{product.description}</p>
        </div>
    </div>
    )}