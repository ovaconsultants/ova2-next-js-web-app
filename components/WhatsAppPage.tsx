'use client';
import { useState } from 'react';

const WhatsAppPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>(''); // Phone number input
  const [message, setMessage] = useState<string>(''); // Message input

  const handleSendMessage = (): void => {
    if (!phoneNumber || !message) {
      alert('Please enter both the phone number and the message.');
      return;
    }

    // Validate the phone number format
    const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    if (formattedPhoneNumber.length < 10) {
      alert('Please enter a valid phone number in international format.');
      return;
    }

    // Encode the message to ensure special characters are handled
    const encodedMessage = encodeURIComponent(message);

    // Construct the WhatsApp deep link
    const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;

    // Open the WhatsApp URL
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Send a WhatsApp Message</h1>
      <div style={{ marginBottom: '15px' }}>
        <label
          htmlFor="phoneNumber"
          style={{ display: 'block', marginBottom: '5px' }}
        >
          Phone Number (International Format):
        </label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="e.g., 1234567890"
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label
          htmlFor="message"
          style={{ display: 'block', marginBottom: '5px' }}
        >
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          rows={4}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        ></textarea>
      </div>
      <button
        onClick={handleSendMessage}
        style={{
          backgroundColor: '#25D366',
          color: '#fff',
          padding: '10px 20px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Send on WhatsApp
      </button>
    </div>
  );
};

export default WhatsAppPage;
