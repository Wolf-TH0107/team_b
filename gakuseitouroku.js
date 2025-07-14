        // サンプルとして、表示されている行の数を自動で更新するJavaScript
        document.addEventListener('DOMContentLoaded', () => {
            const tbody = document.querySelector('.data-table-container tbody');
            const studentCountSpan = document.getElementById('studentCount');
            if (tbody && studentCountSpan) {
                studentCountSpan.textContent = tbody.children.length;
            }
        });