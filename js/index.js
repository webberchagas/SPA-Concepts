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
const page = document.querySelector('#page')

linkLogo.addEventListener('click', changeHomePage)
linkHome.addEventListener('click', changeHomePage)
linkUniverse.addEventListener('click', changeUniversePage)
linkExploration.addEventListener('click', changeExplorationPage)

function changeHomePage(event){
  event.preventDefault()
  
  linkHome.classList.add('select')
  linkExploration.classList.remove('select')
  linkUniverse.classList.remove('select')
  page.style.backgroundImage = 'url(../assets/mountains-universe-1.png)'

  
  router.route(event)
}

function changeUniversePage(event){
  event.preventDefault()
  
  linkHome.classList.remove('select')
  linkExploration.classList.remove('select')
  linkUniverse.classList.add('select')
  page.style.backgroundImage = 'url(../assets/mountains-universe-2.png)'

  router.route(event)
}

function changeExplorationPage(event){
  event.preventDefault()

  linkHome.classList.remove('select')
  linkExploration.classList.add('select')
  linkUniverse.classList.remove('select')
  page.style.backgroundImage = 'url(../assets/mountains-universe-3.png)'

  router.route(event)
}