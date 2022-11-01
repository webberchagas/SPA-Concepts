import { Router } from "./route.js"
import {  
  linkLogo, 
  linkHome, 
  linkUniverse, 
  linkExploration, 
  page
} from "./elements.js"
import { Events } from "./events.js"

const router = new Router()

router.add('/','/pages/home.html')
router.add('/home','/pages/home.html')
router.add('/universe','/pages/universe.html')
router.add('/exploration','/pages/exploration.html')
router.add(404,'/pages/404.html')

router.handle()
window.onpopstate = () => router.handle()

const events = Events({  
  linkLogo, 
  linkHome, 
  linkUniverse, 
  linkExploration, 
  page,
  router
})