'use client'

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import Link from "next/link";
import { useWallet } from '@solana/wallet-adapter-react'

export default function Navbar() {
  const { publicKey } = useWallet()



  return (
    <header className="bg-yellow-100 p-4 flex justify-between items-center min-h-20 shadow-md">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          className="h-7 w-9 mr-2"
          width="500"
          height="300"
        />
        <h1 className="text-lg font-bold hidden md:block">Administrador de Eventos</h1>
      </Link>

      <div className="flex items-center gap-4">
        {
          publicKey && (
            <nav>
            <Link href="/mis-eventos" className="mx-2 px-1 font-semibold hover:text-white">
              Mis Eventos
            </Link>

            <Link href="/colaboraciones" className="mx-2 px-1 font-semibold hover:text-white">
              Colaboraciones
            </Link>
          </nav>
          )
        }
        <WalletMultiButton style={{}} />
      </div>
    </header>
  );
}
