import { createStore } from 'redux'

const initialState = [
  {
    "title": "Cancion 1"
  },
  {
    "title": "Cancion 2"
  },
  {
    "title": "Cancion 3"
  },
]

const reducer = function(state, action) {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.payload]
    default:
      return state
  }
}

const store = createStore(
  reducer, // reducer: función pura que retorna el próximo estado
  initialState, //  PreloadState / InitialState = Estado inicial de la aplicación, primere carga, llamado al api. Puede ser cualquier tipo de dato
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enhancer = función que puede extender redux con capacidades añadidas por librerías externas. Es un parámetro opcional.
)

console.log(store.getState())


const render = () => {
  const $container = document.getElementById("playlist")
  $container.innerHTML = ''
  const playlist = store.getState()

  playlist.forEach((play) => {
    const template = document.createElement('p')
    template.textContent = play.title
    $container.appendChild(template)
  })
}

render()


const handleChange = (event) => {
  render()
}

store.subscribe(handleChange)

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);

  //new action to dispath to the Store
  const addSong = {
    type: 'ADD_SONG',
    payload: {
      title: title
    }
  }

  // Sending the song to the Store
  store.dispatch(addSong)
}

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);
