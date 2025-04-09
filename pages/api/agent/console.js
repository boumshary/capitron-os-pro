// /pages/api/agent/console.js
import { handler } from '../core';

export default function consoleAPI(req, res) {
  return handler(req, res, 'console');
}
