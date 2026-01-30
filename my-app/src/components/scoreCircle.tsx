const ProgressCircle = ({
  value = 19,
  max = 20,
  size = 200,
}) => {
  const strokeBg = 8
  const strokeProgress = 12
  const radius = (size - strokeProgress) / 2
  const circumference = 2 * Math.PI * radius
  const progress = value / max
  const offset = circumference * (1 - progress);
  const percent = Math.round(progress * 100);

  return (
    <div className="relative flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="-rotate-90"
      >
        {/* Background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          className="text-outline-variant dark:text-dark-outline-variant"
          strokeWidth={strokeBg}
        />

        {/* Progress ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          className="text-primary dark:text-dark-primary transition-all duration-700 ease-out"
          strokeWidth={strokeProgress}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      {/* Center content */}
      <div className="absolute text-3xl font-semibold text-on-background dark:text-dark-on-background">
        {percent}%
      </div>
    </div>
  )
}

export default ProgressCircle
