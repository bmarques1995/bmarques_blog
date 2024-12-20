"use client";
import { BlogPosts } from 'app/components/posts'
import { useState } from 'react';

export default function Page() {
  const [b2b, setB2B] = useState(false);
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {b2b ? 'About me' : 'About my job'}
      </h1>
      <p className="mb-4">
        {``}
      </p>
    </section>
  )
}
