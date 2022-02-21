const config = {
  apiUrl: process.env.REACT_APP_BASE_API_URL,
  stripePublicKey: process.env.REACT_APP_STRIPE_PUBLIC_KEY,
  stripePrivateKey: process.env.REACT_APP_STRIPE_PUBLIC_KEY,
  cloudinaryUrl: process.env.REACT_APP_CLOUDINARY_UPLOAD_URL,
  cloudinaryPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
};

export default config;
