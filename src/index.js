console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',function(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  let breeds = []
  const ul = document.querySelector('#dog-breeds')
  //fetch
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => data.message.forEach(dogImg => renderImg(dogImg)))
  
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
       breeds = Object.keys(data.message)
      renderBreeds(breeds)
    })


  function renderImg(dogImg){
  const container = document.querySelector('#dog-image-container')
  const image = document.createElement('img')
  image.src = dogImg
  container.append(image)
}
  function renderBreeds(breeds){
    breeds.forEach(breed =>{
      const li = document.createElement('li')
      li.innerText = breed
      ul.append(li)
      li.addEventListener('click',changeColor)
    })
  }
  
  function changeColor(e){
    e.target.style.color = "green"
  }

  const dropdown = document.getElementById('breed-dropdown')
  

  dropdown.addEventListener('change',handleChange)

  function handleChange(e){
    let letter = e.target.value
    let filteredBreeds = breeds.filter(breed => breed.startsWith(letter))
    ul.innerHTML =""
    renderBreeds(filteredBreeds)
  }

})