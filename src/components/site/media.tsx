import { useState, useEffect, useRef } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OfficeImage({
  file,
  label,
  className = "",
}: {
  file: string;
  label: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`office-image ${className}`}>
      {!failed && (
        <img src={`/media/${file}`} alt={label} loading="lazy" onError={() => setFailed(true)} />
      )}
      {failed && (
        <div
          className="photo-placeholder"
          role="img"
          aria-label={`${label} — fotografia não disponibilizada`}
        >
          <span className="placeholder-monogram">
            TL<span>.</span>
          </span>
          <span className="placeholder-rule" />
          <span className="placeholder-caption">{label}</span>
        </div>
      )}
    </div>
  );
}
export function HeroMedia() {
  const [available, setAvailable] = useState(false);
  const [playing, setPlaying] = useState(true);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch("/media/hero-escritorio.mp4", { method: "HEAD", signal: controller.signal })
      .then((response) => {
        if (response.ok && response.headers.get("content-type")?.startsWith("video/"))
          setAvailable(true);
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.current?.pause();
      setPlaying(false);
    }
  }, [available]);
  return (
    <>
      <div className="hero-art" aria-hidden="true" style={{backgroundImage: "linear-gradient(90deg, rgba(20,35,43,.86), rgba(20,35,43,.52)), url(/media/hero-poster.webp)", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="architectural-lines" />
        <div className="hero-monogram">
          TL<span>.</span>
        </div>
        <span className="art-caption">ÉTICA. TÉCNICA. PROXIMIDADE.</span>
      </div>
      {available && (
        <>
          <video
            ref={video}
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/media/hero-poster.webp"
            onError={() => setAvailable(false)}
            aria-hidden="true"
          >
            <source src="/media/hero-escritorio.mp4" type="video/mp4" />
          </video>
          <Button
            variant="ghost"
            size="icon"
            className="video-control"
            aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
            onClick={() => {
              if (playing) video.current?.pause();
              else void video.current?.play();
              setPlaying(!playing);
            }}
          >
            {playing ? <Pause /> : <Play />}
          </Button>
        </>
      )}
    </>
  );
}
