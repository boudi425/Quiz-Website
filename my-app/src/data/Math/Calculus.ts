export const calculusQuestions = {
    Easy: [
        {
            id: 0,
            question: "What is the derivative of a constant $c$?",
            options: ["$c$", "$1$", "$0$", "$x$"],
            answer: "$0$",
            hint: "A constant function has no rate of change."
        },
        {
            id: 1,
            question: "Using the power rule, what is the derivative of $x^n$?",
            options: ["$nx^n$", "$nx^{n-1}$", "$\\frac{x^{n+1}}{n+1}$", "$x^{n-1}$"],
            answer: "$nx^{n-1}$",
            hint: "Bring the power down and subtract one from the exponent."
        },
        {
            id: 2,
            question: "What is the derivative of $\\sin(x)$?",
            options: ["$\\cos(x)$", "$-\\cos(x)$", "$\\sin(x)$", "$\\tan(x)$"],
            answer: "$\\cos(x)$",
            hint: "It's one of the most fundamental trigonometric derivatives."
        },
        {
            id: 3,
            question: "What is the derivative of $e^x$?",
            options: ["$xe^{x-1}$", "$e^x$", "$\\ln(x)$", "$1$"],
            answer: "$e^x$",
            hint: "This function is its own derivative."
        },
        {
            id: 4,
            question: "Evaluate the limit: $\\lim_{x \\to 5} (2x + 3)$. ",
            options: ["10", "13", "8", "5"],
            answer: "13",
            hint: "Since the function is continuous, just plug in the value."
        },
        {
            id: 5,
            question: "What is the derivative of $\\ln(x)$?",
            options: ["$e^x$", "$\\frac{1}{x}$", "$x$", "$\\frac{1}{x^2}$"],
            answer: "$\\frac{1}{x}$",
            hint: "The derivative of the natural log is a simple fraction."
        },
        {
            id: 6,
            question: "The 'slope of the tangent line' to a curve at a point is the same as the:",
            options: ["Integral", "Limit", "Derivative", "Asymptote"],
            answer: "Derivative",
            hint: "It represents the instantaneous rate of change."
        },
        {
            id: 7,
            question: "What is the integral of $1$ with respect to $x$?",
            options: ["$0$", "$1$", "$x + C$", "$x^2$"],
            answer: "$x + C$",
            hint: "Think about what function has a derivative of 1."
        },
        {
            id: 8,
            question: "What is the derivative of $\\cos(x)$?",
            options: ["$\\sin(x)$", "$-\\sin(x)$", "$\\cos(x)$", "$-\\cos(x)$"],
            answer: "$-\\sin(x)$",
            hint: "Trig derivatives involving 'co-' functions usually start with a negative."
        },
        {
            id: 9,
            question: "Evaluate $\\lim_{x \\to \\infty} \\frac{1}{x}$.",
            options: ["$\\infty$", "$1$", "$0$", "Undefined"],
            answer: "$0$",
            hint: "As the denominator gets infinitely large, the fraction gets smaller."
        },
        {
            id: 10,
            question: "Which rule is used to find the derivative of $f(x) + g(x)$?",
            options: ["Product Rule", "Sum Rule", "Chain Rule", "Quotient Rule"],
            answer: "Sum Rule",
            hint: "The derivative of a sum is the sum of the derivatives."
        },
        {
            id: 11,
            question: "What is the derivative of $5x^2$?",
            options: ["$10x$", "$5x$", "$10x^2$", "$2x$"],
            answer: "$10x$",
            hint: "Multiply the constant by the exponent and decrease the exponent."
        },
        {
            id: 12,
            question: "A function is continuous if the limit exists, the function is defined, and:",
            options: ["It is differentiable", "The limit equals the function value", "The slope is positive", "It has no roots"],
            answer: "The limit equals the function value",
            hint: "The 'hole' must be filled by the point itself."
        },
        {
            id: 13,
            question: "What is the derivative of $\\tan(x)$?",
            options: ["$\\cot(x)$", "$\\sec(x)$", "$\\sec^2(x)$", "$\\sin^2(x)$"],
            answer: "$\\sec^2(x)$",
            hint: "Think of the relationship between tangent and secant in identities."
        },
        {
            id: 14,
            question: "What is the indefinite integral $\\int x \\, dx$?",
            options: ["$x^2 + C$", "$\\frac{1}{2}x^2 + C$", "$1 + C$", "$2x + C$"],
            answer: "$\\frac{1}{2}x^2 + C$",
            hint: "Apply the reverse power rule: add 1 to the exponent and divide."
        },
        {
            id: 15,
            question: "If $f(x) = 3x - 5$, what is $f'(10)$?",
            options: ["30", "25", "3", "0"],
            answer: "3",
            hint: "The derivative of a linear function is its constant slope."
        },
        {
            id: 16,
            question: "What is the value of $\\frac{d}{dx}(\\pi)$?",
            options: ["$\\pi$", "$1$", "$0$", "$3.14$"],
            answer: "$0$",
            hint: "$\\pi$ is a constant number."
        },
        {
            id: 17,
            question: "What does the symbol $\\int$ represent?",
            options: ["Derivative", "Limit", "Integral", "Infinity"],
            answer: "Integral",
            hint: "It looks like an elongated 'S' for 'sum'."
        },
        {
            id: 18,
            question: "What is the derivative of $\\sqrt{x}$?",
            options: ["$\\frac{1}{2\\sqrt{x}}$", "$\\frac{1}{\\sqrt{x}}$", "$2\\sqrt{x}$", "$\\frac{1}{2}x$"],
            answer: "$\\frac{1}{2\\sqrt{x}}$",
            hint: "Rewrite $\\sqrt{x}$ as $x^{1/2}$ and use the power rule."
        },
        {
            id: 19,
            question: "Evaluate $\\lim_{x \\to 0} \\cos(x)$.",
            options: ["0", "1", "-1", "Undefined"],
            answer: "1",
            hint: "Look at the unit circle or the cosine graph at $x=0$."
        }
    ],
    Medium: [
        {
            id: 0,
            question: "Which rule is used to differentiate a composition of functions $f(g(x))$?",
            options: ["Product Rule", "Quotient Rule", "Chain Rule", "Power Rule"],
            answer: "Chain Rule",
            hint: "Differentiate the 'outside' then multiply by the derivative of the 'inside'."
        },
        {
            id: 1,
            question: "What is the derivative of $x \\cdot \\sin(x)$?",
            options: ["$\\cos(x)$", "$\\sin(x) + x\\cos(x)$", "$x\\cos(x)$", "$\\sin(x) - x\\cos(x)$"],
            answer: "$\\sin(x) + x\\cos(x)$",
            hint: "Use the Product Rule: $uv' + vu'$."
        },
        {
            id: 2,
            question: "Which theorem guarantees a point $c$ exists where $f'(c) = \\frac{f(b)-f(a)}{b-a}$?",
            options: ["Intermediate Value Theorem", "Mean Value Theorem", "Rolle's Theorem", "Taylor's Theorem"],
            answer: "Mean Value Theorem",
            hint: "It relates the average rate of change to the instantaneous rate of change."
        },
        {
            id: 3,
            question: "What is the derivative of $\\frac{e^x}{x}$?",
            options: ["$\\frac{e^x(x-1)}{x^2}$", "$\\frac{e^x}{1}$", "$\\frac{e^x(x+1)}{x^2}$", "$e^x$"],
            answer: "$\\frac{e^x(x-1)}{x^2}$",
            hint: "Use the Quotient Rule: $\\frac{lo \\cdot d(hi) - hi \\cdot d(lo)}{lo^2}$."
        },
        {
            id: 4,
            question: "Using L'Hopital's Rule, find $\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$.",
            options: ["0", "1", "$\\infty$", "Undefined"],
            answer: "1",
            hint: "Differentiate the top and bottom separately when you get $0/0$."
        },
        {
            id: 5,
            question: "A point where the second derivative $f''(x)$ changes sign is called an:",
            options: ["Extremum", "Critical Point", "Inflection Point", "Asymptote"],
            answer: "Inflection Point",
            hint: "It's where the concavity of the graph changes."
        },
        {
            id: 6,
            question: "What is the derivative of $\\arctan(x)$?",
            options: ["$\\frac{1}{1+x^2}$", "$\\frac{1}{\\sqrt{1-x^2}}$", "$\\sec^2(x)$", "$\\frac{1}{x^2-1}$"],
            answer: "$\\frac{1}{1+x^2}$",
            hint: "This is a very common derivative in integration problems."
        },
        {
            id: 7,
            question: "Find the critical points of $f(x) = x^2 - 4x + 5$.",
            options: ["$x=0$", "$x=2$", "$x=4$", "$x=-2$"],
            answer: "$x=2$",
            hint: "Set the first derivative equal to zero and solve for $x$."
        },
        {
            id: 8,
            question: "What is $\\int \\frac{1}{x} \\, dx$?",
            options: ["$-\\frac{1}{x^2} + C$", "$\\ln|x| + C$", "$e^x + C$", "$1 + C$"],
            answer: "$\\ln|x| + C$",
            hint: "This is the special case where the reverse power rule fails."
        },
        {
            id: 9,
            question: "What integration technique is used to reverse the Chain Rule?",
            options: ["Partial Fractions", "Integration by Parts", "U-Substitution", "Trig Substitution"],
            answer: "U-Substitution",
            hint: "You replace a complex inner function with a single variable."
        },
        {
            id: 10,
            question: "What is the derivative of $2^x$?",
            options: ["$x2^{x-1}$", "$2^x \\ln(2)$", "$\\frac{2^x}{\\ln(2)}$", "$2^x$"],
            answer: "$2^x \\ln(2)$",
            hint: "For $a^x$, the derivative involves the natural log of the base."
        },
        {
            id: 11,
            question: "The Fundamental Theorem of Calculus Part 1 states that the derivative of $\\int_a^x f(t) \\, dt$ is:",
            options: ["$F(x) - F(a)$", "$f(x)$", "$f'(x)$", "$0$"],
            answer: "$f(x)$",
            hint: "The derivative effectively 'un-does' the integral."
        },
        {
            id: 12,
            question: "What is the second derivative of $x^3$?",
            options: ["$3x^2$", "$6x$", "$6$", "$x$"],
            answer: "$6x$",
            hint: "Differentiate twice."
        },
        {
            id: 13,
            question: "If $x^2 + y^2 = 25$, find $dy/dx$ using implicit differentiation.",
            options: ["$-x/y$", "$x/y$", "$-y/x$", "$2x + 2y$"],
            answer: "$-x/y$",
            hint: "Differentiate both sides with respect to $x$, treating $y$ as $y(x)$."
        },
        {
            id: 14,
            question: "What is the area under $f(x) = x$ from $x=0$ to $x=2$?",
            options: ["1", "2", "4", "0"],
            answer: "2",
            hint: "Calculate $\\int_0^2 x \\, dx$ or find the area of the triangle."
        },
        {
            id: 15,
            question: "Evaluate $\\lim_{x \\to 0} \\frac{1-\\cos(x)}{x^2}$.",
            options: ["0", "1", "$1/2$", "Undefined"],
            answer: "$1/2$",
            hint: "Apply L'Hopital's Rule twice."
        },
        {
            id: 16,
            question: "Which test uses the second derivative to determine if a critical point is a local max or min?",
            options: ["First Derivative Test", "Second Derivative Test", "Ratio Test", "Extreme Value Test"],
            answer: "Second Derivative Test",
            hint: "If $f''(c) > 0$, the function is concave up (a minimum)."
        },
        {
            id: 17,
            question: "Find the average value of $f(x) = 3x^2$ on the interval $[0, 2]$.",
            options: ["4", "12", "8", "2"],
            answer: "4",
            hint: "Formula: $\\frac{1}{b-a} \\int_a^b f(x) \\, dx$."
        },
        {
            id: 18,
            question: "What is the derivative of $\\ln(x^2 + 1)$?",
            options: ["$\\frac{1}{x^2+1}$", "$\\frac{2x}{x^2+1}$", "$\\frac{x}{x^2+1}$", "$2x$"],
            answer: "$\\frac{2x}{x^2+1}$",
            hint: "Use the Chain Rule: $1/u \\cdot du/dx$."
        },
        {
            id: 19,
            question: "In related rates, if $A = \\pi r^2$, then $dA/dt$ equals:",
            options: ["$2\\pi r$", "$2\\pi r \\frac{dr}{dt}$", "$\\pi r^2 \\frac{dr}{dt}$", "$\\frac{dr}{dt}$"],
            answer: "$2\\pi r \\frac{dr}{dt}$",
            hint: "Differentiate with respect to time $t$."
        }
    ],
    Hard: [
        {
            id: 0,
            question: "What is the formula for Integration by Parts?",
            options: ["$\\int u \\, dv = uv - \\int v \\, du$", "$\\int u \\, dv = uv + \\int v \\, du$", "$\\int u \\, dv = u'v + v'u$", "$\\int u \\, dv = \\frac{uv}{v'u}$"],
            answer: "$\\int u \\, dv = uv - \\int v \\, du$",
            hint: "It is the integral version of the Product Rule."
        },
        {
            id: 1,
            question: "What is the Taylor series for $e^x$ centered at $x=0$?",
            options: ["$\\sum \\frac{x^n}{n!}$", "$\\sum x^n$", "$\\sum \\frac{(-1)^n x^{2n}}{(2n)!}$", "$\\sum \\frac{x^n}{n}$"],
            answer: "$\\sum \\frac{x^n}{n!}$",
            hint: "All derivatives of $e^x$ at 0 are equal to 1."
        },
        {
            id: 2,
            question: "Evaluate $\\int x e^x \\, dx$.",
            options: ["$e^x(x-1) + C$", "$xe^x + C$", "$e^x(x+1) + C$", "$\\frac{1}{2}x^2 e^x + C$"],
            answer: "$e^x(x-1) + C$",
            hint: "Use Integration by Parts with $u=x$ and $dv=e^x \\, dx$."
        },
        {
            id: 3,
            question: "Which test is most commonly used to determine the convergence of a power series?",
            options: ["Integral Test", "Ratio Test", "P-series Test", "Limit Comparison Test"],
            answer: "Ratio Test",
            hint: "Check the limit of $|a_{n+1}/a_n|$."
        },
        {
            id: 4,
            question: "What is the volume of a solid generated by rotating $y=f(x)$ around the x-axis from $a$ to $b$?",
            options: ["$\\int_a^b f(x) \\, dx$", "$\\pi \\int_a^b [f(x)]^2 \\, dx$", "$2\\pi \\int_a^b x f(x) \\, dx$", "$\\pi \\int_a^b f(x) \\, dx$"],
            answer: "$\\pi \\int_a^b [f(x)]^2 \\, dx$",
            hint: "This is the 'Disk Method'."
        },
        {
            id: 5,
            question: "What is $\\int \\tan(x) \\, dx$?",
            options: ["$\\sec^2(x) + C$", "$\\ln|\\sec(x)| + C$", "$-\\ln|\\sin(x)| + C$", "$\\ln|\\cos(x)| + C$"],
            answer: "$\\ln|\\sec(x)| + C$",
            hint: "Rewrite as $\\sin(x)/\\cos(x)$ and use u-substitution."
        },
        {
            id: 6,
            question: "The integral $\\int_1^\\infty \\frac{1}{x^p} \\, dx$ converges if and only if:",
            options: ["$p < 1$", "$p > 1$", "$p = 1$", "$p > 0$"],
            answer: "$p > 1$",
            hint: "This is the p-series test for integrals."
        },
        {
            id: 7,
            question: "What is the derivative of $x^x$?",
            options: ["$x^x(1 + \\ln(x))$", "$x \\cdot x^{x-1}$", "$x^x \\ln(x)$", "$x^x$"],
            answer: "$x^x(1 + \\ln(x))$",
            hint: "Use logarithmic differentiation: let $y = x^x$ and take $\\ln$ of both sides."
        },
        {
            id: 8,
            question: "Which substitution is best for $\\int \\sqrt{a^2 - x^2} \\, dx$?",
            options: ["$x = a \\tan(\\theta)$", "$x = a \\sin(\\theta)$", "$x = a \\sec(\\theta)$", "$u = x^2$"],
            answer: "$x = a \\sin(\\theta)$",
            hint: "Use the identity $1 - \\sin^2(\\theta) = \\cos^2(\\theta)$."
        },
        {
            id: 9,
            question: "What is the limit $\\lim_{n \\to \\infty} (1 + \\frac{1}{n})^n$?",
            options: ["1", "0", "$e$", "$\\infty$"],
            answer: "$e$",
            hint: "This is one of the formal definitions of Euler's number."
        },
        {
            id: 10,
            question: "A series $\\sum a_n$ is 'absolutely convergent' if:",
            options: ["$\\sum a_n$ converges", "$\\sum |a_n|$ converges", "$a_n \\to 0$", "It is an alternating series"],
            answer: "$\\sum |a_n|$ converges",
            hint: "The series of absolute values must also settle to a finite sum."
        },
        {
            id: 11,
            question: "Find the work done by a variable force $F(x)$ from $x=a$ to $x=b$.",
            options: ["$F(b) - F(a)$", "$\\int_a^b F(x) \\, dx$", "$\\frac{1}{2}mv^2$", "$mgh$"],
            answer: "$\\int_a^b F(x) \\, dx$",
            hint: "Work is the integral of force with respect to displacement."
        },
        {
            id: 12,
            question: "What is the length of the curve $y=f(x)$ from $a$ to $b$?",
            options: ["$\\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx$", "$\\int_a^b f(x) \\, dx$", "$\\int_a^b f'(x) \\, dx$", "$\\pi \\int_a^b r^2$"],
            answer: "$\\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx$",
            hint: "It's derived from the Pythagorean distance formula for small segments."
        },
        {
            id: 13,
            question: "What is the sum of the geometric series $1 + r + r^2 + \\dots$ for $|r| < 1$?",
            options: ["$\\frac{r}{1-r}$", "$\\frac{1}{1-r}$", "$\\frac{1}{r-1}$", "$\\infty$"],
            answer: "$\\frac{1}{1-r}$",
            hint: "It depends on the first term and the common ratio."
        },
        {
            id: 14,
            question: "In the $\\epsilon-\\delta$ definition of a limit, we want to prove $|f(x) - L| < \\epsilon$ whenever:",
            options: ["$|x - c| < \\delta$", "$x = c$", "$|x| < \\epsilon$", "$f(x) = L$"],
            answer: "$|x - c| < \\delta$",
            hint: "As $x$ gets close to $c$, $f(x)$ gets close to $L$."
        },
        {
            id: 15,
            question: "Which of the following is an 'improper integral'?",
            options: ["$\\int_0^1 x^2 \\, dx$", "$\\int_1^\\infty \\frac{1}{x} \\, dx$", "$\\int_{-1}^1 \\sin(x) \\, dx$", "$\\int_0^5 2 \\, dx$"],
            answer: "$\\int_1^\\infty \\frac{1}{x} \\, dx$",
            hint: "Look for infinite limits or vertical asymptotes within the bounds."
        },
        {
            id: 16,
            question: "Using Shell Method, the volume of revolution around the y-axis is:",
            options: ["$\\pi \\int f(x)^2 \\, dx$", "$2\\pi \\int x f(x) \\, dx$", "$\\int A(x) \\, dx$", "$4/3 \\pi r^3$"],
            answer: "$2\\pi \\int x f(x) \\, dx$",
            hint: "Think of $2\\pi r h$ being summed up."
        },
        {
            id: 17,
            question: "What is the interval of convergence for the series $\\sum x^n$?",
            options: ["$(-\\infty, \\infty)$", "$(-1, 1)$", "$[0, 1]$", "Only $x=0$"],
            answer: "$(-1, 1)$",
            hint: "This is a geometric series; it converges only when the ratio is less than 1."
        },
        {
            id: 18,
            question: "What is the value of $\\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx$?",
            options: ["$1$", "$\\pi$", "$\\sqrt{\\pi}$", "$e$"],
            answer: "$\\sqrt{\\pi}$",
            hint: "This is the famous Gaussian integral."
        },
        {
            id: 19,
            question: "The Maclaurin series for $\\cos(x)$ contains only:",
            options: ["Odd powers of $x$", "Even powers of $x$", "Positive constants", "Exponential terms"],
            answer: "Even powers of $x$",
            hint: "Cosine is an even function."
        }
    ]
};