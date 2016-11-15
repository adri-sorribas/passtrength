Passtrength.js
===========

Fully responsive jQuery input password strength indicator plugin. Featuring multiple strength security indicators and show/hide password — Edit

### Documentation

Passtrength JS propociona un sistema básico que indica la fuerza de la contraseña introducida en cualquier input de tipo password a nivel visual de cara al usuario.

Este sistema básico de indiacción se basa en 4 puntos en base a la contraseña introducida:

- La contraseña introducida contiene X caracteres o más.
- La contraseña introducida contiene mayúsculas.
- La contraseña introducida contiene números.
- La contraseña introducida contiene caracteres especiales. [!,%,&,@,#,$,^,*,?,_,~]

### Demo

[https://adri-sorribas.github.io/passtrength/](https://adri-sorribas.github.io/passtrength/)

### Features

- Número mínimo de caracteres custom.
- Sistema para mostar/esconder la contraseña (opcional)
- Icono para mostrar/esconder custom.
- Indicador visual progress bar.
- Indicador visual "tooltip" con mensaje custom (opcional).

### Getting Started

##### Include plguin files

Just add a link to the css file in your `<head>`:
```html
<link rel="stylesheet" type="text/css" href="css/passtrength.css"/>
```

Then, before your closing ```<body>``` tag add:

```html
<script type="text/javascript" src="js/jquery.passtrength.min.js"></script>
```

#### Package Managers

```sh
# NPM
npm install 
```

#### Initiate the plugin

Una vez incluidos los archivos necesarios deberás inicializar el plugin. La forma básica sera;

```js
$('#myPassword').passtrength();
```

Si necesitas modificar las opciones:
```js
$('#myPassword').passtrength({
  minChars: 8,
  passwordToggle: true,
  tooltip: true,
  textWeak: "Weak",
  textMedium: "Medium",
  textStrong: "Strong",
  textVeryStrong: "Very Strong",
  eyeImg : "img/eye.svg"
});
```

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
minChars | int | 8 | Define el mínimo de caracteres que debe introducir el usuario
passwordToggle | boolean | true | Activa o desactiva la opción de mostrar/esconder la contraseña
tooltip | boolean | true | Activa o desactiva la opción de mostrar el tooltip con el estado.
autoplaySpeed | int  | 3000 | Auto play change interval
textWeak | string | "Weak" | Custom text para el estado "weak"
textMedium | string | "Medium" | Custom text para el estado "medium"
textStrong | string | "Strong" | Custom text para el estado "weak"
textVeryStrong | string | "Very Strong" | Custom text para el estado "very-strong"
eyeImg | string | "img/eye.svg" | Ruta hacia la imagen para mostrar/ocultar la contraseña
