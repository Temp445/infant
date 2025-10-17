'use client'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect, useMemo } from 'react'
import { jwtDecode } from 'jwt-decode'
import logo from "@/assets/Logo1.png"
import Image from 'next/image'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type NavigationItem = {
  name: string
  href: string
  onClick?: () => void
}

type DecodedToken = {
  role?: string
  [key: string]: any
}

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
      try {
        const decoded = jwtDecode<DecodedToken>(token)
        if (decoded.role) setUserRole(decoded.role)
      } catch (err) {
        console.error('Failed to decode token:', err)
      }
    } else {
      setIsAuthenticated(false)
      setUserRole(null)
    }
  }, [])

  const handleLogout = (): void => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    setUserRole(null)
    router.push('/login')
  }

  const navigation: NavigationItem[] = useMemo(() => {
    const items: NavigationItem[] = [
      {name: 'Home', href:'/'},
      { name: 'About', href: '/about' },
      { name: 'Products', href: '/products' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Our Machinery', href: '/machinery' },
      { name: 'Services', href: '/services' },
    ]

    if (userRole === 'ADMIN') {
      items.push({ name: 'Dashboard', href: '/admin' })
    }

    items.push(
      isAuthenticated
        ? { name: 'Logout', href: '#', onClick: handleLogout }
        : { name: 'Site Admin', href: '/login' }
    )

    return items
  }, [userRole, isAuthenticated])

  return (
    <Disclosure as="nav" className="relative z-50 bg-white backdrop-blur-md  border-b border-gray-200">
      {({ open }) => (
        <>
          <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              
              <Link href="/" className="flex flex-col items-center space-x-3 group">
                <div className="relative">
                  <Image 
                    src={logo} 
                    alt="Company Logo" 
                    className="h-20 w-full" 
                  />
                </div>
              
              </Link>

              {/* Desktop */}
              <div className="hidden lg:flex space-x-5">
                {navigation.map((item) => {
                 const isActive = pathname === item.href;
                 if (item.onClick) {
                   return (
                     <button
                       key={item.name}
                       onClick={item.onClick}
                       className={classNames(
                         'px-4 py-2 text-sm font-medium rounded-md transition-all duration-300',
                         'text-gray-700 hover:bg-orange-500 hover:text-white hover:scale-105 -mt-1  px-4',
                         item.name !== "Logout" ? 'bg-orange-600 text-white font-semibold' : ''
                       )}
                     >
                       {item.name}
                     </button>
                   )
                 } else {
                   return (
                     <Link
                       key={item.name}
                       href={item.href}
                       className={classNames(
                         'relative px-3 py-1.5 text-sm font-medium transition-all duration-300',
                         isActive
                            ? 'bg-orange-600 text-white font-semibold rounded'
                            : 'text-gray-700 hover:text-white hover:bg-orange-500 rounded'
                       )}
                     >
                       {item.name}
                     </Link>
                   )
                 }
               })}

              </div>

              {/* Mobile menu*/}
              <div className="flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors duration-200">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile*/}
         <Disclosure.Panel className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-10 transition-all duration-300">
  <div className="space-y-1 px-4 pt-2 pb-4">
    {navigation.map((item) => {
      const isActive = pathname === item.href
      return item.onClick ? (
        <button
          key={item.name}
          onClick={item.onClick}
          className={classNames(
            'block w-full text-left rounded-lg px-4 py-3 text-base font-medium transition-all duration-200',
            'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
          )}
        >
          {item.name}
        </button>
      ) : (
        <Link
          key={item.name}
          href={item.href}
          className={classNames(
            'block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200',
            isActive 
              ? 'text-orange-600 font-semibold bg-orange-50 border-l-4 border-orange-600' 
              : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
          )}
        >
          {item.name}
        </Link>
      )
    })}
  </div>
</Disclosure.Panel>

        </>
      )}
    </Disclosure>
  )
}