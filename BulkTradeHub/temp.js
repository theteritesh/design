const statusCtx = document.getElementById('productStatusChart').getContext('2d');
new Chart(statusCtx, {
	type: 'pie',
	data: {
		labels: ['In Stock', 'Posted', 'Low Stock', 'Out of Stock'],
		datasets: [{
			data: [65, 150, 25, 10],
			backgroundColor: [
				'#4e73df',
				'#1cc88a',
				'#f6c23e',
				'#e74a3b'
			]
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: 'bottom'
			}
		}
	}
});
const trendCtx = document.getElementById('productTrendChart').getContext('2d');
new Chart(trendCtx, {
	type: 'line',
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [{
			label: 'Products Added',
			data: [65, 78, 90, 115, 140, 150],
			borderColor: '#4e73df',
			tension: 0.3,
			fill: false
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			y: {
				beginAtZero: true
			}
		},
		plugins: {
			legend: {
				position: 'bottom'
			}
		}
	}
});