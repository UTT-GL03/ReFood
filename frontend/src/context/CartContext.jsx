import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (offre) => {
    setCart(prev => {
      const existing = prev.find(item => item._id === offre._id)
      if (existing) {
        return prev.map(item =>
          item._id === offre._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...offre, quantity: 1 }]
    })
  }

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id)
    } else {
      setCart(prev =>
        prev.map(item =>
          item._id === id ? { ...item, quantity } : item
        )
      )
    }
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item._id !== id))
  }

  const total = cart.reduce(
    (sum, item) => sum + (item.prix || 0) * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
