document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('madlib-form');
    const resultContainer = document.getElementById('madlib-result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const noun = document.getElementById('noun').value;
        const verb = document.getElementById('verb').value;
        const adjective = document.getElementById('adjective').value;
        const adverb = document.getElementById('adverb').value;

        const madlibResult = `As the lights dimmed, the crowd erupted in cheers. Suddenly, Kendrick Lamar appeared on stage, holding a ${noun} in his hand. The beat dropped, and he began to ${verb} with a ${adjective} energy. 
        The dancers moved ${adverb} around him, creating a mesmerizing performance. The stadium was electric, and fans knew they were witnessing a legendary Super Bowl halftime show!`;
        
        resultContainer.innerHTML = madlibResult;
        resultContainer.style.display = 'block';
    });
});