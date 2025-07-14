        function toggleTeacherRoleSelection() {
            const roleSelect = document.getElementById('role');
            const teacherRoleSelection = document.getElementById('teacherRoleSelection');
            const roleHomeroom = document.getElementById('roleHomeroom');
            const roleInstructor = document.getElementById('roleInstructor');

            if (roleSelect.value === 'teacher') {
                teacherRoleSelection.style.display = 'block';
                // 教員が選択されたら、役割の選択を必須にする
                roleHomeroom.setAttribute('required', 'required');
                roleInstructor.setAttribute('required', 'required'); // ラジオボタンはname属性が同じグループで一つrequiredがあれば十分ですが、念のため
            } else {
                teacherRoleSelection.style.display = 'none';
                // 教員以外が選択されたら、役割の選択を解除し、必須を解除
                roleHomeroom.checked = false;
                roleInstructor.checked = false;
                roleHomeroom.removeAttribute('required');
                roleInstructor.removeAttribute('required');
            }
        }

        // ページ読み込み時に一度実行して初期状態を設定
        document.addEventListener('DOMContentLoaded', toggleTeacherRoleSelection);