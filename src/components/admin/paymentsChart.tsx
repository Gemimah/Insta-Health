import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PaymentChart: FC = () => {
  // Sample data for payment info
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Payments',
        data: [700, 5500, 6000, 5000, 6500, 750, 80, 900, 850, 700, 600, 950], // Payment data points
        borderColor: '#3498db',
        backgroundColor: 'rgba(52, 152, 219, 0.2)',
        fill: true,
        tension: 0.4, // Makes the line smooth
        pointBorderColor: '#3498db',
        pointBackgroundColor: '#fff',
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw}`, // Format tooltips to show dollar values
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount Paid ($)',
        },
        grid: {
          display: false, // Removes gridlines on the y-axis
        },
      },
      x: {
        title: {
          display: true,
          text: 'Months',
        },
        grid: {
          display: false, // Removes gridlines on the x-axis
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Monthly Payment Summary</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default PaymentChart;
