import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const modules = [
    { title: "Luminary (Lum.i)", description: "Your AI companion for learning, productivity and life.", href: "/luminary" },
    { title: "Lumi Passport", description: "Your secure digital identity and global citizen passport.", href: "/passport" },
    { title: "Genesis Marketplace", description: "Discover services, digital products and opportunities.", href: "/marketplace" },
    { title: "Genesis Knowledge Bank", description: "Learn AI, business, finance and emerging technologies.", href: "/knowledge-bank" },
    { title: "Genesis Constellation", description: "Build your network, community and professional reputation.", href: "/constellation" },
    { title: "Genesis Air", description: "Travel, relocation, visas and global opportunities.", href: "/air" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white"> {/* Exact photo BG */}
      {/* Background Glows - Match photo: Gold/Cyan */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#FFD70008,transparent_60%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[#FFD700]/5 blur-[200px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-[#00F0FF]/5 blur-[200px]" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-
