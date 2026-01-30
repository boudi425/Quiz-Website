export const statisticsQuestions = {
    Easy: [
        {
            id: 0,
            question: "What is the 'mean' of a data set?",
            options: ["The middle value", "The most frequent value", "The average value", "The difference between max and min"],
            answer: "The average value",
            hint: "Sum all values and divide by the total count."
        },
        {
            id: 1,
            question: "Which measure of central tendency is the middle value when data is ordered?",
            options: ["Mean", "Median", "Mode", "Range"],
            answer: "Median",
            hint: "If there is an even number of values, it is the average of the two middle ones."
        },
        {
            id: 2,
            question: "What is the 'mode' in a set of numbers?",
            options: ["The average", "The middle number", "The value that appears most often", "The highest value"],
            answer: "The value that appears most often",
            hint: "A data set can have one mode, more than one, or none at all."
        },
        {
            id: 3,
            question: "What is the probability of flipping a fair coin and getting 'Heads'?",
            options: ["0", "0.5", "1", "0.25"],
            answer: "0.5",
            hint: "There is 1 desired outcome out of 2 possible outcomes."
        },
        {
            id: 4,
            question: "The 'range' of a data set is calculated as:",
            options: ["Mean - Median", "Max + Min", "Max - Min", "Sum / Count"],
            answer: "Max - Min",
            hint: "It measures the total spread of the data."
        },
        {
            id: 5,
            question: "A 'sample' is a ________ of a population.",
            options: ["Subset", "Duplicate", "Total", "Average"],
            answer: "Subset",
            hint: "We study a small group to understand the whole group."
        },
        {
            id: 6,
            question: "What is the sum of all probabilities in a sample space?",
            options: ["0", "0.5", "1", "100"],
            answer: "1",
            hint: "Something must happen; the total likelihood is 100%."
        },
        {
            id: 7,
            question: "In a box plot, the 'box' represents which part of the data?",
            options: ["The entire range", "The middle 50% (Interquartile Range)", "The outliers", "The mean"],
            answer: "The middle 50% (Interquartile Range)",
            hint: "It spans from the first quartile ($Q1$) to the third quartile ($Q3$)."
        },
        {
            id: 8,
            question: "Which of these is a measure of dispersion (spread)?",
            options: ["Mean", "Standard Deviation", "Median", "Mode"],
            answer: "Standard Deviation",
            hint: "It tells you how far, on average, values are from the mean."
        },
        {
            id: 9,
            question: "What is a 'variable' that can only take specific, separate values (like number of children)?",
            options: ["Continuous", "Discrete", "Qualitative", "Constant"],
            answer: "Discrete",
            hint: "You can count them, but you can't have 2.5 of them."
        },
        {
            id: 10,
            question: "If an event is 'impossible', its probability is:",
            options: ["0", "1", "-1", "0.01"],
            answer: "0",
            hint: "Probability scales from 0 (never) to 1 (always)."
        },
        {
            id: 11,
            question: "What is the shape of a 'Normal Distribution'?",
            options: ["Square", "Skewed right", "Bell-shaped", "Linear"],
            answer: "Bell-shaped",
            hint: "It is symmetrical around the mean."
        },
        {
            id: 12,
            question: "Data that describes categories (like hair color) is called:",
            options: ["Quantitative", "Qualitative (Categorical)", "Numerical", "Discrete"],
            answer: "Qualitative (Categorical)",
            hint: "This data describes 'qualities' rather than 'quantities'."
        },
        {
            id: 13,
            question: "What is the median of the set {1, 3, 3, 6, 7, 8, 9}?",
            options: ["3", "6", "7", "5.3"],
            answer: "6",
            hint: "It is the 4th value in this ordered list of 7 numbers."
        },
        {
            id: 14,
            question: "An 'outlier' is a data point that:",
            options: ["Is exactly the mean", "Is significantly different from other observations", "Appears most frequently", "Is the middle value"],
            answer: "Is significantly different from other observations",
            hint: "Think of a giant standing in a group of toddlers."
        },
        {
            id: 15,
            question: "Which graph uses bars to represent the frequency of data intervals?",
            options: ["Pie Chart", "Scatter Plot", "Histogram", "Line Graph"],
            answer: "Histogram",
            hint: "It looks like a bar chart but for continuous ranges of numbers."
        },
        {
            id: 16,
            question: "Probability is always a value between:",
            options: ["-1 and 1", "0 and 10", "0 and 1", "1 and 100"],
            answer: "0 and 1",
            hint: "It can be expressed as a decimal, fraction, or percentage (0% to 100%)."
        },
        {
            id: 17,
            question: "If the mean of a data set is 10 and every value is increased by 5, the new mean is:",
            options: ["10", "15", "50", "5"],
            answer: "15",
            hint: "Adding a constant to every value increases the mean by that same constant."
        },
        {
            id: 18,
            question: "What is a 'Census'?",
            options: ["A survey of a small group", "A study of an entire population", "An experiment with a control group", "A type of graph"],
            answer: "A study of an entire population",
            hint: "Governments usually conduct these every 10 years."
        },
        {
            id: 19,
            question: "If two events cannot happen at the same time, they are:",
            options: ["Independent", "Mutually Exclusive", "Correlated", "Continuous"],
            answer: "Mutually Exclusive",
            hint: "Like rolling a 2 and a 5 on a single die simultaneously."
        }
    ],
    Medium: [
        {
            id: 0,
            question: "What is the formula for the variance ($\\sigma^2$) of a population?",
            options: ["$\\sum (x - \\mu) / n$", "$\\sum (x - \\mu)^2 / n$", "$\\sqrt{\\sum (x - \\mu)^2 / n}$", "$\\sum x / n$"],
            answer: "$\\sum (x - \\mu)^2 / n$",
            hint: "It is the average of the squared deviations from the mean."
        },
        {
            id: 1,
            question: "In a standard normal distribution, what are the mean and standard deviation?",
            options: ["$\\mu=1, \\sigma=0$", "$\\mu=0, \\sigma=1$", "$\\mu=1, \\sigma=1$", "$\\mu=0, \\sigma=0$"],
            answer: "$\\mu=0, \\sigma=1$",
            hint: "This is also known as the Z-distribution."
        },
        {
            id: 2,
            question: "The 'Empirical Rule' states that approximately what percentage of data falls within 1 standard deviation of the mean in a normal distribution?",
            options: ["50%", "68%", "95%", "99.7%"],
            answer: "68%",
            hint: "Think of the 68-95-99.7 rule."
        },
        {
            id: 3,
            question: "What does a 'z-score' represent?",
            options: ["The mean of the data", "The number of standard deviations a value is from the mean", "The probability of an event", "the area under a curve"],
            answer: "The number of standard deviations a value is from the mean",
            hint: "Formula: $z = (x - \\mu) / \\sigma$."
        },
        {
            id: 4,
            question: "If $P(A) = 0.3$ and $P(B) = 0.4$, and $A$ and $B$ are independent, what is $P(A \\cap B)$?",
            options: ["0.7", "0.1", "0.12", "0.35"],
            answer: "0.12",
            hint: "For independent events, $P(A \\cap B) = P(A) \\times P(B)$."
        },
        {
            id: 5,
            question: "What is the 'Null Hypothesis' ($H_0$) usually testing for?",
            options: ["A significant difference", "No effect or no difference", "The researchers favorite outcome", "An outlier"],
            answer: "No effect or no difference",
            hint: "We usually try to 'reject' this hypothesis."
        },
        {
            id: 6,
            question: "What is a 'Type I Error'?",
            options: ["Failing to reject a false null hypothesis", "Rejecting a true null hypothesis", "Calculating the mean incorrectly", "Using too small of a sample"],
            answer: "Rejecting a true null hypothesis",
            hint: "A 'false positive'—concluding there is an effect when there isn't one."
        },
        {
            id: 7,
            question: "Which coefficient measures the strength and direction of a linear relationship?",
            options: ["Standard Deviation", "Variance", "Pearson Correlation Coefficient ($r$)", "p-value"],
            answer: "Pearson Correlation Coefficient ($r$)",
            hint: "It ranges from -1 to +1."
        },
        {
            id: 8,
            question: "What is the Interquartile Range (IQR)?",
            options: ["$Q3 - Q1$", "$Q4 - Q0$", "Mean - Median", "Max - Min"],
            answer: "$Q3 - Q1$",
            hint: "It captures the spread of the middle 50% of the data."
        },
        {
            id: 9,
            question: "The 'Central Limit Theorem' states that as sample size increases, the sampling distribution of the mean approaches:",
            options: ["A uniform distribution", "A normal distribution", "A binomial distribution", "A Poisson distribution"],
            answer: "A normal distribution",
            hint: "This is true regardless of the original population's shape."
        },
        {
            id: 10,
            question: "A distribution with a long tail on the right side is said to be:",
            options: ["Symmetrical", "Positively Skewed", "Negatively Skewed", "Bimodal"],
            answer: "Positively Skewed",
            hint: "The mean is usually greater than the median in this case."
        },
        {
            id: 11,
            question: "What is the formula for calculating a Z-score?",
            options: ["$(x - \\mu) / \\sigma$", "$(x + \\mu) / \\sigma$", "$\\sigma / \\sqrt{n}$", "$\\mu / \\sigma$"],
            answer: "$(x - \\mu) / \\sigma$",
            hint: "Value minus mean, all divided by standard deviation."
        },
        {
            id: 12,
            question: "In a regression equation $y = mx + b$, what does $m$ represent?",
            options: ["The y-intercept", "The slope (rate of change)", "The correlation", "The error term"],
            answer: "The slope (rate of change)",
            hint: "It tells you how much $y$ changes for every unit increase in $x$."
        },
        {
            id: 13,
            question: "What is the probability of rolling a '7' with two standard six-sided dice?",
            options: ["1/6", "1/12", "1/36", "7/36"],
            answer: "1/6",
            hint: "There are 6 ways to roll a 7 out of 36 possible outcomes."
        },
        {
            id: 14,
            question: "The 'Standard Error' of the mean is calculated as:",
            options: ["$\\sigma \\times n$", "$\\sigma / \\sqrt{n}$", "$\\sigma^2 / n$", "$\\sqrt{\\sigma}$"],
            answer: "$\\sigma / \\sqrt{n}$",
            hint: "It decreases as the sample size $n$ increases."
        },
        {
            id: 15,
            question: "Which distribution is used to model the number of events occurring in a fixed interval of time or space?",
            options: ["Binomial", "Poisson", "Normal", "Exponential"],
            answer: "Poisson",
            hint: "Think of customers arriving at a store per hour."
        },
        {
            id: 16,
            question: "What does $R^2$ (Coefficient of Determination) represent in regression?",
            options: ["The slope", "The proportion of variance in $y$ explained by $x$", "The standard error", "The p-value"],
            answer: "The proportion of variance in $y$ explained by $x$",
            hint: "It tells you how well the model fits the data."
        },
        {
            id: 17,
            question: "If a p-value is 0.03 and the alpha level is 0.05, you should:",
            options: ["Reject the null hypothesis", "Fail to reject the null hypothesis", "Accept the null hypothesis", "Redo the experiment"],
            answer: "Reject the null hypothesis",
            hint: "If the p-value is low ($< \\alpha$), the result is statistically significant."
        },
        {
            id: 18,
            question: "What is the 'Degrees of Freedom' for a sample of size $n$ when calculating variance?",
            options: ["$n$", "$n-1$", "$n+1$", "$\\sqrt{n}$"],
            answer: "$n-1$",
            hint: "Using $n-1$ instead of $n$ provides an unbiased estimate for samples."
        },
        {
            id: 19,
            question: "Which test would you use to compare the means of exactly two independent groups?",
            options: ["ANOVA", "Independent Samples t-test", "Chi-Square Test", "Linear Regression"],
            answer: "Independent Samples t-test",
            hint: "It tests if the difference between two group means is significant."
        }
    ],
    Hard: [
        {
            id: 0,
            question: "What is the 'p-value' in hypothesis testing?",
            options: ["The probability that the null hypothesis is true", "The probability of observing data as extreme as ours, assuming $H_0$ is true", "The probability that the alternative hypothesis is true", "The error rate of the test"],
            answer: "The probability of observing data as extreme as ours, assuming $H_0$ is true",
            hint: "It measures the strength of evidence against the null hypothesis."
        },
        {
            id: 1,
            question: "The 'Law of Large Numbers' implies that as sample size increases:",
            options: ["The variance increases", "The sample mean converges to the population mean", "The data becomes skewed", "The standard deviation becomes 1"],
            answer: "The sample mean converges to the population mean",
            hint: "More data leads to more stable and accurate estimates."
        },
        {
            id: 2,
            question: "Which distribution is appropriate for a hypothesis test when the population variance is unknown and the sample size is small?",
            options: ["Normal (Z) distribution", "t-distribution", "Chi-Square distribution", "F-distribution"],
            answer: "t-distribution",
            hint: "This distribution has 'fatter tails' than the normal distribution."
        },
        {
            id: 3,
            question: "What does 'Bayes' Theorem' calculate?",
            options: ["The mean of a population", "The probability of an event based on prior knowledge of conditions", "The correlation between two variables", "The margin of error"],
            answer: "The probability of an event based on prior knowledge of conditions",
            hint: "Formula: $P(A|B) = [P(B|A)P(A)] / P(B)$."
        },
        {
            id: 4,
            question: "In ANOVA, what does the F-statistic represent?",
            options: ["The ratio of variance between groups to variance within groups", "The difference between means", "The probability of a Type II error", "The total sum of squares"],
            answer: "The ratio of variance between groups to variance within groups",
            hint: "If the 'between' variance is much higher than 'within', the means are likely different."
        },
        {
            id: 5,
            question: "What is 'Power' in statistics ($1 - \\beta$)?",
            options: ["The probability of a Type I error", "The probability of correctly rejecting a false null hypothesis", "The strength of the correlation", "The size of the population"],
            answer: "The probability of correctly rejecting a false null hypothesis",
            hint: "It is the ability of a test to detect an effect if it actually exists."
        },
        {
            id: 6,
            question: "The 'Chi-Square Test for Independence' is used for:",
            options: ["Comparing two means", "Testing the relationship between two categorical variables", "Predicting a continuous variable", "Finding the median of a population"],
            answer: "Testing the relationship between two categorical variables",
            hint: "Think of testing if gender is associated with voting preference."
        },
        {
            id: 7,
            question: "What is the 'Maximum Likelihood Estimation' (MLE)?",
            options: ["A method for finding the mean", "A method of estimating parameters by maximizing a likelihood function", "A way to calculate outliers", "A type of probability"],
            answer: "A method of estimating parameters by maximizing a likelihood function",
            hint: "It finds the parameter values that make the observed data most probable."
        },
        {
            id: 8,
            question: "Which of the following is a 'Non-parametric' test?",
            options: ["t-test", "ANOVA", "Mann-Whitney U test", "Linear Regression"],
            answer: "Mann-Whitney U test",
            hint: "These tests do not assume a specific distribution (like normality)."
        },
        {
            id: 9,
            question: "What is 'Multicollinearity' in multiple regression?",
            options: ["When the error terms are correlated", "When independent variables are highly correlated with each other", "When the relationship is non-linear", "When there are too many outliers"],
            answer: "When independent variables are highly correlated with each other",
            hint: "It makes it difficult to determine the individual effect of each variable."
        },
        {
            id: 10,
            question: "A 'Confidence Interval' of 95% means:",
            options: ["95% of the data points fall in this range", "There is a 95% chance the population parameter is in this specific interval", "95% of such intervals calculated from different samples would contain the true parameter", "The mean is correct 95% of the time"],
            answer: "95% of such intervals calculated from different samples would contain the true parameter",
            hint: "It is a statement about the procedure's reliability over many samples."
        },
        {
            id: 11,
            question: "What is the 'Jacobian' used for in probability?",
            options: ["Finding the mean", "Transforming variables in joint probability density functions", "Calculating the variance", "Testing for normality"],
            answer: "Transforming variables in joint probability density functions",
            hint: "It handles the change of variables in multi-dimensional calculus."
        },
        {
            id: 12,
            question: "What characterizes a 'Bernoulli Process'?",
            options: ["Infinite outcomes", "Two possible outcomes with constant probability", "Dependent trials", "A continuous range of values"],
            answer: "Two possible outcomes with constant probability",
            hint: "Think of a sequence of independent coin flips."
        },
        {
            id: 13,
            question: "In a 'Poisson Distribution', the mean ($\\lambda$) is equal to:",
            options: ["The standard deviation", "The variance", "The median", "1"],
            answer: "The variance",
            hint: "This is a unique property where $\\mu = \\sigma^2$."
        },
        {
            id: 14,
            question: "What is the 'Morgenthaler-Tukey' approach often associated with?",
            options: ["Exploratory Data Analysis (EDA)", "Deep Learning", "Bayesian Priors", "Sampling Design"],
            answer: "Exploratory Data Analysis (EDA)",
            hint: "It focuses on visualizing and summarizing data before formal modeling."
        },
        {
            id: 15,
            question: "What does 'Heteroscedasticity' refer to in regression analysis?",
            options: ["Non-linear relationships", "Unequal variance of residuals across levels of an independent variable", "The presence of outliers", "Correlation between error terms"],
            answer: "Unequal variance of residuals across levels of an independent variable",
            hint: "It violates the assumption that the 'noise' is constant."
        },
        {
            id: 16,
            question: "The 'Expectation-Maximization' (EM) algorithm is typically used for:",
            options: ["Calculating z-scores", "Finding MLEs in models with latent (hidden) variables", "Simple linear regression", "Data entry"],
            answer: "Finding MLEs in models with latent (hidden) variables",
            hint: "It iterates between estimating missing data and updating parameters."
        },
        {
            id: 17,
            question: "What is the 'Null Space' of a design matrix in regression related to?",
            options: ["The Intercept", "Perfect Multicollinearity", "The Residuals", "The p-value"],
            answer: "Perfect Multicollinearity",
            hint: "If columns are linearly dependent, the matrix cannot be inverted."
        },
        {
            id: 18,
            question: "In Markov Chains, a state is 'Absorbing' if:",
            options: ["You can never leave it once you enter", "It is the starting state", "It has a probability of 0", "It is connected to all other states"],
            answer: "You can never leave it once you enter",
            hint: "The probability of transitioning from the state to itself is 1."
        },
        {
            id: 19,
            question: "What is the 'Central Moment' of order 1?",
            options: ["The Variance", "The Mean", "Zero", "The Skewness"],
            answer: "Zero",
            hint: "It is the average of $(x - \\text{mean})^1$."
        }
    ]
};