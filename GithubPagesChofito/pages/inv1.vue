<template>
  <section class="section">
    <div class="has-text-centered">
      <h1 class="is-size-1">Investigación #1</h1>
      <h5 class="is-size-5 has-text-info">11 de abril de 2019, 22:10</h5>
      <h2 class="is-size-3">API's Restful, buenas practicas y documentación</h2>
    </div>
    <div
      class="has-text-justified"
      lang="es-ES"
      link="#0563c1"
      vlink="#800000"
      dir="ltr"
    >
      <p
        align="center"
        class="is-size-2"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          <u>
            <b>
              Diseño API Restful
            </b>
          </u>
        </span>
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          La mayoría de las aplicaciones web modernas exponen interfaces de
          programación de aplicaciones (API) que los clientes pueden usar para
          interactuar con la aplicación.&nbsp;Una API web bien diseñada debe ser
          capaz de admitir:
        </span>
      </p>
      <ul>
        <li>
          <p
            class="is-size-4"
            align="justify"
            style="margin-bottom: 0cm; line-height: 100%"
          >
            <span lang="es-GT">
              <b>
                Independencia de la plataforma
              </b>
            </span>
            <span lang="es-GT">
              .&nbsp;Cualquier cliente debe poder llamar a la API, con
              independencia de cómo esté implementada internamente.&nbsp;Para
              ello, es necesario usar protocolos estándar y contar con un
              mecanismo por medio del cual el cliente y el servicio web puedan
              acordar el formato de los datos que se intercambian.
            </span>
          </p>
        </li>
        <li>
          <p
            class="is-size-4"
            align="justify"
            style="margin-bottom: 0cm; line-height: 100%"
          >
            <span lang="es-GT">
              <b>
                Evolución del servicio
              </b>
            </span>
            <span lang="es-GT">
              .&nbsp;La API web debe poder evolucionar y agregar funcionalidad
              con independencia de las aplicaciones cliente.&nbsp;A medida que
              evoluciona la API, las aplicaciones cliente existentes deben
              seguir funcionando sin necesidad de modificarlas.&nbsp;Toda la
              funcionalidad debe poderse detectar, así las aplicaciones cliente
              puedan usarla completamente.
            </span>
          </p>
        </li>
      </ul>
      <p
        class="is-size-4"
        lang="es-GT"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <br />
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          <b>
            Definición de operaciones en términos de métodos HTTP
          </b>
        </span>
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          El protocolo HTTP define una serie de métodos que asignan significado
          semántico a una solicitud.&nbsp;Los métodos HTTP comunes que usan la
          mayoría de las API web RESTful son:
        </span>
      </p>
      <ul>
        <li>
          <p
            class="is-size-4"
            align="justify"
            style="margin-bottom: 0cm; line-height: 100%"
          >
            <span lang="es-GT">
              <b>GET</b>
            </span>

            <span lang="es-GT">
              &nbsp;recupera una representación del recurso en el URI
              especificado.&nbsp;El cuerpo del mensaje de respuesta contiene los
              detalles del recurso solicitado.
            </span>
          </p>
        </li>
        <li>
          <p
            class="is-size-4"
            align="justify"
            style="margin-bottom: 0cm; line-height: 100%"
          >
            <span lang="es-GT">
              <b>POST</b>
            </span>
            <span lang="es-GT">
              &nbsp;crea un nuevo recurso en el URI especificado.&nbsp;El cuerpo
              del mensaje de solicitud proporciona los detalles del nuevo
              recurso.&nbsp;Tenga en cuenta que POST también puede usarse para
              desencadenar operaciones que en realidad no crean recursos.
            </span>
          </p>
        </li>
        <li>
          <p
            class="is-size-4"
            align="justify"
            style="margin-bottom: 0cm; line-height: 100%"
          >
            <span lang="es-GT">
              <b>PUT</b>
            </span>

            <span lang="es-GT">
              &nbsp;crea o sustituye el recurso en el URI especificado.&nbsp;El
              cuerpo del mensaje de solicitud especifica el recurso que se va a
              crear o actualizar.
            </span>
          </p>
        </li>
        <li>
          <p
            class="is-size-4"
            align="justify"
            style="margin-bottom: 0cm; line-height: 100%"
          >
            <span lang="es-GT">
              <b>PATCH</b>
            </span>

            <span lang="es-GT">
              &nbsp;realiza una actualización parcial de un recurso.&nbsp;El
              cuerpo de la solicitud especifica el conjunto de cambios que se
              aplican al recurso.
            </span>
          </p>
        </li>
        <li>
          <p
            class="is-size-4"
            align="justify"
            style="margin-bottom: 0cm; line-height: 100%"
          >
            <span lang="es-GT">
              <b>DELETE</b>
            </span>
            <span lang="es-GT">
              &nbsp;quita el recurso en el URI especificado.
            </span>
          </p>
        </li>
      </ul>
      <p
        class="is-size-4"
        lang="es-GT"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <br />
      </p>
      <p
        class="is-size-4"
        lang="es-GT"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <br />
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          <b>
            Respuesta a la creación de recursos
          </b>
        </span>
      </p>
      <ul>
        <li>
          <p
            class="is-size-4"
            align="justify"
            style="margin-bottom: 0cm; line-height: 100%"
          >
            <span lang="es-GT">
              Resultados posibles:
            </span>
          </p>
          <ul>
            <li>
              <p
                class="is-size-4"
                align="justify"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  403 (Acceso prohibido)
                </span>
              </p>
            </li>
            <li>
              <p
                class="is-size-4"
                align="justify"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  400 (petición incorrecta, p.ej. falta un campo o su valor no
                  es válido)
                </span>
              </p>
            </li>
            <li>
              <p
                class="is-size-4"
                align="justify"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  500 (Error del lado del servidor al intentar crear el recurso,
                  p.ej. se ha caído la BD)
                </span>
              </p>
            </li>
            <li>
              <p
                class="is-size-4"
                align="justify"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  201 (Recurso creado correctamente)
                </span>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p
            class="is-size-4"
            align="justify"
            style="margin-bottom: 0cm; line-height: 100%"
          >
            <span lang="es-GT">
              ¿Qué URL tiene el recurso recién creado?
            </span>
          </p>
          <ul>
            <li>
              <p
                class="is-size-4"
                align="justify"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  La convención en REST es devolverla en la respuesta como valor
                  de la cabecera HTTP Location
                </span>
              </p>
            </li>
          </ul>
        </li>
      </ul>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          <b>
            Actualización de recursos
          </b>
        </span>
      </p>
      <ul>
        <li>
          <p
            class="is-size-4"
            align="justify"
            style="margin-bottom: 0cm; line-height: 100%"
          >
            <span lang="es-GT">
              Método PUT
            </span>
          </p>
          <ul>
            <li>
              <p
                class="is-size-4"
                align="justify"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  Según la ortodoxia REST, actualizar significaría cambiar TODOS
                  los datos
                </span>
              </p>
            </li>
            <li>
              <p
                class="is-size-4"
                align="justify"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  PATCH es un nuevo método estándar HTTP (2010) pensado para
                  cambiar solo ciertos datos. Muchos frameworks de programación
                  REST todavía no lo soportan
                </span>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p
            class="is-size-4"
            align="justify"
            style="margin-bottom: 0cm; line-height: 100%"
          >
            <span lang="es-GT">
              Resultados posibles
            </span>
          </p>
          <ul>
            <li>
              <p
                class="is-size-4"
                align="justify"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  Errores ya vistos con POST
                </span>
              </p>
            </li>
            <li>
              <p
                class="is-size-4"
                align="justify"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  201 (Recurso creado, cuando le pasamos el id deseado al
                  servidor)
                </span>
              </p>
            </li>
            <li>
              <p
                class="is-size-4"
                align="justify"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  200 (Recurso modificado correctamente)
                </span>
              </p>
            </li>
          </ul>
        </li>
      </ul>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          <b>
            Eliminar recursos
          </b>
        </span>
      </p>
      <ul>
        <li>
          <p
            class="is-size-4"
            align="justify"
            style="margin-bottom: 0cm; line-height: 100%"
          >
            <span lang="es-GT">
              Método DELETE
            </span>
          </p>
        </li>
        <li>
          <p
            class="is-size-4"
            align="justify"
            style="margin-bottom: 0cm; line-height: 100%"
          >
            <span lang="es-GT">
              Algunos resultados posibles:
            </span>
          </p>
          <ul>
            <li>
              <p
                class="is-size-4"
                align="justify"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  200 OK
                </span>
              </p>
            </li>
            <li>
              <p
                class="is-size-4"
                align="justify"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  404 Not found
                </span>
              </p>
            </li>
            <li>
              <p
                class="is-size-4"
                align="justify"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  500 Server error
                </span>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p
            class="is-size-4"
            align="justify"
            style="margin-bottom: 0cm; line-height: 100%"
          >
            <span lang="es-GT">
              Tras ejecutar el DELETE con éxito, las siguientes peticiones GET a
              la URL del recurso deberían devolver 404
            </span>
          </p>
        </li>
      </ul>
      <p
        class="is-size-4"
        lang="es-GT"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <br />
      </p>
      <p
        class="is-size-4"
        lang="es-GT"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <br />
      </p>
      <p
        class="is-size-2"
        align="center"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          <u>
            <b>
              Buenas Prácticas
            </b>
          </u>
        </span>
      </p>
      <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
        <span lang="es-GT">
          <b>
            Versiones del API
          </b>
        </span>
      </p>
      <ul>
        <li>
          <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
            <span lang="es-GT">
              Los cambios en el código no deberían afectar al API
            </span>
          </p>
        </li>
        <li>
          <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
            <span lang="es-GT">
              Si hay cambios en el API se deben usar versiones para no fustrar a
              los desarrolladores
            </span>
          </p>
        </li>
        <li>
          <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
            <span lang="es-GT">
              La mejor opción es añadir un prefijo a las URLS
            </span>
          </p>
        </li>
      </ul>
      <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
        <span lang="es-GT">
          <b>
            HTTP verbs
          </b>
        </span>
      </p>
      <ul>
        <li>
          <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
            <span lang="es-GT">
              Si realizamos&nbsp;CRUD, debemos utilizar los HTTP verbs de forma
              adecuada para cuidar la semántica.
            </span>
          </p>
          <ul>
            <li>
              <p
                class="is-size-4"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  <i>GET</i>
                </span>

                <span lang="es-GT">
                  : Obtener datos. Ej: GET /v1/empleados/1234
                </span>
              </p>
            </li>
            <li>
              <p
                class="is-size-4"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  <i>PUT</i>
                </span>

                <span lang="es-GT">
                  : Actualizar datos. Ej: PUT /v1/empleados/1234
                </span>
              </p>
            </li>
            <li>
              <p
                class="is-size-4"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  <i>POST</i>
                </span>

                <span lang="es-GT">
                  : Crear un nuevo recurso. Ej: POST /v1/empleados
                </span>
              </p>
            </li>
            <li>
              <p
                class="is-size-4"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  <i>DELETE</i>
                </span>

                <span lang="es-GT">
                  : Borrar el recurso. Ej: DELETE /v1/empleados/1234
                </span>
              </p>
            </li>
            <li>
              <p
                class="is-size-4"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  <i>¿PATCH?</i>
                </span>

                <span lang="es-GT">
                  : Para actualizar ciertos datos
                </span>
              </p>
            </li>
          </ul>
        </li>
      </ul>
      <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
        <span lang="es-GT">
          <b>
            Nombre de los recursos
          </b>
        </span>
      </p>
      <ul>
        <li>
          <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
            <span lang="es-GT">
              Plural mejor que singular, para lograr uniformidad:
            </span>
          </p>
          <ul>
            <li>
              <p
                class="is-size-4"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  Obtenemos un listado de clientes: GET /v1/clientes
                </span>
              </p>
            </li>
            <li>
              <p
                class="is-size-4"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  Obtenemos un cliente en partícular: GET /v1/clientes/1234
                </span>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
            <span lang="es-GT">
              Url's lo más cortas posibles
            </span>
          </p>
        </li>
        <li>
          <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
            <span lang="es-GT">
              Evita guiones y guiones bajos
            </span>
          </p>
        </li>
        <li>
          <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
            <span lang="es-GT">
              Deben ser semánticas para el cliente
            </span>
          </p>
        </li>
        <li>
          <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
            <span lang="es-GT">
              Utiliza nombres y no verbos
            </span>
          </p>
        </li>
        <li>
          <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
            <span lang="es-GT">
              Estructura jerárquica para indicar la estructura:
              /v1/clientes/1234/pedidos/203
            </span>
          </p>
        </li>
      </ul>
      <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
        <span lang="es-GT">
          <b>
            Códigos de estado
          </b>
        </span>
      </p>
      <ul>
        <li>
          <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
            <span lang="es-GT">
              Se utilizan los&nbsp;códigos de estado de http
            </span>
          </p>
        </li>
        <li>
          <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
            <span lang="es-GT">
              Si realizamos un request de POST deberemos devolver un 201.
            </span>
          </p>
        </li>
        <li>
          <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
            <span lang="es-GT">
              Se pueden producir múltiples errores en la llamada al API:
            </span>
          </p>
          <ul>
            <li>
              <p
                class="is-size-4"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  falta de permisos
                </span>
              </p>
            </li>
            <li>
              <p
                class="is-size-4"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  errores de validación
                </span>
              </p>
            </li>
            <li>
              <p
                class="is-size-4"
                style="margin-bottom: 0cm; line-height: 100%"
              >
                <span lang="es-GT">
                  O incluso un error interno de servidor.
                </span>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
            <span lang="es-GT">
              Siempre se debe devolver un código de estado HTTP con los
              requests.
            </span>
          </p>
        </li>
        <li>
          <p class="is-size-4" style="margin-bottom: 0cm; line-height: 100%">
            <span lang="es-GT">
              Añadir un mensaje de error si es necesario.
            </span>
          </p>
        </li>
      </ul>
      <p
        class="is-size-4"
        lang="es-GT"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <br />
      </p>
      <p
        class="is-size-2"
        align="center"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          <u>
            <b>
              Documentación de API’s
            </b>
          </u>
        </span>
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          Documentar nuestro código es sumamente importante porque permite que
          cualquier persona con acceso a él pueda saber qué hace cada parte, en
          el mundo de las apis la documentación es sumamente necesario para que
          todo mundo tenga acceso a nuestro sistema, documentar no solo es
          comentar líneas de código, recordemos que los comentarios son
          prácticamente invisibles en nuestro código y la forma correcta de
          hacer todo esto es usando la propia sintaxis que nos provee una
          plataforma para crear una documentación, estos suelen ser comentarios
          especiales que no pasan desapercibidos a la hora de generar el
          producto final; hay muchos frameworks que extienden las capacidades de
          documentación, no solo permiten generar código (comentarios
          especiales) sino que a partir de ahí poder crear una plantilla para un
          sitio web, generar archivos Markdown, html, etc. y exponer
          características bien descritas.
        </span>
      </p>
      <p
        class="is-size-4"
        lang="es-GT"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <br />
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          Dejo 5 recomendaciones que encontré en línea sobre la importancia de
          documentar:
        </span>
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          <b>
            1.&nbsp;Ayuda a entender nuestro código
          </b>
        </span>
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          Cuántas veces hemos revisado nuestro código que hemos escritos días o
          semanas atrás y hemos dicho, ¿qué rayos yo estaré haciendo aquí?
          Probablemente muchas. Y luego tienes que descifrar en que estabas
          pensando en aquel momento y pensar porqué codificaste de la forma en
          que lo hiciste.
        </span>
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          Con una buena documentación del código te hubieses evitado pasar los
          próximos 30 minutos o más pensando en lo que hiciste y por qué lo
          hiciste.
        </span>
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          <b>
            2.&nbsp;Ayuda a los demás
          </b>
        </span>
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          Si perteneces a un equipo de desarrollo donde tienes que compartir tu
          código con varias personas estarías ayudando a los demás. Ya no tienen
          que acudir a ti a preguntarte cómo o porqué hiciste lo que hiciste
          sino que, ahora, simplemente, leen tu documentación y continúa el
          proceso. Le ahorras tiempo a ellos y a ti que puede utilizarse en
          tareas más importante.
        </span>
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          <b>
            3.&nbsp;Te ayuda a corregir errores fácilmente
          </b>
        </span>
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          Además de ayudarte a recordarte qué y cómo hiciste las cosas en el
          código, también, te ayuda a corregir los errores con más facilidad. Ya
          no tienes que ir buscando dónde en el código haces una u otra cosa,
          ahora sabes exactamente que pedazo de código hace lo que estás
          buscando. Simplemente buscas en la documentación el pedazo de código
          que está causando problemas y lo resuelves.
        </span>
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          <b>
            4.&nbsp;Mantiene claro el objetivo
          </b>
        </span>
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          Muchas veces me ha pasado que encuentro pedazos de código que no
          tienen ninguna función y no recuerdo porque escribí eso. Probablemente
          también te ha pasado a ti. Si es así, el documentar te ayudará a
          mantener el objetivo siempre claro.
        </span>
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          Si ese pedazo de código era importante o lo habías escrito para hacer
          una prueba, la documentación te lo habría informado. Solo basta con
          leerla.
        </span>
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          <b>
            5.&nbsp;El código se vuelve reutilizable
          </b>
        </span>
      </p>
      <p
        class="is-size-4"
        align="justify"
        style="margin-bottom: 0cm; line-height: 100%"
      >
        <span lang="es-GT">
          Es posible que, según vamos codificando, necesitemos hacer algo que
          anteriormente habíamos hecho. En lugar de ir mirando nuestro código
          buscando lo que necesitamos, acudimos a la documentación para
          encontrar fácilmente lo que nos hace falta.
        </span>
      </p>
    </div>
    <h3 class="is-size-3">
      <strong class="has-text-danger">Fuente:</strong>
      <p>
        https://docs.microsoft.com/es-es/azure/architecture/best-practices/api-design
      </p>
      <p>
        https://juanda.gitbooks.io/webapps/content/api/arquitectura-api-rest.html
      </p>
      <p>
        https://desarrolladores.me/2014/07/5-razones-para-documentar-nuestro-codigo/
      </p>
    </h3>
  </section>
</template>

<style>
@page {
  size: 21cm 29.7cm;
  margin-left: 3cm;
  margin-right: 3cm;
  margin-top: 2.5cm;
  margin-bottom: 1.25cm;
}
@page:first {
  margin-top: 2.5cm;
  margin-bottom: 2.5cm;
}
</style>
