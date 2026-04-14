console.log("JS CARREGOU 🔥");

async function agendar() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  if (!nome || !telefone || !data || !hora) {
    alert("Preencha tudo");
    return;
  }

  // A alteração foi feita na linha abaixo: trocamos o localhost pela sua URL do Render
  const res = await fetch("https://barbearia-rj-backend.onrender.com/agendar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, telefone, data, hora })
  });

  const resposta = await res.json();
  alert(resposta.msg);
}