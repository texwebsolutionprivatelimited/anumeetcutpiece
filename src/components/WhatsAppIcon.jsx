import React from 'react';

/**
 * Transparent WhatsApp PNG icon component using user's official asset
 * Source: /whatsapp-icon.png (User uploaded graphic with background cleanly removed)
 */
export default function WhatsAppIcon({
  className = 'w-4 h-4',
  alt = 'WhatsApp'
}) {
  return (
    <img
      src="/whatsapp-icon.png"
      alt={alt}
      className={`${className} object-contain block shrink-0`}
      loading="eager"
    />
  );
}
