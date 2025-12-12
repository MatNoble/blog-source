+++
title = "Inequality"
description = "Sometimes 「inequality」 is more important than 「equation」"
categories = ["MATH","数学基础"]
tags = [""]
keywords = ["不等式","inequality","Cauchy inequality","Young's inequality","Cauchy inequality for scalar product","Holder inequality","FEM"]
date = "2020-03-17T00:21:47+08:00"
toc = true
katex = true
aliases = ["/posts/fem/inequality"]
+++

## Cauchy inequality

Let $a, b$ are any real numbers, then

\begin{equation}
\label{eq:eqc}
    ab \leq \frac{1}{2}(a^{2} + b^{2}),\quad (Cauchy\ inequality)
\end{equation}

\begin{equation}
\label{eq:eqce}
    ab \leq \epsilon a^{2} + \frac{b^{2}}{4\epsilon},\\,\forall \epsilon > 0,\quad (Cauchy\ inequality\ with\ epsilon)
\end{equation}

**Proof.**

$$
(a-b)^{2} \geq 0 \Rightarrow ab \leq\frac{1}{2}(a^{2} + b^{2}).
$$

Constant deformation with $\epsilon$

$$
\begin{aligned}
      ab &= ((2\epsilon)^{\frac{1}{2}}a)\bigg(\frac{b}{(2\epsilon)^{\frac{1}{2}}}\bigg) \\\\[3pt]
         &\leq \frac{1}{2} \biggl[((2\epsilon)^{\frac{1}{2}}a)^2 + \bigg(\frac{b}{(2\epsilon)^{\frac{1}{2}}}\biggl)^2 \biggl] \\\\[3pt]
         &= \frac{1}{2} \biggl(2\epsilon a^{2} + \frac{b^{2}}{2\epsilon}\biggr) \\\\[3pt]
         &= \epsilon a^{2} + \frac{b^{2}}{4\epsilon}.
\end{aligned}
$$
<p style="text-align: right">
$\blacksquare$
</p>

### Cauchy inequality for scalar product

Let $\lVert \mathbf{x} \rVert^2 = \sum\_{k=1}^n \lvert x \rvert^2$, $\langle \mathbf{x}, \mathbf{y} \rangle = \sum\_{k=1}^n x_k \bar{y}\_k$, which $\mathbf{x} = \\{ x\_k \\}\_{k=1,\ldots,n}, \mathbf{y} = \\{ y\_k \\}\_{k=1,\ldots,n}$ then

\begin{equation}
\langle \mathbf{x}, \mathbf{y} \rangle \leq \lVert \mathbf{x} \rVert \lVert \mathbf{y} \rVert 
\end{equation}

**Proof.** We have
$$
f(\lambda) = \lVert \mathbf{x} + \lambda\mathbf{y}\rVert^2 \geq 0, \quad \forall \lambda \in \mathbb{R}
$$
Thus the quadratic function
$$
f(\lambda) = \lVert \mathbf{y} \rVert^2 \lambda^2 +  2\langle \mathbf{x}, \mathbf{y} \rangle \lambda + \lVert \mathbf{x} \rVert^2 \geq 0
$$
According to *the discriminant of the quadratic polynomial*
$$
\langle \mathbf{x}, \mathbf{y} \rangle ^2 \leq \lVert \mathbf{x} \rVert^2 \lVert \mathbf{y} \rVert^2
$$
<p style="text-align: right">
$\blacksquare$
</p>

## Young's inequality

For $a, b \geq 0$ and $p,q \geq 1$ such that $ \frac{1}{p} + \frac{1}{q} = 1$, then

\begin{equation}
\label{eq:eqy}
    ab \leq \frac{a^{p}}{p} + \frac{b^{q}}{q}. \quad (Young\ inequality)
\end{equation}

**Proof.** The function $x \mapsto e^x$ is convex. This means that for $x, y\in \mathbb{R}$ and $0\leq \theta \leq 1$

$$
\mbox{exp}(\theta x + (1-\theta)y) \leq \theta\mbox{exp}(x) + (1-\theta)\mbox{exp}(y)
$$

When $a$ or $b$ are zero the inequality is trivial. Otherwise, the theorem is just this inequality with

$$
x:=  p \ln a \quad y:= q \ln b \quad \theta = \frac{1}{p}
$$
<p style="text-align: right">
$\blacksquare$
</p>

### General Young’s inequality 

Let $c>0$ and $f:[0, c] \to \mathbb{R}$ be a strictly increasing continuous function such that $f(0)=0$. Let $a\in [0, c]$ and $b\in [0, f(c)]$. Then

\begin{equation}
ab \leq \int_0^a f(x) \\, \mathrm{d}x + \int\_0^b f^{-1}(x) \\, \mathrm{d}x
\label{eq:eqy2}
\end{equation}

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/a41e796b-adbb-44a7-adbe-3da2bb474641.svg" title="Figure 1" >}}

(\ref{eq:eqy2}) can be understood with the figure 1.

> **Lemma** Let $c>0$. For a strictly increasing continuous function $f:[0, c]\to \mathbb{R}$ and $b\in [0, f(c)]$, we have that
> $$
> bf^{-1}(b) = \int_0^b f^{-1}(x) \\, \mathrm{d}x + \int\_0^{f^{-1}(b)} f(x) \\, \mathrm{d}x
> $$
> **Proof.** It is enough to prove it when $f$ is $C^1$, as then a continuous $f$ can be uniformly approximated by strictly increasing $C^1$ functions while $f ^{−1}$ is also uniformly approximated. It is also enough to prove it when $f(a) \geq b$, as otherwise we can just interchange both $f, f^{−1}$ and $a, b$.
>
> To prove it in this case we can change variables in the integral $\int_0^b\ f^{−1}(x)\\, \mathrm{d}x$ by putting $x = f(y)$, and then integrate by parts:
> $$
>  \int\_0^b f^{-1}(x) \\, \mathrm{d}x = \int\_0^{f^{-1}(b)} yf'(y) \\, \mathrm{d}y = bf^{-1}(b) - \int\_0^{f^{-1}(b)} f(x) \\, \mathrm{d}x
> $$
> <p style="text-align: right"> $\blacksquare$ </p>

**Proof.** Use (\ref{eq:eqy2}), and $f(a)\geq b$, we get

$$
\begin{aligned}
ab & = bf^{-1}(b) + b(a-f^{-1}(b)) \\\\[3pt]
& = \int\_0^b f^{-1}(x) \\, \mathrm{d}x + \int\_0^{f^{-1}(b)} f(x) \\, \mathrm{d}x + b(a-f^{-1}(b)) \\\\[3pt]
& \leq \int\_0^b f^{-1}(x) \\, \mathrm{d}x + \int\_0^{f^{-1}(b)} f(x) \\, \mathrm{d}x + \int_{f^{-1}(b)}^a f(x) \\, \mathrm{d}x \\\\[3pt]
& = \int\_0^b f^{-1}(x) \\, \mathrm{d}x + \int\_0^a f(x) \\, \mathrm{d}x
\end{aligned}
$$

While $f(a)\leq b$, the proof process is similar.

<p style="text-align: right"> $\blacksquare$ </p>

## Holder inequality

Let $p, q$ are real numbers $1\leq p, q\leq \infty$ connected by the relationship $\frac{1}{p} + \frac{1}{q} = 1$ and $u \in L^p, v \in L^q$. then

\begin{equation}
    \int \lvert uv \rvert \\,\mathrm{d}x \leq \sqrt[p]{\int \lvert u \rvert \\,\mathrm{d}x} \sqrt[q]{\int \lvert v \rvert \\,\mathrm{d}x}
\label{eq:eqh}
\end{equation}

**Proof.** The formula Young inequality (\ref{eq:eqy}) implies
$$
\int \lvert ab \rvert \\,\mathrm{d}x \leq \frac{1}{p} \int \lvert a \rvert^p \\,\mathrm{d}x + \frac{1}{q} \int \lvert b \rvert^q \\,\mathrm{d}x
$$

set $a=\frac{|u|}{c\_1}, a=\frac{|v|}{c\_2}$, where $c\_1=\sqrt[p]{\int \lvert u \rvert \\,\mathrm{d}x}$ and $\sqrt[q]{\int \lvert v \rvert \\,\mathrm{d}x}$, then

$$
\begin{aligned}
\frac{1}{c\_1c\_2} \int \lvert uv \rvert \\,\mathrm{d}x & \leq \frac{1}{p} \int \Biggl| \frac{|u|}{c\_1} \Biggr| ^p \\,\mathrm{d}x + \frac{1}{q} \int \Biggl| \frac{|v|}{c\_2} \Biggr| ^q \\,\mathrm{d}x \\\\[3pt]
& = \frac{1}{p} + \frac{1}{q} \\\\[3pt]
& = 1
\end{aligned}
$$
Hence
$$
\int \lvert uv \rvert \\,\mathrm{d}x \leq c\_1 c\_2 = \sqrt[p]{\int \lvert u \rvert \\,\mathrm{d}x} \sqrt[q]{\int \lvert v \rvert \\,\mathrm{d}x}
$$
<p style="text-align: right">
$\blacksquare$
</p>
