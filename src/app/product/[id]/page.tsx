'use client';

import { useParams } from "next/navigation";

export default function ProductPage() {
  const { id } = useParams(); 

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-2xl font-bold">Product Page</h1>
      <p className="text-gray-700">Product ID: {id}</p>
    </div>
  );
}
