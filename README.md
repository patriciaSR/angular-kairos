# AngularKairos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Clase 1

### ¿Por qué Angular?

El verdadero cambio se empezó a fraguar en 2014 con la llegada de Angular Dart que usaba una pequeña librería llamada Polymer para la implementación de la parte visual. Google presentó un nuevo lenguaje de programación con tipado y que se podía entender a la primera, gracias a las clases, la herencia simple, las interfaces. Te permitía estructurar aplicaciones de manera muy sencilla.

Su problema es que Google pretendió competir con JavaScript para hacerlo desaparecer, pero cuando vió que los navegadores no iban a querer soportar su máquina virtual, pues recapacitaron y se unieron a JS.

Se creó AngularJS, que es un framework que proporciona una forma estructurada y totalmente testeable de abordar aplicaciones de mucha envergadura con JavaScript.

Microsoft inventa TypeScript como un complemento a ES6 que fundamentalmente proporciona tipado e incluye el concepto de interfaces, lo que da pie a que herramientas como Atom, WebStorm, Visual Studio Code puedan ofrecer distintas utilidades al programador como el marcado de errores, facilidad de refactoring, compilación al vuelo, etc… que hace que las aplicaciones grandes con JavaScript sean mucho más mantenibles y los equipos que las desarrollan mucho más productivos.

#### Web components

Una de las grandes ventajas de Angular es el uso de Web components, que nos permite extender el HTML a nuestro antojo, pudiendo crear etiquetas personalizadas que encapsulan el contenido HTML, la funcionalidad en JavaScript y el estilo en CSS. Para conseguir esto se apoyan en estas cuatro APIs JavaScript que están alrededor de la
especificación de HTML:

##### Custom elements

Nos permite crear las etiquetas semánticamente correctas para la funcionalidad que le queramos dar. Nos permite extender el HTML adaptado a tus necesidades.

##### HTML imports

Nos permite importar un código HTML en otro HTML, se utiliza para la distribución de las librerías de web components.
Esta tecnología se encuentra en desuso dado que su funcionalidad de importación de código se prefiere abordar con los módulos de JavaScript.

##### Templates: crear el componente en offline

Permite crear la estructura visual del web component. No tiene ningún efecto sobre la página, es decir, no se incluye en el DOM hasta que algún proceso de JavaScript lo procesa, hace una copia y lo incluye.

##### Shadow DOM

Permite encapsular el web component para que no se vea afectado por el DOM general de la página a no ser que lo permitamos explícitamente. Encapsular el web componente del resto del arbol DOM

#### Programación reactiva (RxJs)

Otra de las ventajas de usar Angular es la Programación Reactiva.
Permite a los desarrolladores solucionar problemas comunes de una forma muy elegante y con el mínimo código posible, lo que aumenta la mantenibilidad de los proyectos.
Te permite hacer una app que ante eventos de usuario genera una reacción en otro punto de la app sin refrescar la pagina entera.

Los webcomponents y la RxJs son la parte del core del framework, que permiten aumentar el rendimiento y hacer la app más mantenible, gracias a TypeScript. Genial para la creación de SPAs. Es el único que de serie incluye la inyección de dependencias para favorecer el testing y se integra a la perfección con tecnologías de todo tipo.

Aprovecha todas las revoluciones que estan en el estandar (web component y RxJS) y porque usa un lenguaje tipado, mejor trabajo en equipo y te permite que el propio IDE te solucione muchos problemas antes de subir a producción (detección de errores temprana)

#### Características

##### Simplicidad

Es un framework simple, trabajar con los estándares te permite trabajar y adapatarte más rápido, lo que te permite ser más productivo.
El cambio con respecto a AngularJS es muy grande, todo mucho más simple.

La creación de **angular-cli**, que es una herramienta por línea de comandos que nos permite comenzar con un proyecto de cero perfectamente configurado para que solo nos tengamos que preocupar de la programación y no de la configuración básica del proyecto.

##### Rendimiento óptimo

Lo han conseguido gracias al aprovechamiento nativo de los Web Components y la mejora del sistema de detección de cambios en la vista

Por qué el cambio de AngularJS a Angular 2?
para aprovechar el uso de los web components nativos y mejorar el rendimiento.

De cara a reducir el tamaño de la aplicación en producción que hace que la primera carga
sea mucho más rápida, el equipo de Angular ha introducido dos nuevos conceptos, que
son:

###### Ahead of Time Compilation

Prepara tu código para producción, quita el compilador del bundle, tu app comprimida a lo mínimo, lo suficiente para que se levante la app), que tiene que ser lo más pequeño posible para un rápido carga y mejor rendimiento.
Se hace un procesamiento llamado “tree-shaking” que consiste en “agitar” el árbol DOM para que las referencias que no están ligadas, las que no se usan, se eliminen reduciendo el tamaño del bundle al mínimo posible.

Lo más importante es eliminar todos los imports que no se estén utilizando.

Utilizando AOT, la primera carga de la aplicación sea mucho más rápida; en contrapartida, el proceso de “build” es mucho más lento.

En angular 9, esta compilación óptima ya se hace en desarrollo, lo que evita tb problemas de subida a producción. Mucho más determinista.

###### Lazy loading

Se puede configurar el router de tal forma que el bundle inicial solo contenga lo mínimo e imprescindible para que la aplicación se pueda ejecutar en el navegador, haciendo que esta carga sea super rápida, y a medida que el usuario va interactuando con otros módulos de la aplicación, se van descargando los bundles asociados de los que incluso se puede configurar que ya estén precargados. Es necesario que estos bundles asociados tampoco sean muy grandes.

Esta mejora viene favorecida por la inclusión del concepto de módulo y el cambio radical que sufrió la librería de router antes de sacar la versión final del framework.

Consiste en tener un bundle principal muy libiano para la primera carga de la app y a medida que se va interactuando en la aplicación se va descargando el resto.
Tiene varios chuncks que se van cargando poco a poco según la interacción del usuario

##### Inyección de dependencias y Testing

De serie se puede trabajar con inyección de dependencias, lo que mejora el testing. Favorece el uso de dobles en el testing de la aplicación y el diseño con TDD.
Además cuenta con módulos específicos de testing que gracias a la integración con frameworks como Jasmine y Karma

##### Mejora del SEO

Las aplicaciones SPA no son SEO-friendly por defecto, ya que necesitan de una carga previa, que por muy rápida que sea, hace que las arañas de los buscadores no puedan leer el contenido de nuestra aplicación.
Angular te proporciona un módulo llamado “Angular Universal”, que permite el renderizado de la aplicación SPA en servidor de forma que cuando el usuario solicita una página ésta ya está renderizada en HTML, haciendo que la carga de la aplicación sea instantánea y favoreciendo el trabajo de las arañas.

##### Integración con otras tecnologías

Lo que hace especial a este framework es la integración con otras tecnologías que siguen los estándares en distintos ámbitos del desarrollo.
Sabiendo el framework de angular podemos tener acceso a todo el ecosistema con Ionic, NativeScript, NestJs(back), NX(workspaces con Jest, cypress…), Angular Universal(Server Side Rendering) etc

##### Multi soporte a navegadores

Amplia compatibilidad con los navegadores

#### Resumen

* Sigue y aprovecha todos los estándares web de la W3C con lo que no nos estamos casando con la tecnología.
* Permite tener un código único y ejecutar en multidispositivos.
* Tiene un rendimiento óptimo y es más simple y comprensible.
* Permite tener todo nuestro código bajo una red de seguridad de tests y un marco de integración y despliegue continuo.
* Su flexibilidad nos permite interacturar con cualquier tipo de dispositivo físico.

Vue es mucho más parecido a AngularJS y tiene un mejor uso para integrarlo dentro de un marco de una página estática.

##### Mejoras de Angular 9

- El compilador Ivy, mucho más eficiente
- Arranque de la app con la compilación con AOT (ahead of time compilation) por defecto

### Entorno de Desarrollo

#### Instalación de Angular-cli

`$ npm install -g @angular/cli`

#### Extensiones VCode

- TSLint by Microsoft (Lint de TS)
- Angular Language Service (autocompletado y seññalización de errores)
- bma-coverage by brunomartens (% de cobertura de test).
- Import Cost by wix (conocer el tamaño en bytes de los imports que hacemos de librerías de terceros)

#### Creación de un nuevo proyecto

`$ ng new nombre_proyecto [opciones]`

Te pregutnará las siguientes opciones:

- router(Y/N)
- stylesheet format (CSS/SASS...)

### Ejecución del proyecto

`$ ng serve [opciones]`

Realiza una build del proyecto y publica el resultado en el puerto http://localhost:4200/.

**Opciones de interés**:

`--host`

si lo levantas con una ip.0.0.0.0 para que por red otros se puedan conectar a tu ip, localhost:4200 para compartir app

`--port`

para establecer otro puerto distinto al 4200

`--prod`

para establecer la configuración para producción, para que el bunddle sea lo más pequeño posible al hacer el ng build.

#### Ejecución de los tests

`$ ng test [opciones]`

`ng test --browsers ChromeHeadless`

para que al ejecutar los test no se abra un navegador nuevo. Se ejecutan los test por terminal.

`--code-coverage`

para saber el coverage de nuestros tests

#### Ejecución de los tests de aceptación / integración

`$ ng e2e [opciones]`

#### Creación de elementos

##### Applicaciones

`$ ng g application [opciones]`

##### Clases

`$ ng g class/cl [opciones]`

##### Componentes

`$ ng g component/c [opciones]`

##### Directivas

`$ ng g directive/d [opciones]`

##### Enumerados

`$ ng g enum/e [opciones]`

##### Guardas de router

`$ ng g guard/g [opciones]`

##### Interfaces

`$ ng g interface/i [opciones]`

##### Módulos

`$ ng g module/m [opciones]`

##### Pipes

`$ ng g pipe/p [opciones]`

##### Servicios

`$ ng g service [opciones]`

##### Universal

`$ ng g universal [opciones]`

Crea una aplicación universal asociada para correr del lado del servidor.

##### appShell

`$ ng g appShell [opciones]`

Genera una app shell para ejecutar una versión de la aplicación que corra del lado del servidor

##### Librerías

`$ ng g library [opciones]`

##### webWorker

`$ ng g webWorker [opciones]`

#### TSLint

`$ ng lint`

Para checkear que el código de nuestra app pasa las reglas de es-lint de angular. Dejarlo mejor siempre por defecto.
Para configurar la extensión y que automáticamente aplique las correcciones que pueda al código, de forma que no lo tengamos que hacer a mano, añadir al json settings de VScode:

```json
"editor.codeActionsOnSave": {
  "source.organizeImports": true,
  "source.fixAll.tslint": true
}
```

También organizar los imports de una forma determinista y además nos elimina los imports que no estemos utilizando en el momento de guardar el fichero.

#### Construcción del proyecto

`$ ng build [opciones]`

#### Añadir funcionalidad

Desde la llegada de “Schematics” podemos añadir cierta funcionalidad externa a nuestra aplicación simplemente añadiendo la librería adecuada. Ejemplo con Nx

`$ ng add @nxwl/schematics`

#### Facilidad de Deployment

Esto te ayuda al deploy de la aplicación por ejemplo. Configura un asistente para ese despliegue. Ejemplo para desplegar en Firebase:

`$ ng add @angular/fire`

Y ejecutar el comando:

`$ ng deploy`

#### Configuración del espacio de trabajo

Te permite cambiar la configuración json de angular através de línea de comando con:

`$ ng config [opción]`

#### Actualizar las dependencias

Te permite actualizar las dependencias de tu proyecto de una forma segura sin que esas actualizaciones rompan funcionalidad (te avisan antes de intalar las actualizaciones) con:

`$ ng update opciones`

Si lo ejecutamos sin opciones nos va a mostrar las dependencias que considera el CLI que pueden ser actualizadas

#### Consejo para la utilización de comandos

Cidado con el trabajo con distintas versiones de angular. Para evitar problemas de versiones y conflictos, en vez de usar el comando ng, mejor usar el **`npm run ng --`** y los comandos que queramos configurado con la versión que haya en el package.json

#### El IDE no refresca los cambios automáticamente

Esto puede ser debido a que los watchers superan el límite establecido por tu sistema operativo y no es capaz de detectar los cambios.
Para solucionar esto tenemos que aumentar este número. En el caso de Linux esto se puede hacer añadiendo la siguiente línea al final del fichero /etc/sysctl.conf

`fs.inotify.max_user_watches=524288`

Este el número máximo permitido. Para aplicar el cambio tenemos que ejecutar:

`$> sudo sysctl -p`

#### Ficheros importantes

El `index.html` carga el bundel, no es tu app

`main.ts` para el arranque de la app

`main.css` para setear los estilos de tu app y tus variables globales.

### Módulos

Mínimo tiene que haber un módulo principal (App).
El concepto de módulo, que permite estructurar y organizar la aplicación en áreas funcionales a fin de que puedan
ser reutilizadas en otras aplicaciones.
El propio framework modulariza todas sus funcionalidades de forma que solo tenemos que importar, en el módulo principal de la aplicación, los elementos del framework que necesitemos.

Los módulos se definen con el decorador @NgModule. Dentro de este decorador tenemos una serie de propiedades:

- **providers**, elementos que pueden ser inyectados en este módulo o sus hijos
- **declarations**, array de directivas y pipes que pertenecen al módulo
- **imports** solo para importar otros módulos.
- **exports** para directivas y pipes para uso en otros módulos.
- **entryComponents**: componentes que serán compilados en el arranque. Con Angular 9 ya no hace falta.
- **bootstrap**: se define cual es el componente principal de la aplicación. y esta propiedad solo estará en este módulo principal
- **schemas**, para poder utilizar web components no creados con angular (extensive, o librerías de terceros CUSTOM_ELEMENT_SCHEMA)
  Lo usual es tener un Modulo pricipal liviano y módulo secundarios organizados por funcionalidad.

### Arranque de la app

En el main.ts declaramos quien es el módulo principal con el bootstrapModule()
Ese componente principal tiene que estar declarado y dentro del bootstrap en el app.module.ts

El proceso de arranque lee el selector de nuestro componente principal y trata de encontrarlo en el fichero index.html de nuestra aplicación.

Nos tenemos que dar cuenta que el index.html no es parte de nuestra aplicación Angular, es simplemente el contenedor donde instanciamos nuestra aplicación

### Módulos Secundarios

Podemos coger elementos que están relacionados entre sí a través de una misma funcionalidad y crear con ellos módulos secundarios a fin de poder ser importados en cualquier módulo principal de nuestra aplicación.

Para el uso de elementos comunes entre módulos, La solución más sencilla es declarar un nuevo módulo llamado “SharedModule” que declare estos elementos compartidos (pipes, directivas, componentes) e importarlo en los módulos en los que sean necesarios.

La separación en módulos por funcionalidades de nuestra app nos permite aplicar el lazzy loading

Acordarse de los imports y los exports del componente para poder utilizarlos en el módulo principal.

### Directivas

3 tipos

#### Componentes

Son partes reutilizables de una aplicación que están formados por dos partes diferenciadas: la vista y la lógica de negocio.
Clase anotada con el decorador @Component. Obligatorio tiene que tener las propiedades:

- selector: nombre de la etiqueta HTML con el que le vamos a hacer referencia
- template/ templateUrl:contenido HTML

##### Ciclo de vida del componente

Los componentes tienen un ciclo de vida del cual podemos hacer hook y meter código
gracias a estas funciones que por defecto tenemos disponibles y que tienen que implementar cada una de las interfaces, entre paréntesis el nombre del método a implementar:
* **OnChanges** (ngOnChanges): se llama cuando un valor de input modifica su valor. Recibe el objeto SimpleChange para recuperar el valor actual y el anterior.
* **OnInit** (ngOnInit): se llama después del primer OnChanges y del constructor.
* **DoCheck** (ngDoCheck): se lanza después de cambiar un valor o una dirección de memoria (se puede personalizar el change detection).
– **AfterContentInit** (ngAfterContentInit): se llama justo después de inicializar el componente.
– **AfterContentChecked** (ngAfterContentChecked): después de cada check del contenido del componente.
– **AfterViewInit** (ngAfterViewInit): después de que la vista del componente haya sido inicializada.
– **AfterViewChecked** (ngAfterViewChecked): después de cada check del contenido de la vista.
* **OnDestroy** (ngOnDestroy): justo antes de que la vista haya sido destruida.

Angular no cumple con el standar de los ciclos de vida, se han creado su propio ciclo de vida.
Implementar código js dentro de OnInit() es el evento más utilizado. Se hacen las inicializaciones del componente. El constructor únicamente se deja para la inyección de dependencias.
OnDestroy() tb es bastante utilizado. Para liberar recursos

#### Directivas De Atributo

Son un tipo de directiva sin template que se utiliza para cambiar la apariencia o el comportamiento de un elemento del DOM.

##### ngClass y class binding

ngClass para meter clases de forma dinámica en función de las condiciones que establezcamos, con un formato json con las condiciones booleanas de las clases, en función de las variables declaradas en mi componente.

```html
<li [ngClass]="{even: e && !l, odd: o && !l , last: l}" [ngSwitch]="color"></li>
```

Si la lógica es solo una, una sola condición es mejor usar **class binding** [class.className], el nombre de la clase que queramos aplicar en fución del booleano de nuestra propiedad.Es mejor este uso para mejorar el rendimiento.

```html
<div [class.special]="isSpecial">Contenido</div>
```

##### ngStyle y style binding

ngStyle, establecer propiedades css en función de las variables de nuestro componente dentro del atributo style en la etiqueta del componente.

```html
<h1 [ngStyle]="{'font-style': style, 'font-size': size, 'font-weight': weight}">
  Contenido
</h1>
```

Y si es una única propiedad, mejor usar el style binding [style.fontSize]

```html
<div [style.fontSize]="isSpecial ? 'x-large' : 'smaller'">
  Contenido
</div>
```

#### Estructurales

Son el tipo de directivas que alteran el contenido del componente pudiendo añadir, eliminar o reemplazar elementos del DOM.

##### ngIf-then-else

Permite mostrar o no un elemento HTML en función del resultado de una condición.
\*ngIf, es una simplificación del ng-template [ngIf]=

Los casos con condiciones adicionales tienen que ir con el ng-template y el contenido que se pinte dependerá del then ok else error en la etiqueta principal, y se especifica con el mismo nombre en los ng-templates #ok y #error

```html
<div *ngIf="errorCount == 0; then ok else error"></div>

<ng-template #ok>No errors</ng-template>

<ng-template #error>
  {{errorCount}} errors
</ng-template>
```

##### ngSwitch

Para agrupar un conjunto de condiciones, estableciendo las distintas condiciones con \*ngSwitchCase="valor"

```html
<div [ngSwitch]="value">
  <p *ngSwitchCase="'init'">increment to start</p>
  <p *ngSwitchCase="0">0, increment again</p>
  <p *ngSwitchCase="1">1, increment again</p>
  <p *ngSwitchCase="2">2, stop incrementing</p>
  <p *ngSwitchDefault>< 2, STOP!</p>
</div>
```

##### ngFor

Permite repetir un elemento HTML tantas veces como marque la iteración de una colección de valores
\*ngFor para recorrer arrays y objetos para hacer el pintado de elementos repetitivos (listas)
Podemos recuperar el indice(index) y si es par(odd) o impar(even) y si es el último elemento del bucle(last).

```html
<ul>
  <li
    *ngFor="let item of items; let i = index; let o = odd; let l = last; let e = even"
  >
    {{i}} {{item}}
  </li>
</ul>
```

**Mirar práctica**


### Pipes
Los pipes se utilizan para hacer transformaciones sobre la forma de visualización de los datos en la vista.
La logica de los pipes aplican solo a los templates y se utilizan para la transformación de datos dentro del template.

Hay muchos pipes implementados de serie. Todos ellos se encuentran el módulo CommonModule de la librería ‘@angular/common’.

Hay que poner el comando `|` y el nombre del pipe.

#### DatePipe: date_expression | date[:format[:timezone[:locale]]] 
es utilizado para formatear fechas. Ejemplos:
```jsx
{{today | date:'medium'}} //Oct 10, 2017, 5:33:09 PM
{{today | date:'yyyy-MM-dd'}} //2017-10-10
```

#### DecimalPipe: number_expression | number[:digitInfo[:locale]] 
para formatear variables de tipo number estableciendo el número de enteros y número mínimo y máximo de decimales.
```jsx 
{{34.676 | number:'2.0-2'}} //34.68
```

#### UpperCasePipe/LowerCase/TitleCase: string | uppercase/lowercase/titlecase 
para poner en mayúsculas un texto.
```jsx
{{'Texto de prueba' | uppercase}} //TEXTO DE PRUEBA
```

#### I18nPluralPipe: expression | i18nPlural:mapping[:locale] 
para ajustar el texto en base a la cardinalidad de un valor. Por ejemplo, cuando mostramos la cantidad de resultados y queremos un texto distinto en función del número de resultados devueltos.

#### I18nSelectPipe: expression | i18nSelect:mapping 
para definir un objeto clave/valor y pintar por pantalla el valor que coincida con la clave. Es útil cuando queremos poner un texto distinto en base a si el usuario es hombre o mujer, por ejemplo.

```jsx
 -- En la clase de negocio
 genero: string;
 generoMapping: {[key: string]: string};

 ngOnInit() {
 this.genero = 'hombre';
 this.generoMapping = {'hombre': 'Sr.', 'mujer': 'Sra.'};
 }
 -- En el template

 {{genero | i18nSelect:generoMapping}} //Sr.
```

#### JSONPipe: expression | json 
para pintar un objeto en formato json, útil en fase de depuración.
```jsx
{{obj | json}}
```

#### SlicePipe: array_or_string_expression | slice:start[:end] 
para hacer subcadenas o subarrays.

#### AsyncPipe: observable_or_promise_expression | async 
para suscribirnos a un observable o una promesa y pintar el último valor emitido.


Los pipes se pueden encadenar con el simbolo `|` uno detrás de otro siempre que sean compatibles

#### Creación de pipes propios
También puedes crear pipes propios. Si solo es una transformación de datos a nivel visual, es el momento de crear un pipe.

Lo primero que tenemos que hacer es decorar la clase con el decorador @Pipe donde realizamos la definición de las propiedades del pipe:
• **name**: será el nombre que identifique al pipe en el template de un componente.
• **pure**: true (por defecto) si es stateless o false si es stateful.

Ahora tenemos que crear una clase que implemente la interfaz PipeTransform y dentro del método transform ejecutar la lógica que queramos aplicar al valor, teniendo en cuenta que en el primer argumento vamos a recibir el valor al que queremos aplicar la transformación y en el segundo argumento y sucesivos, los parámetros de parametrización

No olvides declarar la clase en la propiedad declarations del módulo correspondiente











## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
