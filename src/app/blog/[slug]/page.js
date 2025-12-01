"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "../../../data/blogData";
import { notFound } from "next/navigation";

export default function Page({ params }) {
  const { slug } = use(params);
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogData
    .filter((b) => b.id !== blog.id && b.category === blog.category)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen ">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a4174] via-[#0d5490] to-[#1a6bb3] text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm text-blue-200">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{blog.category}</span>
          </div>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-lg font-bold">
                {blog.author.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white">{blog.author.name}</p>
                <p className="text-sm">{blog.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Featured Image Placeholder */}
        <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-12">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
   <Image src={blog.image} alt="blog_image" fill />
          </div>
        </div>

        {/* Excerpt */}
        <div className="bg-blue-50 border-l-4 border-[#0a4174] p-6 rounded-r-xl mb-12">
          <p className="text-lg text-gray-700 leading-relaxed italic">
            {blog.excerpt}
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              {blog.content}
            </p>

            {/* Sample Content Structure */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Key Insights</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="bg-gradient-to-r from-[#0a4174] to-blue-600 text-white p-8 rounded-2xl my-8">
              <h3 className="text-2xl font-bold mb-3">💡 Pro Tip</h3>
              <p className="text-blue-100">
                This is a highlighted callout section that can be used to emphasize important points or tips throughout the article.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Detailed Analysis</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul className="list-disc list-inside space-y-2 my-6">
              <li>First key point about the topic</li>
              <li>Second important consideration</li>
              <li>Third critical insight</li>
              <li>Fourth essential element</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Conclusion</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500 mb-3">TAGS</h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-[#0a4174] hover:text-white transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500 mb-4">SHARE THIS ARTICLE</h3>
          <div className="flex gap-3">
            <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            <button className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0a4174] to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                {blog.author.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{blog.author.name}</h3>
                <p className="text-[#0a4174] font-medium mb-3">{blog.author.role}</p>
                <p className="text-gray-600 leading-relaxed">
                  An expert in the field with years of experience in international trade, logistics, and quality assurance. Passionate about sharing insights and helping businesses succeed in global markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedBlogs.map((relatedBlog) => (
              <Link
                key={relatedBlog.id}
                href={`/blog/${relatedBlog.slug}`}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#0a4174] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-[#0a4174]">
                      {relatedBlog.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0a4174] transition-colors line-clamp-2">
                    {relatedBlog.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {relatedBlog.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{relatedBlog.readTime}</span>
                    <svg className="w-5 h-5 text-[#0a4174] transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0a4174] via-[#0d5490] to-[#1a6bb3] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Export Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch with our team to discuss your requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0a4174] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Browse Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0a4174] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}