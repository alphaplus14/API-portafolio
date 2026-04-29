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
  { id: 1,  nombre: "React",        icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",           nivel: "Intermedio" },
  { id: 2,  nombre: "JavaScript",   icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", nivel: "Intermedio" },
  { id: 3,  nombre: "Node.js",      icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",         nivel: "Intermedio" },
  { id: 4,  nombre: "Tailwind CSS", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",nivel: "Intermedio" },
  { id: 5,  nombre: "SQL",          icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",           nivel: "Intermedio" },
  { id: 6,  nombre: "Git",          icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",               nivel: "Intermedio" },
  { id: 7,  nombre: "C#",           icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",         nivel: "Intermedio" },
  { id: 8,  nombre: "PHP",          icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",               nivel: "Intermedio" },
  { id: 9,  nombre: "Laravel",      icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",       nivel: "intermedio"     },
  { id: 10, nombre: "Java",         icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",             nivel: "Básico"     },
  { id: 11, nombre: "Express",      icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",       nivel: "Intermedio" },
  { id: 12, nombre: "HTML5", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", nivel: "Intermedio" },
  { id: 13, nombre: "CSS3", icono: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", nivel: "Intermedio" },
  {id:14, nombre:"Vite", icono:"https://vitejs.dev/logo-with-shadow.png", nivel:"Intermedio"},
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