        // サイドバーのリンクとコンテンツセクションの表示/非表示を切り替えるJavaScript
        function showSection(sectionId) {
            // 全てのコンテンツセクションを非表示にする
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
            });

            // 全てのサイドバーリンクのアクティブクラスを解除する
            document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
                link.classList.remove('active');
            });

            // 指定されたセクションを表示する
            document.getElementById(sectionId).style.display = 'block';

            // クリックされたリンクにアクティブクラスを追加する
            event.currentTarget.classList.add('active');
        }

        // ページロード時にダッシュボードを表示する
        document.addEventListener('DOMContentLoaded', () => {
            showSection('dashboard');
            // アクティブなリンクを初期設定する
            document.querySelector('.sidebar nav ul li a[onclick*="dashboard"]').classList.add('active');
        });

        // ユーザー一括登録の模擬処理 (JavaScript)
        function handleBulkUpload() {
            const fileInput = document.getElementById('userCsvFile');
            const file = fileInput.files[0];

            if (!file) {
                alert('ファイルを選択してください。');
                return;
            }

            if (file.type !== 'text/csv') {
                alert('CSVファイルのみアップロードできます。');
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                const csvContent = e.target.result;
                console.log('--- アップロードされたCSVの内容 ---');
                console.log(csvContent);

                // ここからCSVの内容を解析し、バックエンドに送信する処理を実装します。
                // 例: fetch APIを使ってサーバーに送信
                // fetch('/api/bulk-upload-users', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'text/csv'
                //     },
                //     body: csvContent
                // })
                // .then(response => response.json())
                // .then(data => {
                //     if (data.success) {
                //         alert('ユーザーの一括登録が完了しました！');
                //         // 必要に応じてユーザー一覧を更新
                //     } else {
                //         alert('ユーザーの一括登録に失敗しました: ' + data.message);
                //     }
                // })
                // .catch(error => {
                //     console.error('エラー:', error);
                //     alert('サーバーとの通信中にエラーが発生しました。');
                // });

                alert('CSVファイルが選択され、内容が読み込まれました。\n（実際のサーバーへのアップロード処理はバックエンドで実装が必要です。）');
                // ファイル入力のリセット（任意）
                fileInput.value = '';
            };

            reader.onerror = function() {
                alert('ファイルの読み込み中にエラーが発生しました。');
            };

            reader.readAsText(file, 'UTF-8'); // CSVファイルをUTF-8で読み込む
        }

        // CSVテンプレートをダウンロードする関数（この関数はHTMLで直接呼び出されています）
        // この関数自体はHTMLには不要ですが、バックエンドがない場合のダミーとして記載
        function downloadCsvTemplate() {
            const csvContent = "名前,メールアドレス,役割,初期パスワード\n" +
                               "佐藤美咲,sato.m@example.com,生徒,pass_sato\n" +
                               "木村健太,kimura.k@example.com,教師,pass_kimura\n";
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            if (link.download !== undefined) { // feature detection
                const url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', 'user_template.csv');
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }