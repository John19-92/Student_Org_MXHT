import { motion } from 'framer-motion'
import { Users, BookOpen, Globe, Heart, Award, Calendar } from 'lucide-react'
import Navbar from '../components/Navbar'
import BlobHero from '../components/BlobHero'
import MediaGallery from '../components/MediaGallery'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'

const Home = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Membres Actifs' },
    { icon: Globe, value: '25+', label: 'Universités Partenaires' },
    { icon: Calendar, value: '50+', label: 'Événements par An' },
    { icon: Award, value: '10+', label: "Années d'Existence" },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Solidarité',
      description: "Nous croyons en la force de la communauté et en l'entraide entre étudiants haïtiens au Mexique."
    },
    {
      icon: BookOpen,
      title: 'Excellence Académique',
      description: 'Promouvoir la réussite académique et professionnelle de nos membres dans toutes les disciplines.'
    },
    {
      icon: Globe,
      title: 'Échange Culturel',
      description: 'Créer des ponts entre la culture haïtienne et la culture mexicaine à travers des événements et partenariats.'
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero with Animated Blobs */}
      <BlobHero />

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-haiti-red font-semibold text-sm tracking-wider uppercase">Qui Sommes-Nous</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
                Une Communauté,{' '}
                <span className="text-haiti-blue">Une Famille</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                L'Association des Étudiants Haïtiens au Mexique (AEHM) est une organisation à but non lucratif 
                fondée pour accompagner, soutenir et représenter les étudiants haïtiens dans leur parcours 
                académique au Mexique.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                De Mexico City à Guadalajara, en passant par Monterrey et Puebla, nous créons un réseau 
                solide qui permet à chaque étudiant de trouver sa place, de réussir ses études et de 
                préserver son héritage culturel loin de son pays natal.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#gallery" className="px-6 py-3 bg-haiti-blue text-white rounded-full font-semibold hover:bg-haiti-blue/90 transition-colors">
                  Voir Nos Activités
                </a>
                <a href="#contact" className="px-6 py-3 border-2 border-slate-200 text-slate-700 rounded-full font-semibold hover:border-haiti-blue hover:text-haiti-blue transition-colors">
                  Nous Contacter
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl overflow-hidden h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600" 
                      alt="Students" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600" 
                      alt="Event" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600" 
                      alt="Culture" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600" 
                      alt="Community" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-haiti-blue to-haiti-red flex items-center justify-center text-white font-bold text-xl">
                  🇭🇹
                </div>
                <div>
                  <p className="font-bold text-slate-900">Depuis 2014</p>
                  <p className="text-sm text-slate-500">10 ans d'engagement</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-haiti-blue to-haiti-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-white/80 mx-auto mb-3" />
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-haiti-blue font-semibold text-sm tracking-wider uppercase">Nos Valeurs</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
              Ce qui nous Anime
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-haiti-blue/10 to-haiti-red/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-haiti-blue" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <MediaGallery />

      {/* Blog Section */}
      <BlogSection />

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-haiti-blue/20 to-haiti-red/20" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Rejoignez Notre Communauté
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Que vous soyez étudiant haïtien au Mexique ou que vous souhaitiez nous soutenir, 
              il y a une place pour vous dans notre famille.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-white/90 transition-colors shadow-lg">
                Devenir Membre
              </a>
              <a href="#" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/30 hover:bg-white/20 transition-colors">
                Soutenir l'Association
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
