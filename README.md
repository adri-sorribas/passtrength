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

### Features

- Número mínimo de caracteres custom.
- Sistema para mostar/esconder la contraseña (opcional)
- Icono para mostrar/esconder custom.
- Indicador visual progress bar.
- Indicador visual "tooltip" con mensaje custom (opcional).

#### Getting Started

##### Include plguin files

Just add a link to the css file in your `<head>`:
```html
<link rel="stylesheet" type="text/css" href="css/passtrength.css"/>
```

Then, before your closing ```<body>``` tag add:

```html
<script type="text/javascript" src="js/jquery.passtrength.min.js"></script>
```
