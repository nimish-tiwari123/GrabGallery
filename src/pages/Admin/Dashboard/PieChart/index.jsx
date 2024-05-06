/* eslint-disable react/prop-types */

const PieChart = ({ total, available, unavailable, size = 250}) => {
  const radius = size / 2;
  const centerX = size / 2;
  const centerY = size / 2;

  const totalAngle = (total / (total + available + unavailable)) * 360;
  const availableAngle = (available / (total + available + unavailable)) * 360;
  const unavailableAngle = (unavailable / (total + available + unavailable)) * 360;

  const getPath = (startAngle, endAngle) => {
    const x1 = centerX + radius * Math.cos((Math.PI / 180) * startAngle);
    const y1 = centerY + radius * Math.sin((Math.PI / 180) * startAngle);
    const x2 = centerX + radius * Math.cos((Math.PI / 180) * endAngle);
    const y2 = centerY + radius * Math.sin((Math.PI / 180) * endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    return `M ${centerX},${centerY} L ${x1},${y1} A ${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;
  };

  return (
    <svg width={size} height={size}>
      <path
        d={getPath(0, totalAngle)}
        fill="#CFD8DC" // Total stock color
      />
      <path
        d={getPath(totalAngle, totalAngle + availableAngle)}
        fill="#00FF00" // Available stock color
      />
      <path
        d={getPath(totalAngle + availableAngle, 360)}
        fill="#FF0000" // Unavailable stock color
      />
      <circle cx={centerX} cy={centerY} r={radius - 20} fill="white" />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="black">
        {total}
      </text>
    </svg>
  );
};

export default PieChart;
