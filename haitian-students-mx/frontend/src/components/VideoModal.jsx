import { useRef, useEffect, useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'

const VideoModal = ({ src, title }) => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      setProgress((video.currentTime / video.duration) * 100)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setProgress(0)
    }

    video.addEventListener('timeupdate', updateProgress)
    video.addEventListener('ended', handleEnded)
    return () => {
      video.removeEventListener('timeupdate', updateProgress)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  const handleSeek = (e) => {
    const rect = e.target.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    if (videoRef.current) {
      videoRef.current.currentTime = pos * videoRef.current.duration
    }
  }

  // For demo purposes, if it's a placeholder URL, show a styled video player
  const isPlaceholder = src.includes('unsplash') || src.includes('placeholder')

  return (
    <div className="relative bg-black rounded-lg overflow-hidden">
      {isPlaceholder ? (
        <div className="aspect-video flex items-center justify-center bg-slate-900">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <Play className="w-10 h-10 text-white fill-white" />
            </div>
            <p className="text-white/60 text-lg">{title}</p>
            <p className="text-white/40 text-sm mt-2">Vidéo en cours de chargement...</p>
          </div>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            src={src}
            className="w-full max-h-[80vh]"
            onClick={togglePlay}
            playsInline
          />

          {/* Custom Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* Progress Bar */}
            <div
              className="w-full h-1 bg-white/30 rounded-full mb-4 cursor-pointer"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-haiti-red rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={togglePlay} className="text-white hover:text-haiti-red transition-colors">
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 fill-white" />}
                </button>
                <button onClick={toggleMute} className="text-white hover:text-haiti-red transition-colors">
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <span className="text-white/80 text-sm">{title}</span>
              </div>
              <button onClick={toggleFullscreen} className="text-white hover:text-haiti-red transition-colors">
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default VideoModal
