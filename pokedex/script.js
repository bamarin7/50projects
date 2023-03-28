const poke_container = document.getElementById('poke-container')
const pokeCount = 150
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#fff',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
}

const main_types = Object.keys(colors)

const fetchPokes = async () => {
  for(let i = 1; i <= pokeCount; i++) {
    await getPokemon(i)
  }
}

const getPokemon = async (id) => {
  const url = `https:pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()
  createPokeCard(data)
}

const createPokeCard= (pokemon) => {
  const pokeEl = document.createElement('div')
  pokeEl.classList.add('pokemon')

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const id = pokemon.id.toString().padStart(3, '0')

  const pokeTypes = pokemon.types.map(type => type.type.name)
  const type = main_types.find(type => pokeTypes.indexOf(type) > -1)
  const color = colors[type]

  pokeEl.style.backgroundColor = color

  const PokeInnerHTML = `
  <div class="img-container">
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png"
      alt="${name}"
    />
  </div>
  <div class="info">
    <span class="number">#${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
  `

  pokeEl.innerHTML = PokeInnerHTML

  poke_container.appendChild(pokeEl)
}

fetchPokes()