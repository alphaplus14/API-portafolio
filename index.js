import express from "express";
import cors from "cors";

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())


const proyectos = [
  {
    id: 1,
    titulo: "Portafolio Personal",
    descripcion: "Página web personal desarrollada con React y Tailwind CSS.",
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
  { id: 1, nombre: "React", icono: "⚛️", nivel: "Intermedio" },
  { id: 2, nombre: "JavaScript", icono: "🟨", nivel: "Intermedio" },
  { id: 3, nombre: "Node.js", icono: "🟩", nivel: "Intermedio" },
  { id: 4, nombre: "Tailwind CSS", icono: "🎨", nivel: "Intermedio" },
  { id: 5, nombre: "SQL", icono: "🗄️", nivel: "Intermedio" },
  { id: 6, nombre: "Git", icono: "🐙", nivel: "Intermedio" },
  { id: 7, nombre: "C#", icono: "🔷", nivel: "Intermedio" },
  { id: 8, nombre: "PHP", icono: "🐘", nivel: "Intermedio" },
  { id: 9, nombre: "Laravel", icono: "🔴", nivel: "Básico" },
  { id: 10, nombre: "Java", icono: "☕", nivel: "Básico" },
  { id: 11, nombre: "Express", icono: "🚀", nivel: "Intermedio" }
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