Passtrength.js
===========

Fully responsive jQuery input password strength indicator plugin. Featuring multiple strength security indicators and show/hide password — Edit

### Demo

[https://adri-sorribas.github.io/passtrength/](https://adri-sorribas.github.io/passtrength/)

### Documentation

Passtrength JS provides a basic visual system that indicates the strength of the password entered in any input type password.


This basic indication system is based on 4 points based on the password entered:

- The password entered contains X characters or more.
- The password entered contains capital letters.
- The password entered contains numbers.
- The password entered contains special characters. [!,%,&,@,#,$,^,*,?,_,~]

### Features

- Progress bar visual indicator.
- Show/Hide password system (optional).
- Custom number of minimum characters.
- Custom Show/Hide icon.
- Visual indicator "Tooltip" with custom message (optional).

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
npm install passtrength
```

#### Initialize the plugin

Once the necessary files are included you will have to initialize the plugin. The basic way will be;
```js
$('#myPassword').passtrength();
```

If you need modify the options:
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
minChars | int | 8 | Defines the minimum characters that the user must enter
passwordToggle | boolean | true | Enable the show/hide password option
eyeImg | string | "img/eye.svg" | Path to the image to show/hide password option
tooltip | boolean | true | Enable the tooltip message option
textWeak | string | "Weak" | Custom text for the "weak" status 
textMedium | string | "Medium" |Custom text for the "medium" status
textStrong | string | "Strong" | Custom text for the "strong" status
textVeryStrong | string | "Very Strong" | Custom text for the "very-strong" status
