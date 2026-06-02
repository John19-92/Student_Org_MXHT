import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState('fr')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: { fr: 'Accueil', es: 'Inicio', ht: 'Akèy' } },
    { href: '#about', label: { fr: 'À Propos', es: 'Nosotros', ht: 'Kiyès Nou Ye' } },
    { href: '#gallery', label: { fr: 'Galerie', es: 'Galería', ht: 'Galeri' } },
    { href: '#blog', label: { fr: 'Blog', es: 'Blog', ht: 'Blog' } },
    { href: '#contact', label: { fr: 'Contact', es: 'Contacto', ht: 'Kontak' } },
  ]

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'es', label: 'ES' },
    { code: 'ht', label: 'HT' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-haiti-blue to-haiti-red flex items-center justify-center text-white font-bold text-lg">
              H
            </div>
            <span className={`font-bold text-lg tracking-tight ${scrolled ? 'text-slate-800' : 'text-white'}`}>
              AEHM
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-haiti-red ${
                  scrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.label[lang]}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-1 ml-4">
              <Globe className={`w-4 h-4 ${scrolled ? 'text-slate-600' : 'text-white'}`} />
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
                    lang === l.code
                      ? 'bg-haiti-blue text-white'
                      : scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white/80 hover:bg-white/20'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={scrolled ? 'text-slate-800' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-slate-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-700 hover:text-haiti-red font-medium py-2"
                >
                  {link.label[lang]}
                </a>
              ))}
              <div className="flex gap-2 pt-2 border-t">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-3 py-1 text-xs font-semibold rounded ${
                      lang === l.code ? 'bg-haiti-blue text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
