// const cardEl = document.querySelectorAll('card')
const header = document.querySelector('.header')
const title = document.querySelector('.title')
const excerpt = document.querySelector('.excerpt')
const profile_img = document.querySelector('.profile-img')
const namee = document.querySelector('.name')
const date = document.querySelector('.date')

const animated_bgs = document.querySelectorAll('.animated-bg')

const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)
function getData() {
//   cardEl.forEach(card =>{
      header.innerHTML =
    '<img src="https://source.unsplash.com/featured/?computer/" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML =
    ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit illum repudiandae sunt quos quibusdam, officiis ipsam magnam eum velit corporis. '
    profile_img.innerHTML =
    '<img src="http://source.unsplash.com/50x50?face">'
    namee.innerHTML = 'Namety Name'
    date.innerHTML = 'Jan 28, 2021'
//   })

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}