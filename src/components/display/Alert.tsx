import { AlertProps } from "@/types/common.type"
import { useState, useEffect } from "react"

export default function Alert({ text, isError, show = true }: AlertProps) {
  const [visible, setVisible] = useState(show)
  const [animationClass, setAnimationClass] = useState('')

  useEffect(() => {
    if (show) {
      setVisible(true)
      setAnimationClass('alert-slide-in')
      setTimeout(() => setAnimationClass('alert-slide-out'), 3000)
      setTimeout(() => setVisible(false), 3500) 
    }                      
  }, [show])

  if (!visible) return null

  const closer = () => {
    setAnimationClass('alert-slide-out')
    setTimeout(() => setVisible(false), 500) 
  }

  const color = isError ? 'bg-red-400' : 'bg-green-400'

  return ( 
    <div className={`fixed w-full flex flex-row gap-2 items-center justify-center z-10 bottom-5 ${animationClass}`} onClick={closer}>
      <div className={`p-2 flex items-center justify-center h-10 ${color} rounded-full border text-white`}>
        {isError ? <span>&#9888;</span> : <span>&#10004;</span>}
      </div>
      <div className={`p-2 px-4 w-38 flex items-center justify-center h-10 ${color} rounded-3xl border text-white`}>
        {text}
      </div>
    </div>
  )
}