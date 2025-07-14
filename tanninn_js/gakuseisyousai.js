        document.addEventListener('DOMContentLoaded', () => {
            const searchForm = document.getElementById('studentSearchForm');
            const departmentSelect = document.getElementById('department-select');
            const gradeSelect = document.getElementById('grade-select');
            const studentNameSearch = document.getElementById('student-name-search');
            const studentListDiv = document.getElementById('student-list');
            const clearSearchButton = document.getElementById('clearSearch');

            // 仮の学生データ（実際にはサーバーサイドから取得します）
            const allStudents = [
                { id: 'S001', name: '山田 太郎', department: '情報工学', grade: '3年' },
                { id: 'S002', name: '鈴木 花子', department: '建築学', grade: '2年' },
                { id: 'S003', name: '佐藤 健太', department: '情報工学', grade: '1年' },
                { id: 'S004', name: '高橋 美咲', department: '電気電子工学', grade: '4年' },
                { id: 'S005', name: '田中 裕子', department: '機械工学', grade: '3年' },
                { id: 'S006', name: '伊藤 雅人', department: '情報工学', grade: '2年' },
                { id: 'S007', name: '渡辺 真奈', department: '建築学', grade: '1年' },
                { id: 'S008', name: '中村 浩司', department: '電気電子工学', grade: '3年' },
                { id: 'S001', name: '山田 太郎', department: '情報工学', grade: '3年' },
                { id: 'S002', name: '鈴木 花子', department: '建築学', grade: '2年' },
                { id: 'S003', name: '佐藤 健太', department: '情報工学', grade: '1年' },
                { id: 'S004', name: '高橋 美咲', department: '電気電子工学', grade: '4年' },
                { id: 'S005', name: '田中 裕子', department: '機械工学', grade: '3年' },
                { id: 'S006', name: '伊藤 雅人', department: '情報工学', grade: '2年' },
                { id: 'S007', name: '渡辺 真奈', department: '建築学', grade: '1年' },
                { id: 'S008', name: '中村 浩司', department: '電気電子工学', grade: '3年' },
            ];

            // 学生情報を表示する関数
            function displayStudents(students) {
                studentListDiv.innerHTML = ''; // 既存のリストをクリア

                if (students.length === 0) {
                    studentListDiv.innerHTML = '<p class="no-results">該当する学生は見つかりませんでした。</p>';
                    return;
                }

                students.forEach(student => {
                    const studentItem = document.createElement('div');
                    studentItem.classList.add('student-item');
                    studentItem.innerHTML = `
                        <div>${student.id}</div>
                        <div>${student.name}</div>
                        <div>${student.department}</div>
                        <div>${student.grade}</div>
                        <div><a href="student_detail.html?id=${student.id}" class="detail-link">詳細</a></div>
                    `;
                    studentListDiv.appendChild(studentItem);
                });
            }

            // 初期表示（全ての学生を表示）
            displayStudents(allStudents);

            // 検索フォームの送信イベント
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault(); // デフォルトのフォーム送信を防止

                const selectedDepartment = departmentSelect.value;
                const selectedGrade = gradeSelect.value;
                const keyword = studentNameSearch.value.toLowerCase(); // 小文字に変換して比較

                const filteredStudents = allStudents.filter(student => {
                    const matchesDepartment = selectedDepartment === "" || student.department === selectedDepartment;
                    const matchesGrade = selectedGrade === "" || student.grade === selectedGrade;
                    const matchesKeyword = (student.name.toLowerCase().includes(keyword) || student.id.toLowerCase().includes(keyword));

                    return matchesDepartment && matchesGrade && matchesKeyword;
                });

                displayStudents(filteredStudents);
            });

            // クリアボタンのクリックイベント
            clearSearchButton.addEventListener('click', () => {
                departmentSelect.value = ""; // 学科選択をリセット
                gradeSelect.value = "";      // 学年選択をリセット
                studentNameSearch.value = ""; // キーワード入力をリセット
                displayStudents(allStudents); // 全ての学生を再表示
            });
        });