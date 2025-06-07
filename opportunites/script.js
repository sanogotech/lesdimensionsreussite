document.addEventListener('DOMContentLoaded', function() {
    const evaluateButton = document.getElementById('evaluateOpportunity');
    const evaluationResult = document.getElementById('evaluationResult');

    if (evaluateButton) {
        evaluateButton.addEventListener('click', function() {
            let checkedCount = 0;
            const q1 = document.getElementById('q1').checked;
            const q2 = document.getElementById('q2').checked;
            const q3 = document.getElementById('q3').checked;
            const q4 = document.getElementById('q4').checked;
            const opportunityName = document.getElementById('opportunityName').value.trim();

            if (q1) checkedCount++;
            if (q2) checkedCount++;
            if (q3) checkedCount++;
            if (q4) checkedCount++;

            let resultText = '';
            let resultClass = '';

            if (opportunityName === '') {
                evaluationResult.style.display = 'block';
                evaluationResult.innerHTML = '<p class="text-danger">Veuillez décrire l\'opportunité pour l\'évaluer.</p>';
                evaluationResult.className = 'mt-3 p-3 border rounded border-danger text-danger';
                return;
            }

            if (checkedCount >= 2) {
                resultText = `Pour l'opportunité "${opportunityName}", vous avez répondu "oui" à ${checkedCount} questions. L'opportunité mérite votre action ! Foncez !`;
                resultClass = 'mt-3 p-3 border rounded border-success text-success';
            } else {
                resultText = `Pour l'opportunité "${opportunityName}", vous avez répondu "oui" à ${checkedCount} questions. Cette opportunité ne semble pas alignée avec la "Loi des 10". Réévaluez ou cherchez d'autres pistes.`;
                resultClass = 'mt-3 p-3 border rounded border-warning text-warning';
            }

            evaluationResult.style.display = 'block';
            evaluationResult.innerHTML = `<p>${resultText}</p>`;
            evaluationResult.className = resultClass;
        });
    }

    // Example of a "Whaou" effect: Simple scroll animation for sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateY(20px)';
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // You could add more interactive elements here, e.g.,
    // - Progress bars for how many signs a user identifies with
    // - Dynamic content loading or filtering
    // - More sophisticated animations
});