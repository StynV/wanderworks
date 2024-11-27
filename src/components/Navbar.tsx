'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const Navbar = () => {
  const linkClassName = 'flex w-full items-center py-2 text-lg font-semibold'

  const links = [
    {
      title: 'Wie zijn wij',
      href: '/wie-zijn-wij',
    },
    {
      title: 'Art projects',
      href: '/art-projects',
    },
    {
      title: 'Drawing a line',
      href: '/',
    },
    {
      title: 'Opera',
      href: '/opera',
    },
    {
      title: 'Bar Goesting',
      href: '/bar-goesting',
    },
    {
      title: 'UFO Airport',
      href: '/ufo-airport',
    },
    {
      title: 'Workshops',
      href: '/workshops',
    },
    {
      title: 'Agenda',
      href: '/agenda',
    },
  ]

  return (
    <>
      <Sheet>
        <SheetTrigger asChild className="absolute top-4 left-80 z-50">
          <div>
            <Button variant="secondary" size="icon" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent side="right">
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <span className="sr-only">Wanderworks</span>
          </Link>
          <div className="grid gap-2 py-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={linkClassName}
                prefetch={false}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link, index) => (
            <NavigationMenuItem key={index}>
              <Link
                href={link.href}
                passHref
                className={navigationMenuTriggerStyle()}
              >
                {link.title}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
export default Navbar
