const CartFinder = {};

const URL = `https://bookstore-api.gyfted.dev/api/cart/`;

const auth =
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1bTgtcVFDMUJKZmJ3TUlXdTVDVTlHcE5UVWZPZUdvYzBzQjFIdzlZb2xJIn0.eyJleHAiOjE2NzA4NTU3NTAsImlhdCI6MTY3MDg1MjE1MCwiYXV0aF90aW1lIjoxNjcwODUyMTQ5LCJqdGkiOiJiOTJiODg3OC0wOTlkLTRlZTQtOTkzNi00NzQ1MTViM2JmYzUiLCJpc3MiOiJodHRwczovL2F1dGguZ3lmdGVkLmlvL3JlYWxtcy9jZXJ0aWZpY2F0aW9uIiwiYXVkIjpbImJvb2tzdG9yZS1iYWNrZW5kIiwiYWNjb3VudCJdLCJzdWIiOiI5ODhiNWJmZi0xOWFiLTRhZDItYWRjYy1iZDZhMDE3NzE4NGMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJib29rc3RvcmUtY2xpZW50Iiwibm9uY2UiOiJhOTJkMzQxMS1kMjlmLTQ3NzYtOWRjMC05ZDc3NzljMzU4ZTkiLCJzZXNzaW9uX3N0YXRlIjoiYjhkMWI4OGYtZDMwYi00YjU1LWJlNzEtNjljMTUyNTQ5NTY2IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWNlcnRpZmljYXRpb24iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYm9va3N0b3JlLWJhY2tlbmQiOnsicm9sZXMiOlsiYm9va3N0b3JlLXVzZXIiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiJiOGQxYjg4Zi1kMzBiLTRiNTUtYmU3MS02OWMxNTI1NDk1NjYiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IllvdXNzZWYgU2FiYmFnaCIsInByZWZlcnJlZF91c2VybmFtZSI6InlvdXNzZWYuc2FiYmFnaEB5b3V5b3V0b3lzLmNvbSIsImdpdmVuX25hbWUiOiJZb3Vzc2VmIiwiZmFtaWx5X25hbWUiOiJTYWJiYWdoIiwiZW1haWwiOiJ5b3Vzc2VmLnNhYmJhZ2hAeW91eW91dG95cy5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FENS1XQ2tka0RMNGR2Snl1QUxjVV95eEpIZWZ3SmZISHhiWTdRY0JTTlFockE1UWJKX0k0Vi1sc2txejN5SDhRTVcyazNoNUZxR3F6REFjZEJkd0N2ZkcwWG01RTNXMm8zdVdqRmZ2bkNpVzZRanB2dHVhOE9SVDcycVZJZW9qT1pJRnRtZlhDTW5GX1JVQlZTRS1QajQ0RHZYblVKaVo0VklBNFNZWTR2X3FGRFdkTlYwNnlOM05CNUhCeThvaTBDaEdxdnozMVlLMUt5VHRGTVZYRDhFX1MzLXVLNG9xTjVVdHloRGVYWHZudEJVNUJGQnpLTEt1ZHlQZGRjZUZPNGkwMkFka09HSFN6RllqUmhUdzB1V18yY3lmT1BFeFhHdGZ4U1JhbDU5NWNBWGpPRm55VDF5WjJ6SzdMbnByeDU4Y1pLaTRNMjFKT2JPdEFBQ2F3VTJHMWtvY01QbzdldXo0SFU0QVo2WEtnanlZbXBYSXpLVEZJZXBTUDBuNG0zZmw4MWhxdTMyNXF4YUl6UHpEUGpDUkQ0NGRDS0JsVHRfTWkxbDN5UHZfeEd1b21sTGVmY3hKMkd6LXF4TU42QTlWSmJuLWtfc1dyOFJST2JfeDJNUDh4dlJCSzJ0NEhGNUFiU1FRYnJ3MjI0U2RGVVFIX21nRnRtZ1ZYZV9uS2FqSF9zMm1aUVBlbThqTklFNHJzUV9vN1VVWm13N00tVndxc2xxY2VHc2hlZmFESUhFODVzRWwycW9CcmlSQld0MjlaREJ4bEs2eE9WWEhQdzNUZ1YycDR5dXFfeWlJdngyd1BFT2c4REd1WmNhcXR6QUY1dlg2d0thdmRDazJNR0JQdDIzanhfcnpZVV92aHVhMmRnU3FxbW92MS1uRXl0RnJIZ1Jja3NSSm1rTGRhWU14WVlvVjEtbnVEUmt5bXhMN3pPaHhHR2pjTk9JWkx0MF8wSTR1elBHN2k2b2hCUVVPRDJGeVpPZWU3dWkta01jd1hTTnlTekRCSG5laEpWSl9zdnMzZXFfX1BwcC1WSnBuUmZDTG05NnUtYmFjWW56Z2YxU0dHVEUxUVBMQ2ZUSjJOU1VTbFR1eHFTdlNDa1hBRF83SnBHUnVrSV9JdTVPLWtjX1RLTjVXMEdvWnJqT3hCWDhPVFBxMnUxVG82bE9nVmpyNUpuUUxVT1dub1VQV05LOUdCV19CeVh3TVNHenpvU0lQZFYxQlpZeTdMcklreHZUN3YtUGJ3ZEgydzJWUG1BcnFEVnRZaDExQz1zOTYtYyJ9.BR0V3JnKzzdidpTBzt_eNnYbjFlcxunx_FZh0G5bc4C2aPTM5DVnEVBqUzQM9RzBpz1CiLN7QqcRWyEgkHJfogJP8GEBGx5AG39hJb-AbdCMdLcx1QGZybj980YH6FJH8cN2fn4sDm5e6Gvgur3P5fk0Y7zC4YETjqWp5TN33InCwg3GlMRvlEDxTTlTle9lckvxkWdE5cXHN8l848QhhklBlGW64gOha7Z-sTZe2rgu-MaSGOuN-0DA3mJzpz_qKGKx5ArZPJSF2Hmzpj-VJPTFfdmqas2Fzb25Ev_wFwJQbYgcJUKjK0jC9tgVAXo-fSnsJ0RxllIc4XaqdIiZ5Q';

const book = {
  product: '2345678901231',
  title: 'Libro de Prueba',
  subtitle: 'Libro ingresado con la prueba de la api',
  image: 'https://itbook.store/img/books/9781491954249.png',
  price: 1.99,
  qty: 1,
};

// iniciliza el carrito y trae los datos del usuario actual (segun el token)
CartFinder.getCart = async () => {
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth}`,
    },
  });
  return await response.json();
};

// Agrega un libro al carrito de compra (si esta inicializado)
CartFinder.addBookToCart = async () => {
  const response = await fetch(URL + 'book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(book),
  });
  return await response.json();
};

// Elimina un libro del carrito de compra
CartFinder.deleteBookFromCart = async (bookId) => {
  const response = await fetch(`URL/book/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth}`,
    },
  });
  return await response.json();
};

// cierra el carritos de compra
CartFinder.closeCart = async () => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth}`,
    },
  });
  return await response.json();
};

export default CartFinder;
