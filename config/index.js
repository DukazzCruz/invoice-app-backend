const dotenv = require('dotenv');
dotenv.config();

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

// MongoDB
const LOCAL_MONGO_URI = 'mongodb://localhost:27017/invoice-app';
// For production/docker, prefer provided MONGODB_URI, fallback to docker default
const DOCKER_DEFAULT_URI = 'mongodb://admin:secret@mongodb:27017/invoice-app?authSource=admin';
const MONGODB_URI = isProd
  ? (process.env.MONGODB_URI || DOCKER_DEFAULT_URI)
  : LOCAL_MONGO_URI; // Always localhost in development

// App
const PORT = process.env.PORT || 3333;

// Auth
const JWT_SECRET = process.env.JWT_SECRET || 'CHANGE_ME_DEV_ONLY';

// Email
const SMTP_SERVICE = process.env.SMTP_SERVICE || 'gmail';
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';

// Stripe
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY || '';

module.exports = {
  env,
  isProd,
  MONGODB_URI,
  PORT,
  JWT_SECRET,
  SMTP_SERVICE,
  SMTP_USER,
  SMTP_PASS,
  STRIPE_SECRET_KEY,
  STRIPE_PUBLIC_KEY,
};
