export const numberTheoryQuestions = {
    Easy: [
        {
            id: 0,
            question: "What is a 'prime number'?",
            options: ["A number divisible by 2", "A number with exactly two factors: 1 and itself", "Any odd number", "A number that can be divided by 3"],
            answer: "A number with exactly two factors: 1 and itself",
            hint: "Think of numbers like 2, 3, 5, and 7."
        },
        {
            id: 1,
            question: "Which of the following is the only even prime number?",
            options: ["0", "2", "4", "6"],
            answer: "2",
            hint: "Every other even number is divisible by 2, so they can't be prime."
        },
        {
            id: 2,
            question: "What is the Greatest Common Divisor (GCD) of 8 and 12?",
            options: ["2", "4", "24", "96"],
            answer: "4",
            hint: "What is the largest number that divides both 8 and 12?"
        },
        {
            id: 3,
            question: "What is the Least Common Multiple (LCM) of 3 and 5?",
            options: ["8", "15", "30", "1"],
            answer: "15",
            hint: "What is the smallest number that both 3 and 5 can divide into?"
        },
        {
            id: 4,
            question: "A number that has more than two factors is called a:",
            options: ["Composite number", "Prime number", "Integer", "Rational number"],
            answer: "Composite number",
            hint: "It is the opposite of a prime number."
        },
        {
            id: 5,
            question: "What is the value of $15 \\pmod{4}$?",
            options: ["1", "2", "3", "0"],
            answer: "3",
            hint: "Modulo is the remainder when 15 is divided by 4."
        },
        {
            id: 6,
            question: "What is the prime factorization of 12?",
            options: ["$2 \\times 6$", "$3 \\times 4$", "$2^2 \\times 3$", "$2 \\times 3^2$"],
            answer: "$2^2 \\times 3$",
            hint: "Break 12 down into the smallest possible prime factors."
        },
        {
            id: 7,
            question: "Is 1 considered a prime number?",
            options: ["Yes", "No", "Only in Number Theory", "Sometimes"],
            answer: "No",
            hint: "By definition, a prime number must be greater than 1."
        },
        {
            id: 8,
            question: "What is the next prime number after 7?",
            options: ["9", "10", "11", "13"],
            answer: "11",
            hint: "Check if 9 or 10 have factors other than 1 and themselves."
        },
        {
            id: 9,
            question: "What is the GCD of two different prime numbers?",
            options: ["1", "Their product", "The smaller prime", "0"],
            answer: "1",
            hint: "Prime numbers share no factors other than 1."
        },
        {
            id: 10,
            question: "If a number ends in 0, it must be divisible by:",
            options: ["3", "7", "10", "None of these"],
            answer: "10",
            hint: "Think about the 10s times table (10, 20, 30...)."
        },
        {
            id: 11,
            question: "What are 'Coprime' numbers?",
            options: ["Numbers that are both prime", "Numbers whose GCD is 1", "Numbers that are equal", "Even numbers"],
            answer: "Numbers whose GCD is 1",
            hint: "They don't have to be prime themselves, they just shouldn't share factors."
        },
        {
            id: 12,
            question: "What is the remainder when 100 is divided by 9?",
            options: ["0", "1", "9", "10"],
            answer: "1",
            hint: "Use the trick: add the digits of the number ($1+0+0$)."
        },
        {
            id: 13,
            question: "How many factors does the number 6 have?",
            options: ["2", "3", "4", "6"],
            answer: "4",
            hint: "List them: 1, 2, 3, and 6."
        },
        {
            id: 14,
            question: "Which of these is a multiple of 7?",
            options: ["17", "27", "37", "49"],
            answer: "49",
            hint: "$7 \\times 7 = ?$."
        },
        {
            id: 15,
            question: "What is $7^0$ in Number Theory?",
            options: ["0", "1", "7", "Undefined"],
            answer: "1",
            hint: "Any non-zero integer raised to the power of 0 is 1."
        },
        {
            id: 16,
            question: "What is the smallest prime number?",
            options: ["0", "1", "2", "3"],
            answer: "2",
            hint: "It's the only even prime and the starting point of primes."
        },
        {
            id: 17,
            question: "A number is divisible by 3 if:",
            options: ["It ends in 3", "The sum of its digits is divisible by 3", "It is odd", "It is prime"],
            answer: "The sum of its digits is divisible by 3",
            hint: "Try it with 12 or 27."
        },
        {
            id: 18,
            question: "What is $10 \\pmod{5}$?",
            options: ["0", "1", "2", "5"],
            answer: "0",
            hint: "Does 5 divide into 10 perfectly?"
        },
        {
            id: 19,
            question: "Which of these numbers is prime?",
            options: ["15", "21", "23", "25"],
            answer: "23",
            hint: "23 cannot be divided by 2, 3, 4, or 5."
        }
    ],
    Medium: [
        {
            id: 0,
            question: "The 'Fundamental Theorem of Arithmetic' states that every integer $> 1$ is:",
            options: ["Prime", "A product of unique primes", "Even or odd", "Divisible by 10"],
            answer: "A product of unique primes",
            hint: "Every number has a 'DNA' made of prime numbers."
        },
        {
            id: 1,
            question: "What is the GCD of 48 and 180?",
            options: ["6", "12", "24", "48"],
            answer: "12",
            hint: "Use prime factorization or the Euclidean Algorithm."
        },
        {
            id: 2,
            question: "If $a \\equiv b \\pmod{n}$, this means:",
            options: ["$a = b$", "$n$ divides $(a - b)$", "$n$ divides $(a + b)$", "$a$ and $b$ are prime"],
            answer: "$n$ divides $(a - b)$",
            hint: "They leave the same remainder when divided by $n$."
        },
        {
            id: 3,
            question: "Which algorithm is used to find the GCD of two large numbers efficiently?",
            options: ["Sieve of Eratosthenes", "Euclidean Algorithm", "Newton's Method", "Euler's Method"],
            answer: "Euclidean Algorithm",
            hint: "It involves repeated division and remainders."
        },
        {
            id: 4,
            question: "How many prime numbers are there?",
            options: ["1,000,000", "A finite amount", "Infinitely many", "Exactly $2^{31}-1$"],
            answer: "Infinitely many",
            hint: "Euclid proved this over 2,000 years ago."
        },
        {
            id: 5,
            question: "What is Euler's totient function $\\phi(p)$ if $p$ is prime?",
            options: ["$p$", "$p-1$", "1", "$p^2$"],
            answer: "$p-1$",
            hint: "How many numbers less than $p$ are coprime to $p$?"
        },
        {
            id: 6,
            question: "What is the remainder of $2^{10} \\pmod{3}$?",
            options: ["0", "1", "2", "None"],
            answer: "1",
            hint: "$2 \\equiv -1 \\pmod{3}$. What is $(-1)^{10}$?"
        },
        {
            id: 7,
            question: "The Sieve of Eratosthenes is a method to:",
            options: ["Find the GCD", "Find all prime numbers up to a limit", "Solve congruences", "Factor large numbers"],
            answer: "Find all prime numbers up to a limit",
            hint: "It involves crossing out multiples of primes."
        },
        {
            id: 8,
            question: "What is a Mersenne prime?",
            options: ["A prime of the form $2^n - 1$", "A prime that is also even", "The sum of two primes", "A prime ending in 7"],
            answer: "A prime of the form $2^n - 1$",
            hint: "Many of the largest known primes are of this type."
        },
        {
            id: 9,
            question: "Find $x$ if $3x \\equiv 1 \\pmod{5}$.",
            options: ["$x=1$", "$x=2$", "$x=3$", "$x=4$"],
            answer: "$x=2$",
            hint: "$3 \\times 2 = 6$. What is $6 \\pmod{5}$?"
        },
        {
            id: 10,
            question: "What is the value of $\\phi(10)$?",
            options: ["2", "4", "5", "9"],
            answer: "4",
            hint: "Numbers coprime to 10 are: 1, 3, 7, 9."
        },
        {
            id: 11,
            question: "Goldbach's Conjecture suggests every even integer $> 2$ is:",
            options: ["A product of two primes", "The sum of two primes", "Divisible by 4", "A power of 2"],
            answer: "The sum of two primes",
            hint: "Example: $10 = 3 + 7$."
        },
        {
            id: 12,
            question: "Two primes that differ by 2 (like 11 and 13) are called:",
            options: ["Double primes", "Twin primes", "Binary primes", "Cousin primes"],
            answer: "Twin primes",
            hint: "They are like 'twins' sitting close together."
        },
        {
            id: 13,
            question: "What is the product of GCD(a, b) and LCM(a, b)?",
            options: ["$a+b$", "$a \\times b$", "$a^b$", "$1$"],
            answer: "$a \\times b$",
            hint: "This is a fundamental relationship between GCD and LCM."
        },
        {
            id: 14,
            question: "What is the largest digit a number in Base 8 can have?",
            options: ["8", "7", "9", "1"],
            answer: "7",
            hint: "Just like Base 10 goes up to 9, Base 8 goes up to $8-1$."
        },
        {
            id: 15,
            question: "A 'Perfect Number' is one where the sum of its proper divisors equals:",
            options: ["The number itself", "1", "The next prime", "0"],
            answer: "The number itself",
            hint: "Example: 6 ($1+2+3=6$)."
        },
        {
            id: 16,
            question: "How many divisors does $2^3 \\times 3^1$ have?",
            options: ["4", "3", "8", "6"],
            answer: "8",
            hint: "Formula: $(e_1 + 1)(e_2 + 1) \\dots$ where $e$ is the exponent."
        },
        {
            id: 17,
            question: "Which of these is a solution to $x^2 \\equiv 1 \\pmod{8}$?",
            options: ["1", "3", "5", "All of these"],
            answer: "All of these",
            hint: "$1^2=1, 3^2=9, 5^2=25$. Check their remainders mod 8."
        },
        {
            id: 18,
            question: "What is the last digit of $3^{100}$?",
            options: ["1", "3", "7", "9"],
            answer: "1",
            hint: "Look at the pattern of powers of 3: 3, 9, 27, 81... it repeats every 4."
        },
        {
            id: 19,
            question: "The 'floor' function $\\lfloor 2.9 \\rfloor$ equals:",
            options: ["2", "3", "2.5", "0"],
            answer: "2",
            hint: "The floor function rounds down to the nearest integer."
        }
    ],
    Hard: [
        {
            id: 0,
            question: "Fermat's Little Theorem states that if $p$ is prime, then $a^p \\equiv a \\pmod{p}$. What is another way to write it for $gcd(a, p)=1$?",
            options: ["$a^{p-1} \\equiv 1 \\pmod{p}$", "$a^{p+1} \\equiv 1 \\pmod{p}$", "$a^p = p^a$", "$a^2 + b^2 = c^2$"],
            answer: "$a^{p-1} \\equiv 1 \\pmod{p}$",
            hint: "This is a powerful tool for modular exponentiation."
        },
        {
            id: 1,
            question: "What does the Chinese Remainder Theorem solve?",
            options: ["Systems of linear congruences", "Quadratic equations", "Prime factorization", "The value of $\\pi$"],
            answer: "Systems of linear congruences",
            hint: "It helps find a number that fits multiple 'modulo' conditions."
        },
        {
            id: 2,
            question: "What is a 'primitive root' modulo $n$?",
            options: ["A number whose powers generate all numbers coprime to $n$", "A square root of $n$", "The smallest prime factor", "A root of a polynomial"],
            answer: "A number whose powers generate all numbers coprime to $n$",
            hint: "Its order is equal to $\\phi(n)$."
        },
        {
            id: 3,
            question: "The Prime Number Theorem describes the distribution of primes. Approximately how many primes are there $\\le x$?",
            options: ["$\\sqrt{x}$", "$x/\\ln(x)$", "$x^2$", "$\\ln(x)$"],
            answer: "$x/\\ln(x)$",
            hint: "The density of primes decreases as numbers get larger."
        },
        {
            id: 4,
            question: "Wilson's Theorem states that $(p-1)! \\equiv -1 \\pmod{p}$ if and only if:",
            options: ["$p$ is even", "$p$ is prime", "$p$ is composite", "$p > 100$"],
            answer: "$p$ is prime",
            hint: "This is a primality test, though not a very efficient one."
        },
        {
            id: 5,
            question: "What is the value of the Legendre symbol $(a/p)$ if $a$ is a quadratic residue modulo $p$?",
            options: ["0", "1", "-1", "$p$"],
            answer: "1",
            hint: "It means the equation $x^2 \\equiv a \\pmod{p}$ has a solution."
        },
        {
            id: 6,
            question: "The 'Order' of an element $a$ modulo $n$ is the smallest $k > 0$ such that:",
            options: ["$ak \\equiv 1 \\pmod{n}$", "$a^k \\equiv 1 \\pmod{n}$", "$a+k \\equiv n$", "$k$ is prime"],
            answer: "$a^k \\equiv 1 \\pmod{n}$",
            hint: "By Euler's theorem, this $k$ must divide $\\phi(n)$."
        },
        {
            id: 7,
            question: "Which of these is a 'Quadratic Reciprocity' law property?",
            options: ["It relates the solvability of $x^2 \\equiv p \\pmod{q}$ and $x^2 \\equiv q \\pmod{p}$", "It proves $a^2+b^2=c^2$", "It defines complex numbers", "It finds GCD"],
            answer: "It relates the solvability of $x^2 \\equiv p \\pmod{q}$ and $x^2 \\equiv q \\pmod{p}$",
            hint: "Discovered by Gauss, it's one of the deepest theorems in Number Theory."
        },
        {
            id: 8,
            question: "What is a 'Carmichael Number'?",
            options: ["A prime number", "A composite number that satisfies Fermat's Little Theorem for all $a$", "A number with 3 prime factors", "A perfect square"],
            answer: "A composite number that satisfies Fermat's Little Theorem for all $a$",
            hint: "They are 'fake primes' that trick Fermat's test."
        },
        {
            id: 9,
            question: "Evaluate $\\phi(100)$.",
            options: ["50", "40", "20", "80"],
            answer: "40",
            hint: "Use the formula $\\phi(n) = n(1 - 1/p_1)(1 - 1/p_2)$."
        },
        {
            id: 10,
            question: "What is the sum of the divisors of 6 (including 6 itself)?",
            options: ["6", "11", "12", "10"],
            answer: "12",
            hint: "Proper divisors ($1, 2, 3$) sum to 6, so all divisors sum to $6+6$."
        },
        {
            id: 11,
            question: "A Diophantine equation is an equation where we only look for:",
            options: ["Real solutions", "Integer solutions", "Complex solutions", "Positive solutions"],
            answer: "Integer solutions",
            hint: "Named after Diophantus of Alexandria."
        },
        {
            id: 12,
            question: "Which of these represents Fermat's Last Theorem?",
            options: ["$a^n + b^n = c^n$ has no integer solutions for $n > 2$", "$e^{i\\pi} + 1 = 0$", "$a^p \\equiv a \\pmod{p}$", "$2^n-1$ is prime"],
            answer: "$a^n + b^n = c^n$ has no integer solutions for $n > 2$",
            hint: "It remained unproven for over 300 years until Andrew Wiles solved it."
        },
        {
            id: 13,
            question: "The Dirichlet series for the Riemann Zeta function is $\\zeta(s) = \\sum \\dots$",
            options: ["$1/n^s$", "$n/s$", "$s^n$", "$1/s^n$"],
            answer: "$1/n^s$",
            hint: "It is deeply connected to the distribution of prime numbers."
        },
        {
            id: 14,
            question: "What is the remainder when $40!$ is divided by $41$?",
            options: ["0", "1", "40", "20"],
            answer: "40",
            hint: "Apply Wilson's Theorem: $(p-1)! \\equiv -1 \\pmod{p}$."
        },
        {
            id: 15,
            question: "What is an 'Arithmetic Function'?",
            options: ["A function defined on the set of positive integers", "A function that only uses addition", "A linear graph", "A calculator"],
            answer: "A function defined on the set of positive integers",
            hint: "Examples include $\\phi(n)$, $d(n)$, and $\\sigma(n)$."
        },
        {
            id: 16,
            question: "The Möbius function $\\mu(n)$ is 0 if:",
            options: ["$n$ is prime", "$n$ is square-free", "$n$ is divisible by a square ($> 1$)", "$n$ is even"],
            answer: "$n$ is divisible by a square ($> 1$)",
            hint: "It 'kills' any number with a squared prime factor."
        },
        {
            id: 17,
            question: "What is the value of $\\sum_{d|n} \\phi(d)$?",
            options: ["$1$", "$n$", "$n^2$", "$\\phi(n)$"],
            answer: "$n$",
            hint: "The sum of the totients of the divisors of $n$ equals $n$."
        },
        {
            id: 18,
            question: "In RSA Cryptography, the security relies on the difficulty of:",
            options: ["Adding large numbers", "Factoring the product of two large primes", "Finding GCD", "Calculating limits"],
            answer: "Factoring the product of two large primes",
            hint: "It's easy to multiply primes, but very hard to reverse the process."
        },
        {
            id: 19,
            question: "A number $n$ is square-free if its prime factorization:",
            options: ["Has no repeated primes", "Is only one prime", "Contains only even primes", "Sum to a square"],
            answer: "Has no repeated primes",
            hint: "Example: 15 ($3 \\times 5$) is square-free, but 12 ($2^2 \\times 3$) is not."
        }
    ]
};