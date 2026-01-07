document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-word");
    const output = document.getElementById("wordOutput");

    buttons.forEach(btn => {
        btn.addEventListener("click", function () {
            const filePath = this.dataset.word;

            fetch(filePath)
                .then(res => res.arrayBuffer())
                .then(buffer => mammoth.convertToHtml({ arrayBuffer: buffer }))
                .then(result => {
                    output.innerHTML = `
                        <div style="
                            padding:15px;
                            border:1px solid #ccc;
                            background:#f9f9f9;
                            max-height:400px;
                            overflow:auto;
                        ">
                            ${result.value}
                        </div>
                    `;
                })
                .catch(err => {
                    output.innerHTML = "❌ Không đọc được file Word";
                    console.error(err);
                });
        });
    });
});