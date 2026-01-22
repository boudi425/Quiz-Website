export const topologyQuestions = {
    Easy: [
        {
            id: 0,
            question: "Topology is often jokingly called the study of:",
            options: ["Rigid shapes", "Rubber-sheet geometry", "Calculus with limits", "Prime numbers"],
            answer: "Rubber-sheet geometry",
            hint: "In topology, we care about how things are connected, not their exact measurements."
        },
        {
            id: 1,
            question: "In topology, a coffee cup is considered equivalent to which shape?",
            options: ["A sphere", "A donut (torus)", "A cube", "A pyramid"],
            answer: "A donut (torus)",
            hint: "Both have exactly one hole."
        },
        {
            id: 2,
            question: "What do you call a mapping between two spaces that is continuous and has a continuous inverse?",
            options: ["Homeomorphism", "Isomorphism", "Homomorphism", "Derivative"],
            answer: "Homeomorphism",
            hint: "This is the 'equal sign' of topology; it means two spaces are topologically the same."
        },
        {
            id: 3,
            question: "Which of these objects has only one surface and one edge?",
            options: ["Sphere", "Cylinder", "Möbius Strip", "Torus"],
            answer: "Möbius Strip",
            hint: "If you walk along it, you end up back where you started but on the 'other' side."
        },
        {
            id: 4,
            question: "A space where every point has a neighborhood that looks like Euclidean space is called a:",
            options: ["Fractal", "Manifold", "Vector Space", "Kernel"],
            answer: "Manifold",
            hint: "The Earth looks flat to us locally, even though it is a sphere."
        },
        {
            id: 5,
            question: "A set is 'open' in the standard topology of $\mathbb{R}$ if it:",
            options: ["Includes its boundary", "Does not include its boundary", "Contains only integers", "Is finite"],
            answer: "Does not include its boundary",
            hint: "An example is the interval $(0, 1)$."
        },
        {
            id: 6,
            question: "The union of any number of open sets is always:",
            options: ["Closed", "Open", "Finite", "Discrete"],
            answer: "Open",
            hint: "This is one of the three fundamental axioms that define a topology."
        },
        {
            id: 7,
            question: "How many holes does a sphere have?",
            options: ["0", "1", "2", "Infinite"],
            answer: "0",
            hint: "A sphere is simply connected; you can shrink any loop on it to a point."
        },
        {
            id: 8,
            question: "Which of these is NOT allowed in a topological deformation?",
            options: ["Stretching", "Bending", "Tearing", "Twisting"],
            answer: "Tearing",
            hint: "Topological properties must be preserved through continuous changes."
        },
        {
            id: 9,
            question: "A 'closed set' is defined as a set whose complement is:",
            options: ["Empty", "Open", "Finite", "Dense"],
            answer: "Open",
            hint: "This is the standard definition in any topological space."
        },
        {
            id: 10,
            question: "The discrete topology on a set $X$ means:",
            options: ["No sets are open", "Only the empty set is open", "Every subset is open", "Only $X$ is open"],
            answer: "Every subset is open",
            hint: "In this topology, every point is isolated."
        },
        {
            id: 11,
            question: "What is the 'boundary' of the closed interval $[a, b]$?",
            options: ["The entire interval", "The points $\{a, b\}$", "The empty set", "The middle point"],
            answer: "The points $\{a, b\}$",
            hint: "The boundary consists of the points that separate the set from its exterior."
        },
        {
            id: 12,
            question: "Two spaces are 'topologically equivalent' if there exists a ________ between them.",
            options: ["Bijection", "Homeomorphism", "Linear Map", "Translation"],
            answer: "Homeomorphism",
            hint: "This map preserves the 'closeness' of points."
        },
        {
            id: 13,
            question: "A space consisting of isolated points is called:",
            options: ["Connected", "Discrete", "Dense", "Compact"],
            answer: "Discrete",
            hint: "Think of a set of integers compared to a solid line."
        },
        {
            id: 14,
            question: "What shape is formed by gluing the two ends of a cylinder together without a twist?",
            options: ["Sphere", "Torus", "Möbius Strip", "Klein Bottle"],
            answer: "Torus",
            hint: "It looks like a donut or an inner tube."
        },
        {
            id: 15,
            question: "What is the 'Interior' of a set?",
            options: ["The largest open set contained within it", "The set plus its boundary", "The complement", "The set of all limit points"],
            answer: "The largest open set contained within it",
            hint: "It is denoted by $int(A)$ or $A^\circ$."
        },
        {
            id: 16,
            question: "Is a circle topologically equivalent to a square?",
            options: ["Yes", "No", "Only if the square is large", "Only in 3D"],
            answer: "Yes",
            hint: "You can bend a wire square into a circle without cutting it."
        },
        {
            id: 17,
            question: "A point $x$ is a 'limit point' of set $A$ if every neighborhood of $x$ contains:",
            options: ["The entire set $A$", "At least one point of $A$ other than $x$", "Only $x$", "No points of $A$"],
            answer: "At least one point of $A$ other than $x$",
            hint: "This means $x$ is 'arbitrarily close' to the set $A$."
        },
        {
            id: 18,
            question: "The 'trivial topology' (indiscrete topology) on a set $X$ contains:",
            options: ["All subsets", "Only the empty set and $X$", "Only points", "All open intervals"],
            answer: "Only the empty set and $X$",
            hint: "It is the 'smallest' possible topology on a set."
        },
        {
            id: 19,
            question: "Which of these is a 'topological property'?",
            options: ["Volume", "Connectivity", "Curvature", "Area"],
            answer: "Connectivity",
            hint: "Connectivity doesn't change if you stretch the object."
        }
    ],
    Medium: [
        {
            id: 0,
            question: "A space is 'connected' if it cannot be represented as:",
            options: ["A union of two disjoint open sets", "A single point", "A closed set", "A manifold"],
            answer: "A union of two disjoint open sets",
            hint: "It cannot be 'split' into two separate pieces."
        },
        {
            id: 1,
            question: "A space is 'Hausdorff' ($T_2$) if:",
            options: ["Every set is closed", "Distinct points have disjoint neighborhoods", "It is finite", "It is a metric space"],
            answer: "Distinct points have disjoint neighborhoods",
            hint: "Most 'natural' spaces we study have this property."
        },
        {
            id: 2,
            question: "Compactness in $\mathbb{R}^n$ is equivalent to being:",
            options: ["Open and bounded", "Closed and bounded", "Connected", "Infinite"],
            answer: "Closed and bounded",
            hint: "This is the Heine-Borel Theorem."
        },
        {
            id: 3,
            question: "The Euler Characteristic (V - E + F) of a sphere is:",
            options: ["0", "1", "2", "-2"],
            answer: "2",
            hint: "Try it with a cube: 8 vertices - 12 edges + 6 faces."
        },
        {
            id: 4,
            question: "What happens if you glue the edges of a square such that both pairs of opposite sides are reversed?",
            options: ["Torus", "Klein Bottle", "Real Projective Plane", "Sphere"],
            answer: "Real Projective Plane",
            hint: "This space cannot be embedded in 3D space without self-intersection."
        },
        {
            id: 5,
            question: "Which property describes a space where every sequence has a convergent subsequence?",
            options: ["Completeness", "Sequential Compactness", "First Countability", "Separability"],
            answer: "Sequential Compactness",
            hint: "For metric spaces, this is equivalent to standard compactness."
        },
        {
            id: 6,
            question: "A 'Dense' set is a set whose closure is:",
            options: ["The empty set", "The entire space", "The set itself", "Finite"],
            answer: "The entire space",
            hint: "The Rational numbers are dense in the Real numbers."
        },
        {
            id: 7,
            question: "A 'Basis' for a topology is a collection of open sets such that:",
            options: ["Every open set is a union of basis sets", "They are all disjoint", "They are all finite", "They contain only one point"],
            answer: "Every open set is a union of basis sets",
            hint: "Open intervals $(a, b)$ form a basis for the standard topology on $\mathbb{R}$."
        },
        {
            id: 8,
            question: "The product of any collection of compact spaces is compact. This is:",
            options: ["Urysohn's Lemma", "Tychonoff's Theorem", "Baire Category Theorem", "De Morgan's Law"],
            answer: "Tychonoff's Theorem",
            hint: "It is one of the most important theorems in general topology."
        },
        {
            id: 9,
            question: "A space is 'path-connected' if:",
            options: ["It is a circle", "Any two points can be joined by a continuous path", "It has no holes", "It is compact"],
            answer: "Any two points can be joined by a continuous path",
            hint: "Path-connectedness implies connectedness, but the reverse is not always true."
        },
        {
            id: 10,
            question: "The 'closure' of a set $A$ is defined as:",
            options: ["The intersection of all closed sets containing $A$", "The set of its boundary points", "The set $A$ without its limit points", "The complement of $A$"],
            answer: "The intersection of all closed sets containing $A$",
            hint: "It is the 'smallest' closed set that contains $A$."
        },
        {
            id: 11,
            question: "A metric space is always a topological space. What defines the open sets?",
            options: ["Open balls", "Closed squares", "Integers", "Vectors"],
            answer: "Open balls",
            hint: "The set of all points $y$ such that $d(x, y) < r$."
        },
        {
            id: 12,
            question: "What is the Euler Characteristic of a Torus?",
            options: ["2", "1", "0", "-1"],
            answer: "0",
            hint: "For a surface with $g$ holes, $\chi = 2 - 2g$."
        },
        {
            id: 13,
            question: "A map $f: X \to Y$ is continuous if the inverse image of every ________ set is ________.",
            options: ["Open, Open", "Closed, Open", "Open, Closed", "Finite, Infinite"],
            answer: "Open, Open",
            hint: "This is the 'open set' definition of continuity."
        },
        {
            id: 14,
            question: "Which of these is a non-orientable surface?",
            options: ["Sphere", "Torus", "Klein Bottle", "Cylinder"],
            answer: "Klein Bottle",
            hint: "You cannot distinguish between 'inside' and 'outside'."
        },
        {
            id: 15,
            question: "A space is 'separable' if it contains a countable:",
            options: ["Basis", "Dense subset", "Collection of open sets", "Boundary"],
            answer: "Dense subset",
            hint: "$\mathbb{R}$ is separable because $\mathbb{Q}$ (rationals) is countable and dense."
        },
        {
            id: 16,
            question: "The 'Product Topology' on $X \times Y$ is generated by basis sets of the form:",
            options: ["$U \times V$ where $U, V$ are open", "$U \cup V$", "$X \setminus Y$", "Single points"],
            answer: "$U \times V$ where $U, V$ are open",
            hint: "Think of an open rectangle in the plane as a product of two open intervals."
        },
        {
            id: 17,
            question: "A space is $T_1$ if every singleton set $\{x\}$ is:",
            options: ["Open", "Closed", "Dense", "Connected"],
            answer: "Closed",
            hint: "This is weaker than the Hausdorff property."
        },
        {
            id: 18,
            question: "If a space is compact, every closed subset of it is:",
            options: ["Open", "Compact", "Disconnected", "Empty"],
            answer: "Compact",
            hint: "Compactness is 'inherited' by closed subsets."
        },
        {
            id: 19,
            question: "The 'Cofinite Topology' on $\mathbb{R}$ defines open sets as sets whose complement is:",
            options: ["Finite", "Infinite", "Open", "Bounded"],
            answer: "Finite",
            hint: "In this topology, the only closed sets are finite sets and the whole space."
        }
    ],
    Hard: [
        {
            id: 0,
            question: "What does the 'Fundamental Group' $\pi_1(X, x_0)$ measure?",
            options: ["The number of points", "The holes in a space via loops", "The area of the space", "The number of open sets"],
            answer: "The holes in a space via loops",
            hint: "It is the set of equivalence classes of loops under homotopy."
        },
        {
            id: 1,
            question: "What is the Fundamental Group of a circle ($S^1$)?",
            options: ["$\{0\}$", "$\mathbb{Z}$", "$\mathbb{R}$", "$\mathbb{Z}_2$"],
            answer: "$\mathbb{Z}$",
            hint: "A loop can wrap around the circle $n$ times in either direction."
        },
        {
            id: 2,
            question: "The Brouwer Fixed Point Theorem states that every continuous map from a disk to itself must have:",
            options: ["No fixed points", "At least one fixed point", "Exactly two fixed points", "An inverse"],
            answer: "At least one fixed point",
            hint: "If you stir a cup of coffee, at least one molecule ends up exactly where it started."
        },
        {
            id: 3,
            question: "Two continuous maps $f, g: X \to Y$ are 'homotopic' if:",
            options: ["One can be continuously deformed into the other", "They have the same derivative", "They are both bijections", "Their range is the same"],
            answer: "One can be continuously deformed into the other",
            hint: "Think of a rubber band being stretched from one shape to another."
        },
        {
            id: 4,
            question: "What is a 'Simply Connected' space?",
            options: ["A space with no points", "A path-connected space where every loop is homotopic to a constant map", "A space that is a manifold", "A discrete space"],
            answer: "A path-connected space where every loop is homotopic to a constant map",
            hint: "It has no '1-dimensional' holes. A sphere is simply connected; a torus is not."
        },
        {
            id: 5,
            question: "The 'Baire Category Theorem' states that a complete metric space is not a union of countably many:",
            options: ["Open sets", "Nowhere dense sets", "Compact sets", "Connected sets"],
            answer: "Nowhere dense sets",
            hint: "It implies that such spaces are 'large' in a certain sense."
        },
        {
            id: 6,
            question: "Which lemma is used to show that a normal space has enough continuous functions to separate closed sets?",
            options: ["Zorn's Lemma", "Urysohn's Lemma", "Sperner's Lemma", "Handshaking Lemma"],
            answer: "Urysohn's Lemma",
            hint: "It's fundamental for the Urysohn Metrization Theorem."
        },
        {
            id: 7,
            question: "What is the 'One-Point Compactification' of $\mathbb{R}$ homeomorphic to?",
            options: ["A line segment", "A circle", "A sphere", "A figure eight"],
            answer: "A circle",
            hint: "Imagine bringing the two ends of an infinite line together at a single point at infinity."
        },
        {
            id: 8,
            question: "The 'Jordan Curve Theorem' states that every simple closed curve in the plane:",
            options: ["Is a circle", "Divides the plane into exactly two regions", "Is infinite", "Has a derivative"],
            answer: "Divides the plane into exactly two regions",
            hint: "One region is 'inside' and the other is 'outside'."
        },
        {
            id: 9,
            question: "A space is 'Locally Compact' if every point has a neighborhood contained in a:",
            options: ["Compact set", "Open set", "Manifold", "Finite set"],
            answer: "Compact set",
            hint: "Euclidean space $\mathbb{R}^n$ is locally compact but not compact."
        },
        {
            id: 10,
            question: "The 'Net' is a generalization of what concept in non-metric topological spaces?",
            options: ["Functions", "Sequences", "Basis sets", "Open covers"],
            answer: "Sequences",
            hint: "Sequences are not enough to detect limit points in all topological spaces."
        },
        {
            id: 11,
            question: "What is the Euler Characteristic of a Klein Bottle?",
            options: ["2", "1", "0", "-1"],
            answer: "0",
            hint: "Like the torus, it is a surface with zero curvature characteristics."
        },
        {
            id: 12,
            question: "The 'Metrization Theorem' gives conditions under which a topology can be produced by a:",
            options: ["Vector", "Metric", "Scalar", "Integral"],
            answer: "Metric",
            hint: "It asks: 'When can we define a distance function that matches this topology?'"
        },
        {
            id: 13,
            question: "What is the Fundamental Group of the Projective Plane $\mathbb{RP}^2$?",
            options: ["$0$", "$\mathbb{Z}$", "$\mathbb{Z}_2$", "$\mathbb{R}$"],
            answer: "$\mathbb{Z}_2$",
            hint: "A loop wrapped twice around it can be shrunk to a point."
        },
        {
            id: 14,
            question: "A 'Retraction' $r: X \to A$ is a continuous map such that $r(a) = a$ for all $a \in A$. If $A$ is a point, the space is:",
            options: ["Compact", "Contractible", "Discrete", "Hausdorff"],
            answer: "Contractible",
            hint: "A contractible space has the same homotopy type as a single point."
        },
        {
            id: 15,
            question: "What does the Tietze Extension Theorem allow you to extend?",
            options: ["A continuous function from a closed subset to the whole space", "A line to infinity", "A basis to a topology", "A manifold to a higher dimension"],
            answer: "A continuous function from a closed subset to the whole space",
            hint: "It works in normal topological spaces."
        },
        {
            id: 16,
            question: "The 'Alexander Horned Sphere' is famous because its exterior is not:",
            options: ["Connected", "Simply connected", "Compact", "Open"],
            answer: "Simply connected",
            hint: "It is a counter-intuitive example of a sphere embedded in 3D."
        },
        {
            id: 17,
            question: "What is the 'Long Line' in topology?",
            options: ["The real line $\mathbb{R}$", "A topological space that is 'longer' than $\mathbb{R}$ using ordinals", "A line with infinite curvature", "A sequence of circles"],
            answer: "A topological space that is 'longer' than $\mathbb{R}$ using ordinals",
            hint: "It is locally like $\mathbb{R}$ but globally much larger."
        },
        {
            id: 18,
            question: "In homology, a 'Cycle' is a chain whose boundary is:",
            options: ["Zero", "One", "Infinite", "Closed"],
            answer: "Zero",
            hint: "Cycles represent loops or higher-dimensional 'closed' sub-objects."
        },
        {
            id: 19,
            question: "The 'Hairy Ball Theorem' states that every continuous tangent vector field on an even-dimensional sphere must:",
            options: ["Be constant", "Have at least one zero (a 'flat' spot)", "Be infinite", "Be a homeomorphism"],
            answer: "Have at least one zero (a 'flat' spot)",
            hint: "You can't comb the hair on a coconut flat without a cowlick."
        }
    ]
};