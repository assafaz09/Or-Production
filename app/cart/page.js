"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCloudinaryUrl } from "../../lib/cloudinary";
import {
  trackInitiateCheckout,
  trackCustomEvent,
} from "../../lib/facebookPixel";
import CopyLinkButton from "../../components/shared/CopyLinkButton";

// Using shared CopyLinkButton component (see components/shared/CopyLinkButton.jsx)

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [customerTel, setCustomerTel] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerNotes, setCustomerNotes] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [guestsCount, setGuestsCount] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      calculateTotal(parsedCart);

      // עקוב אחרי התחלת תהליך רכישה
      if (parsedCart.length > 0) {
        trackInitiateCheckout(calculateTotal(parsedCart), "ILS");
      }
    }
  }, []);

  // Calculate total price
  const calculateTotal = (items) => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
    return total;
  };

  // Update quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = cartItems.map((item) =>
      (item.cartItemId || item.id) === itemId
        ? { ...item, quantity: newQuantity }
        : item
    );

    setCartItems(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Dispatch custom event for cart updates
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Remove item
  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter(
      (item) => (item.cartItemId || item.id) !== itemId
    );
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Dispatch custom event for cart updates
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Handle contact form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // עקוב אחרי שליחת טופס יצירת קשר
    trackCustomEvent("ContactFormSubmit", {
      form_type: "quote_request",
      cart_items_count: cartItems.length,
      total_value: totalPrice,
      currency: "ILS",
    });

    try {
      // פורמט הפרטים של העגלה להודעה
      const cartItemsText = cartItems
        .map(
          (item) =>
            `${item.name} x${item.quantity} - ₪${(item.price * item.quantity).toLocaleString("he-IL")}`
        )
        .join("\n");

      const messageContent = `
הזמנה חדשה מעגלת הקניות:

פרטי הלקוח:
- שם: ${customerName}
- טלפון: ${customerTel}
- אימייל: ${customerEmail}

פרטי האירוע:
- סוג אירוע: ${eventType}
- תאריך האירוע: ${eventDate}
- מספר אורחים: ${guestsCount}

פרטי ההזמנה:
${cartItemsText}

סה"כ: ₪${(totalPrice * 1.17).toLocaleString("he-IL")} (כולל מע"מ)

הערות נוספות:
${customerNotes || "אין"}
      `;

      // שלח את הפרטים ל-Formspree
      const response = await fetch("https://formspree.io/f/xzdeolrq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: customerName,
          email: customerEmail,
          phone: customerTel,
          subject: `הזמנה חדשה - ${eventType}`,
          message: messageContent,
          cartItemsCount: cartItems.length,
          totalPrice: totalPrice,
          source: "cart_page",
        }),
      });

      if (!response.ok) {
        throw new Error("שגיאה בשליחת ההודעה");
      }

      // הצג הודעת הצלחה
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setShowContactForm(false);
        clearCart();
        router.push("/");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("שגיאה בשליחת הטופס. אנא נסה שוב.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle quote request
  const handleQuoteRequest = () => {
    if (cartItems.length === 0) {
      alert("העגלה ריקה. אנא הוסף פריטים לפני בקשת הצעת מחיר.");
      return;
    }
    setShowContactForm(true);
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Header */}
      <div className="bg-gray-900 py-3 sm:py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-right">
              סל קניות
            </h1>
            <button
              onClick={() => router.push("/")}
              className="text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base"
            >
              ← חזרה לדף הבית
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                הפריטים שלך
              </h2>

              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-xl text-gray-400 mb-4">העגלה שלך ריקה</h3>
                  <p className="text-gray-500 mb-6">הוסף פריטים כדי להתחיל</p>
                  <button
                    onClick={() => router.push("/")}
                    className="btn-primary"
                  >
                    לקניות
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.cartItemId || item.id}
                      className="flex items-center justify-between bg-gray-800 rounded-lg p-3 sm:p-4"
                    >
                      {/* Item Image */}
                      <div className="flex-shrink-0 mr-3 sm:mr-4">
                        <img
                          src={
                            getCloudinaryUrl(item.images[0]) ||
                            "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500"
                          }
                          alt={item.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 min-w-0 mr-3 sm:mr-4">
                        <h3 className="text-lg font-semibold text-white truncate mb-1">
                          {item.name}
                        </h3>
                        {item.guestInfo && (
                          <p className="text-purple-300 text-sm mb-1">
                            {item.guestInfo}
                          </p>
                        )}
                        <p className="text-gray-400 text-sm mb-2">
                          {item.category}
                        </p>
                        <div className="text-purple-400 font-bold text-lg">
                          ₪{item.price}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-gray-700 rounded-lg px-3 py-2 mr-3 sm:mr-4">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.cartItemId || item.id,
                              item.quantity - 1
                            )
                          }
                          className="w-8 h-8 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center transition-all duration-200 hover:scale-105"
                          title="הפחת כמות"
                        >
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        </button>

                        <span className="text-white font-bold text-lg min-w-[2.5rem] text-center bg-gray-800 rounded-lg px-2 py-1">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.cartItemId || item.id,
                              item.quantity + 1
                            )
                          }
                          className="w-8 h-8 rounded-full bg-gray-600 hover:bg-gray-500 flex items-center justify-center transition-all duration-200 hover:scale-105"
                          title="הוסף כמות"
                        >
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="text-right mr-3 sm:mr-4">
                        <div className="text-lg font-bold text-white">
                          ₪{item.price * item.quantity}
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.cartItemId || item.id)}
                        className="text-red-400 hover:text-red-300 transition-colors p-2 hover:bg-red-900/20 rounded-lg"
                        title="הסר פריט"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Clear Cart Button */}
              {cartItems.length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <button
                    onClick={clearCart}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    נקה את הסל
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-4 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">
                סיכום הזמנה
              </h2>

              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400">אין פריטים בעגלה</p>
                </div>
              ) : (
                <>
                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-300">
                      <span>סך הפריטים:</span>
                      <span>
                        {cartItems.reduce(
                          (sum, item) => sum + item.quantity,
                          0
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between text-gray-300">
                      <span>מחיר כולל:</span>
                      <span>₪{totalPrice}</span>
                    </div>

                    <div className="flex justify-between text-gray-300">
                      <span>מע״מ (18%):</span>
                      <span>₪{Math.round(totalPrice * 0.18)}</span>
                    </div>

                    <div className="border-t border-gray-700 pt-3">
                      <div className="flex justify-between text-xl font-bold text-white">
                        <span>סה״כ לתשלום:</span>
                        <span>₪{Math.round(totalPrice * 1.17)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote Request Button */}
                  <button
                    onClick={handleQuoteRequest}
                    className="w-full btn-primary text-lg py-4"
                  >
                    קבל הצעת מחיר
                  </button>

                  {/* Additional Info */}
                  <div className="mt-6 text-sm text-gray-400">
                    <p>• המחירים אינם כוללים מע״מ</p>
                    <p>• נציג יצור איתך קשר תוך 24 שעות</p>
                    <p>• המחירים כפופים לשינויים</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg p-8 text-center max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              טופס בקשת הצעת מחיר
            </h3>

            <form
              onSubmit={handleContactSubmit}
              className="space-y-4 text-right"
            >
              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    שם מלא *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                    placeholder="הכנס את שמך המלא"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    טלפון *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                    placeholder="הכנס את מספר הטלפון שלך"
                    value={customerTel}
                    onChange={(e) => setCustomerTel(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  אימייל
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                  placeholder="הכנס את האימייל שלך (אופציונלי)"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                />
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    סוג האירוע
                  </label>
                  <select
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                  >
                    <option value="">בחר סוג אירוע</option>
                    <option value="חתונה">חתונה</option>
                    <option value="בר מצווה">בר מצווה</option>
                    <option value="ברית מילה">ברית מילה</option>
                    <option value="יום הולדת">יום הולדת</option>
                    <option value="אירוע עסקי">אירוע עסקי</option>
                    <option value="אחר">אחר</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    מספר אורחים
                  </label>
                  <input
                    type="number"
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                    placeholder="מספר אורחים"
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    תאריך האירוע
                  </label>
                  <input
                    type="date"
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  הערות נוספות
                </label>
                <textarea
                  className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                  rows={3}
                  placeholder="הערות נוספות, דרישות מיוחדות או שאלות..."
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                />
              </div>

              {/* Cart Summary */}
              <div className="bg-gray-800 rounded-lg p-4 text-right">
                <h4 className="text-lg font-semibold text-white mb-3">
                  סיכום העגלה:
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  {cartItems.map((item) => (
                    <div
                      key={item.cartItemId || item.id}
                      className="flex justify-between"
                    >
                      <span>
                        {item.name} {item.guestInfo && `(${item.guestInfo})`} x
                        {item.quantity}
                      </span>
                      <span>₪{item.price * item.quantity}</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-600 pt-2 mt-2">
                    <div className="flex justify-between font-semibold text-white">
                      <span>סה״כ:</span>
                      <span>₪{Math.round(totalPrice * 1.17)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex space-x-4 rtl:space-x-reverse pt-4">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded transition-colors"
                >
                  ביטול
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      שולח...
                    </div>
                  ) : (
                    "שלח בקשת הצעת מחיר"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg p-8 text-center max-w-md mx-4">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              הבקשה נשלחה בהצלחה!
            </h3>
            <p className="text-gray-300 mb-6">
              נציג שלנו יצור איתך קשר תוך 24 שעות עם הצעת מחיר מפורטת
            </p>
            <div className="text-sm text-gray-400 mb-4">
              <p>תודה על הבחירה ב-OR Productions!</p>
            </div>
            <div className="text-sm text-purple-400 font-medium">
              <p>למענה מיידי יש להתקשר ל: 052-320-6571</p>
            </div>
          </div>
        </div>
      )}

      {/* Copy Link Button */}
      <CopyLinkButton />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/972544299492"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          // עקוב אחרי לחיצה על WhatsApp
          if (typeof window !== "undefined" && window.fbq) {
            window.fbq("track", "CustomEvent", {
              event_name: "WhatsAppClick",
              source: "floating_button",
              page: "cart_page",
            });
          }
        }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        title="צור קשר ב-WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </a>
    </div>
  );
}
