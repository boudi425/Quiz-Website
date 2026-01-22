export const linearAlgebraQuestions = {
    Easy: [
        {
            id: 0,
            question: "What is a single number in linear algebra called?",
            options: ["Vector", "Matrix", "Scalar", "Tensor"],
            answer: "Scalar",
            hint: "It has magnitude but no direction in the context of vector spaces."
        },
        {
            id: 1,
            question: "What is the size of a matrix with 3 rows and 2 columns?",
            options: ["2x3", "3x2", "3x3", "6"],
            answer: "3x2",
            hint: "Matrix dimensions are always written as rows $\times$ columns."
        },
        {
            id: 2,
            question: "To add two matrices, what must be true about their dimensions?",
            options: ["They must be square", "They must be the same", "The columns of the first must match rows of the second", "They can be any size"],
            answer: "They must be the same",
            hint: "Addition is performed element-wise."
        },
        {
            id: 3,
            question: "Which matrix acts as the '1' of matrix algebra?",
            options: ["Zero Matrix", "Identity Matrix", "Square Matrix", "Diagonal Matrix"],
            answer: "Identity Matrix",
            hint: "Multiplying any matrix $A$ by this matrix results in $A$."
        },
        {
            id: 4,
            question: "What is the transpose of a row vector?",
            options: ["A square matrix", "A column vector", "A scalar", "A zero vector"],
            answer: "A column vector",
            hint: "Transposing switches rows and columns."
        },
        {
            id: 5,
            question: "What is the result of multiplying a matrix by a scalar $k=0$?",
            options: ["The original matrix", "The Identity matrix", "The Zero matrix", "An undefined matrix"],
            answer: "The Zero matrix",
            hint: "Zero times any element in the matrix is zero."
        },
        {
            id: 6,
            question: "If matrix $A$ is $2 \times 3$ and matrix $B$ is $2 \times 3$, what is the dimension of $A + B$?",
            options: ["2x3", "3x2", "4x6", "2x2"],
            answer: "2x3",
            hint: "Matrix addition does not change the dimensions."
        },
        {
            id: 7,
            question: "What do you call a matrix where all elements off the main diagonal are zero?",
            options: ["Identity Matrix", "Zero Matrix", "Diagonal Matrix", "Row Matrix"],
            answer: "Diagonal Matrix",
            hint: "The values only exist on the 'diagonal' from top-left to bottom-right."
        },
        {
            id: 8,
            question: "What is the magnitude of a unit vector?",
            options: ["0", "1", "$\pi$", "Variable"],
            answer: "1",
            hint: "The term 'unit' refers to a value of one."
        },
        {
            id: 9,
            question: "What is the dot product of the vectors $[1, 0]$ and $[0, 1]$?",
            options: ["1", "0", "2", "-1"],
            answer: "0",
            hint: "$a \cdot b = (1 \times 0) + (0 \times 1)$."
        },
        {
            id: 10,
            question: "A matrix with the same number of rows and columns is called a:",
            options: ["Equal matrix", "Balanced matrix", "Square matrix", "Rectangular matrix"],
            answer: "Square matrix",
            hint: "Like the shape, its height equals its width."
        },
        {
            id: 11,
            question: "In the matrix $A = \begin{bmatrix} 5 & 2 \\ 1 & 8 \end{bmatrix}$, what is the element $a_{21}$?",
            options: ["5", "2", "1", "8"],
            answer: "1",
            hint: "The first index is the row, the second is the column."
        },
        {
            id: 12,
            question: "What is the negative of the vector $[3, -2]$?",
            options: ["$[3, 2]$","$[ -3, 2]$","$[ -3, -2]$","$[ 2, -3]$"],
            answer: "$[ -3, 2]$",
            hint: "Multiply every component by -1."
        },
        {
            id: 13,
            question: "Which of these is NOT a vector operation?",
            options: ["Addition", "Scaling", "Division", "Dot Product"],
            answer: "Division",
            hint: "You cannot divide one vector by another directly."
        },
        {
            id: 14,
            question: "What is the main diagonal of a matrix?",
            options: ["Top-left to bottom-right", "Top-right to bottom-left", "The first row", "The last column"],
            answer: "Top-left to bottom-right",
            hint: "It contains elements like $a_{11}, a_{22}, \dots$."
        },
        {
            id: 15,
            question: "If you scale the vector $v = [2, 4]$ by $0.5$, what is the result?",
            options: ["$[1, 2]$", "$[4, 8]$", "$[2.5, 4.5]$", "$[1, 4]$"],
            answer: "$[1, 2]$",
            hint: "Multiply each component by the scalar."
        },
        {
            id: 16,
            question: "The Zero vector has a magnitude of:",
            options: ["1", "Infinite", "0", "-1"],
            answer: "0",
            hint: "It represents the origin point."
        },
        {
            id: 17,
            question: "What is the sum of $[1, 2]$ and $[3, 4]$?",
            options: ["$[3, 8]$", "$[4, 6]$", "$[2, 2]$", "$[5, 5]$"],
            answer: "$[4, 6]$",
            hint: "Add the corresponding components."
        },
        {
            id: 18,
            question: "Can you add a $2 \times 2$ matrix and a $3 \times 3$ matrix?",
            options: ["Yes", "No", "Only if they are Identity matrices", "Only if one is a zero matrix"],
            answer: "No",
            hint: "Dimensions must match exactly for addition."
        },
        {
            id: 19,
            question: "A $1 \times 1$ matrix is essentially a:",
            options: ["Vector", "Scalar", "Identity", "Zero"],
            answer: "Scalar",
            hint: "It contains only a single numerical value."
        }
    ],
    Medium: [
        {
            id: 0,
            question: "What is the determinant of the matrix $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$?",
            options: ["$ab - cd$", "$ad - bc$", "$ad + bc$", "$ac - bd$"],
            answer: "$ad - bc$",
            hint: "Multiply the main diagonal and subtract the product of the other diagonal."
        },
        {
            id: 1,
            question: "If matrix $A$ is $m \times n$ and matrix $B$ is $n \times p$, what is the size of the product $AB$?",
            options: ["$m \times p$", "$n \times n$", "$m \times n$", "$p \times m$"],
            answer: "$m \times p$",
            hint: "The inner dimensions 'cancel out' for multiplication."
        },
        {
            id: 2,
            question: "What is the 'trace' of a square matrix?",
            options: ["The product of the diagonal elements", "The sum of the diagonal elements", "The determinant", "The inverse"],
            answer: "The sum of the diagonal elements",
            hint: "It is often denoted as $tr(A)$."
        },
        {
            id: 3,
            question: "Which property does matrix multiplication NOT generally satisfy?",
            options: ["Associative", "Distributive", "Commutative", "Identity"],
            answer: "Commutative",
            hint: "Usually, $AB \neq BA$."
        },
        {
            id: 4,
            question: "What is the condition for a square matrix $A$ to have an inverse?",
            options: ["$det(A) = 0$", "$det(A) \neq 0$", "$tr(A) = 1$", "$A$ is a zero matrix"],
            answer: "$det(A) \neq 0$",
            hint: "If the determinant is zero, the matrix is 'singular'."
        },
        {
            id: 5,
            question: "The dot product of two vectors is zero. What does this imply?",
            options: ["The vectors are parallel", "The vectors are orthogonal", "One vector is the identity", "The vectors are the same"],
            answer: "The vectors are orthogonal",
            hint: "Orthogonal means they meet at a $90^\circ$ angle."
        },
        {
            id: 6,
            question: "What is $(AB)^T$ equal to?",
            options: ["$A^T B^T$", "$B^T A^T$", "$A B^T$", "$A^T B$"],
            answer: "$B^T A^T$",
            hint: "The transpose of a product reverses the order."
        },
        {
            id: 7,
            hint: "You can find this by checking if one vector is a scalar multiple of the other.",
            question: "Which of the following sets of vectors is linearly dependent?",
            options: ["$[1, 0], [0, 1]$", "$[1, 2], [2, 4]$", "$[1, 1], [1, 0]$", "$[2, 1], [1, 2]$"],
            answer: "$[1, 2], [2, 4]$"
        },
        {
            id: 8,
            question: "What is the determinant of a $3 \times 3$ Identity matrix?",
            options: ["0", "1", "3", "9"],
            answer: "1",
            hint: "The determinant of any identity matrix is always 1."
        },
        {
            id: 9,
            question: "If $A$ is a $3 \times 3$ matrix and $det(A) = 5$, what is $det(2A)$?",
            options: ["10", "20", "40", "5"],
            answer: "40",
            hint: "Formula: $det(kA) = k^n det(A)$, where $n$ is the dimension."
        },
        {
            id: 10,
            question: "What is the cross product of two parallel vectors?",
            options: ["1", "A unit vector", "The Zero vector", "The Identity matrix"],
            answer: "The Zero vector",
            hint: "Cross product magnitude involves $\sin(\theta)$; $\sin(0) = 0$."
        },
        {
            id: 11,
            question: "A matrix $A$ is symmetric if:",
            options: ["$A = -A$", "$A = A^T$", "$det(A) = 1$", "$A^2 = I$"],
            answer: "$A = A^T$",
            hint: "It is its own mirror image across the main diagonal."
        },
        {
            id: 12,
            question: "What is the inverse of the matrix $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$?",
            options: ["$\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$", "$\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$", "$\begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}$", "None"],
            answer: "$\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$",
            hint: "The identity matrix is its own inverse."
        },
        {
            id: 13,
            question: "If a system of linear equations has more variables than equations, it is likely to have:",
            options: ["Exactly one solution", "No solutions", "Infinitely many solutions", "A negative solution"],
            answer: "Infinitely many solutions",
            hint: "This is known as an underdetermined system."
        },
        {
            id: 14,
            question: "What is the rank of a $3 \times 3$ zero matrix?",
            options: ["0", "1", "3", "Undefined"],
            answer: "0",
            hint: "Rank is the number of linearly independent rows/columns."
        },
        {
            id: 15,
            question: "The process of swapping rows in a matrix is an example of an:",
            options: ["Eigen-operation", "Elementary row operation", "Inversion", "Diagonalization"],
            answer: "Elementary row operation",
            hint: "Commonly used in Gaussian elimination."
        },
        {
            id: 16,
            question: "What is the length (norm) of the vector $[3, 4]$?",
            options: ["5", "7", "12", "25"],
            answer: "5",
            hint: "$\sqrt{3^2 + 4^2}$."
        },
        {
            id: 17,
            question: "A system of equations $Ax = b$ is 'homogeneous' if:",
            options: ["$b = I$", "$b = 0$", "$A = 0$", "$x = 0$"],
            answer: "$b = 0$",
            hint: "The constants on the right side are all zero."
        },
        {
            id: 18,
            question: "What is the determinant of a lower triangular matrix?",
            options: ["Sum of diagonal elements", "Product of diagonal elements", "0", "1"],
            answer: "Product of diagonal elements",
            hint: "This rule applies to all triangular matrices."
        },
        {
            id: 19,
            question: "Which of these is used to solve a system of equations by calculating determinants?",
            options: ["Euler's Rule", "Cramer's Rule", "Newton's Method", "Gaussian Rule"],
            answer: "Cramer's Rule",
            hint: "It involves replacing columns of $A$ with vector $b$."
        }
    ],
    Hard: [
        {
            id: 0,
            question: "What is the equation used to find eigenvalues $\lambda$ for matrix $A$?",
            options: ["$Av = \lambda$", "$det(A - \lambda I) = 0$", "$tr(A) = \lambda$", "$A^2 = \lambda I$"],
            answer: "$det(A - \lambda I) = 0$",
            hint: "This is called the characteristic equation."
        },
        {
            id: 1,
            question: "What does the Rank-Nullity Theorem state for an $m \times n$ matrix $A$?",
            options: ["$rank(A) + nullity(A) = n$", "$rank(A) + nullity(A) = m$", "$rank(A) = nullity(A)$", "$rank(A) \times nullity(A) = n$"],
            answer: "$rank(A) + nullity(A) = n$",
            hint: "The sum of dimensions of the image and the kernel equals the number of columns."
        },
        {
            id: 2,
            question: "A square matrix $Q$ is orthogonal if:",
            options: ["$Q = Q^T$", "$Q^T = Q^{-1}$", "$det(Q) = 0$", "$tr(Q) = 1$"],
            answer: "$Q^T = Q^{-1}$",
            hint: "Multiplying $Q$ by its transpose yields the identity matrix."
        },
        {
            id: 3,
            question: "What is the kernel (null space) of a linear transformation $T$?",
            options: ["The set of all outputs", "The set of all inputs $x$ such that $T(x) = 0$", "The basis of the space", "The set of eigenvalues"],
            answer: "The set of all inputs $x$ such that $T(x) = 0$",
            hint: "It represents everything that gets mapped to the zero vector."
        },
        {
            id: 4,
            question: "If a matrix is diagonalizable, it can be written as $A = PDP^{-1}$. What is $D$?",
            options: ["The Identity matrix", "A diagonal matrix of eigenvalues", "A matrix of eigenvectors", "The derivative"],
            answer: "A diagonal matrix of eigenvalues",
            hint: "The entries on the diagonal of $D$ correspond to the eigenvalues of $A$."
        },
        {
            id: 5,
            question: "Two vectors are orthonormal if they are:",
            options: ["Parallel and unit length", "Orthogonal and unit length", "Orthogonal and any length", "Symmetric"],
            answer: "Orthogonal and unit length",
            hint: "The dot product is 0, and each vector's magnitude is 1."
        },
        {
            id: 6,
            question: "What is a 'basis' of a vector space?",
            options: ["Any set of vectors", "A linearly independent set that spans the space", "The set of all orthogonal vectors", "A single unit vector"],
            answer: "A linearly independent set that spans the space",
            hint: "It provides a unique way to represent every vector in the space."
        },
        {
            id: 7,
            question: "What is the Cayley-Hamilton Theorem?",
            options: ["Every matrix has a determinant", "Every matrix satisfies its own characteristic equation", "$A B = B A$ for square matrices", "$Rank = Nullity$"],
            answer: "Every matrix satisfies its own characteristic equation",
            hint: "If $p(\lambda)$ is the characteristic polynomial, then $p(A)$ is the zero matrix."
        },
        {
            id: 8,
            question: "The projection of vector $u$ onto vector $v$ is given by:",
            options: ["$\frac{u \cdot v}{||v||^2} v$", "$\frac{u \cdot v}{||u||} v$", "$u \times v$", "$u + v$"],
            answer: "$\frac{u \cdot v}{||v||^2} v$",
            hint: "It's the component of $u$ that lies in the direction of $v$."
        },
        {
            id: 9,
            question: "What is the algebraic multiplicity of an eigenvalue?",
            options: ["The number of eigenvectors it has", "The number of times it appears as a root of the characteristic polynomial", "The value of the eigenvalue", "The dimension of the kernel"],
            answer: "The number of times it appears as a root of the characteristic polynomial",
            hint: "It refers to the multiplicity of the root in $det(A - \lambda I) = 0$."
        },
        {
            id: 10,
            question: "Which transformation is represented by a matrix with $det(A) = -1$?",
            options: ["Rotation", "Scaling", "Reflection", "Identity"],
            answer: "Reflection",
            hint: "A negative determinant usually indicates a change in orientation."
        },
        {
            id: 11,
            question: "If the columns of a $4 \times 4$ matrix are linearly independent, what is its rank?",
            options: ["1", "2", "3", "4"],
            answer: "4",
            hint: "If columns are independent, the matrix is full rank."
        },
        {
            id: 12,
            question: "A Markov matrix (stochastic matrix) has the property that:",
            options: ["Columns sum to 1", "Rows sum to 0", "The determinant is 0", "All elements are negative"],
            answer: "Columns sum to 1",
            hint: "These are used in probability to represent transitions."
        },
        {
            id: 13,
            question: "The Gram-Schmidt process is used for:",
            options: ["Finding eigenvalues", "Inverting a matrix", "Orthonormalizing a set of vectors", "Solving linear systems"],
            answer: "Orthonormalizing a set of vectors",
            hint: "It takes a basis and makes it orthogonal and unit-length."
        },
        {
            id: 14,
            question: "What is the Singular Value Decomposition (SVD) of a matrix $A$?",
            options: ["$A = LU$", "$A = U \Sigma V^T$", "$A = QR$", "$A = PDP^{-1}$"],
            answer: "$A = U \Sigma V^T$",
            hint: "It decomposes any matrix into rotation, scaling, and rotation."
        },
        {
            id: 15,
            question: "An idempotent matrix $A$ satisfies which condition?",
            options: ["$A^2 = A$", "$A^T = A$", "$A^{-1} = A$", "$A = 0$"],
            answer: "$A^2 = A$",
            hint: "Applying the transformation twice is the same as applying it once."
        },
        {
            id: 16,
            question: "What is the dimension of the vector space of all $2 \times 2$ matrices?",
            options: ["2", "4", "8", "Infinite"],
            answer: "4",
            hint: "There are four independent positions to fill in the matrix."
        },
        {
            id: 17,
            question: "In the context of linear transformations, what is the 'Image'?",
            options: ["The Kernel", "The set of all possible output vectors", "The Eigenvalues", "The input space"],
            answer: "The set of all possible output vectors",
            hint: "It is essentially the 'range' of the function."
        },
        {
            id: 18,
            question: "If $\lambda$ is an eigenvalue of $A$, what is an eigenvalue of $A^n$?",
            options: ["$n\lambda$", "$\lambda^n$", "$\lambda / n$", "$\lambda + n$"],
            answer: "$\lambda^n$",
            hint: "Repeated transformations scale the eigenvector repeatedly."
        },
        {
            id: 19,
            question: "A square matrix is 'skew-symmetric' if:",
            options: ["$A^T = A$", "$A^T = -A$", "$det(A) = 1$", "$tr(A) = 0$"],
            answer: "$A^T = -A$",
            hint: "The diagonal elements of such a matrix must be zero."
        }
    ]
};