// API simples para testar no Vercel
export default function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    if (req.url === '/') {
      res.status(200).json({
        message: 'Todo API Backend - Versão Simples',
        version: '1.0.0',
        endpoints: {
          root: '/',
          test: '/test'
        }
      });
    } else if (req.url === '/test') {
      res.status(200).json({
        message: 'API funcionando!',
        timestamp: new Date().toISOString()
      });
    } else {
      res.status(404).json({ error: 'Endpoint não encontrado' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
