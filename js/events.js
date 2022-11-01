export function Events({  
  linkLogo, 
  linkHome, 
  linkUniverse, 
  linkExploration, 
  page,
  router
}){
  linkLogo.onclick = changeHomePage
  linkHome.onclick = changeHomePage
  linkUniverse.onclick = changeUniversePage
  linkExploration.onclick = changeExplorationPage
  
  function changeHomePage(event){
    event.preventDefault()
    router.route(event)
    makeLinkActiver()
    
    page.style.backgroundImage = 'url(../assets/mountains-universe-1.png)'
  }
  
  function changeUniversePage(event){
    event.preventDefault()
    router.route(event)
    makeLinkActiver()
  
    page.style.backgroundImage = 'url(../assets/mountains-universe-2.png)'
  }
  
  function changeExplorationPage(event){
    event.preventDefault()
    router.route(event)
    makeLinkActiver()
  
    page.style.backgroundImage = 'url(../assets/mountains-universe-3.png)'
  }
  
  function makeLinkActiver() {
    document.querySelectorAll('nav a').forEach( a => a.classList.remove('active'))
  
    const {pathname} = location
    const currentLink = document.querySelector(`a[href="${pathname}"]`)
    
    const pathNameIsLogo = pathname === "/"
    if(pathNameIsLogo){
      document.querySelector(`a[href="/home"]`).classList.add('active')
    }

    currentLink.classList.add('active')
  }
}
