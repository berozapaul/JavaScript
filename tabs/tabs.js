document.addEventListener('DOMContentLoaded', () => {
    const showTab = (clickedTab) => {
        const prevActiveTab = document.querySelector('.active-tab');
        prevActiveTab ? prevActiveTab.classList.remove('active-tab') : '';
        clickedTab.classList.add('active-tab');

        const prevActiveDesc = document.querySelector('.active-desc');
        prevActiveDesc ? prevActiveDesc.classList.remove('active-desc') : '';

        const activeDesc = document.querySelector('.item' + clickedTab.dataset.attr);
        activeDesc.classList.add('active-desc');
    }

    const liNodes = document.querySelectorAll('.tabs li');
    for(let i = 0; i < liNodes.length ; i++) {
        const item = liNodes[i];
        item.addEventListener('click', (e) => showTab(item))
    }
});
