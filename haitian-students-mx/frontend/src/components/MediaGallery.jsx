import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Image as ImageIcon, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react'
import VideoModal from './VideoModal'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const MediaGallery = () => {
  const [media, setMedia] = useState([])
  const [filter, setFilter] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'events', label: 'Events' },
    { id: 'culture', label: 'Culture' },
    { id: 'academic', label: 'Academic' },
    { id: 'daily_life', label: 'Daily Life' },
  ]

  useEffect(() => {
    fetchMedia()
  }, [filter])

  const fetchMedia = async () => {
    try {
      setLoading(true)
      const params = filter !== 'all' ? { category: filter } : {}
      const res = await axios.get(`${API_URL}/media`, { params })
      setMedia(res.data.data || [])
    } catch (err) {
      console.error('Error fetching media:', err)
      setMedia([
        { _id: '1', title: 'Independence Day Celebration', type: 'image', path: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?w=800', category: 'events' },
        { _id: '2', title: 'Haitian Carnival', type: 'video', path: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800', category: 'culture' },
        { _id: '3', title: 'University Conference', type: 'image', path: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', category: 'academic' },
        { _id: '4', title: 'Park Meetup', type: 'image', path: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800', category: 'daily_life' },
        { _id: '5', title: 'Cultural Evening', type: 'video', path: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800', category: 'events' },
        { _id: '6', title: 'Haitian Cuisine', type: 'image', path: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800', category: 'culture' },
      ])
    } finally {
      setLoading(false)
    }
  }

  const filteredMedia = filter === 'all' ? media : media.filter(m => m.category === filter)

  const openLightbox = (item, index) => {
    setSelectedItem(item)
    setCurrentIndex(index)
  }

  const closeLightbox = useCallback(() => {
    setSelectedItem(null)
  }, [])

  const navigate = useCallback((direction) => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredMedia.length
      : (currentIndex - 1 + filteredMedia.length) % filteredMedia.length
    setCurrentIndex(newIndex)
    setSelectedItem(filteredMedia[newIndex])
  }, [currentIndex, filteredMedia])

  useEffect(() => {
    if (!selectedItem) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') navigate('next')
      if (e.key === 'ArrowLeft') navigate('prev')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedItem, navigate, closeLightbox])

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-haiti-red font-semibold text-sm tracking-wider uppercase">Memories & Moments</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our events, culture, and everyday moments through photos and videos.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Filter className="w-5 h-5 text-slate-400 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat.id
                  ? 'bg-haiti-blue text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredMedia.map((item, index) => (
                <motion.div
                  key={item._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-slate-100"
                  onClick={() => openLightbox(item, index)}
                >
                  <img
                    src={item.path.startsWith('http') ? item.path : `${API_URL.replace('/api', '')}${item.path}`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        {item.type === 'video' ? (
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Play className="w-5 h-5 text-white fill-white" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <ImageIcon className="w-5 h-5 text-white" />
                          </div>
                        )}
                        <span className="text-white/80 text-xs font-medium uppercase tracking-wider">
                          {item.type === 'video' ? 'Video' : 'Photo'}
                        </span>
                      </div>
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {!loading && filteredMedia.length === 0 && (
          <div className="text-center py-20">
            <ImageIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">No media in this category yet.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>
            <button
              className="absolute left-4 md:left-8 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); navigate('prev') }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 md:right-8 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); navigate('next') }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/70 text-sm">
              {currentIndex + 1} / {filteredMedia.length}
            </div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl max-h-[85vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'video' ? (
                <VideoModal
                  src={selectedItem.path.startsWith('http') ? selectedItem.path : `${API_URL.replace('/api', '')}${selectedItem.path}`}
                  title={selectedItem.title}
                />
              ) : (
                <div className="relative">
                  <img
                    src={selectedItem.path.startsWith('http') ? selectedItem.path : `${API_URL.replace('/api', '')}${selectedItem.path}`}
                    alt={selectedItem.title}
                    className="w-full max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                    <h3 className="text-white text-xl font-semibold">{selectedItem.title}</h3>
                    {selectedItem.description && (
                      <p className="text-white/70 mt-1">{selectedItem.description}</p>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default MediaGallery
