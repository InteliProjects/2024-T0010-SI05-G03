const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware para permitir o uso de JSON no corpo das solicitações
app.use(express.json());
app.use(cors());

// Conectar ao banco de dados SQLite
const dbPath = './banco_de_dados.db';;
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados');
  }
});

// Rota para obter todos os produtos
app.get('/product', (req, res) => {
  db.all('SELECT * FROM product', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Rota para postar transações
app.post('/transacao', (req, res) => {
  const { sender, receiver, product_id, value, timestamp, state_id } = req.body;

  db.run(`
      INSERT INTO transacoes (sender, receiver, product_id, value, timestamp, state_id)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(sender, product_id) DO NOTHING
  `, [sender, receiver, product_id, value, timestamp, state_id], function (err) {
    if (err) {
      return res.status(400).send({ error: err.message });
    }
    res.send({ message: 'Transação inserida com sucesso', id: this.lastID });
  });
});

// Rota para obter um produto por ID
app.get('/product/:id', (req, res) => {
  const id = req.params.id;
  db.get('SELECT * FROM product WHERE product_id = ?', [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ message: 'Produto não encontrado' });
      return;
    }
    res.json(row);
  });
});

app.get('/produtos/preco-medio', (req, res) => {
  const query = `
        SELECT product_id, AVG(value) as preco_medio
        FROM transacoes
        GROUP BY product_id
    `;

  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).send({ error: err.message });
      return;
    }
    res.send(rows);
  });
});


// Rota para adicionar um novo produto
app.post('/product', (req, res) => {
  const { nome, metadado } = req.body;
  if (!nome || !metadado) {
    return res.status(400).json({ error: 'Nome e metadado são obrigatórios' });
  }
  db.run('INSERT INTO product (nome, metadado) VALUES (?, ?)', [nome, metadado], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID, nome, metadado });
  });
});

// Rota para remover um produto por ID
app.delete('/product/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM product WHERE product_id = ?', [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json({ message: 'Produto removido com sucesso' });
  });
});


// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
