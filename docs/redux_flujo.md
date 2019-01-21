Resume del flujo de eventos
---------------------------

* Se establece un State (estado) inicial con el que se crea originalmente el store mediante el método createStore de redux
* El state inicial define los contenidos que se muestran en la UI mediante store.getState() y la función render()
* Mediante los elementos de la UI se dispara un evento que se captura mediante un listener (como onsubmit) y que invoca al store.dispatch() con una acción específica …
* El Reducer recibe la acción(type y payload) enviada mediante el store.dispatch() y genera un nuevo estado que remplazará al estado inicial (o anterior)
* El cambio del estado es detectado por el store y se ejecuta store.subscribe(handle) … con la función (handle) que manejará lo que sucede cuando ha cambiado el estado
* En la función (handle) recibida por store.subscribe(handle) se invoca la actualización de la UI a partir del nuevo estado creado
* Queda establecido el nuevo estado(state) y queda de nuevo atento el evento (listener) en la UI