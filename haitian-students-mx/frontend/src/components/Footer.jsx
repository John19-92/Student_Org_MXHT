import { Heart, Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-haiti-blue to-haiti-red flex items-center justify-center text-white font-bold">
                H
              </div>
              <span className="font-bold text-xl">AEHM</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Association of Haitian Students in Mexico. Uniting our voices, celebrating our culture, and building our future together.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-haiti-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-haiti-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-haiti-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-white transition-colors text-sm">Gallery</a></li>
              <li><a href="#blog" className="text-slate-400 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Become a Member</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">New Student Guide</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Scholarships</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Student Housing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Health & Insurance</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-haiti-red shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Mexico City, Mexico</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-haiti-red shrink-0" />
                <a href="mailto:contact@aehm.org" className="text-slate-400 hover:text-white transition-colors text-sm">
                  contact@aehm.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-haiti-red shrink-0" />
                <a href="tel:+521234567890" className="text-slate-400 hover:text-white transition-colors text-sm">
                  +52 1 234 567 890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Association of Haitian Students in Mexico. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-haiti-red fill-haiti-red" /> for the community
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
