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
npm install mathdoc
```

## Python

```
pip3 install mathdocpy
```

# API

## Nodejs Command Line

### Compile

In your terminal app, you can get the HTML transpilation of your mathdoc markdown document through the standard output.
```
mathdoc compile path_to_file
```

### GetAST

If you want to get the abstract syntax tree (AST) of your document in order to process the document in your application, you can get the AST in JSON format as:
```
mathdoc getast path_to_file
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
