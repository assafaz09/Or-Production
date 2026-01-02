"use client";

import { useState, useEffect } from "react";

export const useCartCount = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = typeof window !== "undefined" ? localStorage.getItem("cart") : null;
      if (savedCart) {
        try {
          const cart = JSON.parse(savedCart);
          const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
          setCartCount(totalItems);
        } catch (err) {
          setCartCount(0);
        }
      } else {
        setCartCount(0);
      }
    };

    // Initial load
    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return cartCount;
};

export default useCartCount;
