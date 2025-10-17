export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                brand: '#1e40af',
                danger: '#dc2626',
            },
            fontFamily: {
                sans: ['DIN Next', 'Trebuchet MS', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
                // Eliminar la fuente local anterior ya que ahora usamos DIN Next como principal
            },
        },
    },
    plugins: [],
}