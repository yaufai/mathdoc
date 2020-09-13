def. Convex set
    A subset $S \subset \mathbb{R}^n$ is a convex set if and only if
    $$tx + (1-t)y \in S$$
    for any $x, y \in S$ and $t \in [0, 1]$.


th. Arithmetics of convex sets
    For any convex subsets $S, T \subset \mathbb{R}^n$,
    $$S +T = \{s + t| s\in S, t \in T\}$$
    is again a convex set.

pf.
    Take any $x, y \in S + T$. There some $x_s, x_t, y_s, y_t$ exist such that
    $$x = x_s + x_t $$
    $$y = y_s + y_t $$
    Take any $a \in [0, 1]$ and consider $ax + (1-a)y$.
    $$ax + (1-a)y = [ax_s + (1-a)y_s] + [ax_t + (1-a)y_t]$$
    Since $ax_s + (1-a)y_s \in S$, $ax_t + (1-a)y_t \in T$, $ax + (1-a)y$ is a member of $S+T$.

