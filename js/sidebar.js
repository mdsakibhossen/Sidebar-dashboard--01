// Start Nav-Button(Sidebar Button/Menu-Button)
const menu_btn = document.querySelector('#menu_btn');

// Run On Nav-Button Click 
function menu_run() {
    const bar = document.querySelectorAll('.bar')
    const bar1 = bar[0];
    const bar2 = bar[1];
    const bar3 = bar[2];

    // Nav-Button Styling
    bar1.classList.toggle("bar1");
    bar2.classList.toggle("bar2");
    bar3.classList.toggle("bar3");

    // Sidebar Open-Close
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('on_off')
};
// End Nav-Button(Sidebar Button/Menu-Button)


