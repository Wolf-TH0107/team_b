    document.addEventListener('DOMContentLoaded', () => {
      // data.js
      const ALL_STUDENTS_DATA = [
        {
          id: 'S001',
          name: '山田 太郎',
          nameFurigana: 'ヤマダ タロウ',
          department: '情報工学',
          departmentCourse: '情報工学科・ソフトウェア開発コース', // 詳細用に具体的なコースを追加
          grade: '3年',
          enrollmentYear: '2023',
          enrollmentStatus: '在籍中',
          totalAttendance: 95,
          absentCount: 5,
          subjects: [
            { name: 'データ構造とアルゴリズム', absent: 1, tardy: 0, earlyLeave: 0, suspension: 0, soa:0, detailLink: '#' },
            { name: 'オブジェクト指向プログラミング', absent: 0, tardy: 1, earlyLeave: 0, suspension: 0, soa:0, detailLink: '#' },
            { name: 'Webアプリケーション開発', absent: 2, tardy: 0, earlyLeave: 1, suspension: 0, soa:0, detailLink: '#' }
          ]
        },
        {
          id: 'S002',
          name: '鈴木 花子',
          nameFurigana: 'スズキ ハナコ',
          department: '建築学',
          departmentCourse: '建築学科・意匠設計コース',
          grade: '2年',
          enrollmentYear: '2024',
          enrollmentStatus: '在籍中',
          totalAttendance: 88,
          absentCount: 12,
          subjects: [
            { name: '建築構造力学', absent: 3, tardy: 2, earlyLeave: 0, suspension: 0, soa: 0, detailLink: '#' },
            { name: '建築史', absent: 2, tardy: 0, earlyLeave: 0, suspension: 0, soa: 0, detailLink: '#' }
          ]
        },
        {
          id: 'S003',
          name: '佐藤 健太',
          nameFurigana: 'サトウ ケンタ',
          department: '情報工学',
          departmentCourse: '情報工学科・ネットワークセキュリティコース',
          grade: '1年',
          enrollmentYear: '2025',
          enrollmentStatus: '在籍中',
          totalAttendance: 98,
          absentCount: 2,
          subjects: [
            { name: '情報科学基礎', absent: 0, tardy: 0, earlyLeave: 0, suspension: 0, soa: 0, detailLink: '#' },
            { name: 'プログラミング入門', absent: 0, tardy: 0, earlyLeave: 0, suspension: 0, soa: 0, detailLink: '#' }
          ]
        },
        {
          id: 'S004',
          name: '高橋 美咲',
          nameFurigana: 'タカハシ ミサキ',
          department: '電気電子工学',
          departmentCourse: '電気電子工学科・電力システムコース',
          grade: '4年',
          enrollmentYear: '2022',
          enrollmentStatus: '在籍中',
          totalAttendance: 92,
          absentCount: 8,
          subjects: [
            { name: '電気回路', absent: 1, tardy: 0, earlyLeave: 0, suspension: 0, soa: 0, detailLink: '#' },
            { name: '電子デバイス', absent: 0, tardy: 1, earlyLeave: 0, suspension: 0, soa: 0, detailLink: '#' }
          ]
        },
        {
          id: 'S005',
          name: '田中 裕子',
          nameFurigana: 'タナカ ユウコ',
          department: '機械工学',
          departmentCourse: '機械工学科・精密機械コース',
          grade: '3年',
          enrollmentYear: '2023',
          enrollmentStatus: '在籍中',
          totalAttendance: 90,
          absentCount: 10,
          subjects: [
            { name: '機械力学', absent: 2, tardy: 0, earlyLeave: 0, suspension: 0,soa: 0, detailLink: '#' },
            { name: '熱機関', absent: 1, tardy: 1, earlyLeave: 0, suspension: 0,soa: 0, detailLink: '#' }
          ]
        },
        {
          id: 'S006',
          name: '伊藤 雅人',
          nameFurigana: 'イトウ マサト',
          department: '情報工学',
          departmentCourse: '情報工学科・AI開発コース',
          grade: '2年',
          enrollmentYear: '2024',
          enrollmentStatus: '在籍中',
          totalAttendance: 96,
          absentCount: 4,
          subjects: [
            { name: '線形代数', absent: 0, tardy: 0, earlyLeave: 0, suspension: 0,soa: 0, detailLink: '#' },
            { name: 'Pythonプログラミング', absent: 1, tardy: 0, earlyLeave: 0, suspension: 0,soa: 0, detailLink: '#' }
          ]
        },
        {
          id: 'S007',
          name: '渡辺 真奈',
          nameFurigana: 'ワタナベ マナ',
          department: '建築学',
          departmentCourse: '建築学科・都市計画コース',
          grade: '1年',
          enrollmentYear: '2025',
          enrollmentStatus: '在籍中',
          totalAttendance: 99,
          absentCount: 1,
          subjects: [
            { name: '建築製図', absent: 0, tardy: 0, earlyLeave: 0, suspension: 0, soa:0, detailLink: '#' },
            { name: '都市計画論', absent: 0, tardy: 0, earlyLeave: 0, suspension: 0, soa:0, detailLink: '#' }
          ]
        },
        {
          id: 'S008',
          name: '中村 浩司',
          nameFurigana: 'ナカムラ コウジ',
          department: '電気電子工学',
          departmentCourse: '電気電子工学科・情報通信コース',
          grade: '3年',
          enrollmentYear: '2023',
          enrollmentStatus: '在籍中',
          totalAttendance: 85,
          absentCount: 15,
          subjects: [
            { name: '信号処理', absent: 3, tardy: 1, earlyLeave: 0, suspension: 0, soa:0, detailLink: '#' },
            { name: '通信工学', absent: 2, tardy: 0, earlyLeave: 0, suspension: 0, soa:0, detailLink: '#' }
          ]
        }
      ];

      // URLからクエリパラメータ（学生ID）を取得
      const urlParams = new URLSearchParams(window.location.search);
      const studentIdFromUrl = urlParams.get('id');

      // 情報を表示するHTML要素への参照を取得
      const studentIdInput = document.getElementById('student-id');
      const departmentCourseInput = document.getElementById('department-course');
      const gradeInput = document.getElementById('grade');
      const enrollmentYearInput = document.getElementById('enrollment-year');
      const nameInput = document.getElementById('name');
      const nameFuriganaInput = document.getElementById('name-furigana');
      const enrollmentStatusInput = document.getElementById('enrollment-status');
      const totalAttendanceInput = document.getElementById('total-attendance');
      const absentCountInput = document.getElementById('absent-count');
      const subjectsTableBody = document.getElementById('subjects-table-body');

      const studentInfoBlock = document.getElementById('student-info-block');
      const attendanceSummaryBlock = document.getElementById('attendance-summary-block');
      const subjectsDataBlock = document.getElementById('subjects-data-block');
      const noStudentDataMessage = document.getElementById('no-student-data');

      // URLから学生IDが取得できた場合
      if (studentIdFromUrl) {
        // サンプルデータから該当する学生を検索
        const foundStudent = ALL_STUDENTS_DATA.find(student => student.id === studentIdFromUrl); // ここを修正

        if (foundStudent) {
          // 学生情報を各入力フィールドに設定
          studentIdInput.value = foundStudent.id; // ここを修正
          departmentCourseInput.value = foundStudent.departmentCourse;
          gradeInput.value = foundStudent.grade;
          enrollmentYearInput.value = foundStudent.enrollmentYear;
          nameInput.value = foundStudent.name;
          nameFuriganaInput.value = foundStudent.nameFurigana;
          enrollmentStatusInput.value = foundStudent.enrollmentStatus;
          totalAttendanceInput.value = foundStudent.totalAttendance;
          absentCountInput.value = foundStudent.absentCount;

          // 履修科目テーブルにデータを挿入
          if (foundStudent.subjects && foundStudent.subjects.length > 0) {
            foundStudent.subjects.forEach(subject => {
              const row = subjectsTableBody.insertRow();
              row.insertCell().textContent = subject.name;
              row.insertCell().textContent = subject.absent;
              row.insertCell().textContent = subject.tardy;
              row.insertCell().textContent = subject.earlyLeave;
              row.insertCell().textContent = subject.suspension;
              row.insertCell().textContent = subject.soa;
              const detailCell = row.insertCell();
              const detailLink = document.createElement('a');
              detailLink.href = subject.detailLink; // 実際の詳細リンクを設定
              detailLink.textContent = '詳細';
              detailCell.appendChild(detailLink);
            });
          } else {
            // 科目がない場合のメッセージ
            const row = subjectsTableBody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 7; // 全ての列を結合
            cell.textContent = '履修科目はありません。';
            cell.style.textAlign = 'center';
            cell.style.color = '#777';
          }

          // 全ての情報ブロックを表示し、エラーメッセージを非表示にする
          studentInfoBlock.style.display = 'block';
          attendanceSummaryBlock.style.display = 'flex'; // attendance-infoはflexboxなのでflexに戻す
          subjectsDataBlock.style.display = 'block';
          noStudentDataMessage.style.display = 'none';

        } else {
          // 学生IDはURLにあるが、データが見つからない場合
          studentInfoBlock.style.display = 'none';
          attendanceSummaryBlock.style.display = 'none';
          subjectsDataBlock.style.display = 'none';
          noStudentDataMessage.style.display = 'block';
        }
      } else {
        // URLに学生IDが全く含まれていない場合
        studentInfoBlock.style.display = 'none';
        attendanceSummaryBlock.style.display = 'none';
        subjectsDataBlock.style.display = 'none';
        noStudentDataMessage.style.display = 'block';
      }
    });