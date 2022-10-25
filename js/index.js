import { Router } from "./route.js"

const router = new Router()

router.add('/','/pages/home.html')
router.add('/universe','/pages/universe.html')
router.add('/exploration','/pages/exploration.html')
router.add(404,'/pages/404.html')

router.handle()
window.onpopstate = () => router.handle()


const linkLogo = document.querySelector('#logo')
const linkHome = document.querySelector('#home')
const linkUniverse = document.querySelector('#universe')
const linkExploration = document.querySelector('#exploration')

linkLogo.addEventListener('click', changeHomePage)
linkHome.addEventListener('click', changeHomePage)
linkUniverse.addEventListener('click', changeUniversePage)
linkExploration.addEventListener('click', changeExplorationPage)

function changeHomePage(event){
  linkHome.classList.add('select')
  linkExploration.classList.remove('select')
  linkUniverse.classList.remove('select')
  
  event.preventDefault()
  router.route(event)
}

function changeUniversePage(event){
  linkHome.classList.remove('select')
  linkExploration.classList.remove('select')
  linkUniverse.classList.add('select')
  
  event.preventDefault()
  router.route(event)
}

function changeExplorationPage(event){
  linkHome.classList.remove('select')
  linkExploration.classList.add('select')
  linkUniverse.classList.remove('select')
  
  event.preventDefault()
  router.route(event)
}