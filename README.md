create database projetoFinal;
use projetoFinal

CREATE TABLE roupas (
    id INT PRIMARY KEY,
    nome VARCHAR(255),
    marca VARCHAR(255),
    preco DECIMAL(10, 2),
    cor VARCHAR(50),
    foto VARCHAR(255),
    descricao TEXT,
    destaque BOOLEAN,
    soma INT,
    num INT
);

INSERT INTO roupas (id, nome, marca, preco, cor, foto, descricao, destaque, soma, num)
VALUES
    (2, 'Camisa Adidas W3ST', 'Adidas', 120.00, 'Branco', 'https://i.imgur.com/un1xcXr.jpeg', 'Graças ao tecido de algodão leve e ao ajuste clássico, a camiseta Adidas W3ST é tão indispensável quanto tênis e frutas frescas.', TRUE, 24, 6),
    (3, 'Camisa Puma Logo', 'Puma', 90.00, 'Branco', 'https://i.imgur.com/i2zMrb0.jpg', 'Eleve-se com a camiseta de manga curta Puma. Fabricada em algodão macio e confortável, a mais vendida da marca.', TRUE, 15, 4),
    (4, 'Boné Adidas', 'Adidas', 80.00, 'Branco', 'https://i.imgur.com/L23sv0V.jpg', 'O Boné Adidas apresenta tecnologia respirável e uma faixa ajustável para manter você coberto e confortável.', TRUE, 14, 4),
    (5, 'Moletom Fila Basic', 'Fila', 210.99, 'Preto', 'https://i.imgur.com/81NxWXa.jpg', 'Macio por fora, ligeiramente felpudo por dentro, nosso fleece semi-escovado de peso médio ajuda a manter você confortável.', TRUE, 15, 4),
    (6, 'Moletom Nike Sportwear Club', 'Nike', 199.99, 'Bege', 'https://i.imgur.com/btUsvqK.jpg', 'Casaco em moletom com felpa. Modelo possui capuz com cordão de ajuste.', TRUE, 10, 2),
    (7, 'Calça Moletom Fila', 'Fila', 150.90, 'Cinza', 'https://i.imgur.com/sImkpXm.png', 'Vista essa calça macia para conforto fácil e aquecimento leve. As aberturas elásticas contornam o seu corpo e ajudam a manter a calça no lugar.', TRUE, 21, 6),
    (8, 'Calça Moletom Puma', 'Puma', 120.00, 'Preto', 'https://i.imgur.com/e809b7s.jpg', 'Universalmente adorado pelo seu conforto e consistência, é para todos. Com uma perna mais comprida e extra espaçosa.', TRUE, 15, 5),
    (9, 'Moletom Nike Logo', 'Nike', 170.00, 'Cinza', 'https://i.imgur.com/0X2lXYj.jpg', 'Moletom Nike proporciona conforto macio em um estilo que você realmente pode usar todos os dias.', TRUE, 10, 2),
    (10, 'Camisa Dry Fit Nike', 'Nike', 99.90, 'Preto', 'https://i.imgur.com/wFA1HeI.png', 'O tecido macio e elástico afasta o suor da sua pele para ajudar você a se manter focado e dar o seu melhor.', TRUE, 13, 3),
    (11, 'Camisa Fila Logo', 'Fila', 80.00, 'Preto', 'https://i.imgur.com/nrs3PZP.jpg', 'Camiseta masculina confeccionada em meia malha premium de algodão. Modelagem regular com gola careca em ribana e manga curta.', TRUE, 13, 3);




    CREATE TABLE clientes (
    id INT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    senha VARCHAR(255)
);

-- Inserir os dados na tabela 'clientes'
INSERT INTO clientes (id, nome, email, senha,adm)
VALUES
    (1, 'Gabriela Cavalheiro', 'gabriela@gmail.com', 'gabriela123',true),
    (2, 'Leon Junior', 'leon@gmail.com', 'leon123',false);




    CREATE TABLE avaliacoes (
    id INT PRIMARY KEY,
    cliente_id INT,
    filme_id INT,
    produto_id INT,
    comentario TEXT,
    estrelas INT,
    data TIMESTAMP
);


CREATE TABLE avaliacoes (
    id INT PRIMARY KEY,
    cliente_id INT,
    produto_id INT,
    comentario TEXT,
    estrelas INT,
    data TIMESTAMP
);

-- Inserir os dados na tabela 'avaliacoes'
INSERT INTO avaliacoes (id, cliente_id, roupa_id, comentario, estrelas, data)
VALUES
    (1, 1, 2, 'Gostei', 4, '2023-11-05'),
    (2, 1, 1, '', 3, '2023-11-05T13:52:08.254'),
    (3, 1, 8, '', 5, '2023-11-05T14:07:19.547'),
    (4, 2, 6, '', 2, '2023-11-07T14:23:02.977'),
    (5, 1, 2, '', 5, '2023-11-08T21:36:14.982'),
    (6, 2, 8, 'boa', 4, '2023-11-09T05:01:34.276'),
    (7, 2, 5, 'gostei', 5, '2023-11-09T05:01:57.473'),
    (8, 2, 7, 'legal', 4, '2023-11-09T06:52:25.931'),
    (9, 2, 3, '', 3, '2023-11-09T06:55:56.218'),
    (10, 2, 2, '', 3, '2023-11-09T07:03:02.029'),
    (11, 2, 4, 'boa qualidade', 4, '2023-11-09T12:20:57.291'),
    (12, 2, 4, 'boa qualidade', 3, '2023-11-09T12:22:18.348'),
    (13, 2, 5, 'bom', 5, '2023-11-09T12:22:39.315');