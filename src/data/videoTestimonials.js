/**
 * ============================================================================
 * CLIENT VIDEO TESTIMONIALS & INSTAGRAM REELS DATA
 * ============================================================================
 * 
 * HINDI GUIDE FOR OWNER (Yeh data aap kabhi bhi badal sakte hain):
 * 1. "reelUrl": Apni Instagram Reel ka link yahan paste karein.
 *    Jaise: "https://www.instagram.com/reel/C_XXXXXXXXX/"
 * 2. "posterImage": Video ka cover photo (public/ folder me daal kar uska path likhein,
 *    jaise "/products/chanderi.webp" ya direct photo URL).
 * 3. "clientName": Customer ka naam.
 * 4. "location": Customer ka shahar ya area (jaise: "Ayodhya Nagar, Bhopal").
 * 5. "role": Customer ka pesha (jaise: "Boutique Owner", "Master Tailor", "Homemaker").
 * 6. "reviewQuote": Customer ka chhota review/feedback.
 * 7. "fabricBought": Unhone kaunsa fabric kharida tha.
 * ============================================================================
 */

export const VIDEO_TESTIMONIALS = [
  {
    id: "reel-1",
    clientName: "Pooja Sharma",
    location: "Ayodhya Nagar, Bhopal",
    role: "Boutique Designer",
    rating: 5,
    reviewQuote: "5-meter continuous cut mila bina kisi joint ke! Chanderi silk ka fall aur shine boutique dresses ke liye bilkul best hai.",
    fabricBought: "Chanderi Silk (5m Cut)",
    // 👉 APNA INSTAGRAM REEL LINK YAHAN PASTE KAREIN:
    reelUrl: "https://www.instagram.com/reel/C6sample1/",
    // 👉 THUMBNAIL / POSTER IMAGE YAHAN SET KAREIN:
    posterImage: "/products/chanderi-premium.webp",
    verified: true,
    views: "1.2k",
  },
  {
    id: "reel-2",
    clientName: "Shabana Khan",
    location: "MP Nagar, Bhopal",
    role: "Master Tailor & Dressmaker",
    rating: 5,
    reviewQuote: "Lining aur crepe fabrics ka fall bohot accha hai. Wholesale rate me 10-meter cut seedhe shop par deliver ho gaya.",
    fabricBought: "Plain Crepe & Astar Lining",
    // 👉 APNA INSTAGRAM REEL LINK YAHAN PASTE KAREIN:
    reelUrl: "https://www.instagram.com/reel/C6sample2/",
    // 👉 THUMBNAIL / POSTER IMAGE YAHAN SET KAREIN:
    posterImage: "/products/crepe-plain.webp",
    verified: true,
    views: "980",
  },
  {
    id: "reel-3",
    clientName: "Anjali Malviya",
    location: "Kolar Road, Bhopal",
    role: "Ethnic Fashion Studio",
    rating: 5,
    reviewQuote: "WhatsApp par photo dekh kar order kiya tha, exact same fabric deliver hua. Bhopal me itna transparent kaam pehli baar dekha.",
    fabricBought: "Printed Silk & Organza",
    // 👉 APNA INSTAGRAM REEL LINK YAHAN PASTE KAREIN:
    reelUrl: "https://www.instagram.com/reel/C6sample3/",
    // 👉 THUMBNAIL / POSTER IMAGE YAHAN SET KAREIN:
    posterImage: "/products/printed-organza.webp",
    verified: true,
    views: "1.5k",
  },
  {
    id: "reel-4",
    clientName: "Sunita Verma",
    location: "Ayodhya Bypass, Bhopal",
    role: "Homemaker & Self-Tailor",
    rating: 5,
    reviewQuote: "Ghar baithe free delivery mil gayi ₹500 ke order par. Festive velvet cuts ki quality market se 40% sasti aur behtar hai.",
    fabricBought: "Heavy Velvet Festive Cuts",
    // 👉 APNA INSTAGRAM REEL LINK YAHAN PASTE KAREIN:
    reelUrl: "https://www.instagram.com/reel/C6sample4/",
    // 👉 THUMBNAIL / POSTER IMAGE YAHAN SET KAREIN:
    posterImage: "/products/velvet.webp",
    verified: true,
    views: "2.1k",
  },
];
