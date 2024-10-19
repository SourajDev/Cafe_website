document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemName = this.querySelector('h2').innerText;
            alert(`You clicked on ${itemName}`);
        });
    });
});
