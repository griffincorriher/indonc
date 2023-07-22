import Link from "next/link";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Spinner } from "./Spinner";
import { Clerk } from "@clerk/clerk-sdk-node";
import { api } from "~/utils/api";
import { clerkClient } from "@clerk/nextjs";
import { ListUsersResponse } from "@clerk/clerk-sdk-node/dist/clerk/identity/listUsers";



export function ProductListView() {
  const sellers = api.sellers.list.useQuery();
  if (sellers.isLoading) {
    return (
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <Spinner />
      </div>
    );
  }

  if (sellers.isError || !sellers.data) {
    return (
      <div className="flex flex-row justify-center w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        Error retrieving sellers
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Sellers</h5>
        <Link href="/sellers" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
        </Link>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {sellers.data.map((seller) => (
            <li key={seller.id} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src={seller.clerkUserId} alt={seller.clerkUserId} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {seller.facebook}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {seller.countyName} County
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {seller.facebook}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
