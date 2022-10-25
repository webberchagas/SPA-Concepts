export class Router {
  routes = {}

  add(pathName, address){
    this.routes[pathName] = address
  }
  
  route(event){
    window.history.pushState({}, '', event.currentTarget.href)

    this.handle()
  }
  
  handle(){
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
  
    fetch(route).then(data => data.text()).then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }
  
}