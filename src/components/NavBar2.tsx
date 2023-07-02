import { UserButton, SignInButton, useUser } from "@clerk/nextjs"
import Link from 'next/link'
export function NavBar2() {
    const user = useUser();
    return (
        <>
<div className="min-h-full">
  <nav className="bg-red-600">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            IndoNC logo
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                {user.isSignedIn && (<Link href="/" className="bg-white text-stone-900 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</Link>)}
                {user.isSignedIn && (<Link href="/sellers" className="text-stone-50 hover:bg-red-800 hover:text-stone-50 rounded-md px-3 py-2 text-sm font-medium">Sellers</Link>)}
                {user.isSignedIn && (<Link href="/stores" className="text-stone-50 hover:bg-red-800 hover:text-stone-50 rounded-md px-3 py-2 text-sm font-medium">Stores</Link>)}
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <div className="relative ml-3">
            {!user.isSignedIn && (
                <div className="text-gray-50 text-sm font-medium">
                    <SignInButton />
                </div>
            )}
            {user.isSignedIn && (
                <UserButton
                afterSignOutUrl="http://localhost:3000/"
                userProfileMode="navigation"
                userProfileUrl={
                typeof window !== "undefined"
                    ? `${window.location.origin}/profile`
                    : undefined
                }
                />
            )}
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button type="button" className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-red-800 hover:text-stone-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div className="md:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <Link href="/" className="bg-stone-900 text-stone-50 block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</Link>
        <Link href="/sellers" className="text-stone-50 hover:bg-red-800 hover:text-stone-50 block rounded-md px-3 py-2 text-base font-medium">Sellers</Link>
        <Link href="/stores" className="text-stone-50 hover:bg-red-800 hover:text-stone-50 block rounded-md px-3 py-2 text-base font-medium">Stores</Link>
      </div>
    </div>
  </nav>

  <header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 capitalize">Hi {user.user?.firstName}!</h1>
    </div>
  </header>
</div>
</>
    )}