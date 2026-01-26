/**
 * Centralized logging utility
 * Can be extended to send logs to external services in production
 */

const isDevelopment = process.env.NODE_ENV === 'development';

export const logger = {
  error: (message, ...args) => {
    if (isDevelopment) {
      console.error(`[ERROR] ${message}`, ...args);
    }
    // In production, you could send to error tracking service (e.g., Sentry)
  },

  warn: (message, ...args) => {
    if (isDevelopment) {
      console.warn(`[WARN] ${message}`, ...args);
    }
  },

  info: (message, ...args) => {
    if (isDevelopment) {
      console.info(`[INFO] ${message}`, ...args);
    }
  },

  log: (message, ...args) => {
    if (isDevelopment) {
      console.log(`[LOG] ${message}`, ...args);
    }
  },
};
