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
          stroke="#e5eadf"
          strokeWidth={strokeBg}
        />

        {/* Progress ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#2f6f4e"
          strokeWidth={strokeProgress}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700 ease-out"
        />
      </svg>

      {/* Center content */}
      <div className="absolute text-3xl font-semibold text-black">
        {percent}%
      </div>
    </div>
  )
}

export default ProgressCircle
