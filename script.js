document.getElementById('otherPlatform').addEventListener('change', function() {
    document.getElementById('otherPlatformText').style.display = this.checked ? 'inline' : 'none';
});

document.getElementById('gameTypeOther').addEventListener('change', function() {
    document.getElementById('gameTypeOtherText').style.display = this.checked ? 'inline' : 'none';
});

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Software Title Feature Documentation Questionnaire", 10, 10);

    const form = document.getElementById('questionnaireForm');
    const formData = new FormData(form);

    let y = 20;

    formData.forEach((value, key) => {
        doc.text(`${key}: ${value}`, 10, y);
        y += 10;
    });

    doc.save('questionnaire.pdf');
}
