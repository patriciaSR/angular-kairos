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

5. [Clase 5](#Clase-5)
   - [HTTP: comunicación con el servidor](#Http-comunicación-con-servidor-remoto)

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
export class DataBindingChildExampleComponent
  implements OnInit, CanComponentDeactivate {
  saved: boolean;

  constructor() {}

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
      return confirm("Seguro que quieres salir sin guardar");
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
    path: "",
    component: AppHomeComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "",
        component: HomeDefaultComponent
      }
    ]
  },
  {
    path: "",
    component: SimpleLayoutComponent,
    children: [
      {
        path: "login",
        component: AppLoginComponent
      }
    ]
  },
  { path: "**", redirectTo: "login", pathMatch: "full" }
];
```

## Clase 4

### Formularios

La facilidad de creación y gestión de los formularios con un buen chequeo de errores y personalización de validaciones es uno de los muchos puntos fuertes de Angular, que presenta dos aproximaciones: model driven (uso de la programación reactiva) y template driven (ngModel, con un binding bidireccional). El template driven cada vez está más en desuso porque empeora el rendimiento.

Es uno de los mayores problemas de seguridad, y la validación de formularios es un horror.
Angular te ofrece una buena parte de validaciones síncronas y asíncronas.

#### Configuración Inicial

Necesitamos importar el módulo ReactiveFormsModule de la librería forms de angular, dentro del modulo donde se vaya a usar los formularios, dentro de imports como ReactiveFormsModule.

Angular ofrece una serie de directivas que machean con el modelo registrado en el componente. En el ngOnInit() vamos a iniciar el modelo de nuestro formulario con this.form = new FormGroup({con los campos})

En el componente donde vaya a estar nuestro formulario, para machear el modelo con mi html añadimos la directiva [formGroup]="from" a la etiqueta de form, y en las etiquetas de los inputs se anotan con formControlName="username". Se pueden crear subgrupos en distintos fieldsets.
Y la acción del botón submit lo gestionamos nosotros con un evento asociado al click, no con el de submit por defecto del form.

```html
<form [formGroup]="form">
  Username: <input type="text" formControlName="username" /> Password:
  <input type="password" formControlName="password" />
  <fieldset formGroupName="address">
    city: <input type="text" formControlName="city" /> postcode:
    <input type="text" formControlName="postcode" />
  </fieldset>
  <button>Send</button>
</form>
`
```

y en el component.ts configurar:

```js
form: FormGroup;

constructor() { }

ngOnInit() {
  this.form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    address: new FormGroup({
    city: new FormControl(''),
    postcode: new FormControl('')
  })
}
```

**Importar SIEMPRE todos los modulos que usemos en el app.module**

#### Validaciones síncronas

Como segundo argumento del FormControl se puede pasar un array con el conjunto de validadores síncronos que queremos que nuestro campo supere para considerarlo válido.
Angular ya cuenta con los siguientes validadores síncronos de serie:

- **required**: se pone cuando queremos que el campo sea obligatorio.
- **min**: valida que el valor esté por encima de un valor mínimo.
- **max**: valida que el valor esté por debajo de un valor máximo.
- **minLength**: se establece un número mínimo de caracteres para el campo.
- **maxLength**: se establece un número máximo de caracteres para el campo.
- **email**: valida que el campo cumpla con el formato de email.
- **pattern**: se establece que el campo tiene que cumplir con un determinado patrón.

Aún así, hay que seguir manteniendo las validaciones en el back porque pueden atacar al servidor directamente conun json por ejemplo.

_el servicio Validators no se inyecta en el constructor._

```js
this.form = new FormGroup({
  username: new FormControl("", [Validators.required, Validators.minLength(2)]),
  password: new FormControl("", [Validators.required])
});
```

También podemos crear nuestras propias validaciones síncronas. Para ello creamos una clase, por ejemplo, CommonValidator, que va contener métodos estáticos (tienen que estar siempre definidos con static) con los distintos validadores que reciben el FormControl al que se asocia.

Esos métodos recibirán como argumento el control (el campo del formulario que queremos chequear), solamente uno. y luego en el array de los validators lo incluimos llamando a la clase.staticMethodName).

```js
export class CommonValidator {
  static startWithNumber(control: FormControl) {
    let firstChar = control.value.charAt(0);
    if (firstChar && !isNaN(firstChar)) {
      return { startWithNumber: true };
    } else {
      return null;
    }
  }
}
```

```js
this.form = new FormGroup({
  username: new FormControl("", [
    Validators.required,
    Validators.minLength(2),
    CommonValidator.startWithNumber
  ]),
  password: new FormControl("", [Validators.required])
});
```

Cuando la validación no se cumple lo que devolvemos es un objeto con el identificador (nombre) de la validación a true (que nos será util para pintar el error en la app) y cuando se cumple devolvemos un null. Esto es porque JavaScript a la hora de interpretar el resultado solo lo va a entender como false si es null.

#### Validaciones asíncronas

Son aquellas que requieren de un proceso asíncrono para poder validarse. Por ejemplo, cuando necesitamos validar el dato contra una fuente de datos externa. También se tratan de métodos estáticos pero con la particularidad de que siempre tienen que devolver una promesa (new Promise) y que siempre las tienes que implementar tu, no vienen por defecto en Angular forms.

```js
static userTaken(service: UserService) {
  return(control: FormControl) => {
    return new Promise((resolve) => {
      service.checkUser(control.value).subscribe(
        (response) => {
          resolve(null);
        },
        (error) => {
          resolve({ 'userTaken': true });
        }
      );
    });
  };
};
```

Nuestro método recibe una instancia del servicio que va a utilizar que hace la comunicación con el servidor.
Tiene dos callbacks (resolve, reject), pero solo usamos el de resolve, hacemos la lógica que queramos dentro y si todo va ok devolvemos null y si no, devolvemos un objeto con el identificador del método: true.

Para poder asociar esta validación al control que se quiera, tenemos que incluirla como
tercer parámetro del FormControl en forma de Array

```js
constructor(private service: UserService) { }

this.form = new FormGroup({
  username: new FormControl('',
    [Validators.required, Validators.minLength(2), CommonValidator.startWithNumber],
    [CommonValidator.userTaken(this.service)]),
  password: new FormControl('',
    [Validators.required])
});
```

#### Configurar cuándo se lanzan las validaciones

Se establece un nuevo parámetro “updateOn” que permite establecer los valores ‘blur’ si se quiere realizar la validación cuando se pierda el foco de cada elemento, o ‘submit’ en caso de que solo se quiera hacer cuando se pulse en el botón de submit.

```js
username: new FormControl('', {updateOn: 'blur',
  [Validators.required,
  Validators.minLength(2),
  CommonValidator.startWithNumber]}),
```

#### Estados de un formulario

Los estados de un formulario vienen determinados por los estados de cada uno de los elementos que componen el formulario, mantienen tres estados que cambian entre estos pares:

- pristine <⇒ dirty: original(no modificado) vs modificado
- untouched <⇒ touched: que no se ha hecho foco sobre ellos vs cuando pierden el foco (aunque no se haya modificado el valor) pasan a estado “touched”
- invalid <⇒ valid: este par de estados son los más cambiantes, depende del cumplimiento de las validaciones.
  En base a estos estados Angular varía de forma automática y transparente al desarrollador la clase CSS correspondiente permitiendo definir estilos en función del estado del
  formulario; así podemos definir los siguientes estilos CSS: .ng-valid, .ng-invalid, .ng-touched, .ng-untouched, .ng-pristine, .ng-dirty, ng-pending(pendiente de una validación asíncrona)

Para recoger el error que devuelve la validación si ha ido mal, usamos **form.get('validatormethod')**
Porque lo suyo es poner un div que se muestra o no en función de si está dirty y si no es válido.
Y ara saber si ha pasado la validación o no un campo utilizamos **form.get.('username').valid**

```html
<div *ngIf="form.get('username').dirty && !form.get('username').valid">
  <p *ngIf="form.get('username').hasError('minlength')">
    El nombre debe tener al menos 4 caracteres
  </p>
  <p *ngIf="form.get('username').hasError('startWithNumber')">
    El nombre ya existe
  </p>
</div>
```

## Clase 5

### Http-comunicación con servidor remoto

Instalar y seguir el repo del [servidor-api](https://github.com/raguilera82/api-back-nodejs)

La respuesta que ahora por defecto es JSON y, sobre todo, la inclusión de los interceptores.
Para poder hacer uso del servicio HttpClient de Angular tenemos que importar el módulo
HttpClientModule que se encuentra dentro de @angular/common/http y contiene todos los providers y elementos necesarios para conectarnos con servidores remotos.
De este modo vamos a la configuración del módulo que se vaya a conectar con un
servidor remoto y añadimos el módulo de HttpClientModule, además podemos añadir
un objeto de configuración general con useValue.

```js
const config = {api: 'http://servicio.api'};

@NgModule({
  imports: [HttpClientModule],
  providers: [{provide: 'config', useValue: config)}]
})
```

Ahora creamos un servicio que va a inyectar una instancia del servicio HttpClient y el fichero de configuración. Este servicio será el encargado de hacer de proxy con el servidor remoto a través de los métodos del servicio HttpClient.

Observables, la tercera forma de asincronía más actual y más prefereible ahora mismo. Funciona con RxJs, y no es algo exclusivo de angular. Programación reactiva

Hay que suscribirse a la función asíncrona para poder recuperar los datos que devuelva esa promesa.
y en vez de new Promise, ponemos Observable.create(), si hacemos obs.next es el camino ok y obs.error el de fallo.

y en el subscribe recuperamos con 3 callbacks: data como ok, error como error y el finally como nada.

Servicion HttpClient ya funciona con observables por defecto.
Para poder utilizar el servicio hay que importar el módulo donde vayaos a utilizar este servicio.

A este servicio podemos pasarle información global usando el provider y useValue.

normalmente esta configuración se externaliza en proyectos grandes.

#### Recuperación de datos

Gracias a la nueva característica de Type Checking del servicio HttpClient va a devolver directamente la información de los usuarios.
Para ello creamos una interfaz con los datos del usuario:

```js
export interface User {
  login: string;
  name: string;
}
```

Y lo utilizamos en nuestra clase:

```js
export class ApiProxyService {
  constructor(private http:HttpClient, @Inject('config') private config){}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.config.api);
  }
}
```

Ahora en el componente inyectamos este servicio (no inyectamos nunca el servicio
HttpClient directamente dentro de un componente, se puede pero no se debe) y creamos
dos atributos: users de tipo de User[] y sub de tipo Suscription, los cuales vamos a utilizar en la implementación del método searchUsers. Es importante implementar la interfaz OnDestroy para hacer la desuscripción del Observable y evitar problemas de “memory leak”, a no ser que se haga uso del pipe async.

```js
export class UsersComponent implements OnDestroy {
  users: User[];
  sub: Suscription;

  constructor(private service: ApiProxyService) {}

  searchUsers() {
    this.sub = this.service.getUsers().subscribe(
    response => this.users = response.body,
    error => console.log(error)
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
```

Como comentamos anteriormente, otra opción que tenemos para visualizar los datos es
utilizar el pipe async que trabaja directamente con el Observable asumiendo el control
por nosotros, es decir, se encarga de desuscribirlo en el momento oportuno.
Para hacer uso de él tenemos que modificar la implementación del método searchUsers
y el tipo de dato de users que pasa a ser Observable de tipo array de users.

```js
export class UsersComponent {
  users: Observable<User[]>;

  constructor(private service: ApiProxyService) {}

  searchUsers() {
    this.users = this.service.getUsers();
  }
}
```

Y en el template:

```html
template: `
<ul>
  <li *ngFor="let user of (users | async)">
    {{user.login}} {{user.name}}
  </li>
</ul>
`
```

eEn caso de que la respuesta no fuera en formato JSON tenemos que especificar el formato con la siguiente sintaxis en el servicio:

```js
http.get("/textfile.txt", { responseType: "text" });
```

Recuperación de datos: primero hay que determinar qué interfaz necesitamos para recuperar los datos correctamente. Especificamos las propiedades que nos va a devolver el servicio para que mapeen con los datos del servidor en formado json (es como un DTO, data transfer object). Nombrar así con DTO las interfaces que recogerán estos datos.

Utilizamos el http client inyectandolo en el constructor del servicio donde lo vamos a utilizar, y la configuración con @inject. Y dentro del servicio creado implementamos métodos que hagan las llamadas al servicio http y tenemos que especificar el tipo de llamada (get, put, post...) y la interfaz donde se guardarán los datos con <> y entre parentesis le pasas la url de la api. Y este método devolverá un obserbable de esa interfaz.

Es importante para el testing que estos métodos no implementen otro tipo de lógica de cliente porque esto dificultará el testing. Incluir solamente los métodos de llamada al servidor (get, post, put, delete)

Y por ultimo utilizamos este servicio con llamadas al http client lo inyectamos en el componente que lo necesite para recuperar los datos. y se inyecta en el constructor y hay que subscribirse al método del servicio para recuperar los datos.

Hay que definir también una variable de tipo Suscription para después en el onDestroy hacer un .unsubscribe(). de esa propiedad this.sub y así evitr el memory leak.

No inyectar nunca el servicio http client en un componente porque el testing es imposible.

Pero realmente lo que se prefiere es usar pipes.
No hacemos el subscribe y directamente asignamos ese servicio a un atributo del componente de tipo obserbable<UserDTO>
y dentro del template usamos el **pipe async**, que se encarga de hacer el sub/unsub de forma implicita, automáticamente. Es un pipe por defecto de angular.

Cuando no devuelva json, sino texto plano... en los parámetro de la llamada, a parte del endpoint podemos especificar que el tipo de respuesta es de tipo texto.

Si usamos parámetros en la llamada, podemos incluir el body, y el objeto params que sean necesarios para el enpoint con un .set('clave', 'valor').
Podemos modificar las cabeceras como queramos con HttpHeaders.
El objeto headers es inmutable, por lo que siempre hay que igualarlo a un nuevo objeto headers. Y se pasaría como tercer parámetro en el método como un objeto {headers}

El problema de que esto se podría duplicar en muchos métodos, por eso se crearon los interceptores.

#### Interceptores

El concepto de interceptor nos permite interceptar la petición y realizarle una serie de
modificaciones. Para hacer un interceptor tenemos que crear un servicio (pero podría ser una clase) que implemente la interfaz HttpInterceptor.
El interceptor recibe la petición y el siguiente interceptor en la cadena, no hace nada y llama al siguiente interceptor. Tenemos que tener en cuenta que el orden en la cadena de interceptores lo va a determinar el orden de definición de providers.

##### Modificar cabeceras

El caso de uso más común es modificar la cabecera de autenticación para añadir el token
de acceso. Esto lo podemos hacer de la siguiente forma:

```js
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>,
  next: HttpHandler): Observable<HttpEvent<any>> {

  // Obtenemos el token
  const token = this.auth.getToken();
  // Importante: modificamos de forma inmutable,
  //haciendo el clonado de la petición
  const authReq = req.clone(
    {headers: req.headers.set('Authorization', token)}
  );
  // Pasamos al siguiente interceptor de
  //la cadena la petición modificada
    return next.handle(authReq);
  }
}
```

Tenemos que tener en cuenta que el orden en la cadena de interceptores lo va a determinar el orden de definición de providers, el cual lo podemos hacer de la siguiente forma:

```js
@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
```

Un interceptor es un objeto que se pone antes de hacer la llamada, para establecer toda la configuración de la llamada que necesitemos. Se usan para las tokens, login...

Los interceptores son injectables, servicios, que implementan HttpInterceptor, y hay que implementar el método intercept() que recibe la request y se llama al siguiente interceptor y al final se devuelve next.handle(req) y le pasa la req al siguiente elemento de la lista de interceptores.
next: guarda la lista de interceptores que hay configurados.

En el modulo donde lo vayamos a usar hay que declarar el provider HTTP_Interceptors dentro del array de providers, useClass y el nombre de nuestro nuevo interceptor y multi: true porque puede ser una lista de interceptores.

Lo más tipico es usarlo para crear un interceptor para modificar las cabeceras.

Hay que hacer un clone() de la req original para poder modificar las cabeceras y dentro de este clone establecer las cabeceras. Y esa req transformada es la que le paso al siguiente.

Práctica:
modulo chuck que tiene dentro un componente chuck y dentro del menu de nav hay que tener otro link que lleve al componente chuck. y que sea lazzy con la ruta '/chuck'

Pasos:

1. Crear la ruta lazy en el chuck.module
2. Declararlo en el RouterModule.forChild(ROUTES). No hay falta exportar el componente si se carga por lazzy mode
3. declarar la ruta en el app.module con 'chuck'
4. dentro de app-layout component poner un nuevo linck a esa ruta '/chuck'

Pasos para declarar el servicio:

1. en chuck.module tener el import del HttpClientModule
2. en el chuck.service injectamos el servicio Httpclient e implementamos el método que haga el this.http.get()
3. en el chuck.component inyectamos nuestro servcio chuckService e implementamos el método que va a cargar los datos o en el ngOnInit(), con this.service.getMethod() y guardamos los datos en la propiedad que hayamos definido en el componente.

// TODO --> hacer el chuck un modulo lazzy

Para un bus de notificaciones no podemos usar el pipe async, porque queremos que esté escuchando las llamadas a la api continuamente. En este caso usaremos el suscribe()

Login sevice hace el post con el username y el password a /auth para que devuelve el token, y lo que devuelva lo guardamos en el session storage

Login dentro de auth

Pasos auth:

1. login service
2. token.dto.ts para implementar la interfaz

Hacer la llamada a la api protegida (quote-protected) implementando antes el interceptor de las cabeceras con el barer token
Pasos para crear el interceptor del Bearer token:

1. crear el servicio auth-interceptor.service
2. implementar HttpInterceptor
3. crear las cabecera de authorization haciendo un clon de la request
4. devolver next.handle(newReq)
5. en App Module dentro de providers añadimos uno nuevo con eHTTP_Interceptors
6. Usar el método en el component.ts de chuck implementando otro método asociado a un eveno click en un botón.
7. usar el pipe async en el chuck template para pintar la frase que devuelva la api.

## Clase 7

### Testing

Red de seguridad que hace que cuando vayamos a modificar algo, ver si estamos rompiendo algo en nuestra app. Da fiabilidad (y seguridad a la hora de subir a producción) y facilita el mantenimiento de nuestra app.

automatización de test

test unitarios y de integración en angular se implementan con Jasmine. Estos test testean exclusivamente a una clase en angular. Los de integración prueban más de una clase y necesito tener levantado algún tipo de servicio como un back. Por eso es tan importante de respetar el principio de responsabilidad única.

Los test de ui se hacen con Protractor (selenium por debajo, y unas veces funciona y otras no), aunque hoy en día cypress es muy utilizado, no tira de selenium y es mucho más determinista. Testeaun un flujo entero de negocio.

se pueden tener subsuites, describes dentro de describes aunque no es recomendable.

pirámide de testing: unitarios - integración - ui(e2e), siendo los unitarios los test más rapidos, y ver la covertura de test de nuestra app.
Es preferible que cypress vaya en un proyecto independiente, porque lo mejor es que no conozca nada de la app y sea 100% independiente. Y para poder testear en desarrollo y producción.

si añadimos una x al test hacemos que se ignore el test.
si añadimos una f al test hacemos que solo se ejecute ese test.

el código repetido en tus tests es mejor llevarselo al beforeEach(), por ejemplo hacer instancias de variables y afterEach() para después de cada test.

para ejecutar los test Angular viene configurado con Karma como test runner.

En el karma.config se puede modificar y añadir configuración de la ejecución de los test.

npm run test
-- --code-coverage para ver el coverage

configurar las settings de vscode para que pille el fichero lcov.info del proyecto y cambiar el script del package.json para que arranque los test con coverage y watch.
```json
{
  "bma-coverage":{
    "lcovs":[
      "coverage/lcov.info"
    ]
  }
}
```

y en el package.json modificar el comando de test en los scripts:

```json
    "test": "ng test --browsers ChromeHeadless --code-coverage --watch",
```

en el archivo test.ts configuramos desde donde queremos que los test se lancen
const context = require.context('./app/users', true, /\.spec\.ts$/);


#### Arquitectura de una app testeable

TDD es una herramienta de diseño, que hace que vaya emergiendo la arquitectura de app a medida que se diseñan los tests. Tener el mínimo código posible y muy testeado con una amplia covertura.

3 grandes bloques:
1. componentes, que son difíciles de testear porque están ligados al DOM
2. Proxies, las clases que inyectan el servicio http client. Muy difícil de testear también.
3. Dominio (reglas de negocio y modelo, adpatadores, pipes...) en servicios independientes que sí son fáciles de testear. 

#### Fakes
la parte de comunicación con el servidor, para simplificar el test hay que hacer mocks de esas llamadas al http client por ejemplo. 
Si utilizamos el método spyOn(), llamando al servicio y al método de ese servicio que queremos mockear y que devuelva lo que nosotros queramos en formato de observable con el método de rxjs of()

forzamos la llamada al componente con un component.ngOnInit(), donde se ejecutará el método que hemos hecho el fake. y con un expect y un toHaveBeenCalled para ver si realmente se ha llamado a nuestro método fake.

#### TestBed
TestBed es la clase que nos facilita y que nos va a permitir hacer test unitarios y de integración en angular.

Nos sirve para simlular que nuestra app está corriendo, que los modulos esten importados, que los providers estén bien declarados...
Admite un json de configuración (configureTestingModule) igual que el ngModule() con sus imports y sus providers. Que se incluye enun beforeEach()
y en los providers podemos usar el useClass para pasarle un fake. Aunque es mejor utilizar los spyOn en vez de cambiarle la implementación del servicio en el provide y usando useClass.

Para recuperar los servicios de la inyección de dependencias se usa testBed.get() para que nos devuelva una instancia de esa clase (como si se hiciera un new).

#### Situaciones de testing

1. Pipe/Servicio sin dependencias
añades dentro del configureTesting añadir el provider del servicio o del pipe. Si lo tenemos como providerIn 'root' no habría que declararlo explicitamente en el config.
y usando el pipe.transform() le pasamos los datos iniciales para testear. No olvidarse de declarar el tipo de variable.

2. Pipe/Servicio con dependencias
Hay que mockear esas dependencias externas. Se puede mockear reimplementando el provide con useClass o lo que se prefiere es usando el spyOn para devolver lo que nosotros queramos de forma síncrona (que siempre es más fácil de testear y más determinista).

3. Test asíncronos
usar async await antes de implementar la función del test. Siempre con promesas, no con observables.

4. Test de componentes sin dependencias
en el configureTesting ponemos en las declarations el componente que vamos a testear. Testeamos la lógica, no la vista del componente. El template me da igual. Dentro de escquemas declaramos el No_ERRORS-SCHEMA para que no nos de errores del template.
con createComponente creamos una instancia del componente y se genera una fixture del comonente=?¿¿?¿ whaaat ?¿
y así ya podemos llamar a los métodos que tenga nuestro componente para testear su lógica. Pero no testeamos ninguna interacción con el template.

5. Test de componentes con dependencias
Mockear las dependencias externas para devolver los datos de forma sincrona.

6. Test de navegación

7. Test del Router

8. Formularios
importar el ReactiveFormsModule
9. Emision de Eventos @Outputs

Se pueden crear componentes embebidos para testear directivas propias.

#### Test de un servicio con dependencia HttpClient
testear que la llamada que estamos haciendo es correcta (url correcta).

HttpClientTestingModule y TestingController
Dentro del describe, en el beforeEach importamos el TestingModule y en el provider el servicio que vamos a testear(el servicio que implementa el httpClient)

Queremos verificar que la llamada al servidor se está produciendo. se hace un httpMock con el TestingController
.flush() es que la request devuelva los datos fake que nostros queramos, por lo que si hacemos un subscribe  el expect devuelva esos datos fake. Por eso es fundamental que los servicios del http client haga solo eso, devolver los datos de la llamada.

y con el .verify() se comprueba que todo se ha llamado correctamente.

crear un modulo de usuarios, y vamos a crear cada elemento con su test

acordarse de meter en el imports del test HttpClientTestingModule

flush para indicar los datos que van a llegar cuando se ejecute el subscribe y el verify es para que el expectOne y el método GET han sido llamados correctamente.

creamos un servicio intermedio entre el proxy y el componente que va a pintar el modelo (que no tiene que ser como el modelo del proxy), que va a adaptar los datos y aplica la lógica de negocio que queramos y se lo pasamos al componente que los va a pintar (SmartComponent).

map funcion de la programacion reactiva que recoge el flujo de la app y se lo pasa a la info que le llega.

no hacer push de objetos en un array. usar el spread operators.

hacer un spyOn(de la instancia del servicio del proxy?¿)

meter el componente en la vista de forma lazy.

**Blog**
Mostrar la lista de posts con los tests asociados.


##### Compodoc documentation
https://compodoc.app/guides/installation.html 

npx compodoc -p tsconfig.json



## Clase 8

### Prgramación reactiva rxjs

Los cambios en las variables son dinámicos.

cualquier cosa en la web provoca una fuente de datos. 

mergeMap()

### Gestión de Estado

Peticiones desde el componente. Condiciones de carrera si utilizamos servicios singleton.

BehaviorSubject almacena el utimo valor emitido y es lo que se utiliza para generar un store.

ngx es como para usarlo en grandes proyectos

pero hay librerias intermedias que te permiten también manejar el estado.

#### ngx-model 

#### Akita

#### Implementar el store service

la clase del store tiene que ser abstract, que no se puede instanciar directamente.

tap() para almacenar lo que nos venda del servidor en el posts. Devolvemos unpromesa para poder utilizar dentro del componente async await.

implementarlo en el proyecto...





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
