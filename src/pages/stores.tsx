import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { SellerCard } from "~/components/SellerCard";
import { api } from "~/utils/api";

const Stores: NextPage = () => {
  const router = useRouter();
  const sellers = api.sellers.list.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-first bg-zinc-100">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 p-4">
          {sellers?.data?.map((seller) => (
            <SellerCard key={seller.userId} seller={seller}/>
          ))}
        </div>
      </main>
    </>
  );
};

export default Stores;