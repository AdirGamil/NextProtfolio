'use client'

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

const SliderButtons = () => {
  const swiper = useSwiper()

  return (
    <div className="absolute bottom-4 right-4 flex gap-4 z-10">
      <button
        onClick={() => swiper.slidePrev()}
        className="p-2 bg-accent rounded-full shadow cursor-pointer hover:bg-accent-hover transition-colors"
        aria-label="Previous Slide"
      >
        <PiCaretLeftBold size={24} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="p-2 bg-accent rounded-full shadow cursor-pointer hover:bg-accent-hover transition-colors"
        aria-label="Next Slide"
      >
        <PiCaretRightBold size={24} />
      </button>
    </div>
  )
}

export default SliderButtons
