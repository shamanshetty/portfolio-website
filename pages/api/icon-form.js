// @ts-check
'use strict';

/**
 * API handler for icon form
 */
function handler(req, res) {
  const body = req.body;
  
  if (!body) {
    return res.status(400).json({ error: 'Request body is required' });
  }

  return res.status(200).json({ data: body });
}

module.exports = handler;