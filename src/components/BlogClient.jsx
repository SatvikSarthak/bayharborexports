"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData, categories } from "@/data/blogData";



export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    let filtered = blogData;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const featuredBlogs = blogData.filter(blog => blog.featured);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-20 px-6 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 bg-[#0a4174]/10 text-[#0a4174] rounded-full text-sm font-medium">
              Our Blog
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 leading-tight text-gray-900">
            Insights & Stories
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4174] to-blue-600">
              From the Export World
            </span>
          </h1>

          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, guides, and stories from the world of global trade, logistics, and quality products.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0a4174] to-transparent opacity-20"></div>
      </section>

      
      {featuredBlogs.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-6 h-6 text-[#0a4174]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
            </svg>
            <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#0a4174] hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-[#0a4174] to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                     <Image src={blog.image} alt="blog_image" fill />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-[#0a4174] font-semibold">{blog.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{blog.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0a4174] transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#0a4174] to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {blog.author.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{blog.author.name}</p>
                        <p className="text-xs text-gray-500">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                      </div>
                    </div>

                    <svg className="w-6 h-6 text-[#0a4174] transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Filters and Search Section */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="w-full md:w-auto">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-[#0a4174] to-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-700 border border-gray-200 hover:border-[#0a4174] hover:text-[#0a4174]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:border-[#0a4174] focus:ring-2 focus:ring-[#0a4174]/20 outline-none transition-all"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter to find what you&apos;re looking for.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === "All" ? "All Articles" : selectedCategory}
                <span className="text-gray-400 font-normal ml-2">({filteredBlogs.length})</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#0a4174] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                     <Image src={blog.image} alt="blog_image" fill />
                    </div>
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-[#0a4174]">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className="text-gray-400">•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0a4174] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {blog.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-gradient-to-br from-[#0a4174] to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                          {blog.author.name.charAt(0)}
                        </div>
                        <span className="text-xs text-gray-700 font-medium">{blog.author.name}</span>
                      </div>

                      <svg className="w-5 h-5 text-[#0a4174] transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>

    </div>
  );
}