// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

document.getElementById("profile").classList.toggle("is-active")
document.getElementById("profile_nav").classList.replace("hover-underline-animation","hover-underline")

document.getElementById("profile_nav").addEventListener('click', function(){
  document.getElementById("profile").style.removeProperty('display')
  if(!document.getElementById("profile").classList.contains("is-active")){
    document.getElementById("profile").classList.toggle("is-active")
  }
  document.getElementById("about").style.display = 'none'
  document.getElementById("about").classList.remove("is-active")
  document.getElementById("blog").style.display = 'none'
  document.getElementById("blog").classList.remove("is-active")

})

document.getElementById("about_nav").addEventListener('click', function(){
  document.getElementById("about").style.display = 'block'
  if(!document.getElementById("about").classList.contains("is-active")){
    document.getElementById("about").classList.toggle("is-active")
  }
  document.getElementById("profile").style.display = 'none'
  document.getElementById("profile").classList.remove("is-active")
  document.getElementById("blog").style.display = 'none'
  document.getElementById("blog").classList.remove("is-active")
})

document.getElementById("blog_nav").addEventListener('click', function(){
  document.getElementById("blog").style.display = 'block'
  if(!document.getElementById("blog").classList.contains("is-active")){
    document.getElementById("blog").classList.toggle("is-active")
  }
  document.getElementById("profile").style.display = 'none'
  document.getElementById("profile").classList.remove("is-active")
  document.getElementById("about").style.display = 'none'
  document.getElementById("about").classList.remove("is-active")
  
})

