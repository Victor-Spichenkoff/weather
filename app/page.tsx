"use client"

import Image from "next/image";
import Header from "../components/template/header";
import Display from "@/components/template/display";
import Footer from "@/components/template/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Header></Header>
      <main className="flex-1  flex justify-center items-center w-screen">
        <Display />
      </main>
      <Footer></Footer>
    </div>
  );
}
