import { createContext, useContext, useState } from 'react'

// 1. Crear el Context
export const AppContext = createContext()

// 2. Hook personalizado para consumir el context fácilmente
export function useAppContext() {
  return useContext(AppContext)
}

// 3. Provider que envuelve la aplicación y provee el estado global
export function AppProvider({ children }) {
  // --- Estado de autenticación ---
  const [user, setUser] = useState(null) // null = no autenticado

  // --- Tema (claro / oscuro) ---
  const [theme, setTheme] = useState('light')

  // --- Lista de favoritos ---
  const [favorites, setFavorites] = useState([])

  // --- Funciones de autenticación ---
  const login = (userData) => setUser(userData)
  const logout = () => setUser(null)

  // --- Funciones de tema ---
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  // --- Funciones de favoritos ---
  const addFavorite = (item) => {
    setFavorites((prev) =>
      prev.find((f) => f.id === item.id) ? prev : [...prev, item]
    )
  }

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id))
  }

  const isFavorite = (id) => favorites.some((f) => f.id === id)

  return (
    <AppContext.Provider
      value={{
        // Auth
        user,
        login,
        logout,
        // Tema
        theme,
        toggleTheme,
        // Favoritos
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
