# Association des Étudiants Haïtiens au Mexique (AEHM)

## Full-Stack Website

A modern, responsive website for the Haitian student organization in Mexico featuring animated blob hero section, media gallery (images & videos), blog system, and multilingual support.

## Tech Stack

### Backend
- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **Multer** for file uploads
- **CORS** enabled

### Frontend
- **React 18** + **Vite**
- **Tailwind CSS**
- **Framer Motion** for animations
- **Lucide React** for icons
- **Axios** for API calls

## Features

- 🎨 **Animated Blob Hero** — CSS + SVG animated organic shapes with Framer Motion
- 🖼️ **Media Gallery** — Filterable grid supporting both images and videos with lightbox modal
- 🎬 **Video Player** — Custom video controls with play/pause, mute, seek, fullscreen
- 📝 **Blog System** — Category-filtered blog cards with author, date, and excerpts
- 🌍 **Multilingual Navbar** — French, Spanish, Haitian Creole language switcher
- 📱 **Fully Responsive** — Mobile-first design with hamburger menu
- ⚡ **Fast Animations** — Scroll-triggered reveals and hover effects

## Project Structure

```
haitian-students-mx/
├── backend/
│   ├── config/db.js          # MongoDB connection
│   ├── models/
│   │   ├── Media.js          # Media schema (image/video)
│   │   └── Blog.js           # Blog post schema
│   ├── routes/
│   │   ├── media.js          # Media CRUD + upload
│   │   └── blog.js           # Blog CRUD
│   ├── middleware/
│   │   └── upload.js         # Multer configuration
│   ├── server.js             # Express server entry
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx      # Top navigation with language switcher
    │   │   ├── BlobHero.jsx    # Animated blob hero section
    │   │   ├── MediaGallery.jsx # Image/video gallery with filters
    │   │   ├── VideoModal.jsx  # Video player modal
    │   │   ├── BlogSection.jsx # Blog cards with categories
    │   │   └── Footer.jsx      # Site footer
    │   ├── pages/
    │   │   └── Home.jsx        # Main landing page
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Backend Setup

```bash
cd backend
cp .env.example .env
# Edit .env and add your MongoDB URI
npm install
npm run dev
```

Server runs on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`

### Environment Variables

**Backend `.env`:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/haitian_students_mx
```

**Frontend `.env`:**
```
VITE_API_URL=http://localhost:5000/api
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/media/upload` | Upload image/video |
| GET | `/api/media` | List all media |
| GET | `/api/media/:id` | Get single media |
| DELETE | `/api/media/:id` | Delete media |
| POST | `/api/blog` | Create blog post |
| GET | `/api/blog` | List all posts |
| GET | `/api/blog/:id` | Get single post |
| PUT | `/api/blog/:id` | Update post |
| DELETE | `/api/blog/:id` | Delete post |

## Upload Limits
- Max file size: **50MB**
- Allowed images: JPEG, PNG, GIF, WebP
- Allowed videos: MP4, WebM, OGG, MOV

## Customization

### Colors
Edit `tailwind.config.js` to change brand colors:
```js
colors: {
  haiti: { blue: '#00209F', red: '#D21034' },
  mexico: { green: '#006847', white: '#FFFFFF', red: '#CE1126' }
}
```

### Blob Animation Speed
Edit animation durations in `BlobHero.jsx`:
```js
transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
```

## License
MIT
