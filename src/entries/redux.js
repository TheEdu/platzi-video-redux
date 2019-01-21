import { createStore } from 'redux'


const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
}

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

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

const store = createStore(
  (state) => {
    return state
  }, // reducer: función pura que retorna el próximo estado
  initialState, //  PreloadState / InitialState = Estado inicial de la aplicación, primere carga, llamado al api. Puede ser cualquier tipo de dato
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enhancer = función que puede extender redux con capacidades añadidas por librerías externas. Es un parámetro opcional.
)