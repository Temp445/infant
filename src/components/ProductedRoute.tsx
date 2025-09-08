'use client'

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

interface AdminProtectedRouteProps {
  children: ReactNode
}

const ProductedRoute = ({ children }: AdminProtectedRouteProps) => {

  const { user, loading, isAdmin } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.replace('/')
    }
  }, [user, loading, isAdmin, router])

  if (loading) {
    return (
             <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-orange-600 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!user || !isAdmin) {
    return null
  }
  return <>{children}</>
}

export default ProductedRoute