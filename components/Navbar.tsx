"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  SignInButton,
  SignUpButton,
  Show,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Navbar() {
  const pathName = usePathname();
  const { isSignedIn, user } = useUser();

  const itemsNav = [
    {
      label: "Library",
      href: "/library",
    },
    {
      label: "Add New",
      href: "/book/new",
    },
  ];

  return (
    <header className="w-full fixed z-50 bg-('--bg-primary')">
      <div className="wrapper navbar-height py-4 flex justify-between items-center">
        <Link href="/" className="flex gap-0.5 items-center">
          <Image
            src="/assets/logo.png"
            alt="Bookified Logo"
            width={42}
            height={26}
          />
          <span className="logo-text">Bookified</span>
        </Link>

        <nav className="w-fit flex gap-7.5 items-center">
          {itemsNav.map(({ label, href }) => {
            const isActive =
              pathName === href || (href !== "/" && pathName.startsWith(href));
            return (
              <Link
                key={label}
                href={href}
                className={cn(
                  "nab-link-base",
                  isActive ? "nav-link-active" : "text-black hover:opacity-70",
                )}
              >
                {label}
              </Link>
            );
          })}
          <div className="flex gap-7.5 items-center ml-4">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="text-black hover:opacity-70">Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="text-black hover:opacity-70">Sign Up</button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <div className="flex gap-2 items-center">
                <UserButton />
                {user?.firstName && (
                  <Link
                    href="/subscriptions"
                    className="nav-user-name text-black hover:opacity-70"
                  >
                    {user.firstName}
                  </Link>
                )}
              </div>
            </Show>
          </div>
        </nav>
      </div>
    </header>
  );
}
