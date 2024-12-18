import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const RevenueChart: FC = () => {
  // Sample data for the Revenue info
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [700, 5500, 6000, 5000, 6500, 750, 80, 900, 850, 700, 600, 950], 
        backgroundColor: '#3498db',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const, // Change to 'bottom' or any other position
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            return value !== undefined ? value : 'No data'; // Replace 'No data' with a custom message if needed
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false, // Ensures the chart stretches according to the container's size
  };

  return (
    <div className="bg-white rounded-lg" style={{ height: '250px',width:"500px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueChart;
