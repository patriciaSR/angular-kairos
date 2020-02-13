# AngularKairos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Indice

1. [Clase 1](#Clase-1)
    - [¿Por qué Angular](#¿Por-qué-Angular?) 
    - [Entorno de Desarrollo](#Entorno-de-desarrollo) 
    - [Ejecución del Proyecto](#Ejecución-del-Proyecto) 
    - [Módulos](#Módulos-en-Angular) 
    - [Arranque de la App](#Arranque-de-la-app)
    - [Módulos secundarios](#Módulos-secundarios)
    - [Directivas](#Directivas-en-angular)
    - [Pipes](#Pipes-en-angular)

2. [Clase 2](#Clase-2)
    - [Data Binding](#Data-Binding)
    - [Servicios e Inyección de Dependencias](#Servicios-e-Inyección-de-Dependencias)
    - [Router](#Router)

3. [Clase 3](#Clase-3)
    - [Recuperar información del router](#Recuperar-información-del-router)
    - [Rutas de guarda](#Rutas-de-guarda)
    - [Rutas anidadas](#Rutas-anidadas)

4. [Clase 4](#Clase-4)
    - [Formularios](#Formularios)


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

- Sigue y aprovecha todos los estándares web de la W3C con lo que no nos estamos casando con la tecnología.
- Permite tener un código único y ejecutar en multidispositivos.
- Tiene un rendimiento óptimo y es más simple y comprensible.
- Permite tener todo nuestro código bajo una red de seguridad de tests y un marco de integración y despliegue continuo.
- Su flexibilidad nos permite interacturar con cualquier tipo de dispositivo físico.

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

### Módulos en Angular

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

### Directivas en Angular

3 tipos

#### Componentes

Son partes reutilizables de una aplicación que están formados por dos partes diferenciadas: la vista y la lógica de negocio.
Clase anotada con el decorador @Component. Obligatorio tiene que tener las propiedades:

- selector: nombre de la etiqueta HTML con el que le vamos a hacer referencia
- template/ templateUrl:contenido HTML

##### Ciclo de vida del componente

Los componentes tienen un ciclo de vida del cual podemos hacer hook y meter código
gracias a estas funciones que por defecto tenemos disponibles y que tienen que implementar cada una de las interfaces, entre paréntesis el nombre del método a implementar:

- **OnChanges** (ngOnChanges): se llama cuando un valor de input modifica su valor. Recibe el objeto SimpleChange para recuperar el valor actual y el anterior.
- **OnInit** (ngOnInit): se llama después del primer OnChanges y del constructor.
- **DoCheck** (ngDoCheck): se lanza después de cambiar un valor o una dirección de memoria (se puede personalizar el change detection).
  - **AfterContentInit** (ngAfterContentInit): se llama justo después de inicializar el componente.
  - **AfterContentChecked** (ngAfterContentChecked): después de cada check del contenido del componente.
  - **AfterViewInit** (ngAfterViewInit): después de que la vista del componente haya sido inicializada.
  - **AfterViewChecked** (ngAfterViewChecked): después de cada check del contenido de la vista.
- **OnDestroy** (ngOnDestroy): justo antes de que la vista haya sido destruida.

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

### Pipes en Angular

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
{
  {
    "Texto de prueba" | uppercase;
  }
} //TEXTO DE PRUEBA
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
{
  {
    obj | json;
  }
}
```

#### SlicePipe: array_or_string_expression | slice:start[:end]

para hacer subcadenas o subarrays.

#### AsyncPipe: observable_or_promise_expression | async

para suscribirnos a un observable o una promesa y pintar el último valor emitido.

Los pipes se pueden encadenar con el simbolo `|` uno detrás de otro siempre que sean compatibles

#### Creación de pipes propios

También puedes crear pipes propios. Si solo es una transformación de datos a nivel visual, es el momento de crear un pipe.

Lo primero que tenemos que hacer es decorar la clase con el decorador @Pipe donde realizamos la definición de las propiedades del pipe:

- **name**: será el nombre que identifique al pipe en el template de un componente.
- **pure**: true (por defecto) si es stateless o false si es stateful.

Ahora tenemos que crear una clase que implemente la interfaz PipeTransform y dentro del método transform ejecutar la lógica que queramos aplicar al valor, teniendo en cuenta que en el primer argumento vamos a recibir el valor al que queremos aplicar la transformación y en el segundo argumento y sucesivos, los parámetros de parametrización

No olvides declarar la clase en la propiedad declarations del módulo correspondiente

Práctica:
Se crea un módulo pipe y dentro un pipe decorator.
Para poder usar el pipe en otro módulo, lo tenemos que exportar en el pipe.module:
exports: [DecoratorPipe].
Y en el módulo donde lo queramos utilizar, importamos el módulo de las Pipes en el DirectivesModule.
imports: [PipeModule].

En los imports solo van módulos. Solo se exportan componentes, pipes y directivas.

Se pueden usar variables declaradas en el componente para los argumentos de los pipes.

## Clase 2

### Data Binding

Es el mecanismo de sincronización entre el modelo(lógica) y la vista(template). Angular tiene cuatro tipos
de data binding: tres de una sola dirección (interpolation, property binding y event binding), y uno de doble dirección con la directiva ngModel.
El binding bidireccional usarlo con cuidado porque empeora el rendimiento.

#### Interpolación {{}}

La forma más sencilla de mostrar un valor del modelo en el template del componente

#### Property binding []

Permite asignar valores a los elementos de la vista. Tres tipos:

##### Element property

Bindear propiedades del HTML con variables declaradas en el componente. No poner interpolación después del =
Nota: se prefiere utilizar la interpolación por simplicidad.

```html
<p [innerHTML]="'My favourite number is ' + myNumber"></p>
```

##### Directive property

ngIf, ngClass, style...
Se pueden hacer también directivas propias

##### Component property (props, @Inputs)

Transmitir info de componente padre a hijo. Props que se recogen dentro del componente como @Inputs

```html
--- Componente padre
<person-detail [person]="currentPerson"></person-detail>
--- Componente hijo
```

```js
@Component({
  selector: "person-detail",
  template: `<p>{{person | json}}</p>`
})
export class PersonDetailComponent {
  @Input() person: Person;
}
```

#### Event binding ()

Define la comunicación desde la vista hacia el modelo. Es una comunicación que responde a alguna acción del usuario(click).
Nos permite manejar y crear eventos y asociarlo a métodos implementados en el componente.

```html
<button (click)="onSave()">Salvar</button>
```

También podemos manejar en el padre eventos propios generados por un componente hijo.
Emisión de eventos: se define un método que emite el evento al componente padre (this.evento.emit(info)) y pasa la información de hijo a padre a través de \$event. El nuevo evento se declara como un @Output() = new EventEmitter()

```html
<person-detail (deleted)="onDeleted($event)"></person-detail> ---ts
```

```js
export class PersonDetailComponent implements OnInit {
  @Input() person: Person;
  @Output() deleted = new EventEmitter();

  ngOnInit() {
    this.deleted.emit("Persona eliminada.");
  }
}
```

Nota importante: el valor que se le pasa a la función sea exactamente \$event ya que es el
lugar donde Angular guarda el valor emitido por el EventEmitter.

**Práctica Pasos:**
Primero crear los @input y @output en el componente hijo
Y en la etiqueta <app-child> es donde manejamos esos dos [message] y el evento que emite (reply)

Podemos implementarlo también en el ngOnChange en vez de tener un botón en el hijo. El OnChanges vigila los cambios que hay en los @Inputs()

### Servicios e Inyección de Dependencias

Servicio puede ser cualquier clase que implementemos que tenga funcionalidad transversal a los componentes, es decir, que queramos que su lógica sea utilizada por varios componentes u otros servicios. De hecho es buena práctica crear una capa de servicios con la lógica de negocio de tu aplicación que sea agnóstica al framework utilizado. Esto permite un mayor desacoplamiento entre clases, favoreciendo el testing unitario y de integración, con la ayuda de los dobles de pruebas; y el diseño con TDD.

Los componentes deben tener la mínima lógica posible porque son muy difíciles de testear

#### Elemento Inyector

Se encarga de instanciar las dependencias para que puedan ser inyectadas a través del constructor de las clases.
El injector principal se crea automáticamente en el proceso de arranque de la aplicación, y por cada clase decorada con @Component, @Directive, @Pipe o @Injectable, se crea un injector secundario que hereda las características de su padre. Se crea la jerarquía de inyectores para la resolución de dependencias.

Elemento injector, crea los providers asociados con el elemento que pueden ser inyectados (@NgModule, @Component..)

**Injector principal**
En caso de que queramos que nuestro provider sea Singleton, es decir, tenga una única instancia y pueda ser inyectado en cualquier punto de la aplicación tenemos que declararlo en el inyector principal de la aplicación.

**Injectores secundarios**
En el caso de querer restringir la inyección del provider a una determinada parte de la aplicación, solo podemos declararlo en la propiedad providers de @Component o @Directive. Solo los elementos que cuelgan de este componente pueden hacer uso del provider.

Los providers estan disponibles de todos los elementos que cuelgan del módulo donde hemos declarado el @Injectable().

Y los providers secundarios que se creen solo estaran disponibles de los elementos que cuelguen de el, no en otros.

De norma general los providers se declaran en el módulo principal (sigleton) y así lo puede utilizar toda la aplicación

Siempre la localización de las dependencias va de abajo a arriba. Y si no lo encuentra da un error 'Not found provider'

#### Declaración de Providers

Un provider es cada uno de los elementos que pueden ser inyectados en el elemento injector.
@Injectable({}) se genera cuando creo un servicio. y con el provideIn: 'root' ya decimos que se declara en el módulo principal (implementado a partir de Angular 6).

Para la definición del provider utilizamos un objeto donde indicamos dos propiedades, por un lado el token de acceso y por otro la receta para crear la instancia.

Inyectamos el servicio en el constructor (private firstService: FirstService). Es como hacer una instancia de ese new que te crea por defecto Angular

No provider for SecondService! --> Si no tenemos el provideIn: 'root', tenemos que declarar el servicio en el modulo de app/ o el que queramos dentro del array de providers.

##### Formas de declarar los providers:

##### useClass

Directamente dentro del array de providers. Es una simplificación de usar un objeto con las propiedades: provide y useClass, indicando en provide la instancia del servicio y en useClass que servicio la va a implementar. Esta sintaxis extendida es útil cuando la clase a implementar es distinta, como en los casos en lo que queremos cambiar la implementación, para crear un fake. Útil para el testing

```js
{provide: SecondService, useClass: SecondService} / {provide: SecondService, useClass: SecondServiceFake}
```

Para poder hacer uso de la instancia de la clase utilizamos el decorador @Inject en el constructor de cualquier elemento, que tenga acceso, indicando el token de localización, es decir, el nombre de la clase.

```js
constructor(@Inject(HelloService) private helloService:HelloService)
```

Desde Angular 5 este @Inject() ya no hace falta, existe una simplificación SOLO para el caso de la inyección de servicios

```js
constructor(private otherService:OtherService){}
```

##### useValue

Cuando lo que queremos es poder compartir un determinado valor u objeto de forma estática, hacemos uso de la receta useValue.
Variables que queramos que estén disponibles para toda la app. valores de configuración. En este caso si que hay que usar siempre el {provide, useValue} y para usarlo poner @Inject('token') private config: any dentro del constructor. En este caso en la propiedad provide establecemos un string que será utilizado como token para la localización del provider y en useValue establecemos el valor que queramos.

```js
providers: [{ provide: "App.config", useValue: config }];
```

Uso del decorador @Inject indicando el token de localización para establecer el valor en el identificador
y poder hacer uso en la lógica del elemento.

```js
constructor(@Inject('App.config') private config){}
```

### Router

El router es el elemento que se encarga de definir todas las potenciales vistas de la aplicación permitiendo cambiar la vista principal de la aplicación en base a las interacciones del usuario, simulando de esta forma la navegación entre páginas dentro de una aplicación SPA.
Hay que definir las rutas de la app y relacionar las rutas con los componentes que tiene que renderizar.

Se define un objeto ROUTES en el módulo principal

Se define '' y '\*\*' Para cuando no encuentre ninguna ruta, lo que hará es un redirectTo:'home' y pathMatch: 'full' para pasar siempre una ruta positiva.
Y esas routas se pasan a traves de los imports con **RouteModule.forRoot(ROUTES)**

Para definir los componentes que se renderizan en módulos secundarios, se defie las ROUTES en los modulos secundarios que se va a mostrar ponemos en el objeto de ROUTES el component: Component y en el import se pone **RouteModule.forChild(ROUTES)**

#### Configuración con Lazzy Loading

Es lo mejor, salvo que la app sea muy pequeña. Hay que:
Tener modulos secundarios y sacarlos del modulo principal para cargarlos solo a través del router
cambiar los path, porque ahora los secundarios serán '' y '/:id' y en el router del módulo principal ponemos los path principales directives y databinding

**El orden importa**, poner las rutas entre los redirect de vacío '' y el '\*\*' y utilizamos el loadChildren:'routedelmodulo#NameModule' o con una arrow function y un import('path del modulo').then() y borramos los módulos secundarios del imports del app module. y así solo se cargará el módulo al que apunta el path.

```js
---Módulo Secundario
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [
  { path:'', component: TutorialesComponent },
  { path:':id', component: TutorialDetailComponent }
];

@NgModule({imports: [CommonModule, RouterModule.forChild(ROUTES)]})
 export class TutorialesModule {}

---Módulo Principal
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
const ROUTES: Routes = [
  { path: '', redirectTo: 'tutoriales', pathMatch: 'full' },
  { path: 'tutoriales', loadChildren: './tutoriales.module#TutorialesModule'},
  { path: 'tutoriales', loadChildren: () => import('./tutoriales.module').then(m => m.TutorialesModule)},
  { path: '**', redirecTo: 'tutoriales'}
];
 @NgModule({imports: [BrowserModule, RouterModule.forRoot(ROUTES)]})
 export class AppModule {}
```

De este modo cuando un usuario haga uso de la aplicación, primero se cargará el bundle principal de forma muy rápida y acto seguido un nuevo fichero con el contenido del módulo de tutoriales.

Nota: es importante tener en cuenta que la resolución del router va en orden desde arriba hacia abajo, por tanto no podríamos poner la ruta de los ‘\*\*’ antes que el resto de rutas, ésta siempre tiene que ir la última y el ‘’ la primera.

#### Inyección del router

El router ya es provider por defecto declarado por angular. Lo podemos utilizar en la lógica de nuestros componentes utilizandolo como thi.router.navigate(['path])

un servicio que te lleve de databinding a directivas

#### Router outlet y router links

El router outlet es la directiva que Angular utiliza para identificar áreas de renderizado en la aplicación, mientras que, el router link es la directiva que hay que utilizar para que Angular sepa montar los enlaces a las distintas rutas.

El router outlet es lo que estará en el template del componente principal App

```html
<nav>
  <a [routerLink]="['tutoriales']">Tutoriales</a>
</nav>

<router-outlet></router-outlet>
```

#### Navegación desde código

Los router links no son la única forma de poder cargar una u otra ruta, esto también lo podemos hacer desde la lógica de cualquier componente, como vemos a continuación:

```js
import { Router } from '@angular/router';

export class TutorialesComponent {

  constructor(private router: Router) { }
    onSelect(tutorial: Tutorial) {
      this.router.navigate( ['tutoriales', tutorial.id]);
    }
}
```

Esta lógica estaría dentro del componente “TutorialesComponent” y lo que permite es que cuando el usuario pulse sobre un elemento de la lista, se dispare el evento onSelect con la información del tutorial que ha pulsado para transmitirla mediante la función “navigate” del router a la vista del detalle que como admite el paso de un id, se lo establecemos como segundo elemento del array, de forma que cuando se produzca este evento se renderice en el router-outlet el componente de detalle con la información que se obtenga a partir de su id.

## Clase 3

#### Recuperar información del router

##### params

La información, ya sea transmitida a través de la directiva router-link o a través de la función navigate del servicio Router, puede ser recuperada gracias al servicio “ActivatedRoute” que se inyecta en el constructor del componente donde queramos recuperar la información del router.

Dentro del objeto snapshot se almacena un array con los parámetros de la URL, los cuales podemos recuperar a través del nombre de la variable.

```js
// si la ruta es 'home/:id'
constructor(private activatedRoute: ActivatedRoute) { }

ngOnInit() {
  const id = this.activatedRoute.snapshot.params.id;
}
```

##### query params

Los query params se usan para definir parámetros que son opcionales, es decir, que no van a formar parte del path si no que se van a añadir a partir del símbolo “?” en la URL. Estos parámetros pueden transmitirse a través de la directiva router-link. Para pasar información a través de la url.

```html
<a [routerLink]="['/state']" [queryParams]="{param:1}">State</a>
```

o si navegamos a través de métodos:

```js
ngOnInit() {
  this.router.navigate(['/state'], {queryParams: {param:1}});
}
```

Para recuperarlos hacemos uso del servicio ActivatedRoute para acceder a ellos a través de identificador en el objeto snapshot, pero en este caso se encuentran en el objeto queryParams.

```js
ngOnInit() {
  this.param = this.actRoute.snapshot.queryParams.param;
}
```

Para solucionar el problema del renderizado del componente, porque el onInit solo se ejecuta una vez, hay que recurrir a la programación reactiva permitiendo subscribirnos tanto a los cambios en params como en queryparams de la url, sin necesidad de tener que refrescar la página para ver los cambios:

```js
ngOnInit() {
  this.activateRoute.queryParams.subscribe((queryParams) => {
    this.param = queryParams['param'];
  });
}
```

#### Rutas de guarda

Caracteristica del ruter para analizar si tenemos permiso para ver/renderizar el componente que se corresponde con la URL (activar la ruta, CanActivate) o si tenemos permisos para salir del componente hacia otra ruta (desactivar la ruta,CanDeactivate).

##### CanActivate

Muy util para cuando el usuario tenga que cumplir cierta condición (rol o estar logueado)
Se implementa como servicio (@Injectable()) y dentro definimos la lógica del método canActivate y devolvemos siempre un booleano (true, dejas que se pinte el componente; false no y reenderizas a otra página como login), segun se cumplan o no las condiciones que hemos puesto.

```js
@Injectable()

export class AuthService implements CanActivate {

constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {

    const token = localStorage.getItem('token');

    if (isValidToken(token)) {
      return true;
    } else {
      this.router.navigateByUrl('/login', {queryParams: {returnUrl: state.url}});
      return false;
    }
  }
}
```

Para salvaguardar una ruta con este servicio simplemente tenemos que indicarlo en la configuración de la ruta, de esta forma (aplicar el injectable al router, dentro del path que queramos proteger):

```js
{path: 'ruta-protegida', component: SecretoComponent, canActivate [AuthService]}
```

##### CanDeactivate

Cuando no permitimos salir del componente ante una determinada situación. Esta solo se aplica a componentes.

Se implementa un servicio con CanDeactivate<ComponenteAlQueAplica>
Implementamos el método dentro y devuelve un booleano, con un confirm() === alert(), que te permite decir si sí(true) o no(false)

Como aplicar el injectable al router, dentro del path que queramos proteger, con canDeactivate:[nombredelainstanciadelservicio]

Pero esto sería si tenemos solo un componente. Si tenemos más de un componente, para que sea genérico, hay que crear una interface en el service que también implementa el método canDeactivate y devuelve un boolean, y así poder decirle al service en vez de un componente solo, pasarle la interfaz.

y los componentes donde lo quieras usar hay que implementar la interfaz CanComponentDeactivate y dentro implementas la lógica de lo que quieras mostrar.

Siempre implementar en la ruta el CanDeactivate con un componente asociado.

```js
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class ConfirmService implements CanDeactivate<CanComponentDeactivate> {
  constructor() {}

  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
```

Ahora el componente que quiera verificar su estado antes de salir de la ruta, tiene que implementar la interfaz CanComponentDeactivate que le obliga a implementar el método canDeactivate con la lógica que requiera.

```js
export class DataBindingChildExampleComponent implements OnInit, CanComponentDeactivate {
  saved: boolean;

  constructor() { }
  
  ngOnInit() {
    this.saved = false;
  }
  save() {
    this.saved = true;
  }
  canDeactivate(): boolean {
    if (saved) {
      return true;
    } else {
      return confirm('Seguro que quieres salir sin guardar');
    }
  }
}
```



Práctica:
en el componente hijo, dar a un botón de guardar y si no se ha pulsado y se intenta a navegar a otro sitio que te salga un confirm.
dentro de auth confirmService con la interfaz y en el componente child implementa la interfaz.

#### Rutas anidadas
Nos permite definir rutas de forma anidada para construir un árbol de jerarquía en nuestras aplicaciones; de forma que podemos establecer nuevos espacios de renderizado (router-outlet) anidados a componentes que ya se visualizaron en su propio router-outlet

Un componente que dentro tiene un router-outlet(Layout/view), todos los paths + componentes que defina dentro de children van a ir asociados a ese componente padre con el router-outlet
Ej: layout de home y layout de login

Acordarse de poner en el routerLink que parta siempre de / para ser más deterministas!!!!

```js
const ROUTES: Routes = [
  {
    path: '',
    component: AppHomeComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: HomeDefaultComponent
      }
    ]
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      {
        path: 'login',
        component: AppLoginComponent
      }
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
```


## Clase 4

### Formularios

Mayores problemas de seguridad, y la validación de formularios tb es un horror.
Angular te ofrece una buena parte de validaciones síncronas y asíncronas

Angular tiene dos formas de acceder: el template driven (ngModel) que hace un binding bidireccional, aqunq cada vez está más en desuso porque empeora el rendimiento. Se prefiere la opción del model react
Configuración dentro del modulo donde se vaya a usar los formularios. en e import con ReactiveFormsModule.

angular ofrece una serie de directivas que machean con el modelo registrado en el componente. en el ngOninitvamos a iniciar el modelo de nuestro formulario con this.form = new FormGroup({con los campos})

para machear el modelo con mi html añadimos la directiva [formGroup]="from" a la etiqueta de form, y en las etiquetas de los inputs se anotan con formControlName="username". se pueden crear subgrupos en distintos fieldsets.
y el submit lo gestionamos nosotros no con el de submit por defecto del form.

crear el formulario con los campos username y pass
**modulos que usemos siempre importarlos enel app.module

#### Validaciones síncronas

required, min, max, email...
hay que seguir manteniendo las validaciones en el back porque pueden atacar al servidor directamente conun json por ejemplo.

para utilizarlas hay que pasarselo como un array en el segundo elemento del form control('', [Validators.required, Validators.email])

*el servicio Validators no se inyecta en el constructor.*

Podemos crear nuestro propios validadores sínconos. Para ello, creamos una clase, los metodos de validación tienen ir con el static, todos tienen que ser estáticos. recibirá como argumento el control (el campo del formulario que queremos chequear), solamente uno. y luego en el array de los validators lo incluimos llamando a la clase.staticMethod).

Qué se devuelve en esto métodos de validación: si la validación es ok, devuelve null (por el tema de los thruthy y falsy en javascript), y si no pasa, devuelvo un objeto con el nombre del método validador y : true para saber qué mensaje específico debo mostrar por pantalla.


#### Validaciones asíncronas
siempre las tienes que implementar tu.
Siempre tienen que devolver una promesa (new Promise). nuestro método recibe un servicio que hace la comunicación con el servidor.
tiene dos callbacks, pero solo usamos el de resolve, hacemos la lógica que qeramos. si todo va ok devolvemos null y si no, devolvemos un objeto con el identificador del método: true.

y para utilizarlo en el ts del componente, se pone como []como tercer argumento del FormControl(), llamandolo como class.ValidatorAsincronoMethod(servicioBack)

#### Estados de un formulario
aAngular añade clases a los inputs del formulario por defecto según su estado (relleno, válido...) que nosotros podemos utilizar para cambiar el css.

ng-:

pristine(el original) vs dirty(modificado)
pending: pintar en gris

solamente se pone touched cuando sales del campo.


para recoger el error que devuelve la validación si ha ido mal, usamos form.get('validatormethod')
lo suyo es poner un div que se muestra o no en función de si está dirty y si no es válido.

### http








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

```

```
