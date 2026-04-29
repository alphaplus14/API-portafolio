import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";


const app = express()
const PORT = 3000

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors())
app.use(express.json())


app.use("//images", express.static(path.join(__dirname, "src//images")));


const proyectos = [
  {
    id: 1,
    titulo: "Portafolio Personal",
    descripcion: "Página web personal desarrollada con React y Tailwind CSS, la información se obtiene desde una API REST creada con Node.js y Express.",
    imagen: "https://placehold.co/400x200?text=Portafolio",
    codigo: "https://github.com/tuusuario/portafolio",
    demo: "https://tuportafolio.vercel.app"
  },
  {
    id: 2,
    titulo: "Sistema de Inventario",
    descripcion: "Aplicación para gestionar inventarios con Node.js y MySQL.",
    imagen: "https://placehold.co/400x200?text=Inventario",
    codigo: "https://github.com/tuusuario/inventario",
    demo: "https://inventario.vercel.app"
  },
  {
    id: 3,
    titulo: "App de Tareas",
    descripcion: "Aplicación To-Do List con React y localStorage.",
    imagen: "https://placehold.co/400x200?text=ToDo+App",
    codigo: "https://github.com/tuusuario/todo-app",
    demo: "https://todo-app.vercel.app"
  }
]

const habilidades = [
  { id: 1, nombre: "React", icono: "/images/react.png", nivel: "Intermedio" },
  { id: 2, nombre: "JavaScript", icono: "/images/javascript.png", nivel: "Intermedio" },
  { id: 3, nombre: "Node.js", icono: "/images/nodejs.png", nivel: "Intermedio" },
  { id: 4, nombre: "Tailwind CSS", icono: "/images/tailwind.png", nivel: "Intermedio" },
  { id: 5, nombre: "SQL", icono: "/images/sql.png", nivel: "Intermedio" },
  { id: 6, nombre: "Git", icono: "/images/git.png", nivel: "Intermedio" },
  { id: 7, nombre: "C#", icono: "/images/csharp.png", nivel: "Intermedio" },
  { id: 8, nombre: "PHP", icono: "/images/php.png", nivel: "Intermedio" },
  { id: 9, nombre: "Laravel", icono: "/images/laravel.png", nivel: "Básico" },
  { id: 10, nombre: "Java", icono: "/images/java.png", nivel: "Básico" },
  { id: 11, nombre: "Express", icono: "/images/express.png", nivel: "Intermedio" }
]

app.get('/api/proyectos', (req, res) => {
  res.json(proyectos)
})

app.get('/api/habilidades', (req, res) => {
  res.json(habilidades)
})

app.get('/', (req, res) => {
  res.json({ mensaje: 'API del Portafolio funcionando ✅' })
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})