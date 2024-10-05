import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Item, ItemType } from '../types/types'

interface ModalProps {
  selectedItem: Item | null
  itemType: ItemType | null
  isDarkMode: boolean
  closeModal: () => void
}

export default function Modal({ selectedItem, itemType, isDarkMode, closeModal }: ModalProps) {
  if (!selectedItem) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className={`w-full max-w-lg p-8 rounded-lg ${
            isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
          }`}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          {itemType === 'experience' && (
            <>
              <p className={`mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{selectedItem.company}</p>
              <p className={`mb-4 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{selectedItem.period}</p>
            </>
          )}
          <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{selectedItem.description}</p>
          <ul className={`list-disc pl-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {selectedItem.details.map((detail, index) => (
              <li key={index} className="mb-2">{detail}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}