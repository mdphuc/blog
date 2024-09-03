let a = document.getElementsByClassName("hover-underline-animation")

document.getElementById("blog_nav").addEventListener('click', function(){
  document.getElementById("profile_nav").classList.replace("hover-underline","hover-underline-animation")
  document.getElementById("about_nav").classList.replace("hover-underline","hover-underline-animation")
  document.getElementById("blog_nav").classList.replace("hover-underline-animation","hover-underline")
})

document.getElementById("profile_nav").addEventListener('click', function(){
  document.getElementById("blog_nav").classList.replace("hover-underline","hover-underline-animation")
  document.getElementById("about_nav").classList.replace("hover-underline","hover-underline-animation")
  document.getElementById("profile_nav").classList.replace("hover-underline-animation","hover-underline")
})

document.getElementById("about_nav").addEventListener('click', function(){
  document.getElementById("profile_nav").classList.replace("hover-underline","hover-underline-animation")
  document.getElementById("blog_nav").classList.replace("hover-underline","hover-underline-animation")
  document.getElementById("about_nav").classList.replace("hover-underline-animation","hover-underline")
})