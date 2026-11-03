// WhatsApp URL and Message formatting utility (100% Clean Professional Text, No Emojis)

export const cleanPhoneNumber = (phone) => {
  if (!phone) return "919131264893";
  // Remove non-numeric characters
  let cleaned = phone.toString().replace(/\D/g, "");
  // Reject any old template dummy number and redirect to real shop phone
  if (cleaned === "919876543210" || cleaned === "9876543210") {
    return "919131264893";
  }
  // If 11 digits starting with 0 (e.g. 09131264893), trim 0
  if (cleaned.length === 11 && cleaned.startsWith("0")) {
    cleaned = cleaned.substring(1);
  }
  // Prepend 91 if it's a 10 digit Indian number (e.g. 9131264893 -> 919131264893)
  if (cleaned.length === 10) {
    return `91${cleaned}`;
  }
  return cleaned || "919131264893";
};

export const createSingleProductWhatsAppLink = (product, phone, selectedLength = null, selectedPrice = null) => {
  const targetPhone = cleanPhoneNumber(phone);
  const length = selectedLength || product.unit || "5 mtr";
  const price = selectedPrice || product.sellPrice || product.price5m;

  const message = `*Hello Anumeet Cutpiece!*
I would like to order this fabric:

- *Product:* ${product.name}
- *Cut Length:* ${length}
- *Price:* Rs. ${price}
- *Product ID:* #${product.id}

Please confirm stock availability and delivery timeline.
Thank you!`;

  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
};

export const createCartWhatsAppLink = (cartItems, customerDetails, phone, freeDeliveryThreshold = 500) => {
  const targetPhone = cleanPhoneNumber(phone);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  let itemList = "";
  cartItems.forEach((item, index) => {
    itemList += `${index + 1}. *${item.name}* (${item.length || item.unit})\n   Qty: ${item.quantity} | Total: Rs. ${item.price * item.quantity} (Rs. ${item.price}/ea)\n`;
  });

  const message = `*Hello Anumeet Cutpiece!*
I would like to place an order from your website:

*ORDER DETAILS:*
-----------------------------
${itemList}-----------------------------
- *Total Amount:* *Rs. ${subtotal}*
- *Delivery Policy:* Free home delivery on Rs. 500+ within 3 KM of shop (Ayodhya Nagar, Bhopal). Beyond 3 KM, courier charges apply.

*CUSTOMER DELIVERY DETAILS:*
- *Name:* ${customerDetails.name || "Customer"}
- *Mobile / WhatsApp:* ${customerDetails.phone || "Not provided"}
- *Address:* ${customerDetails.address || "Will share on chat"}${customerDetails.city ? `, ${customerDetails.city}` : ""}${customerDetails.state ? `, ${customerDetails.state}` : ""}${customerDetails.pincode ? ` - ${customerDetails.pincode}` : ""}
- *Color Preference:* ${customerDetails.color ? customerDetails.color : "Will share photo / shade on WhatsApp"}
${customerDetails.notes ? `- *Notes / Instructions:* ${customerDetails.notes}` : ""}

Please confirm stock availability and send payment QR / UPI details. Thank you!`;

  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
};

export const createGeneralInquiryWhatsAppLink = (phone) => {
  const targetPhone = cleanPhoneNumber(phone);
  const message = `*Hello Anumeet Cutpiece!*
I would like to inquire about your wholesale cut piece fabrics and catalog.`;
  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
};

export const createCustomFabricOrderWhatsAppLink = (phone, fabricName = 'Fabric') => {
  const targetPhone = cleanPhoneNumber(phone);
  const message = `*Hello Anumeet Cutpiece!*
I saw your customer review video for *${fabricName}*.
Is this fabric currently available in stock? Please share photos and price details.`;
  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
};
