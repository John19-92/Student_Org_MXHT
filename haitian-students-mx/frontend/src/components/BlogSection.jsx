import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, BookOpen, Tag } from 'lucide-react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const BlogSection = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'news', label: 'News' },
    { id: 'story', label: 'Stories' },
    { id: 'guide', label: 'Guides' },
    { id: 'culture', label: 'Culture' },
    { id: 'academic', label: 'Academic' },
  ]

  useEffect(() => {
    fetchPosts()
  }, [selectedCategory])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const params = selectedCategory !== 'all' ? { category: selectedCategory } : {}
      const res = await axios.get(`${API_URL}/blog`, { params })
      setPosts(res.data.data || [])
    } catch (err) {
      console.error('Error fetching posts:', err)
      setPosts([
        {
          _id: '1',
          title: 'My First Semester in Mexico City: What I Learned',
          excerpt: 'Moving to a new country can be overwhelming. Here is my journey and tips for new Haitian students arriving in Mexico.',
          author: 'Marie-Claire Joseph',
          category: 'story',
          language: 'english',
          createdAt: '2024-01-15T10:00:00Z',
          image: 'https://images.unsplash.com/photo-1518182170546-0766bc6f9213?w=800'
        },
        {
          _id: '2',
          title: 'Complete Guide: How to Get Your Student Visa',
          excerpt: 'A step-by-step guide to navigating the Mexican student visa process without the stress.',
          author: 'Jean-Pierre Louis',
          category: 'guide',
          language: 'english',
          createdAt: '2024-02-01T14:30:00Z',
          image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800'
        },
        {
          _id: '3',
          title: 'Celebrating Haitian Flag Day in Mexico',
          excerpt: 'A look back at our annual celebration that brought together over 200 students in Mexico City.',
          author: 'AEHM Association',
          category: 'news',
          language: 'english',
          createdAt: '2024-05-18T09:00:00Z',
          image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800'
        },
        {
          _id: '4',
          title: 'Haitian Cuisine in Mexico: Where to Find the Ingredients',
          excerpt: 'A practical guide to markets and grocery stores in Mexico where you can find essential Haitian cooking ingredients.',
          author: 'Sophie Durand',
          category: 'culture',
          language: 'english',
          createdAt: '2024-03-10T11:00:00Z',
          image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const getCategoryColor = (cat) => {
    const colors = {
      news: 'bg-blue-100 text-blue-700',
      story: 'bg-amber-100 text-amber-700',
      guide: 'bg-green-100 text-green-700',
      culture: 'bg-purple-100 text-purple-700',
      academic: 'bg-rose-100 text-rose-700',
    }
    return colors[cat] || 'bg-slate-100 text-slate-700'
  }

  const getCategoryLabel = (cat) => {
    const labels = {
      news: 'News',
      story: 'Story',
      guide: 'Guide',
      culture: 'Culture',
      academic: 'Academic',
    }
    return labels[cat] || cat
  }

  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-haiti-blue font-semibold text-sm tracking-wider uppercase">Our Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Blog & News
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover stories, guides, and news from our community of Haitian students in Mexico.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Tag className="w-5 h-5 text-slate-400 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-haiti-red text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-haiti-blue" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image || 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800'}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                      {getCategoryLabel(post.category)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.createdAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-haiti-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <button className="inline-flex items-center gap-2 text-haiti-red font-semibold text-sm hover:gap-3 transition-all">
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">No articles in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogSection
