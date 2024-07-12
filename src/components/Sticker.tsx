import Image from 'next/image'

interface StickerProps {
  onOpen: () => void
}

export default function Sticker({ onOpen }: StickerProps) {
  return (
    <div className="sticker" onClick={(e) => { e.stopPropagation(); onOpen(); }}>
      <Image src="/sticker-1.png" alt="Sticker" width={80} height={80} />
    </div>
  )
}