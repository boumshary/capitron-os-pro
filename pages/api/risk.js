// /pages/api/agent/risk.js
import { handler } from '../core';

export default function riskAPI(req, res) {
  return handler(req, res, 'risk');
}
