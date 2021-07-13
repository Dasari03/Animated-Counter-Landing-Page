const counts = document.querySelectorAll('.count')



const time = 400;

counts.forEach(count => {
    

    const updateText = () => {
        const targetText = +count.getAttribute('data-target')
        const primaryText = +count.innerText;
        const inc = Math.ceil(targetText / time);

        if (primaryText < targetText) {
            count.innerText = primaryText + inc;
            setTimeout(updateText, 1)
        } else {
            count.innerText = targetText;
        }
        
    }

    updateText();
    
})







