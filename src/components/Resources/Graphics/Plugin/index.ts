import {
    Chart as ChartJS,
    BarElement,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js/auto'

ChartJS.register(
    BarElement,
    LinearScale,
    Tooltip,
    Legend
)

ChartJS.defaults.layout.padding = 16
ChartJS.defaults.plugins.legend.display = false
ChartJS.defaults.plugins.title.display = false