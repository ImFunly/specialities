const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const paginaPrincipal = `
    <h1>Ruta principal - Path actual: ${req.path}</h1>
    <a href="/marketing">marketing</a>
    <a href="/developers">developers</a>
    <a href="/QAs">QAs</a>
    <a href="/ventas">ventas</a>
  `;
  res.send(paginaPrincipal);
});

app.get("/marketing", (req, res) => {
  const paginaMarketing = `
    <h1>Ruta marketing - Path actual: ${req.path}</h1>
    <a href="/">principal</a>
    <a href="/developers">developers</a>
    <a href="/QAs">QAs</a>
    <a href="/ventas">ventas</a>
    <h2>Equipo de Marketing:</h2>
    ${generarUsuariosHTML("marketing")}
  `;
  res.send(paginaMarketing);
});

app.get("/developers", (req, res) => {
  const paginaDevelopers = `
    <h1>Ruta developers - Path actual: ${req.path}</h1>
    <a href="/">principal</a>
    <a href="/marketing">marketing</a>
    <a href="/QAs">QAs</a>
    <a href="/ventas">ventas</a>
    <h2>Equipo de Developers:</h2>
    ${generarUsuariosHTML("developers")}
  `;
  res.send(paginaDevelopers);
});

app.get("/QAs", (req, res) => {
  const paginaQAs = `
    <h1>Ruta QAs - Path actual: ${req.path}</h1>
    <a href="/">principal</a>
    <a href="/developers">developers</a>
    <a href="/marketing">marketing</a>
    <a href="/ventas">ventas</a>
    <h2>Equipo de QAs:</h2>
    ${generarUsuariosHTML("QAs")}
  `;
  res.send(paginaQAs);
});

app.get("/ventas", (req, res) => {
  const paginaVentas = `
    <h1>Ruta ventas - Path actual: ${req.path}</h1>
    <a href="/">principal</a>
    <a href="/marketing">marketing</a>
    <a href="/developers">developers</a>
    <a href="/QAs">QAs</a>
    <h2>Equipo de Ventas:</h2>
    ${generarUsuariosHTML("ventas")}
  `;
  res.send(paginaVentas);
});

//ERROR 404
app.use((req, res) => {
  res
    .status(404)
    .send('<h1>Página no encontrada</h1><a <a href="/">principal</a>');
});

//PUERTO
app.listen(3000, () => {
  console.log("Servidor funcionando en el puerto 3000");
});

// BASE DE DATOS
const usersData = [
  { id: 1, name: "Alice", age: 28, specialty: "marketing" },
  { id: 2, name: "Bob", age: 35, specialty: "developers" },
  { id: 3, name: "Charlie", age: 30, specialty: "developers" },
  { id: 4, name: "David", age: 25, specialty: "QAs" },
  { id: 5, name: "Emma", age: 32, specialty: "ventas" },
  { id: 6, name: "Frank", age: 28, specialty: "marketing" },
  { id: 7, name: "Grace", age: 34, specialty: "developers" },
  { id: 8, name: "Hank", age: 27, specialty: "QAs" },
  { id: 9, name: "Ivy", age: 31, specialty: "ventas" },
  { id: 10, name: "Jack", age: 29, specialty: "marketing" },
  { id: 11, name: "Karen", age: 36, specialty: "developers" },
  { id: 12, name: "Leo", age: 26, specialty: "QAs" },
  { id: 13, name: "Mia", age: 33, specialty: "ventas" },
  { id: 14, name: "Nathan", age: 30, specialty: "marketing" },
  { id: 15, name: "Olivia", age: 37, specialty: "developers" },
  { id: 16, name: "Paul", age: 24, specialty: "QAs" },
  { id: 17, name: "Quinn", age: 32, specialty: "ventas" },
  { id: 18, name: "Ryan", age: 28, specialty: "marketing" },
  { id: 19, name: "Sara", age: 35, specialty: "developers" },
  { id: 20, name: "Tom", age: 29, specialty: "QAs" },
  { id: 21, name: "Uma", age: 30, specialty: "ventas" },
  { id: 22, name: "Victor", age: 27, specialty: "marketing" },
  { id: 23, name: "Wendy", age: 34, specialty: "developers" },
  { id: 24, name: "Xander", age: 31, specialty: "QAs" },
  { id: 25, name: "Yara", age: 33, specialty: "ventas" },
  { id: 26, name: "Zack", age: 28, specialty: "marketing" },
  { id: 27, name: "Ava", age: 36, specialty: "developers" },
  { id: 28, name: "Bryan", age: 26, specialty: "QAs" },
  { id: 29, name: "Cynthia", age: 32, specialty: "ventas" },
  { id: 30, name: "Derek", age: 30, specialty: "marketing" },
];

//FILTRAR ESPECIALIDAD
function filtrarPorEspecialidad(data, especialidad) {
  return data.filter((usuario) => usuario.specialty === especialidad);
}

function specialty(data) {
  const words = ["marketing", "developers", "QAs", "ventas"];
  const usuariosPorEspecialidad = {};
  words.forEach((especialidad) => {
    usuariosPorEspecialidad[especialidad] = filtrarPorEspecialidad(
      data,
      especialidad
    );
  });
  return usuariosPorEspecialidad;
}

const usuariosPorEspecialidad = specialty(usersData);
console.log(usuariosPorEspecialidad);

//GENERAR HTML DEL OBJETO
function generarUsuariosHTML(especialidad) {
  const usuarios = usersData.filter(
    (usuario) => usuario.specialty === especialidad
  );
  let htmlUsuarios = "";
  usuarios.forEach((usuario) => {
    htmlUsuarios += `
      <p>ID: ${usuario.id}</p>
      <p>Nombre: ${usuario.name}</p>
      <p>Edad: ${usuario.age}</p>
      <hr>
    `;
  });
  return htmlUsuarios;
}
