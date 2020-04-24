# Kranos
Kranos is a WASM filter for Envoy intended to add header security inspired by [HelmetJS](https://helmetjs.github.io/) when serving content to the browser with response headers.  

## Installation
To deploy via glue and `wasme`:   
`wasme deploy gloo webassemblyhub.io/haggs/kronos:v0.2 --id=kronos`

## Features
Currently kranos supports the following headears:
* `X-XSS_Protection: 1`  [X-XSS-Protection](https://wiki.owasp.org/index.php/OWASP_Secure_Headers_Project#xxxsp)


For more information on security headers see [OWASP Secure Headers Project](https://wiki.owasp.org/index.php/OWASP_Secure_Headers_Project)
