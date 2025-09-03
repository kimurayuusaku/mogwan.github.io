// my-script.js

document.addEventListener('DOMContentLoaded', () => {
    // セレクターをユーザーのHTML構造に合わせる
    const scrollingContent = document.querySelector('.macbook-air .group-2');
    const stickyContainer = document.querySelector('.mac-wan.sticky-container');
    const mainSection = document.querySelector('.macbook-air .section-rectangle2.main-section');

    if (scrollingContent && stickyContainer && mainSection) {
        scrollingContent.addEventListener('scroll', () => {
            // スクロール可能なコンテンツの現在位置
            const scrollTop = scrollingContent.scrollTop;
            // スクロール可能なコンテンツの最大スクロール量
            const maxScroll = scrollingContent.scrollHeight - scrollingContent.clientHeight;
            
            // スクロールが最後まで到達したか判定
            if (scrollTop + 1 >= maxScroll) {
                // スクロール完了後、メインセクションの高さと固定を解除
                mainSection.style.height = 'auto';
                stickyContainer.style.position = 'relative';
            } else {
                // スクロールが完了していない場合は固定を維持
                stickyContainer.style.position = 'sticky';
            }
        });
    }

    // 以下のコードを追加

    // .frame 要素と section-rectangle7 要素を取得
    const frame = document.querySelector('.frame');
    const targetSection = document.querySelector('.section-rectangle7');

    if (frame && targetSection) {
        // ウィンドウ全体のスクロールイベントを監視
        window.addEventListener('scroll', () => {
            // section-rectangle7 の位置情報を取得
            const targetPosition = targetSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            // section-rectangle7 が画面下部から入ってきたときに .frame を非表示にする
            if (targetPosition < screenPosition) {
                frame.classList.add('hide');
            } else {
                frame.classList.remove('hide');
            }
        });
    } else {
        console.error('必要なHTML要素が見つかりません。');
    }
});