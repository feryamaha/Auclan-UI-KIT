'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@/scripts/Icon'

interface SmartAppLinkProps {
  className?: string
  appleStoreUrl: string
  playStoreUrl: string
  defaultUrl: string
  children?: React.ReactNode
}

export function SmartAppLink({
  className = '',
  appleStoreUrl,
  playStoreUrl,
  defaultUrl,
  children
}: SmartAppLinkProps) {
  const [platform, setPlatform] = useState<'ios' | 'android' | 'other'>('other')

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setPlatform('ios')
    } else if (/android/.test(userAgent)) {
      setPlatform('android')
    }
  }, [])

  const getAppUrl = () => {
    switch (platform) {
      case 'ios':
        return appleStoreUrl
      case 'android':
        return playStoreUrl
      default:
        return defaultUrl
    }
  }

  return (
    <Link href={getAppUrl()} className={className}>
      {children}
    </Link>
  )
} 