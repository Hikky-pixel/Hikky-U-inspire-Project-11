'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogPosts, blogCategories } from '@/data/blog';
import { ArrowRight, Clock, Calendar, Tag } from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const filtered =
    activeCategory === 'All' ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  const post = blogPosts.find((p) => p.id === selectedPost);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#0F2A4A] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            News & Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Construction <span className="text-orange-400">Blog & News</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Expert insights, industry news, and practical guidance from BuildPro&apos;s team of
            construction professionals.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === 'All' && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <button
              onClick={() => setSelectedPost(blogPosts[0].id)}
              className="w-full bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-100 text-left group"
            >
              <div className="grid lg:grid-cols-2">
                <div className="overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-72 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      Featured
                    </span>
                    <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-[#0F2A4A] mb-4 group-hover:text-orange-500 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-5 text-xs text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <img
                        src={blogPosts[0].authorImage}
                        alt={blogPosts[0].author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-[#0F2A4A] text-xs">
                          {blogPosts[0].author}
                        </div>
                        <div className="text-gray-400 text-xs">{blogPosts[0].authorRole}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-orange-500 font-bold text-sm group-hover:gap-3 transition-all">
                    Read Full Article
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((post) => (
              <button
                key={post.id}
                onClick={() => setSelectedPost(post.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 text-left group"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#0F2A4A] text-base leading-tight mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <span className="text-xs text-gray-600 font-medium">{post.author}</span>
                    </div>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Post Modal */}
      {selectedPost && post && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 font-bold text-lg shadow-lg"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h1 className="text-2xl font-black text-[#0F2A4A] mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-5 text-xs text-gray-500 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-[#0F2A4A] text-sm">{post.author}</div>
                    <div className="text-gray-400 text-xs">{post.authorRole}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </div>
              </div>
              <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-100">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full"
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors inline-flex items-center gap-2"
                >
                  Contact BuildPro
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter */}
      <section className="py-16 bg-[#0F2A4A]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Never Miss an Update</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to receive our latest articles, project updates, and industry insights
            directly in your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-4 rounded-xl text-gray-800 text-sm outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-4 rounded-xl text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
