import twilio from "twilio";

// Twilio configuration
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_WHATSAPP_FROM =
  process.env.TWILIO_WHATSAPP_FROM || "whatsapp:+14155238886";
// Multiple business owner numbers
const BUSINESS_OWNER_NUMBERS = [
  process.env.BUSINESS_OWNER_MOBILE_2 || "whatsapp:+972544299492",
  process.env.BUSINESS_OWNER_MOBILE || "whatsapp:+972549498551", // מספר שני
  // אפשר להוסיף עוד מספרים כאן
];

export async function POST(req) {
  try {
    const {
      customerName,
      customerTel,
      customerEmail,
      customerNotes,
      eventDate,
      eventType,
      guestsCount,
      cartItems,
      totalPrice,
    } = await req.json();

    // Validation
    if (!customerName || !customerTel) {
      return new Response(
        JSON.stringify({
          error: "שם וטלפון הם שדות חובה",
        }),
        { status: 400 }
      );
    }

    if (!cartItems || cartItems.length === 0) {
      return new Response(
        JSON.stringify({
          error: "העגלה ריקה",
        }),
        { status: 400 }
      );
    }

    // Build the message content
    const message = buildQuoteRequestMessage({
      customerName,
      customerTel,
      customerEmail,
      customerNotes,
      eventDate,
      eventType,
      guestsCount,
      cartItems,
      totalPrice,
    });

    // Send WhatsApp message to all business owners
    if (TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN) {
      try {
        await sendWhatsAppMessageToAll(message);
        console.log("✅ WhatsApp messages sent successfully to all numbers");
      } catch (whatsappError) {
        console.error("❌ Failed to send WhatsApp messages:", whatsappError);
        // Continue with the process even if WhatsApp fails
      }
    } else {
      console.log("⚠️ Twilio credentials not configured - skipping WhatsApp");
    }

    // Log the request details
    console.log("=== QUOTE REQUEST RECEIVED ===");
    console.log("Customer:", customerName, customerTel);
    console.log("Event:", eventType, eventDate, guestsCount);
    console.log("Cart Items:", cartItems.length);
    console.log("Total Price:", totalPrice);
    console.log("Notes:", customerNotes);
    console.log("================================");

    return new Response(
      JSON.stringify({
        success: true,
        message: "בקשת הצעת המחיר נשלחה בהצלחה",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote request:", error);
    return new Response(
      JSON.stringify({
        error: "שגיאה בעיבוד הבקשה",
      }),
      { status: 500 }
    );
  }
}

function buildQuoteRequestMessage(data) {
  const {
    customerName,
    customerTel,
    customerEmail,
    customerNotes,
    eventDate,
    eventType,
    guestsCount,
    cartItems,
    totalPrice,
  } = data;

  let message = `🚀 *בקשת הצעת מחיר חדשה*\n\n`;

  // Customer Details
  message += `*פרטי הלקוח:*\n`;
  message += `שם: ${customerName}\n`;
  message += `טלפון: ${customerTel}\n`;
  if (customerEmail) message += `אימייל: ${customerEmail}\n`;

  // Event Details
  if (eventType || eventDate || guestsCount) {
    message += `\n*פרטי האירוע:*\n`;
    if (eventType) message += `סוג: ${eventType}\n`;
    if (eventDate) message += `תאריך: ${eventDate}\n`;
    if (guestsCount) message += `מספר אורחים: ${guestsCount}\n`;
  }

  // Cart Items
  message += `\n*פריטים בעגלה:*\n`;
  cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.name} x${item.quantity} - ₪${
      item.price * item.quantity
    }\n`;
  });

  // Total
  message += `\n*סה"כ לתשלום:* ₪${Math.round(totalPrice * 1.17)} (כולל מע"מ)\n`;

  // Notes
  if (customerNotes) {
    message += `\n*הערות:*\n${customerNotes}\n`;
  }

  message += `\n---\n`;
  message += `נשלח מ: ${new Date().toLocaleString("he-IL")}`;

  return message;
}

// Function to send WhatsApp message to all business owners
async function sendWhatsAppMessageToAll(message) {
  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN) {
    throw new Error("Twilio credentials not configured");
  }

  const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

  try {
    // Send message to all numbers
    const sendPromises = BUSINESS_OWNER_NUMBERS.map(async (phoneNumber) => {
      try {
        const result = await client.messages.create({
          body: message,
          from: TWILIO_WHATSAPP_FROM,
          to: phoneNumber,
        });

        console.log(`✅ WhatsApp message sent to ${phoneNumber}:`, result.sid);
        return { success: true, phoneNumber, sid: result.sid };
      } catch (error) {
        console.error(`❌ Failed to send to ${phoneNumber}:`, error.message);
        return { success: false, phoneNumber, error: error.message };
      }
    });

    const results = await Promise.allSettled(sendPromises);

    // Log summary
    const successful = results.filter(
      (r) => r.status === "fulfilled" && r.value.success
    ).length;
    const failed = results.length - successful;

    console.log(
      `📱 WhatsApp Summary: ${successful} successful, ${failed} failed`
    );

    return results;
  } catch (error) {
    console.error("Twilio error:", error);
    throw error;
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({
      message: "Quote Request API is working",
      endpoints: {
        POST: "/api/quote-request - Submit a new quote request",
      },
      twilio: {
        configured: !!(
          process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN
        ),
        from: process.env.TWILIO_WHATSAPP_FROM || "whatsapp:+14155238886",
        numbers: BUSINESS_OWNER_NUMBERS,
        total_numbers: BUSINESS_OWNER_NUMBERS.length,
      },
    }),
    { status: 200 }
  );
}
