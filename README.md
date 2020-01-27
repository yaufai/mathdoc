# Mathdoc

A markdown extension for mathematical or scientific documents.

# Extensions

## Mathematical expression powered by Mathjax

Text areas with prefix `$` and surfix `$` will be interpreted as inline mathematical expressions. In order to put a mathematical expression as a block, you can change the prefix and surfix as `$$`

(e.g.)
```
Let $x_0$ be a real number that maximizes $f(x)$. Since $f$ is globally differentiable, we have
$$\frac{df}{dx}(x_0) = 0$$
```

## Boxes for definition, theorem, proof, ...

We can insert a CSS-empowered beautiful box to describe definition, theorem, proof and others into our documents easily.
Here is an example:
```
def. Rational preference
    A preference $R$ over $X$ is rational if and only if
    (1) For any $x, y \in X$, it holds $(x,y) \in R$ or $(y,x) \in R$
    (2) For any $x, y, z \in X$, if $(x,y) \in R$ and $(y,z) \in R$, then $(x,z) \in R$


```

# Install

## Nodejs

```
npm install -g mathdoc
```

## Python

```
pip3 install mathdocpy
```

NOTE: `mathdocpy` is a simple wrapper of the parser written in NodeJS. Therefore, you are required to install npm and mathdoc by npm.

# API

## Nodejs Command Line

### Compile

In your terminal app, you can get the HTML transpilation of your mathdoc markdown document through the standard output.
```
mathdoc --compile path_to_file
```

### GetAST

If you want to get the abstract syntax tree (AST) of your document in order to process the document in your application, you can get the AST in JSON format as:
```
mathdoc --getast path_to_file
```

## Python

You can process your mathdoc markdown documents in your Python app through a `mathdocpy.mathdoc.Mathdoc` object.

```py
from mathdocpy.mathdoc import Mathdoc

file_path = "path/to/your/doc"
doc = Mathdoc(file_path)
```

`Mathdoc` objects have the following interfaces:

* `Mathdoc.compile`: returns the HTML transpilation of your document as a `str` object
* `Mathdoc.getAST` : returns the abstract syntax tree (AST) in the JSON-like format

# Syntax

## Document config

Meta data of your document can be stored at the top of the document.

```
==================================================
title  : Mathdoc example
author : yaufai
tags   : Mathdoc, Documentation
==================================================
```

Just like the example above, it has the format of `key : value`. The key can only contain English alphabets and digits.

The meta data do not appear on the compiled documents. So far, in this repository the function of meta data has no use, but apps that depend on Mathdoc may utilize this function.

### Interface

#### Command line tool

```
mathdoc --getast <target_file> --config-only
```

This command will only output the config in JSON format.

#### JS library

```ts
let mathdoc = new Mathdoc(target_file)
// To obtain the config object
let config = mathdoc.getConfig()
// To obtain the config in JSON string format 
let config_json = mathdoc.getConfigJSON()
```

#### Python

```py
from mathdocpy.mathdoc import Mathdoc
doc = Mathdoc(target_file)
# Obtain the config in dict
config_dict = doc.getConfig()
```