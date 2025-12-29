import React from 'react'

export default function Header(){
  return (
    <header className="fixed inset-x-0 top-4 z-30">
      <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between bg-transparent backdrop-blur-sm border-2 border-black rounded-lg shadow-[8px_8px_0_rgba(0,0,0,1)]">
        <div className="text-3xl font-extrabold text-[#00ffff]" style={{fontFamily: "var(--font-secondary)"}}>quantica</div>
        <ul className="flex gap-12 items-center text-[#00ffff]">
          <li className="text-2xl hover:underline cursor-pointer" style={{fontFamily: 'var(--font-primary)'}}>home</li>
          <li className="text-2xl hover:underline cursor-pointer" style={{fontFamily: 'var(--font-primary)'}}>about us</li>
          <li className="text-2xl hover:underline cursor-pointer" style={{fontFamily: 'var(--font-primary)'}}>events</li>
          <li className="text-2xl hover:underline cursor-pointer" style={{fontFamily: 'var(--font-primary)'}}>sponsors</li>
        </ul>
        <button className="px-5 py-2 border-2 border-[#00ffff] text-[#00ffff] rounded-sm hover:bg-[#00ffff]/10 text-lg">register</button>
      </nav>
    </header>
  )
}
