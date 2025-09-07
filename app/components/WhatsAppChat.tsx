"use client"

import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface WhatsAppChatProps {
  isOpen: boolean
  onClose: () => void
}

export default function WhatsAppChat({ isOpen, onClose }: WhatsAppChatProps) {
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message)
      window.open(`https://web.whatsapp.com/send?phone=51959924343&text=${encodedMessage}`, '_blank')
      setMessage('')
      onClose()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickMessages = [
    "Hola, necesito información sobre sus servicios",
    "¿Cuáles son sus tarifas?",
    "Quiero solicitar un presupuesto"
  ]

  if (!isOpen) return null

  return (
    <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
            <img 
              src="/images/apolo300-logo.webp" 
              alt="APOLO300 Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold">APOLO300</h3>
            <p className="text-xs text-green-100">Asesor Comercial</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-green-100 transition-colors"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Messages */}
      <div className="p-4 h-64 overflow-y-auto bg-gray-50">
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-500">
            <p className="text-sm font-medium text-green-600">Apolo300</p>
            <p className="text-sm text-gray-600 mt-1">
              Hola! Bienvenidos a APOLO300 👋
            </p>
            <p className="text-xs text-gray-400 mt-2">19:38</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-500">
            <p className="text-sm text-gray-600">
              ¿En qué podemos ayudarte?
            </p>
          </div>
        </div>
      </div>

      {/* Quick replies */}
      <div className="p-3 border-t border-gray-200">
        <p className="text-xs text-gray-500 mb-2">Mensajes rápidos:</p>
        <div className="space-y-1">
          {quickMessages.map((msg, index) => (
            <button
              key={index}
              onClick={() => setMessage(msg)}
              className="w-full text-left text-xs bg-gray-100 hover:bg-gray-200 p-2 rounded transition-colors"
            >
              {msg}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-200 bg-white">
        <div className="flex space-x-2">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu mensaje..."
            className="flex-1 p-2 border border-gray-300 rounded-lg resize-none text-sm focus:outline-none focus:border-green-500"
            rows={2}
          />
          <button
            onClick={handleSendMessage}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
        
        {/* Click para conversar button */}
        <button
          onClick={() => window.open('https://web.whatsapp.com/send?phone=51959924343', '_blank')}
          className="w-full mt-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 222-99.6 222-222 0-59.3-23.1-115-65-156.9zM223.9 413.3c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 335.4l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56 81.2 56 130.5 0 101.8-84.9 184.5-186.5 184.5zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
          <span>Click para conversar</span>
        </button>
      </div>
    </div>
  )
}
