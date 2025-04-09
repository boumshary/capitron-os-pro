// /pages/api/agent/strategy.js
import { handler } from '../core';

export default function strategyAPI(req, res) {
  return handler(req, res, 'strategy');
}
